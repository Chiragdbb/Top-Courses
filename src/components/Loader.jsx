import {BiLoaderAlt} from 'react-icons/bi'
const Loader = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-[200px]">
			<div className="animate-spin">
                <BiLoaderAlt size={40}/>
            </div>
			<h2 className='mt-3 font-semibold'>Loading...</h2>
		</div>
	);
};

export default Loader;
