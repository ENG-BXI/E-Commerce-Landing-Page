function SubscriptionSection() {
  return (
    <section className='w-125 mx-auto'>
      <h2 className='capitalize font-bold text-black  text-4xl text-center mb-4'>Subscribe to Our Newsletter Grab 30% off</h2>
      <div className='flex justify-center gap-x-3'>
        <input type='text' placeholder='Enter Your Email' className='border w-70 rounded-2xl px-4 py-1' />
        <button className='bg-black text-white rounded-3xl px-3 py-2 font-bold'>Subscribe</button>
      </div>
    </section>
  );
}

export default SubscriptionSection