import React, { useState, useEffect } from "react";
import section3Styles from "./section3.module.scss";

const quickFacts = [
  { icon: "🎓", text: "B.Tech. in Computer Engineering" },
  { icon: "💻", text: "Full-stack Enthusiast" },
  { icon: "📚", text: "Avid learner" },
  { icon: "🚀", text: "Aspiring indie hacker" }
];

const technologies = [
  "React.js", "Next.js", "Node.js", "Express.js", "TypeScript", 
  "Docker", "AWS", "MongoDB", "PostgreSQL", "Git", "Figma", "TailwindCSS"
];

function AboutSection(props) {
  const [isInView, setIsInView] = useState(false);
  const [countUp, setCountUp] = useState({ experience: 0, projects: 0, technologies: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
      // Animate counters
      const targetValues = { experience: 4, projects: 50, technologies: 15 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCountUp({
          experience: Math.floor(targetValues.experience * progress),
          projects: Math.floor(targetValues.projects * progress),
          technologies: Math.floor(targetValues.technologies * progress)
        });

        if (currentStep >= steps) {
          clearInterval(counterInterval);
          setCountUp(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(counterInterval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={section3Styles.section3} id="about">
      <div className="morphing-blob" style={{ top: '20%', left: '5%' }}></div>
      <div className="morphing-blob" style={{ bottom: '10%', right: '10%' }}></div>
      
      <div className={section3Styles.container}>
        <div className={section3Styles.header_section} data-aos="fade-up">
          <button className={`${section3Styles.section_btn} neumorphism magnetic-element`}>
            <span className={section3Styles.btn_icon}>👨‍💻</span>
            About me
          </button>
          <h2 className={`${section3Styles.section_title} holographic-text`}>
            Curious about what I've been up to lately? Here you have it:
          </h2>
        </div>

        <div className={section3Styles.content_grid}>
          <div className={`${section3Styles.image_section} floating-card`} data-aos="fade-right" data-aos-delay="200">
            <div className={section3Styles.image_container}>
              <img
                className={section3Styles.about_image}
            src={"/assets/a71715c7ff19a4843ec60462c47792ad.png"}
                alt="About Arijit"
              />
              <div className={section3Styles.image_overlay}></div>
              <div className={section3Styles.image_glow}></div>
            </div>
            
            <div className={`${section3Styles.stats_grid} glass-morphism`}>
              <div className={section3Styles.stat_item}>
                <span className={section3Styles.stat_number}>{countUp.experience}+</span>
                <span className={section3Styles.stat_label}>Years Experience</span>
              </div>
              <div className={section3Styles.stat_item}>
                <span className={section3Styles.stat_number}>{countUp.projects}+</span>
                <span className={section3Styles.stat_label}>Projects</span>
              </div>
              <div className={section3Styles.stat_item}>
                <span className={section3Styles.stat_number}>{countUp.technologies}+</span>
                <span className={section3Styles.stat_label}>Technologies</span>
              </div>
            </div>
          </div>

          <div className={section3Styles.content_section} data-aos="fade-left" data-aos-delay="400">
            <div className={`${section3Styles.main_content} glass-morphism`}>
              <div className={section3Styles.intro_text}>
                <p className={section3Styles.highlight_text}>
                  Hello! I'm a passionate and versatile <span className="holographic-text">Full Stack Developer</span> with a robust background in both front-end and back-end technologies who specializes in <span className="holographic-text">React.js & Node.js</span> ecosystem.
                </p>
                
                <p className={section3Styles.description_text}>
                  I am very enthusiastic about bringing the technical and visual aspects of digital products to life. <span className="holographic-text">User experience</span>, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                </p>

                <p className={section3Styles.description_text}>
                  I began my journey as a Software Engineer in 2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies. Now, with <span className="holographic-text">4 years</span> of experience, I'm building cutting-edge web applications using modern technologies.
                </p>

                <p className={section3Styles.description_text}>
                  I am very much a progressive thinker and enjoy working on products end to end, from <span className="holographic-text">ideation all the way to deployment</span>.
                </p>
              </div>

              <div className={section3Styles.tech_showcase}>
                <h4 className={section3Styles.tech_title}>Technologies I work with:</h4>
                <div className={section3Styles.tech_tags}>
                  {technologies.map((tech, index) => (
                  <span
                      key={index} 
                      className={`${section3Styles.tech_tag} skill-orb magnetic-element`}
                      data-aos="fade-up"
                      data-aos-delay={500 + (index * 50)}
                    >
                      {tech}
                  </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${section3Styles.facts_grid} masonry-grid`}>
              {quickFacts.map((fact, index) => (
                <div 
                  key={index} 
                  className={`${section3Styles.fact_card} glass-morphism magnetic-element`}
                  data-aos="fade-up"
                  data-aos-delay={600 + (index * 100)}
                >
                  <span className={section3Styles.fact_icon}>{fact.icon}</span>
                  <span className={section3Styles.fact_text}>{fact.text}</span>
                </div>
              ))}
            </div>

            <div className={`${section3Styles.cta_section} energy-field`} data-aos="fade-up" data-aos-delay="800">
              <p className={section3Styles.cta_text}>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying music festivals. 
                <span className="holographic-text"> I'm available for freelance work</span>, so feel free to reach out!
              </p>
                  <a
                    href="https://github.com/R4J-debug"
                    target="_blank"
                    rel="noopener noreferrer"
                className={`${section3Styles.github_link} magnetic-element`}
              >
                <span className={section3Styles.link_icon}>🔗</span>
                Follow me on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
