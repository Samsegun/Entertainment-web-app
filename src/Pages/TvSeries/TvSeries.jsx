import Card from "Components/CardUI";
import GridContainer from "Components/GridContainer";
import PageTitle from "Components/PageTitle";
import data from "starter-code/data.json";

const TvSeries = () => {
    const tvseriesData = data.filter(item => item.category === "TV Series");

    return (
        <main className='px-4 mt-6'>
            <PageTitle>TV Series</PageTitle>
            <section className='mt-6'>
                <GridContainer>
                    {tvseriesData.map((series, idx) => (
                        <li key={idx}>
                            <Card
                                minWidth={"min-w-[164px]"}
                                bottom={"-bottom-[55px]"}
                                height={"min-h-[175px]"}
                                innerHeight={"min-h-[110px]"}
                                padded={"pl-0"}
                                data={series}
                                dataType={"series"}
                            />
                        </li>
                    ))}
                </GridContainer>
            </section>
        </main>
    );
};

export default TvSeries;
