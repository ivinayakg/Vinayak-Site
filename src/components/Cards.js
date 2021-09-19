import { Link } from "react-router-dom";

const Cards = ({ data, type }) => {
  const typeN = parseInt(type);
  return (
    <div className="cards">
      <h2>{data.name}</h2>
      <p className="small">{data.createdOn}</p>
      {typeN === 2 ? (
        <p>{data.description}</p>
      ) : (
        <p>{data.description.slice(0, 250) + "..."}</p>
      )}
      <div className="link-box">
        {typeN === 2 ? (
          <a
            href={data.link1}
            className="link link-pri"
            target="_blank"
            rel="noreferrer"
          >
            Live Project
          </a>
        ) : (
          <Link to={`/blogs/${data.id}`} className="link link-pri">
            Read More
          </Link>
        )}
        {typeN === 2 && (
          <a
            href={data.link2}
            className="link link-sec"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Cards;
