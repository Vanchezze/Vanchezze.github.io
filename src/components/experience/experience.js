import React from 'react';

class Experience extends React.Component {
  render() {
    const experience = this.props.list.map((item, index) => {
      return (
        <div className="v-container__experience" key={index}>
          <div className="v-container__experience-block v-container__experience-block--lead">
            <span className="v-container__experience-role">
              <strong>{item.position}</strong>
            </span>
            <span className="v-container__experience-date">{item.date}</span>
          </div>

          <div className="v-container__experience-block">
            <span className="v-container__experience-company">
              {item.company} - {item.location}
            </span>
          </div>

          <div className="v-container__experience-block">
            <p className="v-container__experience-description">
              {item.description}
            </p>
            <ul className="v-container__experience-list">
              {item.duties.map((duty, i) => {
                return (
                  <li
                    className="v-container__experience-list-item"
                    key={`${index}-${i}`}
                  >
                    {duty}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <div className="v-container__experience-block">
            <span className="v-container__experience-environment">Environment:</span>
            <ul className="v-container__experience-list">
              <li className="v-container__experience-list-item">{item.environment}</li>
            </ul>
          </div> */}
        </div>
      );
    });

    const earlierExperience = this.props.earlierExperience.map(
      (item, index) => {
        return (
          <div
            className="v-container__experience v-container__experience--narrow"
            key={index}
          >
            <div className="v-container__experience-block v-container__experience-block--lead">
              <span className="">
                <strong>
                  {item.position} — {item.company}
                  {item.location ? `, ${item.location}` : ''} ({item.date})
                </strong>
              </span>
            </div>

            <div className="v-container__experience-block v-container__experience-block--narrow">
              <p className="">{item.description}</p>
            </div>
          </div>
        );
      }
    );

    return (
      <>
        {experience.length > 0 && (
          <div className="v-container__block-wide">
            <h3 className="v-container__headline">Work Experience</h3>
            {experience}
          </div>
        )}
        {earlierExperience.length > 0 && (
          <div className="v-container__block-wide">
            <h3 className="v-container__headline">Earlier Experience</h3>
            {earlierExperience}
          </div>
        )}
      </>
    );
  }
}

Experience.defaultProps = {
  list: [],
  earlierExperience: []
};

export default Experience;
