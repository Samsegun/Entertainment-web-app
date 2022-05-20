import Card from "../../Components/CardUI";

const Trending = () => {
  return (
    <section className='pl-4 mt-6 text-white '>
      <h2 className='text-xl font-light tracking-wider'>Trending</h2>

      {/* trending cards */}
      <div className='mt-4 overflow-scroll'>
        <div className='flex gap-4 min-w-[1280px]'>
          <Card
            minWidth={"min-w-[250px]"}
            bottom={"bottom-4"}
            height={"min-h-[140px]"}
            innerHeight={"min-h-[140px]"}
            margin={"ml-4"}
          />
          <Card
            minWidth={"min-w-[250px]"}
            bottom={"bottom-4"}
            height={"min-h-[140px]"}
            innerHeight={"min-h-[140px]"}
            margin={"ml-4"}
          />
          <Card
            minWidth={"min-w-[250px]"}
            bottom={"bottom-4"}
            height={"min-h-[140px]"}
            innerHeight={"min-h-[140px]"}
            margin={"ml-4"}
          />
          <Card
            minWidth={"min-w-[250px]"}
            bottom={"bottom-4"}
            height={"min-h-[140px]"}
            innerHeight={"min-h-[140px]"}
            margin={"ml-4"}
          />
          <Card
            minWidth={"min-w-[250px]"}
            bottom={"bottom-4"}
            height={"min-h-[140px]"}
            innerHeight={"min-h-[140px]"}
            margin={"ml-4"}
          />
        </div>
      </div>
    </section>
  );
};

export default Trending;
