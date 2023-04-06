import React from "react";
import frame from "./assets/Frame.png";
import fuelsensor from "./assets/Fuel-Sensor.svg";
import fuelcap from "./assets/Fuelcap.svg";
import group from "./assets/Group.svg";
import vector from "./assets/Vector.svg";
import arrowIcon from "./assets/arrowIcon.svg";
import articleImgOne from "./assets/articleImg1.png";
import articleImgTwo from "./assets/articleImg2.png";
import banner from "./assets/banner.jpg";
import cargo from "./assets/cargo.png";
import cargoIcon from "./assets/cargoIcon.svg";
import coverBg from "./assets/coverBg.png";
import five from "./assets/five.png";
import four from "./assets/four.png";
import fuelImage from "./assets/fuelImage.png";
import powerIcon from "./assets/powerIcon.svg";
import power from "./assets/power_generator.png";
import rectangle from "./assets/rectangle.png";
import shipIcon from "./assets/shipIcon.svg";
import ships from "./assets/ships.png";
import six from "./assets/six.png";
import technology from "./assets/technology-removebg-preview.png";
import three from "./assets/three.png";
import two from "./assets/two-removebg-preview.png";

const Home = () => {
  return (
    <div>
      <div>
        {/* Banner section */}
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "650px",
          }}
          className="pt-36 px-28"
        >
          <div>
            <button className="text-white bg-[#ECA225] py-2 px-9 mr-6">
              Feature
            </button>
            <button className="text-white bg-[#ECA225] py-2 px-9 ">
              Pricing
            </button>
          </div>
          <div className="mt-12 text-white">
            <h1 className=" text-6xl mb-8">
              Bongo Fuel <br /> Management <br /> System
            </h1>

            <p className="uppercase">
              Bringing you with the best IoT solutions and <br /> analytical
              software to capture fuel <br /> consumption data and improve fuel
              economy.
            </p>
          </div>
        </div>
        {/* Our Technology */}
        <div className="px-28 py-11 bg-[#F1F1F1]">
          {/* Technology header */}
          <div
            style={{
              backgroundImage: `url(${two})`,
              backgroundRepeat: "no-repeat",
              height: "115px",
            }}
          >
            <div className="pt-6">
              <p className=" mb-2 text-[#1A406F] text-2xl">Our Technology</p>
            </div>
            <div className="bg-sky-700 w-16 h-1 "></div>
          </div>
          {/* Technology body */}
          <div>
            <div className="flex mb-10">
              <div className="w-1/2">
                <h1 className="text-5xl text-[#333333]">
                  Full-stack Innovation for <br /> Fuel company
                </h1>
              </div>

              <div className="w-1/2">
                <p className="text-right text-[#7B7B7B] text-xl">
                  Bongo Fuel Management Solution includes both the <br />{" "}
                  hardware and software to operate seamlessly together, <br />{" "}
                  giving fleet managers and business owners the right <br /> set
                  of tools needed to effectively monitor and manage <br /> the
                  fleet’s fuel consumption and detect fuel theft.
                </p>
              </div>
            </div>
            <hr className="h-2" />

            <div className="flex justify-center items-center mt-5">
              <img src={technology} alt="" />
            </div>
          </div>
        </div>
        {/* Our Feature */}
        <div className="px-28 py-11">
          {/* Feature header */}
          <div className="flex flex-row-reverse">
            <div
              style={{
                backgroundImage: `url(${three})`,
                backgroundRepeat: "no-repeat",
                height: "115px",
                width: "115px",
              }}
              className="flex  flex-row-reverse"
            >
              <div className="pt-6">
                <p className=" mb-2 text-[#1A406F] text-2xl ">Feature</p>
                <div className="flex justify-end items-end">
                  <div className="bg-sky-700 w-16 h-1 "></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature body */}
          <div className="flex mb-10">
            <div className="w-1/2">
              <p className="text-[#7B7B7B] text-xl">
                Automated fuel management system gives you real-time <br />{" "}
                insight into fuel economy performance, CO2 emissions <br /> and
                other operating efficiencies that affect your business.
              </p>
            </div>

            <div className="w-1/2">
              <h1 className="text-[#333333] text-4xl text-right">
                Benefits at a Glance
              </h1>
            </div>
          </div>
          {/* slider */}
          <div>
            <h1 className="text-xl">Slider</h1>
          </div>
        </div>
        {/* Products Showcase */}
        <div className="bg-[#F1F1F1] relative">
          <div className="absolute top-[-100px]">
            <img src={frame} alt="" />
          </div>

          <div className="px-28 py-11">
            {/* Products Showcase header */}
            <div
              style={{
                backgroundImage: `url(${four})`,
                backgroundRepeat: "no-repeat",
                height: "115px",
              }}
            >
              <div className="pt-6">
                <p className=" mb-2 text-[#1A406F] text-2xl">
                  Products Showcase
                </p>
              </div>
              <div className="bg-sky-700 w-16 h-1 "></div>
            </div>
            {/* Products Showcase body  */}
            <div>
              <div className="flex mb-10">
                <div className="w-1/2">
                  <h1 className="text-5xl text-[#333333]">
                    The Best Fuel Sensors <br /> at Bongo IoT
                  </h1>
                </div>

                <div className="w-1/2">
                  <p className="text-right text-[#7B7B7B] text-xl">
                    The fuel experts of Bongo IoT have brought you the <br />{" "}
                    best fuels sensor devices to give you the best fit fuel{" "}
                    <br />
                    management solutions for your needs.
                  </p>
                </div>
              </div>
              <hr className="h-2" />

              <div className="py-5 flex">
                <div className="flex justify-start items-center grow py-5 bg-[#eeab3a1a] border-b-2 border-[#EEAB3A] ">
                  <div className="pl-10 pr-14">
                    <img src={group} alt="" />
                  </div>
                  <div>
                    <p className="text-[#EEAB3A] font-medium">
                      Bongo Intelligent <br /> Fuel Sensor
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center grow py-5 bg-white ">
                  <div className="pl-10 pr-14">
                    <img src={fuelsensor} alt="" />
                  </div>
                  <div>
                    <p className="text-[#EEAB3A] font-medium">
                      Bongo Ultrasonic <br /> Fuel Sensor
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center grow py-5 bg-white">
                  <div className="pl-10 pr-14">
                    <img src={fuelcap} alt="" />
                  </div>
                  <div>
                    <p className="text-[#EEAB3A] font-medium">
                      Bongo Intelligent <br /> Fuel Cap
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundImage: `url(${fuelImage})`,
                  backgroundRepeat: "no-repeat",
                  height: "330px",
                  backgroundSize: "cover",
                }}
                className="mt-3"
              ></div>
              <div className="px-14 py-5 flex justify-between">
                <div className="">
                  <h1 className="text-4xl text-[#1A406F] font-medium">
                    Bongo Intelligent Fuel <br /> Sensor
                  </h1>
                  <p className="mt-10 text-[#7B7B7B] text-xl">
                    Bluetooth Low Energy Technology (BLE)-enabled <br />{" "}
                    Wireless Capacitive Fuel Level Sensor.
                  </p>
                </div>

                <div>
                  <div className="flex py-4">
                    <img src={vector} alt="vector" />
                    <p className="ml-4 text-[#7B7B7B] text-xl">
                      No cable required
                    </p>
                  </div>
                  <div className="flex pb-4">
                    <img src={vector} alt="vector" />
                    <p className="ml-4 text-[#7B7B7B] text-xl">
                      Fuel temperature check
                    </p>
                  </div>
                  <div className="flex pb-4">
                    <img src={vector} alt="vector" />
                    <p className="ml-4 text-[#7B7B7B] text-xl">
                      Fuel level check
                    </p>
                  </div>
                  <div className="flex ">
                    <img src={vector} alt="vector" />
                    <p className="ml-4 text-[#7B7B7B] text-xl">
                      Accuracy up to 99.5%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Use cases */}
        <div className="px-28 py-11 ">
          {/* Use cases header */}
          <div className="flex flex-row-reverse">
            <div
              style={{
                backgroundImage: `url(${five})`,
                backgroundRepeat: "no-repeat",
                height: "115px",
                width: "115px",
              }}
              className="flex  flex-row-reverse"
            >
              <div className="pt-6">
                <p className=" mb-2 text-[#1A406F] text-2xl ">Use Cases</p>
                <div className="flex justify-end items-end">
                  <div className="bg-sky-700 w-16 h-1 "></div>
                </div>
              </div>
            </div>
          </div>

          {/* User cases body */}
          <div className="flex mb-10">
            <div className="w-1/2">
              <p className="text-[#7B7B7B] text-xl">
                Investing in a custom fuel management system can help <br /> you
                achieve your goal.
              </p>
            </div>

            <div className="w-1/2">
              <h1 className="text-[#333333] text-4xl text-right">
                A Few Use Cases of Bongo <br /> Fuel Management Solution
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-14">
            <div
              style={{
                backgroundImage: `url(${power})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "510px",
                width: "410px",
              }}
              className=""
            >
              <div
                style={{
                  backgroundImage: `url(${rectangle})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "150px",
                  width: "300px",
                }}
                // className="absolute w-[320px] left-[15px] h-36  top-72 bg-white "
                className="mx-auto mt-[320px] flex justify-center items-center"
              >
                <div className="flex">
                  <img src={powerIcon} alt="" />
                  <p className="text-[#ECA225] ml-5 text-2xl font-medium">
                    Power Generator
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${cargo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "510px",
                width: "410px",
              }}
              className="flex justify-center items-center"
            >
              <div
                style={{
                  backgroundImage: `url(${coverBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "460px",
                  width: "360px",
                }}
                className=""
              >
                <div className="p-5">
                  <div className="w-full h-64 flex justify-center items-center">
                    <img src={cargoIcon} alt="" />
                  </div>
                  <div className="mt-5">
                    <h4 className="text-[#333333] text-2xl font-medium">
                      Cargo Vehicle
                    </h4>
                    <p className="text-[#333333] text-justify mt-5">
                      Monitor fuel expense and control fraud. Controlling
                      operation cost is a vital option to increase business
                      bottom line.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${ships})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "510px",
                width: "410px",
              }}
              className=""
            >
              <div
                style={{
                  backgroundImage: `url(${rectangle})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "150px",
                  width: "300px",
                }}
                // className="absolute w-[320px] left-[15px] h-36  top-72 bg-white "
                className="mx-auto mt-[320px] flex justify-center items-center"
              >
                <div className="flex">
                  <img src={shipIcon} alt="" />
                  <p className="text-[#ECA225] ml-5 text-2xl font-medium">
                    Ships and Barges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bongo IoT Library */}
        <div className="px-28 py-11">
          {/* Bongo IoT header */}
          <div
            style={{
              backgroundImage: `url(${six})`,
              backgroundRepeat: "no-repeat",
              height: "115px",
            }}
          >
            <div className="pt-6">
              <p className=" mb-2 text-[#1A406F] text-2xl">Bongo IoT Library</p>
            </div>
            <div className="bg-sky-700 w-16 h-1 "></div>
          </div>

          {/* Bongo IoT body */}
          <div>
            <div className="flex mb-20 justify-between">
              <div className="">
                <h1 className="text-4xl text-[#333333]">Stay up to date</h1>
              </div>

              <div className="flex">
                <button className="bg-white  py-2 px-9 border-2 border-t-[#ECA225] ">
                  Blogs
                </button>
                <button className=" bg-[#bfbfbf33] py-2 px-9 ">Brochure</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex ">
                <div className="w-1/2">
                  <img src={articleImgOne} className="w-full" alt="" />
                </div>
                <div className="w-1/2 px-16 border border-[#F4F4F4] flex flex-col justify-center items-center">
                  <h3 className="text-[#1A406F] text-2xl ">
                    How to Select <br /> the Best Fuel <br /> Management <br />{" "}
                    Software For <br /> Your Fleet?
                  </h3>
                  <button className="bg-[#1273EB] text-white px-10 py-2 mt-5 flex ">
                    Read Article{" "}
                    <img src={arrowIcon} className="mt-[5px] ml-4 " alt="" />
                  </button>
                </div>
              </div>
              <div className="flex ">
                <div className="w-1/2">
                  <img src={articleImgTwo} className="w-full" alt="" />
                </div>
                <div className="w-1/2 px-16 border border-[#F4F4F4] flex flex-col justify-center items-center">
                  <h3 className="text-[#1A406F] text-2xl ">
                    Things You Never <br /> Knew About Fuel <br /> Tank
                    Calibration
                  </h3>
                  <button className="bg-[#1273EB] text-white px-10 py-2 mt-5 flex ">
                    Read Article{" "}
                    <img src={arrowIcon} className="mt-[5px] ml-4 " alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
