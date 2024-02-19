import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"//toBeInTheDocument is present inside the library
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../redux/store";
import { StaticRouter } from "react-router-dom/server";
import { MenuData } from "../utils/mockData";
import RestaruentMenu from "../components/RestaruentMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MenuData);
    },
  });
});

  test("Test Menu Items Clicking on RestaurentCard", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaruentMenu/>
                <Cart/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=> expect(body.getByTestId("menu")))
    const addBtn = body.getAllByTestId('add-btn')
    fireEvent.click(addBtn[0]);
    const cart = body.getByTestId('cart')
    expect(cart.innerHTML).toBe("Cart-1")
  })
  test("To test the cart list of items",async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaruentMenu/>
                <Cart/>
            </Provider>
        </StaticRouter>
        
    )
    // await waitFor(()=> expect(body.getByTestId("cart-list")))
    const cart = body.getByTestId('cart-list')
    //   expect(shimmer).toBeInTheDocument() we can write like this also but not good practice
    expect(cart.children.length).toBe(1)

  })
