import PageTitle from "Components/PageTitle";
import Card from "Components/CardUI";
import appData from "starter-code/data.json";
import GridContainer from "Components/GridContainer";

const Recommended = () => {
    // filter out data that are trending
    const recommendedData = appData.filter(item => !item.isTrending);
    console.log(recommendedData);

    return (
        <section className='px-4 mt-6'>
            <PageTitle>Recommended for you</PageTitle>

            <GridContainer>
                {recommendedData.map((data, idx) => (
                    <li key={idx}>
                        <Card
                            minWidth={"min-w-[164px] md:min-w-[220px]"}
                            bottom={"-bottom-[55px] md:-bottom-[60px]"}
                            height={"min-h-[175px] md:min-h-[220px]"}
                            innerHeight={"min-h-[110px] md:min-h-[156px]"}
                            padded={"pl-0"}
                            data={data}
                            dataType={"recommended"}
                        />
                    </li>
                ))}
            </GridContainer>
        </section>
    );
};

export default Recommended;
