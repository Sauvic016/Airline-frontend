import FlightDetailsCard from "./components/FlightDetailsCard";
import Flights from "./pages/FlightsListPage/Flights";
import Home from "./pages/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import VerificationPage from "./pages/verifyEmailpage/VerifyemailPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="font-poppins bg-slate-50 h-screen  overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <SearchPage />,
      },
      {
        path: "/home/flights",
        element: <Flights />,
      },
      {
        path: "/home/flightdetails/:id",
        element: <FlightDetailsCard />,
      },
    ],
  },
  {
    path: "/api/v1/verify-email",
    element: <VerificationPage />,
  },
]);

export default App;
