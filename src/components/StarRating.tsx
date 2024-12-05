import React from 'react';
import ReactStars from 'react-stars';

interface StarRatingProps {
  rating: number; // Rating value (e.g. 3.5 stars)
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        size={24}
        color2={'#ffd700'} // Gold color for filled stars
        edit={false} // Disable user editing of the rating
      />
      <span className="ml-2">{rating} stars</span>
    </div>
  );
};

export default StarRating;
