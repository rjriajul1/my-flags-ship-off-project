import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/about/About";
import Favorite from "../Pages/favorite/Favorite";
import Cart from "../Pages/cart/Cart";



  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
         path:'/',
         loader:()=> fetch('Phones.json'),
         Component:Home
        },
        {
          path:'about',
          Component:About
        },
        {
          path:'/favorite',
          Component:Favorite
        },
        {
          path:'/cart',
          Component:Cart
        }
      ]
    },
  ]);