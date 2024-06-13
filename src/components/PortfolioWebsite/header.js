import React from "react";

import headerSectionStyles from "./header.module.scss";

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const handleDownload = () => {
  // URL of the file to be downloaded
  const fileUrl =
    "https://docs.google.com/document/d/1tGlGCJtBRujMD1ji8lEPzwa2SDf5ICjI/edit?usp=drive_link&ouid=111602828605361600678&rtpof=true&sd=true";

  // Create an invisible link element
  const link = document.createElement("a");
  link.href = fileUrl;

  // Append the link to the document body and click it programmatically
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link element
  document.body.removeChild(link);
};

function renderHeaderSection(props) {
  return (
    <section className={headerSectionStyles.aboutSection}>
      <div className={headerSectionStyles.flex_row}>
        <h1 className={headerSectionStyles.title}>{`arijit`}</h1>
        <div className={headerSectionStyles.flex_row1}>
          <button
            className={headerSectionStyles.highlight}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className={headerSectionStyles.highlight}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <button
            className={headerSectionStyles.downloadButton}
            onClick={handleDownload}
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default renderHeaderSection;
