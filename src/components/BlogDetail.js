import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    blogs.map((blog) => {
      if (blog.id === parseInt(id)) {
        setData(blog);
      }
      return 1;
    });
  }, [id]);

  return (
    <div className="section">
      <div className="container">
        <div className="blog">
          <h1 className="highlighted">{data.name}</h1>
          <p className="small">{data.createdOn}</p>
          <p className="blog-p">{data.description}</p>
          <Link to="/blogs" className="link link-pri">
            Go Back To Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
