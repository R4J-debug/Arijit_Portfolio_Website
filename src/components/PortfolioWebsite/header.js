import React, { useState, useEffect } from "react";
import headerSectionStyles from "./header.module.scss";

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const handleDownload = () => {
  // 📄 UPDATE THIS: Change the filename to match your new resume
  const fileUrl = "/assets/Arijit_Sarkar_Resume.pdf"; // ← Change this to your new file name
  const link = document.createElement("a");
  link.href = fileUrl;
  // 📥 UPDATE THIS: Change the download name if desired
  link.download = "Arijit_Sarkar_Resume.pdf"; // ← Change this to your preferred download name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function HeaderSection(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleSectionChange = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    window.addEventListener('mousemove', handleMouseMove);
    handleSectionChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <section className={`${headerSectionStyles.aboutSection} ${isScrolled ? headerSectionStyles.scrolled : ''}`}>
      <div className="morphing-blob" style={{ top: '-200px', left: '-200px' }}></div>
      
      <div className={headerSectionStyles.flex_row}>
        <div className={`${headerSectionStyles.logo_container} magnetic-element`}>
          <h1 className={`${headerSectionStyles.title} holographic-text text-reveal`}>
            <span>{"</"}</span>
            <span>A</span>
            <span>r</span>
            <span>i</span>
            <span>j</span>
            <span>i</span>
            <span>t</span>
            <span>{">"}</span>
          </h1>
          <div className={headerSectionStyles.logo_glow}></div>
        </div>

        <nav className={`${headerSectionStyles.navigation} glass-morphism`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`${headerSectionStyles.nav_item} magnetic-element ${
                activeSection === item.id ? headerSectionStyles.active : ''
              }`}
              onClick={() => scrollToSection(item.id)}
              data-aos="fade-down"
              data-aos-delay={index * 100}
            >
              <span className={headerSectionStyles.nav_icon}>{item.icon}</span>
              <span className={headerSectionStyles.nav_label}>{item.label}</span>
              <div className={headerSectionStyles.nav_indicator}></div>
            </button>
          ))}
          
          <button
            className={`${headerSectionStyles.resume_button} energy-field magnetic-element`}
            onClick={handleDownload}
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <span className={headerSectionStyles.resume_icon}>📄</span>
            <span>Resume</span>
            <div className={headerSectionStyles.button_glow}></div>
          </button>
        </nav>

        <div 
          className={`${headerSectionStyles.cursor_follower}`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>
    </section>
  );
}

export default HeaderSection;
