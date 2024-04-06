import PropTypes from 'prop-types'; // ES6
import { CiLocationOn } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineContactPage } from "react-icons/md";
const ReadBooks = ({ blog }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = blog;
  return (
    <div className="card lg:card-side  work-sans border  ">
      <figure className=" px-8 m-8  bg-gray-300  flex items-center justify-center">
        <img className="" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title playfair-display">{bookName}</h2>
        <p className="text-xl">By: {author}</p>
        <div className="flex text-xl items-center">
          <span className="font-bold ">Tag:</span>{" "}
          {tags.map((tag, idx) => (
            <span className="border-green-500 bg-gray-100 font-bold rounded-full p-2 text-green-500 mr-2" key={idx}>
              #{tag}
            </span>
          ))}{" "}
          <div className="flex items-center mr-4 ">
            <CiLocationOn />
            Year of Publishing: {yearOfPublishing}
          </div>
        </div>
        <div className="text-xl">
          <div className=" flex gap-8 items-center text-xl">
            <div className="flex items-center gap-4">
              <LiaUserFriendsSolid /> Publisher: {publisher}
            </div>
            <div className="flex items-center gap-4">
            <MdOutlineContactPage /> Page {totalPages}
            </div>
          </div>
        </div>
        <hr />
        <div className="card-actions text-white text-xl">
          <button className="btn rounded-full bg-blue-200 text-blue-500">Category: {category}</button>
          <button className="btn rounded-full bg-orange-200 text-orange-400">Rating: {rating}</button>
          <button className="btn rounded-full bg-green-200 text-green-500">View Details</button>
        </div>
      </div>
    </div>
  );
};
ReadBooks.propTypes = {
    blog: PropTypes.object
  };

export default ReadBooks;
