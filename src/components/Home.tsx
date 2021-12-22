import Board from "./Board/Board";
import Bottom from "./Bottom/Bottom";
import Footer from "./Footer/Footer";
import Intro from "./Intro/Intro";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-light-brown font-['Clear_Sans']">
      <div className="max-w-lg mx-auto  mt-10">
        <Intro/>
        <Board />
        <Bottom/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
