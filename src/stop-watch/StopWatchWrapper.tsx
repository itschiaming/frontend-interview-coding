import ExpectedStopWatch from "./ExpectedStopWatch";
import StopWatch from "./StopWatch";

function StopWatchWrapper() {
  return (
    <section id='stop-watch' className='bg-primary flex flex-col'>
      <h2 className='text-center text-black text-3xl mb-5'>Stop watch</h2>
      <div className='stop-watch flex gap-1 h-full'>
        <div className='flex-1'>
          <h3 className='text-black text-center font-bold'>Yours</h3>
          <StopWatch />
        </div>
        <hr className='h-full w-0.5 bg-gray-300' />
        <div className='flex-1'>
          <h3 className='text-black text-center font-bold'>Expected</h3>
          <ExpectedStopWatch />
        </div>
      </div>
    </section>
  );
}

export default StopWatchWrapper;
