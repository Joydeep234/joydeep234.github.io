import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/userinput");
  };
  return (
    <>
      <div className="h-main">
        <div className="h-S">
          <u>
            Success starts with <br></br>hardworking consultants
          </u>
        </div>
        <br></br>
        <div className="p-div">
          <p>
            At IOTA, we are your one-stop solution for all your
            digital needs. We specialize in a range of services designed to help
            businesses thrive in the digital age. With a team of experienced
            professionals and a passion for creativity, we bring your ideas to
            life and help your brand stand out in a competitive online world.
          </p>
        </div>
        <div className="h-t">TO JOIN OUR SERVICES</div>
        <div className="h-t">CLICK HERE</div>
        <div>
          <button
            className="btn"
            id="btn-c"
            type="submit"
            onClick={handleClick}
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Home;
