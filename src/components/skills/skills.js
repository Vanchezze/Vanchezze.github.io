import React from 'react';
import Icon from '../../icons/';


class Skills extends React.Component {
  render() {
    const keySkills = this.props.data.map((skill, index) => {
      return (
        <div className="v-container__skill" key={index}>
          <Icon name={skill.icon} className={skill.className}/>
          <span className="v-container__skill-name">{skill.name}</span>
        </div>
      )
    })

    return (
      <div className="v-container__block-wide">
        <h2 className="v-container__headline">Key Skills</h2>
        <div className="v-container__skills">
          {keySkills}
        </div>
      </div>
    );
  }
}

Skills.defaultProps = {
  data: []
};

export default Skills;