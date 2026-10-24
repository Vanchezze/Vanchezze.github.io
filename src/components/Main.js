import React from 'react';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Projects from './projects/projects';
import Education from './education/education';
import Footer from './footer/footer';

import Data from '../data/data.json';

class AppComponent extends React.Component {
  render() {
    return (
      <section>
        <div className="v-container">
          <h1 className="v-container__headline">Ivan Rudiuk</h1>
          <span className="v-container__sub-headline">
            <span className="v-container__sub-headline-part">
              Product Engineer · Full-Stack
            </span>
            <span className="v-container__sub-headline-sep"> · </span>
            <span className="v-container__sub-headline-part">
              Front-End Depth · Production AI
            </span>
          </span>

          <p className="v-container__body">{Data.summary}</p>

          <div className="v-container__block-wide">
            <h3 className="v-container__headline">Selected Results</h3>
            <div className="v-results">
              {Data.selectedResults.map((result, i) => (
                <div className="v-results__item" key={i}>
                  <span className="v-results__metric">{result.metric}</span>
                  <p className="v-results__text">{result.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Skills data={Data.keySkills} />
          <Experience list={Data.experiences} />
          <Projects list={Data.projects} />
          <Experience
            list={[]}
            earlierExperience={Data.earlierExperience}
            showWork={false}
          />
          <Education data={Data.education} />
        </div>

        <Footer />
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
