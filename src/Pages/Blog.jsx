import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Components/Utility/LocalStorage";

const Blog = () => {
  const toastWishList = () => toast("Added to Wishlist Successfully!");
  const blog = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const currentBlog = blog.find((currentBlog) => currentBlog.id === idInt);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating
  } = currentBlog;

  const toastRead = () => {
    saveJobApplication(idInt);
    toast("Added to Read List Successfully!");
  };
  return (
    <div className="card lg:card-side shadow-xl work-sans  ">
      <figure className=" p-8 m-8 rounded-xl bg-gray-300 w-3/4">
        <img className="" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title playfair-display">{bookName}</h2>
        <p>By: {author}</p>
        <hr />
        <p> {category}</p>
        <hr />
        <p>
          {" "}
          <span className="font-bold">Review:</span> {review}
        </p>
        <p>
          <span className="font-bold ">Tag:</span>{" "}
          {tags.map((tag, idx) => (
            <span
              className="border-green-500 text-green-500 border rounded mr-2"
              key={idx}
            >
              #{tag}
            </span>
          ))}
        </p>
        <hr />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Number of Pages:</td>
                  <td className="font-bold">{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold">{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold">{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td className="font-bold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-actions text-white ">
          <button onClick={toastRead} className="btn">
            Read
          </button>

          <button onClick={toastWishList} className="btn  bg-[#50B1C9]">
            Wishlist
          </button>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Blog;
