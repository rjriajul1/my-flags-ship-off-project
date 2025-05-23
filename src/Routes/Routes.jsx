import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/about/About";
import Favorite from "../Pages/favorite/Favorite";
import Cart from "../Pages/cart/Cart";
import PhoneDetails from "../Pages/phoneDetails/PhoneDetails";
import ErrorMessage from "../Pages/ErrorMessage";




  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorMessage/>,
      children:[
        {
         path:'/',
         hydrateFallbackElement:<p>Loading....</p>,
         loader:()=> fetch('../Phones.json'),
         Component:Home
        },
        {
            path:'phoneDetails/:id',
            hydrateFallbackElement:<p>Loading....</p>,
            loader:()=> fetch('../Phones.json'),
            Component:PhoneDetails
        },
        {
          path:'about',
          loader: ()=>fetch('../about.json'),
          Component:About
        },
        {
          path:'/favorite',
          loader:()=> fetch('../Phones.json'),
          Component:Favorite
        },
        {
          path:'/cart',
          Component:Cart
        }
      ]
    },
  ]);