import React from 'react';

class Education extends React.Component {
  render() {
    const educationList = this.props.data.map((education, i) => {
      return (
        <div className="v-container__education-item" key={i}>
          <span>{education}</span>
        </div>
      )
    })

    return (
      <div className="v-container__block-wide">
        <h3 className="v-container__headline">Education</h3>
        {educationList}
      </div>
    );
  }
}

Education.defaultProps = {
  data: []
};

export default Education;