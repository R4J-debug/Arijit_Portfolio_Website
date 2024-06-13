import React, {useState} from "react";

import heroStyles from "./hero.module.scss";

import { Typewriter } from "react-simple-typewriter";

function handleImageClick(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function RenderSection2(props) {
  const [showFullString, setShowFullString] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const words = [
    "Hi,",
    "my",
    "name",
    "is",
    "Arijit Sarkar 👋",
  ];
  const fullString = words.join(" ");

  const handleLoopDone = () => {
    setShowFullString(true);
    setShowCursor(false); 
  };

  return (
    <section className={heroStyles.section2}>
      <div className={heroStyles.flex_row}>
        <div className={heroStyles.flex_col}>
          <div className={heroStyles.flex_col1}>
            <h1 className={heroStyles.hero_title}>
              {!showFullString ? (
                <Typewriter
                  words={[fullString]}
                  loop={1} // Loop only once
                  cursor={showCursor}
                  cursorStyle=">"
                  typeSpeed={200}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleLoopDone} // Show full string when loop is done
                />
              ) : (
                fullString // Display the full string after the loop is done
              )}
            </h1>
            <h5 className={heroStyles.highlight2}>
              A software engineer with 3+ years of experience designing,
              developing, and maintaining software systems and applications.
              Experience with software development methodologies such as Agile
              and Scrum along with software deployment and maintenance.
            </h5>
          </div>

          <div className={heroStyles.flex_row1}>
            <img
              className={heroStyles.image}
              src={"/assets/1b9b84ef77a32d5c637b1b83d4527ca8.svg"}
              alt="alt text"
            />
            <h5 className={heroStyles.highlight21}>Hyderabad, India</h5>
          </div>

          <div className={heroStyles.flex_row2}>
            <img
              className={heroStyles.image4}
              src={"/assets/806521f781ebe859ba9560e35f3a73ce.svg"}
              alt="alt text"
            />
            <h5 className={heroStyles.highlight21}>
              Available for new projects
            </h5>
          </div>

          <div className={heroStyles.flex_row3}>
            <img
              className={heroStyles.image}
              src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
              alt="alt text"
              onClick={() => handleImageClick("https://github.com/R4J-debug")}
            />
          </div>
        </div>

        <img
          className={heroStyles.image6}
          src={"/assets/hero_picture.jpeg"}
          alt="alt text"
        />
      </div>
    </section>
  );
}

export default RenderSection2;
