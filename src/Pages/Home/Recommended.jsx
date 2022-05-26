import PageTitle from "Components/PageTitle";
import Card from "Components/CardUI";
import GridContainer from "Components/GridContainer";
import appData from "starter-code/adjustedData.json";

const Recommended = () => {
    // filter out data that are trending
    const recommendedData = appData.filter(item => !item.isTrending);

    return (
        <section className='px-4 mt-6 md:px-6 xl:mt-16'>
            <PageTitle>Recommended for you</PageTitle>

            <GridContainer>
                {recommendedData.map((data, idx) => (
                    <li key={idx}>
                        <Card
                            minWidth={"min-w-[164px] md:min-w-[220px]"}
                            bottom={"-bottom-[55px] md:-bottom-[60px]"}
                            height={
                                "min-h-[175px] md:min-h-[220px] xl:min-h-[250px]"
                            }
                            innerHeight={
                                "min-h-[110px] md:min-h-[156px] xl:min-h-[180px]"
                            }
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
