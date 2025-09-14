import React, { useState, useEffect } from "react";
import section5Styles from "./section5.module.scss";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Eternity UK",
    location: "Remote",
    period: "Nov 2024 - Present",
    type: "Full-time",
    logo: "🎯",
    color: "#3b82f6",
    achievements: [
      {
        text: "Developed and maintained a comprehensive wedding planning platform using NestJS, TypeScript, and Next.js",
        metric: "10,000+ couples & 5,000+ suppliers"
      },
      {
        text: "Built scalable backend APIs with NestJS and TypeORM, implementing JWT authentication",
        metric: "99.9% uptime, 50,000+ daily requests"
      },
      {
        text: "Implemented payment processing systems using Stripe API for subscription management",
        metric: "$2M+ annual transactions, 99.8% success rate"
      },
      {
        text: "Deployed and managed cloud infrastructure on AWS using ECS, ECR, RDS, and S3",
        metric: "60% faster deployment, 25% cost reduction"
      }
    ],
    technologies: ["NestJS", "TypeScript", "Next.js", "AWS", "Stripe", "TypeORM", "React", "Material-UI"]
  },
  {
    id: 2,
    title: "Product Development Engineer",
    company: "Phenom People Pvt. Ltd.",
    location: "Hyderabad",
    period: "Aug 2024 - Oct 2024",
    type: "Full-time",
    logo: "🚀",
    color: "#22c55e",
    achievements: [
      {
        text: "Worked in flow studio redesign with massive user engagement",
        metric: "2M+ monthly users"
      },
      {
        text: "Optimized application config backend development reducing system failures",
        metric: "0.5% to 0.2% failure reduction"
      }
    ],
    technologies: ["React", "Node.js", "JavaScript", "System Design", "Backend APIs"]
  },
  {
    id: 3,
    title: "Software Engineer 2",
    company: "Stellantis NV Pvt. Ltd.",
    location: "Hyderabad - Hybrid",
    period: "Jul 2022 - May 2024",
    type: "Full-time",
    logo: "🏎️",
    color: "#a855f7",
    achievements: [
      {
        text: "Developed and maintained responsive web applications for automotive industry",
        metric: "SEO optimized, better search ratings"
      },
      {
        text: "Led development of dynamic user interfaces for Maserati product teams",
        metric: "200,000+ client satisfaction"
      },
      {
        text: "Implemented RESTful APIs for seamless frontend-backend communication",
        metric: "40% improvement in data retrieval"
      },
      {
        text: "Utilized Docker for containerization streamlining deployment processes",
        metric: "30% reduction in deployment time"
      }
    ],
    technologies: ["React", "JavaScript", "Java", "Docker", "Git", "RESTful APIs", "HTML", "CSS"]
  },
  {
    id: 4,
    title: "Software Engineer 1",
    company: "Stellantis NV Pvt. Ltd.",
    location: "Hyderabad - Hybrid",
    period: "Oct 2021 - Jul 2022",
    type: "Full-time",
    logo: "🔧",
    color: "#ef4444",
    achievements: [
      {
        text: "Implemented client-specific configuration screens",
        metric: "80% faster implementation, 25% client satisfaction increase"
      },
      {
        text: "Collaborated with designers to create visually appealing web pages",
        metric: "Enhanced overall user experience"
      },
      {
        text: "Developed dynamic and interactive UI components using React",
        metric: "25% improvement in user engagement"
      },
      {
        text: "Applied Agile methodologies for incremental feature delivery",
        metric: "Improved team efficiency"
      }
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Agile", "Git", "UI/UX"]
  },
  {
    id: 5,
    title: "Frontend Intern",
    company: "Anon Wellness",
    location: "Remote",
    period: "Jul 2021 - Oct 2021",
    type: "Internship",
    logo: "💊",
    color: "#06b6d4",
    achievements: [
      {
        text: "Assisted in development of web applications using modern web technologies",
        metric: "HTML, CSS, JavaScript proficiency"
      },
      {
        text: "Implemented responsive design principles for multi-device compatibility",
        metric: "Cross-platform optimization"
      },
      {
        text: "Participated in code reviews and contributed to code quality improvements",
        metric: "Enhanced performance standards"
      }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Code Review"]
  }
];

function ExperienceSection(props) {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className={section5Styles.experience_section} id="experience">
      <div className="morphing-blob" style={{ top: '10%', left: '5%' }}></div>
      <div className="morphing-blob" style={{ bottom: '15%', right: '10%' }}></div>
      
      <div className={section5Styles.container}>
        <div className={section5Styles.header_section} data-aos="fade-up">
          <button className={`${section5Styles.section_btn} neumorphism magnetic-element`}>
            <span className={section5Styles.btn_icon}>💼</span>
            Experience
          </button>
          <h2 className={`${section5Styles.section_title} holographic-text`}>
            My Professional Journey
          </h2>
          <p className={section5Styles.section_subtitle}>
            Here's a timeline of my career progression and key achievements
          </p>
        </div>

        <div className={section5Styles.timeline_container}>
          <div className={section5Styles.timeline_line}></div>
          
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`${section5Styles.experience_card} ${
                activeCard === experience.id ? section5Styles.active : ''
              } glass-morphism floating-card magnetic-element`}
              onMouseEnter={() => handleCardHover(experience.id)}
              onMouseLeave={handleCardLeave}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{
                '--experience-color': experience.color,
                '--mouse-x': mousePosition.x,
                '--mouse-y': mousePosition.y,
              }}
            >
              <div className={section5Styles.timeline_dot}>
                <span className={section5Styles.company_logo}>{experience.logo}</span>
                <div className={section5Styles.dot_glow}></div>
              </div>

              <div className={section5Styles.card_content}>
                <div className={section5Styles.card_header}>
                  <div className={section5Styles.title_section}>
                    <h3 className={section5Styles.job_title}>{experience.title}</h3>
                    <div className={section5Styles.company_info}>
                      <span className={section5Styles.company_name}>{experience.company}</span>
                      <span className={section5Styles.job_type}>{experience.type}</span>
                    </div>
                    <div className={section5Styles.location_period}>
                      <span className={section5Styles.location}>📍 {experience.location}</span>
                      <span className={section5Styles.period}>🗓️ {experience.period}</span>
                    </div>
                  </div>
                  <div className={section5Styles.card_glow}></div>
                </div>

                <div className={section5Styles.achievements_section}>
                  <h4 className={section5Styles.achievements_title}>Key Achievements</h4>
                  <div className={section5Styles.achievements_list}>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className={section5Styles.achievement_item}
                        data-aos="fade-up"
                        data-aos-delay={index * 150 + achievementIndex * 100}
                      >
                        <div className={section5Styles.achievement_bullet}>
                          <div className={section5Styles.bullet_glow}></div>
                        </div>
                        <div className={section5Styles.achievement_content}>
                          <p className={section5Styles.achievement_text}>{achievement.text}</p>
                          <span className={section5Styles.achievement_metric}>{achievement.metric}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={section5Styles.technologies_section}>
                  <h4 className={section5Styles.tech_title}>Technologies Used</h4>
                  <div className={section5Styles.tech_tags}>
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${section5Styles.tech_tag} skill-orb magnetic-element`}
                        data-aos="fade-up"
                        data-aos-delay={index * 150 + techIndex * 50}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={section5Styles.card_effects}>
                  <div className={section5Styles.particle_effect}></div>
                  <div className={section5Styles.particle_effect}></div>
                  <div className={section5Styles.particle_effect}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={section5Styles.experience_stats} data-aos="fade-up" data-aos-delay="600">
          <div className={`${section5Styles.stat_card} glass-morphism`}>
            <span className={section5Styles.stat_number}>4+</span>
            <span className={section5Styles.stat_label}>Years Experience</span>
          </div>
          <div className={`${section5Styles.stat_card} glass-morphism`}>
            <span className={section5Styles.stat_number}>5</span>
            <span className={section5Styles.stat_label}>Companies</span>
          </div>
          <div className={`${section5Styles.stat_card} glass-morphism`}>
            <span className={section5Styles.stat_number}>200K+</span>
            <span className={section5Styles.stat_label}>Users Impacted</span>
          </div>
          <div className={`${section5Styles.stat_card} glass-morphism`}>
            <span className={section5Styles.stat_number}>50+</span>
            <span className={section5Styles.stat_label}>Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
