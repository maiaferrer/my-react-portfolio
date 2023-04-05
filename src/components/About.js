import React from "react";
import aboutMeImg from '../me.jpeg'

export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
       <img src={aboutMeImg} width="200px"></img>
        <div>
          <h1 className="text-5xl font-bold">Hello my name is Maia Ferrer.</h1>
          <p className="py-6">
            My name is Maia and I am a fellow creative based out of Charlotte,
            NC. I am a kinesthetic learner who enjoys building and designing on
            the web. Web development granted me a creative outlet in which I
            have been able to fulfill through innovative debugging, algorithm
            building, and implementing intuitive UI.<br></br>
            On my free time I enjoy being outdoors with my fur babies,
            photography, creating graphic art, and drinking coffee. I am
            currently enrolled in UNC Charlottes Coding Bootcamp and am on the
            path to becoming a FullStack Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
