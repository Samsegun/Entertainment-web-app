import { useEffect } from "react";
import PageTitle from "Components/PageTitle";
import GridContainer from "Components/GridContainer";
import Card from "Components/CardUI";
import { useDispatch, useSelector } from "react-redux";
import { storeDataActions } from "ReduxStore/storeData";
import ReactTooltip from "react-tooltip";
// import { storeDataActions } from "ReduxStore/storeData";
import backArrow from "starter-code/icons8-back-to-16.png";

const BookMarked = () => {
    /* from redux store, select storeData slice and filter out
    data whose  */
    const bookmarkData = useSelector(state => {
        if (
            state.storeData.searchData?.length ||
            state.storeData.searchData?.length === 0
        ) {
            return state.storeData.searchData.filter(item => item.isBookmarked);
        } else {
            return state.storeData.items.filter(item => item.isBookmarked);
        }
    });

    const bookmarkMovies = bookmarkData.filter(
        item => item.category === "Movie"
    );
    const bookmarkTvseries = bookmarkData.filter(
        item => item.category === "TV Series"
    );

    const userInput = useSelector(state => state.storeData.userInput);
    const searchData = useSelector(state => state.storeData.searchData);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(storeDataActions.resetData());
    }, [dispatch]);

    return (
        <main className='px-4 mt-6 xl:pl-[164px]'>
            {/* bokkmarked movies */}
            {searchData === null && <PageTitle>Bookmarked Movies</PageTitle>}

            {(searchData?.length === 0 || searchData?.length > 0) && (
                <PageTitle>
                    <ReactTooltip />
                    <img
                        src={backArrow}
                        alt='return'
                        className='w-10 cursor-pointer'
                        onClick={() => dispatch(storeDataActions.resetData())}
                        data-tip='Return to bookmarks'
                    />
                    <span>
                        {" "}
                        Found {bookmarkData.length} result for '{userInput}'{" "}
                    </span>
                </PageTitle>
            )}

            <section className='mt-6'>
                {/* if bookmarked movies length is greater than 0(true), display ui below  */}
                {bookmarkMovies.length > 0 && (
                    <GridContainer>
                        {bookmarkMovies.map((bookmark, idx) => (
                            <li key={idx}>
                                <Card
                                    minWidth={"min-w-[164px] md:min-w-[220px]"}
                                    bottom={
                                        "-bottom-[55px] md:-bottom-[60px] xl:-bottom-[75px]"
                                    }
                                    height={"min-h-[175px] md:min-h-[250px]"}
                                    innerHeight={
                                        "min-h-[110px] md:min-h-[180px]"
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
                        No bookmarked movies
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
                                    minWidth={"min-w-[164px] md:min-w-[220px]"}
                                    bottom={
                                        "-bottom-[55px] md:-bottom-[60px] xl:-bottom-[75px]"
                                    }
                                    height={"min-h-[175px] md:min-h-[250px]"}
                                    innerHeight={
                                        "min-h-[110px] md:min-h-[180px]"
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
                        No bookmarked tv series
                    </div>
                )}
            </section>
        </main>
    );
};

export default BookMarked;
