import GridContainer from "Components/GridContainer";
import PageTitle from "Components/PageTitle";
import Card from "Components/CardUI";
import data from "starter-code/data.json";

const Movies = () => {
    const moviesData = data.filter(item => item.category === "Movie");

    return (
        <main className='px-4 mt-6'>
            <PageTitle>Movies</PageTitle>

            <section className='mt-6'>
                <GridContainer>
                    {moviesData.map((movie, idx) => (
                        <li key={idx}>
                            <Card
                                minWidth={"min-w-[164px]"}
                                bottom={"-bottom-[55px]"}
                                height={"min-h-[175px]"}
                                innerHeight={"min-h-[110px]"}
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
