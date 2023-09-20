import React from "react";
import web from "../Images/web.jpeg"
import mob from "../Images/mobile.jpeg"
import grph from "../Images/graphics.jpeg"
import photo from "../Images/photography.jpeg"


const Services = () => {
  return (
    <>
    <div className='con-d1 '><h1>Our services</h1></div>
      <div className="ser-main">
        <div className="Ser-div">
          <div  className="Ser-div1 l"><h3>Graphic Design Services:</h3></div>
          <div  className="Ser-div2 il"><p>
            Offer services like social media management, search engine
            optimization (SEO), pay-per-click advertising, content marketing,
            and email marketing to help businesses improve their online presence
            and reach.
          </p><img id="i1" src={grph} alt="graphics design"/></div>
  
        </div>
        <div className="Ser-div">
          <div  cl  className="Ser-div3 r"><h3>Mobile App Development:</h3></div>
          <div  className="Ser-div2 ir"><img id='i2' src={mob} alt="graphics design"/><p>
            Develop mobile applications for various platforms (iOS and Android)
            tailored to specific business needs or consumer audiences.
          </p></div>

          
        </div>
        <div className="Ser-div">
          <div  className="Ser-div1 l"><h3>Web Development and Design:</h3></div>
          <div  className="Ser-div2 il" ><p>
            Develop websites and web applications for clients, focusing on
            responsive design, user experience (UX), and functionality.
          </p><img id='i3' src={web} alt="graphics design"/></div>

          <div  className="Ser-div3"></div>
        </div>
        <div className="Ser-div">
          <div  className="Ser-div1 r"><h3>Digital Product Photography:</h3></div> 
          <div  className="Ser-div2 ir"><img id='i4' src={photo} alt="graphics design"/><p>
            Specialize in product photography for e-commerce businesses, helping
            them showcase their products effectively.
          </p></div>

         
        </div>
      </div>
    </>
  );
};

export default Services;
