import React from "react";
import teamllogo from "../Images/team.png";
import ad from '../Images/ad.jpeg'
import ak from '../Images/ak.jpeg'
import yv from '../Images/yv.jpeg'
import rs from '../Images/rs.jpeg'
import jd from '../Images/jd.jpeg'


const Team = () => {
  return (
    <>
    <hr></hr>
      <div className="tt">
        <div className="shtth">
          <p id="sht">SAY HELLO TO</p>
          <h2 id="th"> The Team</h2>
          
        </div>

        <div className="tl">
          <img src={teamllogo} alt="logo of team" />
        </div>
      </div>
      <div className="team-main">
        <div className="tm" id="joydeep">
          <div>
            <img src={rs} alt="logo of team" />
          </div>
          <div className="tm-in-div">
            <div>
              <p>
                <u>JOYDEEP KUNDU:</u><br></br>A frontend developer is a crucial member of a web development team responsible for creating the user interface (UI) and ensuring an engaging and user-friendly experience for website or web application users.
              </p>
            </div>
            <div>
              <h6>FRONTEND DEVELOPER</h6>
            </div>
          </div>
        </div>
        <div className="tm" id="rishav">
          <div>
            <img src={jd} alt="logo of team" />
          </div>
          <div className="tm-in-div">
            <div>
              <p>
                <u>RISHAV KUMAR:</u><br></br>
                A graphic designer is a creative professional who specializes in visual communication, using various design elements and tools to convey messages, ideas, or information visually. Graphic designers work across a wide range of mediums, including print, digital, and multimedia, to create visually compelling and impactful designs
              </p>
            </div>
            <div>
              <h6>UI AND GRAPHICS DESIGNER</h6>
            </div>
          </div>
        </div>
        <div className="tm" id="yuvraj">
          <div>
            <img src={ad} alt="logo of team" />
          </div>
          <div className="tm-in-div">
            <div>
              <p>
               <u>YUVRAJ RAI:</u><br></br>A UI (User Interface) designer is a professional responsible for designing the visual elements of a digital product, such as websites, mobile apps, software applications, and other interactive interfaces. Their primary focus is on creating an intuitive, aesthetically pleasing, and user-friendly experience for end-users.
              </p>
            </div>
            <div>
              <h6>UI DESIGNER</h6>
            </div>
          </div>
        </div>
        <div className="tm" id="akash">
          <div>
            <img src={ak} alt="logo of team" />
          </div>
          <div className="tm-in-div">
            <div>
              <p>
                <u>ADNAN ALI</u><br></br>
                backend developer and<br></br>
                Mobile app development is the process of creating software applications specifically designed to run on mobile devices, such as smartphones and tablets. Mobile apps are versatile tools that can serve various purposes, from entertainment and social networking to productivity and e-commerce
              </p>
            </div>
            <div>
              <h6>BACKEND AND MOBILE APP DESIGNER</h6>
            </div>
          </div>
        </div>
        <div className="tm" id="adnan">
          <div>
            <img src={yv} alt="logo of team" />
          </div>
          <div className="tm-in-div">
            <div>
              <p>
               <u>AKASH ROY:</u> <br></br>
                backend developer and<br></br>
                Photography is both an art and a science that involves capturing images using light and various optical and electronic devices. Photographers use their creative skills, technical knowledge, and equipment to capture moments, tell stories, and convey emotions through images
              </p>
            </div>
            <div>
              <h6>PHOTOGRAPHER AND BACKEND DEVELOPER</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
