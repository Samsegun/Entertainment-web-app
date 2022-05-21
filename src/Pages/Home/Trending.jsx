import Card from "Components/CardUI";
import appData from "starter-code/data.json";

const Trending = () => {
  // filter out data that are not trending
  const trendingData = appData.filter(item => item.isTrending);
  console.log(trendingData);

  return (
    <section className='pl-4 mt-6 text-white '>
      <h2 className='text-xl font-light tracking-wider'>Trending</h2>

      {/* trending cards */}
      <div className='mt-4 overflow-x-scroll scrollbar'>
        <div className='flex gap-4 min-w-[1280px]'>
          {trendingData.map((data, idx) => (
            <Card
              minWidth={"min-w-[250px]"}
              bottom={"bottom-4"}
              height={"min-h-[140px]"}
              innerHeight={"min-h-[140px]"}
              padded={"pl-4"}
              data={data}
              trending={true}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
