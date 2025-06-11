import ExpectedStarRating from "./expected/ExpectedStarRating";
import StarRating from "./StarRating";

export default function StarRatingWrapper() {
  return (
    <section id='star-rating' className='h-[500px] flex flex-col items-center bg-primary'>
      <h2 className='text-center text-black text-3xl mb-5'>Star rating</h2>
      <div className='stop-watch flex gap-1 h-full w-full'>
        <div className='flex-1'>
          <h3 className='text-black text-center font-bold'>Yours</h3>
          <StarRating />
        </div>
        <hr className='h-full w-0.5 bg-gray-300' />
        <div className='flex-1'>
          <h3 className='text-black text-center font-bold'>Expected</h3>
          <ExpectedStarRating />
        </div>
      </div>
    </section>
  );
}
