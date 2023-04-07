import { FC } from "react";
interface Props {
  rating: number;
}
const StarRating: FC<Props> = ({ rating }) => {
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
