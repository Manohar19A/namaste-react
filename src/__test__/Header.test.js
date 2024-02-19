import { render } from "@testing-library/react"
import Header from "../components/Header"
import {Provider} from 'react-redux'
import store from '../redux/store'
import {StaticRouter} from 'react-router-dom/server'

test("Test to load Logo from Header when rendered", ()=>{
    const header = render(
    <StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
    // console.log(header)
    const logo = header.getByTestId('online')
    console.log(logo)
    expect(logo.innerHTML).toBe('🟢')
})
test("Test online Header when rendered", ()=>{
    const header = render(
    <StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
    // console.log(header)
    const logo = header.getAllByTestId('logo')
    console.log(logo)
    expect(logo[0].src).toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrBdXJUopKBY3qbC45J-FUIhNy6dfDUMNJA&usqp=CAU')
})
test("Test online Header when rendered", ()=>{
    const header = render(
    <StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
    // console.log(header)
    const logo = header.getByTestId('cart')
    console.log(logo)
    expect(logo.innerHTML).toBe('Cart-0')
})
