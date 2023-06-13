import HomePage from "./pages/Homepage";
import FretGamePage from "./pages/FretGamePage";
import ScalePage from "./pages/ScalePage";
import TriadPage from "./pages/TriadPage";
import ChordPage from "./pages/ChordPage";
import IntervalPage from "./pages/IntervalPage";

const routes = [
    // {
      // path: '/',
      // element: <HomePage/>,
      // name: "Home Page",
      // navName: "Home",
      // description: "This is the homepage.",
      // imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    // },
    // {
    //   path: '/fretgame',
    //   element: <FretGamePage/>,
    //   name: "Fretboard Game",
    //   navName: "Game",
    //   description: "Memorize the notes on the fretboard.",
    //   imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    // },
    {
        path: '/scale',
        element: <ScalePage/>,
        name: "Scale Generator",
        navName: "Scale",
        description: "Graphic illustration of scales.",
        imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
      },
    // {
    //     path: '/triad',
    //     element: <TriadPage/>,
    //     name: "Triad Generator",
    //     navName: "Triad",
    //     description: "Graphic illustration of triads.",
    //     imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    //   },
    {
      path: '/chord',
      element: <ChordPage/>,
      name: "Chord Generator",
      navName: "Chord",
      description: "Graphic illustration of chords.",
      imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    },
    {
      path: '/interval',
      element: <IntervalPage/>,
      name: "Interval Generator",
      navName: "Interval",
      description: "Graphic illustration of intervals.",
      imgLink: "https://guitar.com/wp-content/uploads/2018/02/fretboard-notes-all@1500x600.jpg"
    },
  ]

export default routes; 