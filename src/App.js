import FlightDetailsCard from "./components/FlightDetailsCard";
import Flights from "./pages/FlightsListPage/Flights";
import Home from "./pages/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="font-poppins bg-slate-50 h-screen overflow-scroll">
      <RouterProvider router={router} />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/flights",
        element: <Flights />,
        // children: [
        //   {
        //     path: ":id",
        //     element: <FlightDetailsCard />,
        //   },
        // ],
      },
      {
        path: "/flightdetails/:id",
        element: <FlightDetailsCard />,
      },
    ],
  },
]);

export default App;
