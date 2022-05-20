import Card from "../../Components/CardUI";

const Recommended = () => {
  return (
    <section className='px-4 mt-6'>
      <h2 className='text-xl font-light text-white'>Recommended for you</h2>

      {/* recommended movies */}
      <ul className='grid grid-cols-2 gap-[15px] mt-6 pb-16'>
        <li>
          <Card
            minWidth={"min-w-[164px]"}
            bottom={"-bottom-[55px]"}
            height={"min-h-[175px]"}
            innerHeight={"min-h-[110px]"}
          />
        </li>
        <li>
          <Card
            minWidth={"min-w-[164px]"}
            bottom={"-bottom-[55px]"}
            height={"min-h-[175px]"}
            innerHeight={"min-h-[110px]"}
          />
        </li>
        <li>
          <Card
            minWidth={"min-w-[164px]"}
            bottom={"-bottom-[55px]"}
            height={"min-h-[175px]"}
            innerHeight={"min-h-[110px]"}
          />
        </li>
        <li>
          <Card
            minWidth={"min-w-[164px]"}
            bottom={"-bottom-[55px]"}
            height={"min-h-[175px]"}
            innerHeight={"min-h-[110px]"}
          />
        </li>
        <li>
          <Card
            minWidth={"min-w-[164px]"}
            bottom={"-bottom-[55px]"}
            height={"min-h-[175px]"}
            innerHeight={"min-h-[110px]"}
          />
        </li>
      </ul>
    </section>
  );
};

export default Recommended;
