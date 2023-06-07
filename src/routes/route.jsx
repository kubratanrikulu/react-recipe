import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact";
import Homepage from "../pages/Homepage/Homepage";


const routesPaths = [
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
];

export default routesPaths