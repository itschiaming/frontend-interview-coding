function DivsCenter() {
  return (
    <section id='divs-center' className='h-[500px] bg-primary'>
      <h2 className='text-center text-black text-3xl mb-5'>Center divs</h2>
      <div className='divs-center'>
        <div style={{ backgroundColor: "red", width: "100px", height: "100px" }} />
        <div style={{ backgroundColor: "blue", width: "100px", height: "100px" }} />
      </div>
    </section>
  );
}

export default DivsCenter;
