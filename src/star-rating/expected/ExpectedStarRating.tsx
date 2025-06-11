import { useState } from "react";
import Star from "../Star";

function ExpectedStarRating() {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [rating, setRating] = useState(3);
  const max = 5;

  return (
    <div className='h-full flex justify-center items-center'>
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          tabIndex={0}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setRating(index + 1)}>
          <Star filled={hoveredIndex != null ? index <= hoveredIndex : index < rating} />
        </span>
      ))}
    </div>
  );
}

export default ExpectedStarRating;
