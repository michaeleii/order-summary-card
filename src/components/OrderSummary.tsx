function OrderSummary() {
  return (
    <div className="max-w-sm rounded-xl bg-white text-center  text-slate-500 drop-shadow-xl">
      <img
        src="/illustration-hero.svg"
        alt="Girl listening to music"
        className="rounded-t-xl"
      />
      <div className="p-10">
        <h1 className=" mb-5 text-2xl font-extrabold text-slate-800">
          Order Summary
        </h1>
        <p className="mb-5">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="mb-5 flex w-full items-center gap-5 rounded-xl bg-[hsl(225_100%_98%)] p-5">
          <img src="/icon-music.svg" alt="" />
          <div>
            <h2 className="font-extrabold text-slate-800">Annual Plan</h2>
            <p>$59.99/year</p>
          </div>
          <a className="ml-auto cursor-pointer font-bold text-[#5448bb] underline transition-colors hover:text-[#766cf1] ">
            Change
          </a>
        </div>
        <button className="mb-5 w-full rounded-xl bg-[#382ae1] px-5 py-3 font-bold text-white drop-shadow-xl transition-colors hover:bg-[#766cf1]">
          Proceed to Payment
        </button>
        <a className="cursor-pointer font-bold hover:text-slate-800">
          Cancel Order
        </a>
      </div>
    </div>
  );
}
export default OrderSummary;
