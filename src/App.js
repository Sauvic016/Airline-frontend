import Footer from "./Footer";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <div className="font-poppins bg-slate-50 h-screen overflow-scroll">
      <Home />
      <div className="mt-[24rem] mb-20 bg-[#BCBAF7]"></div>

      <Footer />
    </div>
  );
}

export default App;
