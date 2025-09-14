import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import HeaderSection from "./header.js";
import HeroSection from "./hero.js";
import AboutSection from "./section3.js";
import SkillsSection from "./section4.js";
import ExperienceSection from "./section5.js";
import renderSection6 from "./section6.js";
import renderFooterSection from "./footer.js";

import styles from "./index.module.scss";
import "./advanced-effects.scss";

function PortfolioWebsite(props) {
  return (
    <main className={cn(styles.main, props.className, "portfolio-website")}>
      <div className="cursor-follower"></div>
      <HeaderSection {...props} />
      <HeroSection {...props} />
      <AboutSection {...props} />
      <SkillsSection {...props} />
      <ExperienceSection {...props} />
      {renderSection6(props)}
      {renderFooterSection(props)}
    </main>
  );
}

PortfolioWebsite.propTypes = {
  className: PropTypes.string,
};

export default PortfolioWebsite;
