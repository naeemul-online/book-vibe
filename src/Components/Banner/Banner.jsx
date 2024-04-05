import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
      <div className="bg-[#1313130D] rounded-xl md:flex justify-around p-10">
        <div className="space-y-16 mt-20">
          <h2 className="text-6xl font-bold playfair-display">Books to freshen up <br /> your bookshelf</h2>
          <Link to='./listed-books' className="btn bg-green-500 text-white p-2 rounded work-sans text-xl">View the list</Link>
        </div>
        <img src={banner} alt="banner" />
      </div>
  );
};

export default Banner;
