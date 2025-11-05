import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { WebinarCard, Timeline } from '@components';
import { Webinar } from '@types';
import { useNavigate } from 'react-router-dom';

export const WebinarListSection: React.FC<{ title: string; webinars: Webinar[], category: string | null, timeline: boolean, viewAllCheck: boolean, isLoading: boolean }> = ({ title, webinars, category, timeline, viewAllCheck, isLoading }) => {

  const [currentTimelineTab, setCurrentTimelineTab] = useState<string>('all');
  const push = useNavigate();
  const [filteredWebinars, setFilteredWebinars] = useState<Webinar[]>([]);

  useEffect(() => {
    if (currentTimelineTab === "all") {
      setFilteredWebinars(webinars);
    } else {
      const filtered = webinars.filter(
        (c: any) => c.status === currentTimelineTab
      );
      setFilteredWebinars(filtered);
    }
  }, [currentTimelineTab, webinars]);

  return (
    <section className="pt-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {timeline && <Timeline setTab={setCurrentTimelineTab} />}
          {viewAllCheck &&
            <button onClick={() => push('/webinars')} className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </button>
          }
        </div>
        {!isLoading ?
          webinars?.length > 0 ?
            category !== null ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(webinars?.filter((c: { category: string; }) => c?.category === category))?.map((webinar) => (
                  <WebinarCard key={webinar?.webinar_id} webinar={webinar} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredWebinars?.length > 0 ? (
                  filteredWebinars.map((webinar) => (
                    <WebinarCard key={webinar.webinar_id} webinar={webinar} />
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center pt-10 text-gray-700">
                    <span className="text-lg font-medium">{`No ${currentTimelineTab !== 'all' ? currentTimelineTab.charAt(0).toUpperCase() + currentTimelineTab.slice(1) : ''} webinars found`}</span>
                    <p className="text-sm text-gray-600 mt-1">Try a different category or filter</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center pt-10 text-gray-700">
                <span className="text-lg font-medium">{`No ${currentTimelineTab !== 'all' ? currentTimelineTab.charAt(0).toUpperCase() + currentTimelineTab.slice(1) : ''} webinars found`}</span>
                <p className="text-sm text-gray-600 mt-1">Try a different category or filter</p>
              </div>
            ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="h-40 bg-gray-200"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="flex items-center justify-between pt-3">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </section>
  );
};