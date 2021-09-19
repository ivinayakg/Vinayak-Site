import Cards from "../components/Cards";
import blogs from "../data/blogs";

const Blogs = () => {
  return (
    <div className="section">
      <div className="container box-column">
        <h1 className="highlighted">My Blogs</h1>
        <div className="list">
          {blogs.map((blog, id) => {
            return <Cards key={id} data={blog} type="1" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
