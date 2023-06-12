import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./About";
import Main from "./Main";
import Contact from "./Contact";
import Blog from "./Blog";

function Header() {
	const [overlay, setOverlay] = useState(false)

	window.onscroll = () => {
		if (window.scrollY > 100) {
			setOverlay(true);
		}
		else {
			setOverlay(false);
		}
	}


	return (
		<header className={(overlay) ? 'dark' : ''}>
			<div className='logo'>
				<img src='netflix/netflix-logo.png' />
			</div>

			<BrowserRouter>
				<div style={{ color: "white" }}>
					<ul style={{ display: "flex" }}>
						<li> <Link to=""> Home </Link></li>
						<li> <Link to="about"> About </Link></li>
						<li> <Link to="contact"> Contact Us </Link></li>
						<li> <Link to="blog"> Blog </Link></li>
					</ul>
				</div>
				<Routes>
					<Route path="/" element={<Main></Main>}> Home </Route>
					<Route path="/about" element={<About></About>}> Home </Route>
					<Route path="/contact" element={<Contact></Contact>}> Home </Route>
					<Route path="/blog" element={<Blog></Blog>}> Home </Route>
				</Routes>
			</BrowserRouter>

			<nav>
				<img src='netflix/green-blue-emoji.png' />
			</nav>

		</header>
	)
}

export default Header