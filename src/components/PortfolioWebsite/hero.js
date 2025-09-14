import React, { useState, useEffect, useRef } from "react";
import heroStyles from "./hero.module.scss";
import ParticleSystem from "./particles";
import { Typewriter } from "react-simple-typewriter";

function handleImageClick(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function HeroSection(props) {
  const [showFullString, setShowFullString] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const heroRef = useRef(null);

  const roles = [
    "Full Stack Developer",
    "Software Engineer", 
    "React Specialist",
    "Backend Architect"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
      clearInterval(roleInterval);
    };
  }, [roles.length]);

  const words = [
    "Hi,",
    "I'm",
    "Arijit Sarkar 👋",
  ];
  const fullString = words.join(" ");

  const handleLoopDone = () => {
    setShowFullString(true);
    setShowCursor(false); 
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className={heroStyles.section2} 
      id="hero"
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
        '--scroll-y': scrollY,
      }}
    >
      <ParticleSystem />
      
      {/* Enhanced morphing blobs with parallax effect */}
      <div className="morphing-blob" style={{ 
        top: '20%', 
        left: '10%',
        animationDelay: '0s',
        transform: `translateY(${scrollY * 0.2}px)`
      }}></div>
      <div className="morphing-blob" style={{ 
        top: '60%', 
        right: '15%',
        animationDelay: '5s',
        transform: `translateY(${scrollY * -0.15}px)`
      }}></div>
      <div className="morphing-blob" style={{ 
        bottom: '20%', 
        left: '20%',
        animationDelay: '10s',
        transform: `translateY(${scrollY * 0.1}px)`
      }}></div>
      
      <div className={`${heroStyles.hero_gradient_overlay} ${isLoaded ? heroStyles.loaded : ''}`}></div>
      
      {/* Main content container */}
      <div className={heroStyles.hero_container}>
        <div className={heroStyles.content_wrapper} data-aos="fade-up" data-aos-duration="1000">
          
          {/* Left side - Main content */}
          <div className={heroStyles.main_content} data-aos="fade-right" data-aos-delay="200">
            
            {/* Title section with enhanced design */}
            <div className={`${heroStyles.title_section} glass-morphism`}>
              <div className={heroStyles.greeting_container}>
                <span className={heroStyles.greeting_text}>Hello, World! 👋</span>
              </div>
              
              <h1 className={`${heroStyles.hero_title} holographic-text`}>
                {!showFullString ? (
                  <Typewriter
                    words={[fullString]}
                    loop={1}
                    cursor={showCursor}
                    cursorStyle="|"
                    typeSpeed={120}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleLoopDone}
                  />
                ) : (
                  <span className="text-reveal">
                    {fullString.split('').map((char, index) => (
                      <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
                    ))}
                  </span>
                )}
              </h1>
              
              {/* Animated role display */}
              <div className={heroStyles.role_container}>
                <span className={heroStyles.role_prefix}>I'm a </span>
                <span className={`${heroStyles.role_text} gradient-text`}>
                  {roles[currentRoleIndex]}
                </span>
              </div>
              
              <div className={heroStyles.title_glow}></div>
            </div>
            
            {/* Enhanced description */}
            <div className={`${heroStyles.description_section} neumorphism`}>
              <p className={heroStyles.description_text}>
                Passionate about creating <span className="holographic-text">innovative digital experiences</span> 
                with <span className="holographic-text">4+ years</span> of expertise in full-stack development. 
                I specialize in building <span className="holographic-text">scalable applications</span> using 
                modern technologies and best practices.
              </p>
              
              {/* Enhanced tech stack */}
              <div className={heroStyles.tech_showcase}>
                <h6 className={heroStyles.tech_label}>Tech Stack</h6>
                <div className={heroStyles.tech_badges}>
                  <span className={`${heroStyles.tech_badge} skill-orb`}>React</span>
                  <span className={`${heroStyles.tech_badge} skill-orb`}>Node.js</span>
                  <span className={`${heroStyles.tech_badge} skill-orb`}>TypeScript</span>
                  <span className={`${heroStyles.tech_badge} skill-orb`}>Next.js</span>
                  <span className={`${heroStyles.tech_badge} skill-orb`}>MongoDB</span>
                  <span className={`${heroStyles.tech_badge} skill-orb`}>AWS</span>
                </div>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className={heroStyles.cta_section}>
              <button 
                className={`${heroStyles.primary_btn} enhanced-button magnetic-element`}
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <div className={heroStyles.btn_glow}></div>
              </button>
              
              <button 
                className={`${heroStyles.secondary_btn} glass-morphism magnetic-element`}
                onClick={() => window.open('/assets/Arijit_Sarkar_Resume.pdf', '_blank')}
              >
                <span>Download Resume</span>
                <svg className={heroStyles.download_icon} viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>

            {/* Enhanced info cards */}
            <div className={`${heroStyles.info_grid} masonry-grid`}>
              <div className={`${heroStyles.info_card} glass-morphism magnetic-element`}>
                <div className={heroStyles.info_icon_wrapper}>
                  <img
                    className={heroStyles.info_icon}
                    src={"/assets/1b9b84ef77a32d5c637b1b83d4527ca8.svg"}
                    alt="location"
                  />
                </div>
                <div className={heroStyles.info_content}>
                  <h6 className={heroStyles.info_label}>Based in</h6>
                  <p className={heroStyles.info_text}>Hyderabad, India</p>
                </div>
                <div className={heroStyles.card_glow}></div>
              </div>

              <div className={`${heroStyles.info_card} glass-morphism magnetic-element energy-field`}>
                <div className={heroStyles.info_icon_wrapper}>
                  <img
                    className={heroStyles.status_icon}
                    src={"/assets/806521f781ebe859ba9560e35f3a73ce.svg"}
                    alt="status"
                  />
                  <div className={heroStyles.pulse_animation}></div>
                </div>
                <div className={heroStyles.info_content}>
                  <h6 className={heroStyles.info_label}>Status</h6>
                  <p className={heroStyles.info_text}>Available for projects</p>
                </div>
              </div>

              <div className={`${heroStyles.social_card} glass-morphism magnetic-element`}>
                <div className={heroStyles.social_icons}>
                  <img
                    className={`${heroStyles.social_icon} magnetic-element`}
                    src={"/assets/f28ac2030f6d94e9fe93f6d04a22f3a4.svg"}
                    alt="github"
                    onClick={() => handleImageClick("https://github.com/R4J-debug")}
                  />
                  <img
                    className={`${heroStyles.social_icon} magnetic-element`}
                    src={"/assets/b19e878c1784478c006f14a857f1ce0b.svg"}
                    alt="linkedin"
                    onClick={() => handleImageClick("https://linkedin.com/in/arijit-sarkar")}
                  />
                </div>
                <span className={heroStyles.social_label}>Let's Connect</span>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced image section */}
          <div className={`${heroStyles.image_section} floating-card`} data-aos="fade-left" data-aos-delay="400">
            <div className={heroStyles.image_container_enhanced}>
              <div className={heroStyles.image_frame}>
                <img
                  className={heroStyles.hero_image}
                  src={"/assets/hero_picture.jpeg"}
                  alt="Arijit Sarkar"
                />
                <div className={heroStyles.image_overlay}></div>
                <div className={heroStyles.image_glow}></div>
              </div>
              
              {/* Achievement badges */}
              <div className={heroStyles.achievement_badges}>
                <div className={`${heroStyles.achievement_badge} skill-orb`}>
                  <span className={heroStyles.achievement_number}>4+</span>
                  <span className={heroStyles.achievement_label}>Years Exp</span>
                </div>
                <div className={`${heroStyles.achievement_badge} skill-orb`}>
                  <span className={heroStyles.achievement_number}>50+</span>
                  <span className={heroStyles.achievement_label}>Projects</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={heroStyles.scroll_indicator} onClick={() => scrollToSection('about')}>
          <div className={heroStyles.scroll_text}>Scroll to explore</div>
          <div className={heroStyles.scroll_arrow}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
