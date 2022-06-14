import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Reviews } from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import {Nav} from "./components/Nav";
import {SingleCategory} from "./components/SingleCategory";
import {Categories} from './components/Categories'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
      </header>
      <Nav/>
			<Routes>
				<Route Route path="/reviews" element={<Reviews />} />
        <Route Route path="/" element={<Home />} />
        <Route Route path="/reviews/:category" element={<SingleCategory />} />
        <Route Route path='/categories' element={<Categories />} />
			</Routes>
		</div>
	);
}

export default App;
