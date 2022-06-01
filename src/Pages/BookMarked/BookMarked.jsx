import PageTitle from "Components/PageTitle";
import GridContainer from "Components/GridContainer";
import Card from "Components/CardUI";
import { useSelector } from "react-redux";
import { storeDataActions } from "ReduxStore/storeData";

const BookMarked = () => {
    /* from redux store, select storeData slice and filter out
    data whose  */
    const bookmarkData = useSelector(state =>
        state.storeData.items.filter(item => item.isBookmarked)
    );

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
                {/* if bookmarked movies length is greater than 0(true), display ui below  */}
                {bookmarkMovies.length > 0 && (
                    <GridContainer>
                        {bookmarkMovies.map((bookmark, idx) => (
                            <li key={idx}>
                                <Card
                                    minWidth={
                                        "min-w-[164px] md:min-w-[220px] xl:min-w-[325px]"
                                    }
                                    bottom={
                                        "-bottom-[55px] md:-bottom-[60px] xl:-bottom-[75px]"
                                    }
                                    height={
                                        "min-h-[175px] md:min-h-[250px] xl:min-h-[330px]"
                                    }
                                    innerHeight={
                                        "min-h-[110px] md:min-h-[180px] xl:min-h-[250px]"
                                    }
                                    padded={"pl-0"}
                                    data={bookmark}
                                    dataType={"bookmark"}
                                />
                            </li>
                        ))}
                    </GridContainer>
                )}

                {/* if bookmarked movies length is 0(false), display ui below  */}
                {!bookmarkMovies.length && (
                    <div className='mb-10 text-2xl text-center text-white md:text-3xl'>
                        You've no Bookmarked movies yet
                    </div>
                )}
            </section>

            {/* bookmarked tv series */}
            <PageTitle>Bookmarked TV Series</PageTitle>

            <section className='mt-6'>
                {/* if bookmarked tv series length is greater than 0(true), display ui below  */}
                {bookmarkTvseries.length > 0 && (
                    <GridContainer>
                        {bookmarkTvseries.map((bookmark, idx) => (
                            <li key={idx}>
                                <Card
                                    minWidth={
                                        "min-w-[164px] md:min-w-[220px] xl:min-w-[325px]"
                                    }
                                    bottom={
                                        "-bottom-[55px] md:-bottom-[60px] xl:-bottom-[75px]"
                                    }
                                    height={
                                        "min-h-[175px] md:min-h-[250px] xl:min-h-[330px]"
                                    }
                                    innerHeight={
                                        "min-h-[110px] md:min-h-[180px] xl:min-h-[250px]"
                                    }
                                    padded={"pl-0"}
                                    data={bookmark}
                                    dataType={"bookmark"}
                                />
                            </li>
                        ))}
                    </GridContainer>
                )}

                {/* if bookmarked tv series length is 0(false) display ui below  */}
                {!bookmarkTvseries.length && (
                    <div className='mb-10 text-2xl text-center text-white md:text-3xl'>
                        You've no Bookmarked tv series yet
                    </div>
                )}
            </section>
        </main>
    );
};

export default BookMarked;
