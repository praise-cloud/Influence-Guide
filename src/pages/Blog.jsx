import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { blogs, recentPosts } from "../constant/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleViewMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Blog
        </h2>
        <p className="mt-4 text-center text-lg leading-8 text-gray-600">
          Stay updated with the latest trends and tips in social media
          marketing.
        </p>

        {/* Recent Posts Carousel */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Recent Posts
          </h3>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop
            autoPlay
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-20"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              )
            }
          >
            {recentPosts.slice(0, 5).map((recentPosts) => (
              <div
                key={recentPosts.id}
                className="p-4 my-10 mx-16 shadow-lg rounded-lg"
              >
                <img
                  src={recentPosts.image}
                  alt={recentPosts.title}
                  className="h-52 w-full object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {recentPosts.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {recentPosts.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500 mx-50">
                    <span>{recentPosts.date}</span>
                    <span>by {recentPosts.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Other Blogs */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            More Blogs
          </h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(3, visibleBlogs).map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    <p className="text-gray-500 text-sm">
                      {blog.date} by {blog.author}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {visibleBlogs < blogs.length && (
            <div className="mt-10 text-center">
              <button
                onClick={handleViewMore}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
