import React from 'react';
import { Star } from 'lucide-react';

export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math?.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)]?.map((_, i) => (
        <Star key={`full-${i}`} size={16} className="text-yellow-400 fill-current" />
      ))}
      {halfStar && (
        <Star size={16} className="text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      )}
      {[...Array(emptyStars)]?.map((_, i) => (
        <Star key={`empty-${i}`} size={16} className="text-gray-300 fill-current" />
      ))}
    </div>
  );
};