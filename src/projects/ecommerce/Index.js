import React from 'react'
import Header from './Header'
import TrendingProducts from './TrendingProducts'
import Shop from './Shop'
import About from './About'
import Contact from './Contact'
import Instagram from './Instagram'
import Cart from './Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState,  createContext } from 'react'


export const eCommerceContext = createContext();


function Index() {
    const [cart,setCart] = useState([]);
    const [cartBtn, cartBtnChange] = useState([]);
    const [storeVal, changeVal] = useState(0);
	const [msgVal, msgFunction] = useState("");

    var trendingProducts =
	[
		'https://i0.wp.com/since7.com/wp-content/uploads/2023/03/arsenallll-FILEminimizer.jpg?resize=500%2C640&ssl=1',
		'https://i0.wp.com/since7.com/wp-content/uploads/2023/03/BARCA-FILEminimizer.jpg?resize=500%2C640&ssl=1',
		'https://i0.wp.com/since7.com/wp-content/uploads/2022/10/barca-blackm22.jpg?resize=500%2C640&ssl=1',
		'https://i0.wp.com/since7.com/wp-content/uploads/2022/10/atmstadiumwhite.jpg?resize=500%2C640&ssl=1',
	];
    
    return (
        <>
            <eCommerceContext.Provider value={{cart,setCart,cartBtn,cartBtnChange,trendingProducts,storeVal,changeVal,msgVal,msgFunction}}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<TrendingProducts/>} ></Route>
                        <Route path="/shop"  element={<Shop/>}></Route>
                        <Route path="/about"  element={<About/>}></Route>
                        <Route path="/contact"  element={<Contact/>}></Route>
                        <Route path="/instagram"  element={<Instagram/>}></Route>
                        <Route path="/cart"  element={<Cart/>}></Route>
                    </Routes>
                </BrowserRouter>
            </eCommerceContext.Provider>
        </>
    )
}

export default Index