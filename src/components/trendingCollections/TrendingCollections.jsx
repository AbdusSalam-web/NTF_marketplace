import React from "react";
import CountUp from "react-countup";
import "./TrendingCollections.css";
const TrendingCollections = () => {
  const trendingCoutUp = (
    <CountUp start={0} end={1025} duration={2.75} suffix="+"></CountUp>
  );
  return (
    <>
      <section className="trendingCollections">
        <div className="container ">
          <div className="text">
            <h1 className="trendingHeading ">Trending Collection</h1>
            <p className="trendingPara">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <div className="card">
            <div>
              <div className="img">
                <img src="./images/tdi.png" alt=" trending image" />
              </div>
              <div className="imgSm">
                <img src="./images/tdism.png" alt="trendig image" />
                <img src="./images/tdism1.png" alt="trendig image" />
                <div className="trendingCoutUp">{trendingCoutUp}</div>
              </div>
              <div className="profile">
                <p className="frofileName"> DSGN Animals</p>
                <div>
                  <img src="./images/avtrfx.png" alt="Avatar image" />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
            <div>
              <div className="img">
                <img src="./images/tdi.png" alt=" trending image" />
              </div>
              <div className="imgSm">
                <img src="./images/tdsm3.png" alt="trendig image" />
                <img src="./images/tdsm4.png" alt="trendig image" />
                <div className="trendingCoutUp">{trendingCoutUp}</div>
              </div>
              <div className="profile">
                <p className="frofileName"> Magic Mushrooms</p>
                <div>
                  <img src="./images/avtrmsrm.png" alt="Avatar image" />
                  <p>Shroomie</p>
                </div>
              </div>
            </div>
            <div>
              <div className="img">
                <img src="./images/tdi.png" alt=" trending image" />
              </div>
              <div className="imgSm">
                <img src="./images/tdism.png" alt="trendig image" />
                <img src="./images/tdism1.png" alt="trendig image" />
                <div className="trendingCoutUp">{trendingCoutUp}</div>
              </div>
              <div className="profile">
                <p className="frofileName"> DSGN Animals</p>
                <div>
                  <img src="./images/avtrfx.png" alt="Avatar image" />
                  <p>MrFox</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingCollections;
