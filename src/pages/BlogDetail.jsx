import { useParams } from "react-router-dom";
import { blogs } from "../constant/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16 mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
          <p className="mt-4 text-gray-600">
            {blog.date} by {blog.author}
          </p>
          <img
            src={blog.image}
            alt={blog.title}
            className="mt-8 w-full h-auto rounded-lg shadow-lg"
          />
          <div className="mt-8 text-lg text-gray-700">{blog.content}</div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
