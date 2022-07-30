import PageTitle from "Components/PageTitle";
import Card from "Components/CardUI";
import GridContainer from "Components/GridContainer";
// import appData from "starter-code/adjustedData.json";
import { useDispatch, useSelector } from "react-redux";
import { storeDataActions } from "ReduxStore/storeData";
import backArrow from "starter-code/icons8-back-to-16.png";
import { useEffect } from "react";

const Recommended = () => {
    // from redux store, select storeData slice and filter out data currently trending
    const recommendedData = useSelector(state => {
        // state.storeData.items.filter(item => !item.isTrending)
        if (
            state.storeData.searchData?.length ||
            state.storeData.searchData?.length === 0
        ) {
            return state.storeData.searchData.filter(item => !item.isTrending);
        } else {
            return state.storeData.items.filter(item => !item.isTrending);
        }
    });

    const userInput = useSelector(state => state.storeData.userInput);
    const searchData = useSelector(state => state.storeData.searchData);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(storeDataActions.resetData());
    }, [dispatch]);

    return (
        <section className='px-4 mt-6 md:px-6 xl:mt-16'>
            {/* <PageTitle>Recommended for you</PageTitle> */}
            {searchData === null && <PageTitle>Recommended</PageTitle>}

            {(searchData?.length === 0 || searchData?.length > 0) && (
                <PageTitle>
                    <img
                        src={backArrow}
                        alt='return'
                        className='w-10 cursor-pointer'
                        onClick={() => dispatch(storeDataActions.resetData())}
                    />
                    <span>
                        {" "}
                        Found {recommendedData.length} result for '{userInput}'{" "}
                    </span>
                </PageTitle>
            )}

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
