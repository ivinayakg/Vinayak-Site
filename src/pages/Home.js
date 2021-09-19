const Home = () => {
  return (
    <>
      <div className="section" id="hero">
        <div className="container reverse">
          <div className="content">
            <h1>
              Hi, I am <span className="highlighted">Vinayak Goyal</span>
            </h1>
            <p>I'm a Web Developer</p>
          </div>
          <img src="images/Header.svg" alt="decoration" />
        </div>
      </div>

      <div className="section ow">
        <div className="container reverse reverse-row">
          <div className="content">
            <h2>
              <span className="highlighted">Technologies</span> I Know
            </h2>
            <p>HTML5, CSS3, Javascript, React, Tailwind CSS</p>
          </div>
          <img
            src="images/technologies.svg"
            alt="decoration"
            className="hide"
          />
        </div>
      </div>

      <div className="section">
        <div className="container reverse ">
          <div className="content">
            <h2>
              My <span className="highlighted">Projects</span>
            </h2>
            <p>
              Here you can watch out all my projects but also you can see it in
              action with <span className="highlighted">live execution</span>
            </p>
            <a className="link link-pri" href="/">
              Browse Projects
            </a>
          </div>
          <img src="images/projects.svg" alt="decoration" />
        </div>
      </div>

      <div className="section ow">
        <div className="container reverse-row">
          <div className="content">
            <h2>
              My <span className="highlighted">Blogs</span>
            </h2>
            <p>Take a look at my blogs here, they are very simple</p>
            <a className="link link-sec" href="/">
              My Blogs
            </a>
          </div>
          <img src="images/blogs.svg" alt="decoration" className="hide" />
        </div>
      </div>
    </>
  );
};

export default Home;
