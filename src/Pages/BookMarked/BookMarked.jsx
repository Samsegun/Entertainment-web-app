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
        <main className='px-4 mt-6'>
            {/* bokkmarked movies */}
            <PageTitle>Bookmarked Movies</PageTitle>

            <section className='mt-6'>
                <GridContainer>
                    {bookmarkMovies.map((bookmark, idx) => (
                        <li key={idx}>
                            <Card
                                minWidth={"min-w-[164px]"}
                                bottom={"-bottom-[55px]"}
                                height={"min-h-[175px]"}
                                innerHeight={"min-h-[110px]"}
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
                                minWidth={"min-w-[164px]"}
                                bottom={"-bottom-[55px]"}
                                height={"min-h-[175px]"}
                                innerHeight={"min-h-[110px]"}
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
