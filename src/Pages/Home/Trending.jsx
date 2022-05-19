import Card from "../../Components/CardUI";

const Trending = () => {
  return (
    <div className='pl-4 mt-6 text-white '>
      <h2 className='text-xl font-light tracking-wider'>Trending</h2>

      {/* trending cards */}
      <div className='mt-4 overflow-scroll'>
        <div className='flex gap-4 min-w-[1272px]'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Trending;
