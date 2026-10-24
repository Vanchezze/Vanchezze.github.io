import React from 'react';

const Projects = ({ list }) => (
  <div className="v-container__block-wide">
    <h3 className="v-container__headline">Independent Projects</h3>
    {list.map((item, index) => (
      <div className="v-container__experience" key={index}>
        <div className="v-container__experience-block v-container__experience-block--lead">
          <span className="v-container__experience-role">
            <strong>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </strong>
          </span>
          <span className="v-container__experience-date">{item.date}</span>
        </div>
        <div className="v-container__experience-block">
          <p className="v-container__experience-description">
            {item.description}
          </p>
          {item.duties.length > 0 && (
            <ul className="v-container__experience-list">
              {item.duties.map((duty, i) => (
                <li className="v-container__experience-list-item" key={i}>
                  {duty}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);

Projects.defaultProps = { list: [] };

export default Projects;
