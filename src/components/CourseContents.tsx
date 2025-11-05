import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface Topic {
  topic_id: string;
  topic_reference_id?: string,
  name: string;
  parent_topic_id: string | null;
  order_number: number;
  description?: string;
}

export interface Outcomes {
  outcome_id: string;
  name: string;
  order: number;
  icon: string;
}

interface CourseContentsProps {
  topics: Topic[];
}

export const CourseContents: React.FC<CourseContentsProps> = ({ topics }) => {
  const [openTopics, setOpenTopics] = useState<string[]>([]);
  const [openSubtopics, setOpenSubtopics] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setOpenTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const toggleSubtopic = (subId: string) => {
    setOpenSubtopics((prev) =>
      prev.includes(subId)
        ? prev.filter((id) => id !== subId)
        : [...prev, subId]
    );
  };

  const mainTopics = topics.filter((t) => t.parent_topic_id === null);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Course Contents</h2>
      <div className="space-y-4">
        {mainTopics.map((topic) => {
          const subtopics = topics.filter(
            (t) => t.parent_topic_id === topic.topic_reference_id
          );
          const isTopicOpen = openTopics.includes(topic.topic_id);

          return (
            <div
              key={topic.topic_id}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              {/* Topic Header */}
              <button
                onClick={() => toggleTopic(topic.topic_id)}
                className={`w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800 hover:bg-blue-50 ${isTopicOpen ? "rounded-t-lg" : "rounded-lg"}`}
              >
                <span>
                  {topic.name}
                </span>
                < ChevronUp className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ${isTopicOpen ? "rotate-0" : "rotate-180"}`} />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isTopicOpen ? "max-h-[2000px]" : "max-h-0"} 
                bg-gray-50 rounded-b-lg`}
              >
                <div className="bg-white rounded-b-lg">
                  {subtopics.map((sub) => {
                    const isSubOpen = openSubtopics.includes(sub.topic_id);
                    return (
                      <div key={sub.topic_id} className=" pl-4">
                        <button
                          onClick={() => toggleSubtopic(sub.topic_id)}
                          className="w-full flex justify-between items-center px-5 py-3 text-left text-gray-700"
                        >
                          <span>{sub.name}</span>
                          < ChevronUp className={`flex-shrink-0 w-4 h-4 text-gray-500 transition-transform duration-300 ${isSubOpen ? "rotate-0" : "rotate-180"}`} />
                        </button>

                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${isSubOpen ? "max-h-24" : "max-h-0"}
                          bg-white rounded-b-lg`}
                        >
                          <div className="px-6 pb-4 text-gray-600 text-sm">
                            {sub.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
