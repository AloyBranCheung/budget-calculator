import PageTitle from "./components/UI/typography/PageTitle";
import GutterContainer from "./components/layout/GutterContainer";
import CalculatorContainer from "./components/CalculatorContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-nerd pt-5 pb-5">
      <GutterContainer>
        <div className="flex flex-col gap-5">
          <Navbar />
          <CalculatorContainer />
        </div>
      </GutterContainer>
    </div>
  );
}

export default App;
