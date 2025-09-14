import React, { useState, useEffect } from 'react';
import section4Styles from './section4.module.scss';

const skills = [
  { name: 'JavaScript', icon: '/assets/b19e878c1784478c006f14a857f1ce0b.svg', level: 95, color: '#f7df1e' },
  { name: 'React', icon: '/assets/c4ddb5c1841012e176373092695065ae.svg', level: 92, color: '#61dafb' },
  { name: 'Node.js', icon: '/assets/6062d4f1cc411780d7ae13252979c6b1.svg', level: 88, color: '#68a063' },
  { name: 'TypeScript', icon: '/assets/b19e878c1784478c006f14a857f1ce0b.svg', level: 85, color: '#3178c6' },
  { name: 'Next.js', icon: '/assets/c4ddb5c1841012e176373092695065ae.svg', level: 90, color: '#000000' },
  { name: 'Express.js', icon: '/assets/9a8789ae95a4a94d9d6d829c46d112f0.svg', level: 87, color: '#259dff' },
  { name: 'Tailwind CSS', icon: '/assets/7446d1274ef810c6fd0249dfa87326e4.svg', level: 93, color: '#38bdf8' },
  { name: 'Docker', icon: '/assets/10d36009610162a28eca956c33fcd46f.svg', level: 80, color: '#2496ed' },
  { name: 'Git', icon: '/assets/f811ad394b23c69522b7d6ddf815f7b4.svg', level: 85, color: '#f1502f' },
  { name: 'Java', icon: '/assets/33be7db500a0aa13ceda6d9cc997f925.svg', level: 82, color: '#ed8b00' },
  { name: 'MySQL', icon: '/assets/mysql_logo.png', level: 83, color: '#00758f' },
  { name: 'NestJS', icon: '/assets/b19e878c1784478c006f14a857f1ce0b.svg', level: 88, color: '#e0234e' }
];

function SkillsSection(props) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillProgress, setSkillProgress] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = {};
      skills.forEach(skill => {
        newProgress[skill.name] = skill.level;
      });
      setSkillProgress(newProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={section4Styles.section4} id="skills">
      <div className="morphing-blob" style={{ top: '10%', right: '10%' }}></div>
      <div className="morphing-blob" style={{ bottom: '20%', left: '15%' }}></div>
      
      <div className={section4Styles.container}>
        <div className={section4Styles.header_section} data-aos="fade-up" data-aos-duration="800">
          <button className={`${section4Styles.section_btn} neumorphism magnetic-element`}>
            <span className={section4Styles.btn_icon}>⚡</span>
            Skills
          </button>
          <h2 className={`${section4Styles.section_title} holographic-text`}>
            The skills, tools and technologies I am really good at
          </h2>
        </div>

        <div className={`${section4Styles.skills_grid} masonry-grid`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${section4Styles.skill_card} glass-morphism magnetic-element ${
                hoveredSkill === skill.name ? section4Styles.hovered : ''
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ '--skill-color': skill.color }}
            >
              <div className={section4Styles.skill_icon_container}>
                <img
                  className={`${section4Styles.skill_icon} skill-orb`}
                  src={skill.icon}
                  alt={skill.name}
                />
                <div className={section4Styles.skill_glow}></div>
              </div>
              
              <div className={section4Styles.skill_info}>
                <h4 className={section4Styles.skill_name}>{skill.name}</h4>
                <div className={section4Styles.skill_progress_container}>
                  <div 
                    className={section4Styles.skill_progress_bar}
                    style={{ 
                      width: `${skillProgress[skill.name] || 0}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                    }}
                  ></div>
                  <span className={section4Styles.skill_percentage}>
                    {skillProgress[skill.name] || 0}%
                  </span>
                </div>
              </div>
              
              <div className={section4Styles.skill_particles}>
                <div className={section4Styles.particle}></div>
                <div className={section4Styles.particle}></div>
                <div className={section4Styles.particle}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${section4Styles.floating_skills}`}>
          <div className={`${section4Styles.floating_skill} skill-orb`}>💡</div>
          <div className={`${section4Styles.floating_skill} skill-orb`}>🚀</div>
          <div className={`${section4Styles.floating_skill} skill-orb`}>⭐</div>
          <div className={`${section4Styles.floating_skill} skill-orb`}>🔥</div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
