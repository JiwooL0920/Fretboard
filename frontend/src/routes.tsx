import Homepage from "./pages/Homepage";
import FretMemGamePage from "./pages/FretMemGamePage";
import ScalePage from "./pages/ScalePage";

const routes = [
    {
      path: '/',
      element: <Homepage/>
    },
    {
      path: '/fretmemgame',
      element: <FretMemGamePage/>
    },
    {
        path: '/scale',
        element: <ScalePage/>
      },
  ]

export default routes; 