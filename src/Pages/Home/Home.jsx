import Trending from "./Trending";
import Recommended from "./Recommended";

const Home = () => {
  return (
    <main className='max-w-[1920px] m-auto'>
      <Trending />
      <Recommended />
    </main>
  );
};

export default Home;
