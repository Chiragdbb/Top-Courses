import "./index.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { filterData, apiUrl } from "./data";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Loader from "./components/Loader";

function App() {
	const [filters, setFilters] = useState(filterData);
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState(filterData[0].title);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch(apiUrl);
			const output = await res.json();
			setCourses(output.data);
		} catch (error) {
			toast.error("Something went wrong");
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<NavBar />
			<Filter
				filters={filters}
				category={category}
				setCategory={setCategory}
			/>
			<div>{loading ? <Loader /> : <Cards courses={courses} category={category} />}</div>
			<ToastContainer />
		</div>
	);
}

export default App;
