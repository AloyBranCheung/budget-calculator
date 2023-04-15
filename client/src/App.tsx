import "react-toastify/dist/ReactToastify.css";
import PageTitle from "./components/UI/typography/PageTitle";
import GutterContainer from "./components/layout/GutterContainer";
import CalculatorContainer from "./components/CalculatorContainer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
// hooks
import useAuth from "./hooks/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="font-nerd pt-5 pb-5">
      {isLoggedIn ? (
        <GutterContainer>
          <div className="flex flex-col gap-5">
            <Navbar />
            <CalculatorContainer />
          </div>
        </GutterContainer>
      ) : (
        <Login />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
