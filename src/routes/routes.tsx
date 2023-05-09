import React, {Suspense, lazy} from 'react';
import {createBrowserRouter,} from "react-router-dom";

const Home = lazy(()=>import("../pages/Home"));
const ContactUs = lazy(()=>import("../pages/faq/ContactUs"));
const AboutUs = lazy(()=>import("../pages/faq/AboutUs"));

export const Routes = createBrowserRouter([
    {path: "/", element: <Suspense fallback={<></>}><Home /></Suspense>,},
    {path: "/contactus", element:<Suspense fallback={<></>}><ContactUs /></Suspense> },
    {path: "/aboutus/:id", element:<Suspense fallback={<></>}><AboutUs /></Suspense> },
  ]);