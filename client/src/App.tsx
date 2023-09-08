import "react-toastify/dist/ReactToastify.css";
import GutterContainer from "./components/layout/GutterContainer";
import CalculatorContainer from "./components/CalculatorContainer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
// hooks
import useAuth from "./hooks/useAuth";

function App() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div className="font-nerd pt-5 pb-5">
      <GutterContainer>
        <div className="flex flex-col gap-5">
          <Navbar />
          <CalculatorContainer />
        </div>
      </GutterContainer>

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
