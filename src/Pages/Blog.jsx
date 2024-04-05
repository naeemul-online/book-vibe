
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blog = useLoaderData();
    console.log(blog)
    return (
        <div>
            <h2>SAingle</h2>
        </div>
    );
};

export default Blog;