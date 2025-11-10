import React, { useState } from "react";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const VideoService: React.FC = () => {
  const [meetingId, setMeetingId] = useState<string | null>(null);
  const [client, initClient] = useDyteClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [copied, setCopied] = useState(false);

  const startMeeting = async () => {
    setLoading(true);
    setError(null);
    setCopied(false);

    try {
      // 1️⃣ Create a Dyte meeting
      const meetingRes = await axios.post(`${API_URL}/api/meetings`, {
        title: "Demo Dyte Meeting",
      });

      if (!meetingRes.data?.data?.id) {
        throw new Error("Failed to create meeting — no ID returned.");
      }

      const meetingId = meetingRes.data.data.id;
      setMeetingId(meetingId);

      // 2️⃣ Add participant (host)
      const participantRes = await axios.post(`${API_URL}/api/participants`, {
        meetingId,
        customId: "1234user",
        isHost: true,
      });

      const token =
        participantRes.data?.data?.authResponse?.authToken ||
        participantRes.data?.data?.token;

      if (!token) {
        throw new Error("Failed to create participant — no token returned.");
      }

      // 3️⃣ Initialize Dyte client
      await initClient({ authToken: token });

      setStarted(true);
    } catch (err: any) {
      console.error("❌ Dyte initialization error:", err.response?.data || err.message);
      setError(
        err.response?.data?.error?.message ||
          err.message ||
          "Failed to start meeting. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const copyInviteLink = async () => {
    if (!meetingId) return;

    const inviteLink = `${window.location.origin}/meeting/${meetingId}`;

    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("❌ Failed to copy link:", err);
      setError("Could not copy link. Please copy manually.");
    }
  };

  // 🧠 State-based UI

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium">Starting your meeting...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <p className="text-red-600 font-semibold">Error: {error}</p>
        <button
          onClick={startMeeting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h2 className="text-2xl font-semibold">Ready to start your meeting?</h2>
        <button
          onClick={startMeeting}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Start Meeting
        </button>
      </div>
    );
  }

  // 🎥 Meeting Active
  return (
    <DyteProvider value={client}>
      <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
        {/* Dyte meeting interface */}
        <DyteMeeting meeting={client} className="w-full h-full" />

        {/* Copy Invite Link button (overlay on top) */}
        <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
          {meetingId && (
            <>
              <button
                onClick={copyInviteLink}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                {copied ? "✅ Link Copied!" : "📋 Copy Invite Link"}
              </button>
            </>
          )}
        </div>
      </div>
    </DyteProvider>
  );
};

export default VideoService;
