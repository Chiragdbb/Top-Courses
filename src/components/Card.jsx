import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourses, setLikedCourses }) {

	function likeHandler() {
		// liked
		if (likedCourses.includes(course.id)) {
			setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
			toast.warning("Like removed");
		}
		// not liked
		else {
			if (likedCourses.length === 0) {
				setLikedCourses([course.id]);
			} else {
				setLikedCourses((prev) => [...prev, course.id]);
			}
			toast.success("Liked successfully");
		}
	}

	return (
		<div className="w-[280px] rounded-md overflow-hidden shadow-lg bg-gray-700">
			<div className="relative">
				<img src={course.image.url} alt={course.image.alt}></img>
				<div
					className="absolute -bottom-4 right-0 w-8 h-8 rounded-full bg-white flex justify-center items-center hover:cursor-pointer"
					onClick={likeHandler}
				>
					{likedCourses.includes(course.id) ? (
						<FcLike size={20} />
					) : (
						<FcLikePlaceholder size={20} />
					)}
				</div>
			</div>
			<div className="p-2 text-white">
				<h2 className="font-bold text-xl">{course.title}</h2>
				<p className="mt-3">
					{course.description.length > 100
						? `${course.description.substr(0, 100)}...`
						: course.description}
				</p>
			</div>
		</div>
	);
}

export default Card;
