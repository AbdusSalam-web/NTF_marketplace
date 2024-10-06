import React from "react";
import { GetStartedBtn } from "../../common/buttons/Button";
import CountUp from "react-countup";
const Hero = () => {
  const totalSales = (
    <CountUp
      start={0.0}
      end={240}
      duration={2.75}
      separator=" "
      suffix="k+"
    ></CountUp>
  );
  const Auctions = (
    <CountUp
      start={0.0}
      end={100}
      duration={2.75}
      separator=" "
      suffix="k+"
    ></CountUp>
  );
  const Artists = (
    <CountUp
      start={0.0}
      end={240}
      duration={2.75}
      separator=" "
      suffix="k+"
    ></CountUp>
  );
  return (
    <>
      <section className="hero w-full bg-brand">
        <div className="container px-[30px] py-[40px] md:py-[80px] md:px-[72px] lg:px-[95px] lg-py-[80px]">
          <div className="heroContent md:flex md:gap-[30px] md:flex-wrap lg:w-[1050px] lg:flex-wrap ">
            <div className="heroText md:w-[330px] md:flex md:gap-[30px] md:flex-wrap lg:gap-0  lg:w-[510px] ">
              <h3 className="font-workSans font-semibold text-[28px] text-[#FFFFFF] leading-[40px] md:text-[38px] md:leading-[46px] ">
                Discover digital art & Collect NFTs
              </h3>
              <p className="font-workSans font-normal text-[16px] text-[#FFFFFF] leading-[24px] mt-[10px] md:mt-[20px] mb-[40px]">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>
            <div className="heroImageCard md:w-[400px] lg:w-[510px]">
              <img
                src="./images/herobg.png"
                alt="hero image"
                className=" rounded-tl-[20px] rounded-tr-[20px]"
              />
              <div className=" bg-[#3B3B3B] py-[22px] px-[20px] rounded-bl-[20px] rounded-br-[20px] ">
                <h4 className="font-workSans font-semibold text-[22px] text-[#FFFFFF] leading-[31px] mb-[10px] ">
                  Space Walking
                </h4>
                <div className="flex items-center gap-3 ">
                  <img
                    src="./images/animakid.png"
                    alt="animakid avatar"
                    className="w-[24px] h-[24px]"
                  />
                  <p className="font-workSans font-normal text-[16px] text-[#FFFFFF] leading-[24px]">
                    Animakid
                  </p>
                </div>
              </div>
            </div>
            <div className=" my-[40px] md:w-[330px]">
              <GetStartedBtn btnMd="md:py-[19px] md:px-[50px]" btnLg="lg:py-[19px] lg:px-[50px]" />
              <div className="counter w-full flex items-center gap-[30px] mt-[40px] ">
                <div className="w-full">
                  <p className="font-spaceMono text-[22px] text-[#ffffff] leading-[35px] ">
                    {totalSales}
                  </p>
                  <p className="font-workSans font-normal text-[16px] leading-6 text-[#FFFFFF]">
                    Total Sale
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-spaceMono text-[22px] text-[#ffffff] leading-[35px]">
                    {Auctions}
                  </p>
                  <p className="font-workSans font-normal text-[16px] leading-6 text-[#FFFFFF]">
                    Auctions
                  </p>
                </div>
                <div className="w-full">
                  <p className="font-spaceMono text-[22px] text-[#ffffff] leading-[35px]">
                    {Artists}
                  </p>
                  <p className="font-workSans font-normal text-[16px] leading-6 text-[#FFFFFF]">
                    Artists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
