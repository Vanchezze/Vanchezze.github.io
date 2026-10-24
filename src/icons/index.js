import React from 'react';

import Css3 from './css3';
import Html5 from './html5';
import Js from './js';
import Vue from './vue';
import IconReact from './react';
import IconNode from './node';
import MongoDB from './mongo';
import Ionic from './ionic';
import Sketch from './sketch';
import Photoshop from './photoshop';
import Angular from './angular';

import Fb from './fb';
import LinkedIn from './linkedIn';
import GitHub from './github';
import Google from './google';
import Instagram from './instagram';

import Typescript from './typescript';
import Python from './python';
import Next from './next';
import GraphQl from './graphql';
import PostgreSQL from './postgresql';
import Terraform from './terraform';
import GitHubCircle from './githubCircle';
import MailCircle from './mailCircle';

const Icon = props => {
  switch (props.name) {
    case 'css3':
      return <Css3 {...props} />;
    case 'html5':
      return <Html5 {...props} />;
    case 'js':
      return <Js {...props} />;
    case 'vue':
      return <Vue {...props} />;
    case 'react':
      return <IconReact {...props} />;
    case 'node':
      return <IconNode {...props} />;
    case 'mongoDB':
      return <MongoDB {...props} />;
    case 'ionic':
      return <Ionic {...props} />;
    case 'sketch':
      return <Sketch {...props} />;
    case 'photoshop':
      return <Photoshop {...props} />;
    case 'angular':
      return <Angular {...props} />;
    case 'fb':
      return <Fb {...props} />;
    case 'linkedIn':
      return <LinkedIn {...props} />;
    case 'gitHubCircle':
      return <GitHubCircle {...props} />;
    case 'mailCircle':
      return <MailCircle {...props} />;
    case 'gitHub':
      return <GitHub {...props} />;
    case 'google':
      return <Google {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'ts':
      return <Typescript {...props} />;
    case 'python':
      return <Python {...props} />;
    case 'next':
      return <Next {...props} />;
    case 'graphql':
      return <GraphQl {...props} />;
    case 'postgresql':
      return <PostgreSQL {...props} />;
    case 'terraform':
      return <Terraform {...props} />;
    default:
      return;
  }
};

export default Icon;
