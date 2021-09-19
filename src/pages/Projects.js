import Cards from "../components/Cards";
import data from "../data/data";

const Projects = () => {
  return (
    <div className="section">
      <div className="container box-column">
        <h1 className="highlighted">Browse My Projects</h1>
        <div className="list">
          {data.map((data, id) => {
            return <Cards key={id} data={data} type="2" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
