import Card from "Components/CardUI";
import appData from "starter-code/data.json";

const Recommended = () => {
    // filter out data that are trending
    const recommendedData = appData.filter(item => !item.isTrending);
    console.log(recommendedData);

    return (
        <section className='px-4 mt-6'>
            <h2 className='text-xl font-light text-white'>
                Recommended for you
            </h2>

            {/* recommended movies */}
            <ul className='grid grid-cols-custom gap-[15px] mt-6 pb-16'>
                {recommendedData.map((data, idx) => (
                    <li key={idx}>
                        <Card
                            minWidth={"min-w-[164px]"}
                            bottom={"-bottom-[55px]"}
                            height={"min-h-[175px]"}
                            innerHeight={"min-h-[110px]"}
                            padded={"pl-0"}
                            data={data}
                            trending={false}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Recommended;
