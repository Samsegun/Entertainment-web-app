import { useState } from "react";
import { useEffect } from "react";
import GridContainer from "Components/GridContainer";
import PageTitle from "Components/PageTitle";
import Card from "Components/CardUI";
import { useDispatch, useSelector } from "react-redux";
import { storeDataActions } from "ReduxStore/storeData";

const Movies = () => {
    // const [searchData, setSearchData] = useState(false);

    /* from redux store, select storeData slice and filter out
    data whose category is not movie */
    const moviesData = useSelector(state => {
        if (state.storeData.searchData?.length) {
            return state.storeData.searchData.filter(
                item => item.category === "Movie"
            );
        } else {
            return state.storeData.items.filter(
                item => item.category === "Movie"
            );
        }
    });
    const userInput = useSelector(state => state.storeData.userInput);
    // userInput ? setSearchData(false) : setSearchData(true);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(storeDataActions.resetData());
    }, [dispatch]);

    return (
        <main className='px-4 mt-6 md:px-6 xl:pl-[164px] xl:mt-12'>
            {!userInput && <PageTitle>Movies</PageTitle>}

            {userInput && (
                <PageTitle>
                    Found {moviesData.length} result for '{userInput}'
                </PageTitle>
            )}

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
