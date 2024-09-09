import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import ContactUs from "./Page/ContactUs";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> }
  ]);

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
