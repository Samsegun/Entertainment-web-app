import PageTitle from "Components/PageTitle";
import GridContainer from "Components/GridContainer";
import Card from "Components/CardUI";
import data from "starter-code/data.json";

const BookMarked = () => {
    const bookmarkData = data.filter(item => item.isBookmarked);
    const bookmarkMovies = bookmarkData.filter(
        item => item.category === "Movie"
    );
    const bookmarkTvseries = bookmarkData.filter(
        item => item.category === "TV Series"
    );

    return (
        <main className='px-4 mt-6 xl:pl-[164px]'>
            {/* bokkmarked movies */}
            <PageTitle>Bookmarked Movies</PageTitle>

            <section className='mt-6'>
                <GridContainer>
                    {bookmarkMovies.map((bookmark, idx) => (
                        <li key={idx}>
                            <Card
                                minWidth={"min-w-[164px] md:min-w-[220px]"}
                                bottom={"-bottom-[55px] md:-bottom-[60px]"}
                                height={
                                    "min-h-[175px] md:min-h-[250px] xl:min-h-[280px]"
                                }
                                innerHeight={
                                    "min-h-[110px] md:min-h-[180px] xl:min-h-[210px]"
                                }
                                padded={"pl-0"}
                                data={bookmark}
                                dataType={"bookmark"}
                            />
                        </li>
                    ))}
                </GridContainer>
            </section>

            {/* bookmarked tv series */}
            <PageTitle>Bookmarked TV Series</PageTitle>

            <section className='mt-6'>
                <GridContainer>
                    {bookmarkTvseries.map((bookmark, idx) => (
                        <li key={idx}>
                            <Card
                                minWidth={
                                    "min-w-[164px] md:min-w-[220px] xl:w-[280px]"
                                }
                                bottom={"-bottom-[55px] md:-bottom-[60px]"}
                                height={"min-h-[175px] md:min-h-[250px]"}
                                innerHeight={"min-h-[110px] md:min-h-[180px]"}
                                padded={"pl-0"}
                                data={bookmark}
                                dataType={"bookmark"}
                            />
                        </li>
                    ))}
                </GridContainer>
            </section>
        </main>
    );
};

export default BookMarked;
