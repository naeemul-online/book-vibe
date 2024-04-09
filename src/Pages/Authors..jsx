import { useLoaderData } from "react-router-dom";
const Authors = () => {
    const authors = useLoaderData();
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Authors</h2>
      <div className="grid grid-cols-3 gap-4">
        {authors.map(author => (
          <div key={author.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={author.image}
              alt={author.author}
              className="rounded-full h-24 w-24 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold">{author.author}</h3>
            <p className="text-gray-600">{author.review.substring(0, 150)}...</p>
            <div className="flex justify-between mt-4">
              <span className="text-sm text-gray-500">
                Category: {author.category}
              </span>
              <span className="text-sm text-gray-500">
                Rating: {author.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
