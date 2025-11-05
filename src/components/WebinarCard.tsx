import React from 'react';
import { Heart, CalendarClock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Webinar } from '@types';

export const WebinarCard: React.FC<{ webinar: Webinar }> = ({ webinar }) => {
  const push = useNavigate();
  console.log(webinar)
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <div onClick={() => push(`/webinars/${webinar?.webinar_id}/${webinar?.title}`, {
        state: {
          webinar: webinar,
        },
      })} className="block cursor-pointer">
        <div className="relative">
          <img className="object-fill" src={webinar?.image_url} alt={webinar?.title} />
          <div className="absolute top-2 left-2 bg-white px-2 py-0.5 rounded-full text-xs font-semibold text-blue-600">
            {webinar?.category}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 truncate">
            {webinar?.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{webinar?.instructors?.name}</p>
          {/* <div className="flex items-center mb-3">
            <span className="text-base font-bold text-yellow-500 mr-1">{webinar?.rating?.toFixed(1)}</span>
            <StarRating rating={webinar?.rating} />
            <span className="text-sm text-gray-500 ml-2">({webinar?.reviewCount.toLocaleString()})</span>
          </div> */}

          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-baseline">
              {webinar?.original_price && webinar?.discounted_price?.toString() !== "0" ? (
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹ {webinar?.discounted_price}
                  </p>
                  <div className="flex gap-4 items-center">
                    <p className="text-sm text-gray-500 line-through">
                      ₹ {webinar?.original_price}
                    </p>
                    <span className="text-green-600 font-semibold">
                      {Math.round(
                        ((+webinar?.original_price - +webinar?.discounted_price) /
                          +webinar?.original_price) *
                        100
                      )}
                      % OFF
                    </span>
                  </div>
                </div>
              ) : webinar?.original_price && webinar?.original_price?.toString() !== "0" ? (
                <p className="text-2xl font-bold text-gray-900">
                  ₹ {webinar?.original_price}
                </p>
              ) : (
                <p className="text-2xl text-green-600 font-semibold">Free</p>
              )}
            </div>
            <button className="p-2 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
              <Heart size={20} />
            </button>
          </div>
          <div className='flex gap-4'>
            <CalendarClock />
            {new Date(webinar.schedule_date).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};