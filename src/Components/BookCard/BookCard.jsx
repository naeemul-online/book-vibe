import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";
function BookCard({ blog }) {
  const { image, tags, bookName, author, category, rating, bookId } = blog;
  return (
    <Link to={`/blog/${bookId}`} className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 bg-[#1313130D] py-10 m-8">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <div className="flex gap-4 w-full text-lg font-bold">
          <h3>{tags}</h3> <h3>{tags}</h3>
        </div>
        <h2 className="text-2xl font-bold playfair-display">{bookName}</h2>
        <p className="text-lg">By : {author} </p>
        <div className="card-actions flex justify-between font-bol">
          <h3 className="text-lg">{category}</h3>
          <div className="rating gap-2 text-lg">
            <span>{rating}</span>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

BookCard.propTypes = {
  blog: PropTypes.object,
};

export default BookCard;
