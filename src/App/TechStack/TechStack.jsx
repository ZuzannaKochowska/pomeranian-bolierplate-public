import './styles.css';

import css from '../Images/tech-stack/css.svg';
import Githuub from '../Images/githuub.svg';
import Html from '../Images/html.svg';
import TypeScript from '../Images/ts.svg';
import JavaScript from '../Images/js.svg';
import FireBase from '../Images/tech-stack/firebase.svg';
import React from '../Images/tech-stack/react.svg';
import jira from '../Images/jira 1.png';
import bitbucket from '../Images/tech-stack/bitbucket.svg';
import redux from '../Images/redux.png';
import discord from '../Images/tech-stack/discord.svg';
import vstudio from '../Images/tech-stack/vstudio.svg';
import readmine from '../Images/tech-stack/git.svg';
import git from '../Images/tech-stack/git.svg';

// import { ReactComponent as jira } from '.App/Images/tech-stack/jira1.svg' ;

export const TechStack = () => {
  return (
    <div>
      <h1 className="techstack"> {'<'} TECHSTACK </h1>
      <div className="row1">
        <img src={css} alt="css" />
        <p> css </p>
        <img src={Html} alt="Html" /> <p>html</p>
        <img src={TypeScript} alt="ts" /> <p>type script</p>
        <img src={JavaScript} alt="js" /> <p>java script</p>
        <img src={React} alt="react" />
        <p> react </p>
        <img src={Githuub} alt="GitHub" /> <p>GitHub</p>
        <img src={FireBase} alt="firebase" />
        <p>firebase</p>
      </div>
      <div className="row2">
        <img src={jira} alt="jira" /> <p> jira </p>
        <img src={bitbucket} alt="bitbucket" /> <p> bitbucket </p>
        <img src={redux} alt="redux" /> <p> redux </p>
        <img src={discord} alt="discord" /> <p> discord </p>
        <img src={vstudio} alt="vstudio" /> <p> v studio </p>
        <img src={readmine} alt="readmine" /> <p> readmine </p>
        <img src={git} alt="git" /> <p> GIT </p>
      </div>
    </div>
  );
};
export default TechStack;
