
import { useLoaderData, useParams } from 'react-router-dom';

const Blog = () => {
    const blog = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const currentBlog = blog.find(currentBlog => currentBlog.id === idInt);
    console.log(currentBlog)
    return (
        <div>
            <h2>{currentBlog.bookName}</h2>
        </div>
    );
};

export default Blog;