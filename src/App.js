import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart"
import Error from "./components/Error";
import {Provider } from 'react-redux'
{
  /* <div>
    <div>
        <h1>Hello 1</h1>
    </div>
    <div>
        <h1>Hello 1</h1>
    </div>
</div> */
}

// const heading = React.createElement("h1",{id:'heading'},"Hello world from React")
// const heading = React.createElement(
//   "div",
//   { id: "parent" },[ React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "Hello world from React H1"),
//     React.createElement("h2", { id: "heading" }, "Hello world from React H2"),
//   ]), React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "Hello world from React H1"),
//     React.createElement("h2", { id: "heading" }, "Hello world from React H2"),
//   ])]

// );
// converting line no 15 to line no 24 into jsx the above is core react
// babel convert JSX into JS objects
// parcel convert JS objects into HTML to render
//JSX ==> babel  transplies it to React.createElement ==>ReactElement-JS Object ==>HTMLElement(render)
// const jsxHeading = <div id='parent'>
//   <div id='child'>
//     <h1>Hello from JSX H1</h1>
//   </div>
//   <div id='child'>
//     <h1>hello from jsx H</h1>
//   </div>
// </div>
// const Title =()=>{
//   return (
//     <div>
//       <h1> This is Functiona component from Title</h1>
//     </div>
//   )
// }
// const HeadingComponent =()=>{
//   return (
//     <div>
//       <Title/>
//       <h1> This is Functiona component from React</h1>
//     </div>
//   )
// }
//Header
//-Logo
//-naveitems
//Body
//-Search
//-Card
//-
//Footer


import { DarkModeProvider } from "@rbnd/react-dark-mode"
import RestaruentMenu from "./components/RestaruentMenu";
import { lazy,Suspense } from "react";
import store from "./redux/store";
const Body = lazy(()=>import("./components/Body"))
const About=lazy(()=>import("./components/About"))
const AppLayout = () => {
  return (
    <Provider store={store}>
      <DarkModeProvider>
    <div id="app">
      <Header />
      <Outlet/>
      {/* <Body /> */}
    </div>
    </DarkModeProvider>
    </Provider>
    
  );
};
const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/about',
        element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>,
        // errorElement:<Error/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'restaurent/:resId',
        element:<RestaruentMenu/>
      }

    ]
  },
 
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// console.log(jsxHeading);
// root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);
