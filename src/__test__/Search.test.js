import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"//toBeInTheDocument is present inside the library
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../redux/store";
import { StaticRouter } from "react-router-dom/server";
import { RestaurentData } from "../utils/mockData";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurentData);
    },
  });
});
test("Test Shimmer to render in body on HomePage", () => {
  const body = render(
    <StaticRouter>
      {" "}
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
  const shimmer = body.getByTestId('shimmer')
//   expect(shimmer).toBeInTheDocument() we can write like this also but not good practice
expect(shimmer.children.length).toBe(10)
  
});
test("Test Search  to render on HomePage", async() => {
    const body = render(
      <StaticRouter>
        {" "}
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId('search-btn')))
    console.log(body);
    const resList = body.getByTestId('res-list')
  //   expect(shimmer).toBeInTheDocument() we can write like this also but not good practice
  expect(resList.children.length).toBe(20)
    
  });
  test("test Search box input on Home page", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=>expect(body.getByTestId('search-btn')))
    const input = body.getByTestId('input')
    fireEvent.change(input,{
target:{
    value:"food"
}
    })
    const searchBtn = body.getByTestId('search-btn')
    fireEvent.click(searchBtn)
    const resList = body.getByTestId('res-list')
    expect(resList.children.length).toBe(3)
  })
