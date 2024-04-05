import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import BookCard from "../Components/BookCard/BookCard";

const Home = () => {
    const blogs = useLoaderData();
  return (
    <div>
       <Banner></Banner>
       <div className=" text-center my-12 ">        
       <h2 className="playfair-display font-bold text-4xl">Books</h2>
       </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-12 work-sans">
      {
        blogs.map(blog => <BookCard key={blog.id} blog={blog}></BookCard>)
       }
      </div>
    </div>
  );
};

export default Home;
