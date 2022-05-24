import GridContainer from "Components/GridContainer";
import PageTitle from "Components/PageTitle";
import Card from "Components/CardUI";
import data from "starter-code/data.json";

const Movies = () => {
    const moviesData = data.filter(item => item.category === "Movie");
    console.log(moviesData);

    return (
        <main className='px-4 mt-6 md:px-6 xl:pl-[164px] xl:mt-12'>
            <PageTitle>Movies</PageTitle>

            <section className='mt-6'>
                <GridContainer>
                    {moviesData.map((movie, idx) => (
                        <li key={idx}>
                            <Card
                                minWidth={"min-w-[164px] md:min-w-[220px]"}
                                bottom={"-bottom-[55px] md:-bottom-[60px]"}
                                height={"min-h-[175px] md:min-h-[250px]"}
                                innerHeight={"min-h-[110px] md:min-h-[180px]"}
                                padded={"pl-0"}
                                data={movie}
                                dataType={"movies"}
                            />
                        </li>
                    ))}
                </GridContainer>
            </section>
        </main>
    );
};

export default Movies;
