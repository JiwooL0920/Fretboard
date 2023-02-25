import Homepage from "./pages/Homepage";
import FretMemGamePage from "./pages/FretMemGamePage";
import ScalePage from "./pages/ScalePage";

const routes = [
    {
      path: '/',
      element: <Homepage/>,
      name: "Home Page",
      description: "This is the homepage.",
      imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    },
    {
      path: '/fretmemgame',
      element: <FretMemGamePage/>,
      name: "Fretboard Memorization Game",
      description: "Interactive game aimed to help you memorize the notes on the fretboard.",
      imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    },
    {
        path: '/scale',
        element: <ScalePage/>,
        name: "Scale Generator",
        description: "Interactive tool that graphically illustrates scales on the fretboard.",
        imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
      },
  ]

export default routes; 