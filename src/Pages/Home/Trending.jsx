import Card from "Components/CardUI";
import PageTitle from "Components/PageTitle";
import appData from "starter-code/data.json";

const Trending = () => {
    // filter out data that are not trending
    const trendingData = appData.filter(item => item.isTrending);
    console.log(trendingData);
    return (
        <section className='pl-4 mt-6 text-white'>
            <PageTitle>Trending</PageTitle>

            {/* trending cards */}
            <div className='mt-4 overflow-x-scroll scrollbar'>
                <div className='flex gap-4 min-w-[1280px] md:min-w-[2510px] md:gap-10'>
                    {trendingData.map((data, idx) => (
                        <Card
                            minWidth={"min-w-[250px] md:min-w-[470px]"}
                            bottom={"bottom-4"}
                            height={"min-h-[140px] md:min-h-[230px]"}
                            innerHeight={"min-h-[140px] md:min-h-full"}
                            padded={"pl-4"}
                            data={data}
                            dataType={"trending"}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
