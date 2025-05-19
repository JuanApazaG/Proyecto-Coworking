import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../data/reviews';

interface ReviewsListProps {
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
}

// Helper function to format dates
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews, averageRating, reviewCount }) => {
  return (
    <div>
      {/* Summary */}
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          <Star size={24} className="text-yellow-400 fill-yellow-400" />
          <span className="text-2xl font-bold ml-2">{averageRating.toFixed(1)}</span>
        </div>
        <span className="text-gray-600 ml-2">({reviewCount} reviews)</span>
      </div>
      
      {/* Reviews list */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-start">
              {/* User avatar */}
              <img 
                src={review.userAvatar} 
                alt={review.userName} 
                className="w-10 h-10 rounded-full object-cover mr-4"
              />
              
              <div className="flex-1">
                {/* User name and date */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-medium">{review.userName}</h4>
                  <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${
                        i < review.rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Review content */}
                <p className="text-gray-700">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;