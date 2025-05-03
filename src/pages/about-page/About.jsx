import { useEffect } from "react";
import "./About.css";
import image from "./about-images/img1.png";

function About() {
  useEffect(() => {
    document.title = "About Us";
    console.log("About page loaded");
  }, []);

  return (
    <div className="container about-container">
      <h1>About Us</h1>
      <p>Welcome to our website! This is the About page.</p>
      <img src={image} alt="ishkal" className="about-image1" />
    </div>
  );
}

export default About;
