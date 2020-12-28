import React from 'react';
import './About.css';

const About = (props) => {
    //route props route에서 기본적으로 넘겨준느 props
    console.log(props);
    return (
        <div className="about__container">
            <span>
                Freedom is the freedom to say that two plus two make four.
            </span>
            <span> George </span>
        </div>
    );
};

export default About;
