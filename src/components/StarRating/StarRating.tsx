import { FC } from "react";
import { IStarRatingProps } from "./StarRating.d";

const StarRating: FC<IStarRatingProps> = ({ rating }) => {
  return (
    <div className="star-ratings">
      <div className="fill-ratings" style={{ width: `${rating * 10}%` }}>
        <span>★★★★★★★★★★</span>
      </div>
      <div className="empty-ratings">
        <span>★★★★★★★★★★</span>
      </div>
    </div>
  );
};

export default StarRating;
