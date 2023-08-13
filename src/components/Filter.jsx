function Filter({ filters, category, setCategory }) {

    const filterHandler = (title) => {
        setCategory(title)
    }

	return (
		<div className="flex flex-wrap justify-center gap-2 items-center mt-2">
			{filters.map((filter) => {
				return (
					<button
                        onClick={() => filterHandler(filter.title)}
						key={filter.id}
						className={`border bg-slate-500 text-black p-2 rounded hover:bg-opacity-60 transition duration-75
                        ${category === filter.title ? 
                        "bg-opacity-60 border-black border-2": 
                        "bg-opacity-40 border-transparent"}`}
					>
						{filter.title}
					</button>
				);
			})}
		</div>
	);
}

export default Filter;
