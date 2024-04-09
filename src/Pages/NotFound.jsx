
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
        Go to the Homepage
      </Link>
      </div>
      
    </div>
  );
};

export default NotFound;
