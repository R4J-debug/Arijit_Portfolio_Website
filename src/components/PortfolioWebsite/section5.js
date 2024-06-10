import React from "react";

import section5Styles from "./section5.module.scss";

function renderSection5(props) {
  return (
    <section className={section5Styles.section5}>
      <div className={section5Styles.flex_col}>
        <div className={section5Styles.flex_col1}>
          <div className={section5Styles.flex_col2}>
            <button className={section5Styles.btn}>Experience</button>
            <h3 className={section5Styles.subtitle}>
              Here is a quick summary of my most recent experiences:
            </h3>
          </div>

          <div className={section5Styles.group}>
            <div
              className={section5Styles.content_box}
              style={{
                "--src": `url(${"/assets/a872dd9a940ea0dcefdb3f1392b29a5b.svg"})`,
              }}
            />

            <div className={section5Styles.flex_row}>
              <div className={section5Styles.group1}>
                <h3 className={section5Styles.subtitle1}>
                  Software Engineer 2 &rarr; Stellantis NV Pvt. Ltd.
                </h3>
                <h5 className={section5Styles.highlight2}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Developed and maintained responsive web
                        applications using HTML, CSS, JavaScript, and React ,
                        applied SEO principles for better website rating and
                        search score.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Worked in the Product teams of Maserati and led
                        the development of dynamic user interfaces with React,
                        enhancing user engagement and satisfaction of more than
                        200000+ clients.
                      </td>
                    </tr>
                  </table>
                </h5>
                {/* <h5 className={section5Styles.highlight21}>
                  Building Next-Gen HCM Platform for all types of Businesses.
                </h5> */}
              </div>
              <h5 className={section5Styles.highlight4}>
                <b>Oct 2023 - Present</b>
              </h5>
            </div>
          </div>
        </div>

        <div className={section5Styles.flex_col4}>
          <div className={section5Styles.group1}>
            <div
              className={section5Styles.content_box1}
              style={{
                "--src": `url(${"/assets/b7b1a31a27f83bfc803a6c85066758c6.svg"})`,
              }}
            />

            <div className={section5Styles.flex_row1}>
              <div className={section5Styles.group2}>
                <h3 className={section5Styles.subtitle1}>
                  Software Engineer 1 &rarr; Stellantis Pvt. Ltd.
                </h3>
                <h5 className={section5Styles.highlight22}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Implemented client-specific configuration
                        screens, reducing implementation time by 80% and
                        increasing client satisfaction by 25%.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Collaborated with designers to create visually
                        appealing and user-friendly web pages, enhancing overall
                        user experience.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Utilized React to develop dynamic and
                        interactive UI components, improving user engagement by
                        25%.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Applied Agile methodologies to manage tasks and
                        deliver features incrementally, contributing to improved
                        team efficiency.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>

              <h5 className={section5Styles.highlight41}>
                <b>Oct 2021 - Sep 2023</b>
              </h5>
            </div>
          </div>

          <div className={section5Styles.group1}>
            <div
              className={section5Styles.content_box2}
              style={{
                "--src": `url(${"/assets/95553405fd56f1dfc958b21d8a055f47.svg"})`,
              }}
            />

            <div className={section5Styles.flex_row1}>
              <div className={section5Styles.flex_col6}>
                <h3 className={section5Styles.subtitle1}>
                  Front End Intern &rarr; Anon Wellness
                </h3>
                <h5 className={section5Styles.highlight24}>
                  <table>
                    <tr>
                      <td>
                        &raquo; Assisted in the development of web applications using HTML, CSS, and JavaScript.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Collaborated with senior developers to implement responsive design principles, ensuring compatibility across multiple devices.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        &raquo; Participated in code reviews and contributed to improving code quality and performance.
                      </td>
                    </tr>
                  </table>
                </h5>
              </div>

              <h5 className={section5Styles.highlight42}>
                <b>Jun 2021 - Oct 2021</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection5;
