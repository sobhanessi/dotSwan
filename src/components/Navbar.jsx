import React from "react";
import { Link } from "react-router-dom";
import NavbarMiddleLinks from "./NavbarMiddleLinks";
import background from "./pics/BG.png";
import vector1 from "./pics/Vector 1.png";
import vector2 from "./pics/Vector 2.png";
import vector3 from "./pics/Vector 3.png";
import vector4 from "./pics/Vector 4.png";
import vector5 from "./pics/Vector 5.png";
import vector6 from "./pics/Vector 6.png";
import phone from "./pics/Phone 1.png";
import shape41 from "./pics/Shape 4 1.png";
import shape31 from "./pics/Shape 3 1.png";
import shape21 from "./pics/Shape 2 1.png";
import shape11 from "./pics/Shape 1 1.png";
import arrowRight1 from "./pics/Arrow-Right 1.png";
function Navbar() {
  const styles = {
    fonts: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "60px",
      lineHeight: "150%",
      color: "white",
    },
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          // width: "1591px",
          // height: "1028.5px",
          width: "100%",
          height: "100%",
          left: "-73px",
          top: "-95px",
          position: "relative",
          filter: "blur(50px)",
        }}
      >
        <img
          src={vector5}
          style={{
            position: "absolute",
            left: "1.5px",
            top: "-119px",
            height: "364px",
            width: "895px",

            filter: "blur(50px)",
          }}
        />

        <img
          src={vector3}
          style={{
            position: "absolute",
            left: "-0.5px",
            top: "5px",
            height: "1015px",
            width: "1438px",

            filter: "blur(50px)",
          }}
        />

        <img
          src={vector2}
          style={{
            position: "absolute",
            left: "-34px",
            top: "298.43px",
            height: "683.57px",
            width: "1496px",

            filter: "blur(50px)",
          }}
        />
        <img
          src={vector1}
          style={{
            position: "absolute",
            left: "0px",
            top: "556px",
            height: "632.94px",
            width: "1443.5px",
            filter: "blur(50px)",
          }}
        />
        <img
          src={vector4}
          style={{
            position: "absolute",
            left: "570px",
            top: "-146px",
            height: "418px",
            width: "892px",

            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${vector6})`,
            position: "absolute",
            // left: "1518px",
            height: "1028.5px",
            width: "1591px",
            left: 0,
            //   height: "100%",
            //   width: "100%",
            top: "-95px",
            filter: "blur(50px)",
            // transform: [{ matrix: [-1, 0, 0, 1, 0, 0] }],
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            zIndex: 999,
          }}
        ></div>
      </div>
      <NavbarMiddleLinks />
      <img
        src={shape31}
        style={{
          position: "absolute",
          width: "385px",
          height: "394px",
          left: "502px",
          top: "28px",
          filter: "blur(7px)",
        }}
      />
      <img
        src={shape31}
        style={{
          position: "absolute",
          width: "385px",
          height: "394px",
          left: "473px",
          top: "28px",
        }}
      />

      <img
        src={shape11}
        style={{
          position: "absolute",
          width: "144px",
          height: "158px",
          left: "1120px",
          top: "181px",
        }}
      />

      <h1
        style={{
          ...styles.fonts,
          position: "absolute",
          width: "463px",
          height: "180px",
          left: "247px",
          top: "273px",
        }}
      >
        Smart Banking for freelancers
      </h1>
      <p
        style={{
          position: "absolute",
          width: "376px",
          height: "90px",
          left: "247px",
          top: "466px",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "150%",
          color: "white",
        }}
      >
        Draft is a revolutionary mobile app built to help you manage your
        business easily and save your money.
      </p>

      <button
        style={{
          position: "absolute",
          width: "200px",
          height: "54px",
          left: "247px",
          top: "607px",
          backgroundColor: "#16194F",
          borderRadius: "20px",
          color: "white",
          fontSize: "15px",
          fontFamily: "Roboto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Register Now{" "}
        <img
          src={arrowRight1}
          style={{
            marginLeft: "8px",
          }}
        />
      </button>
      <img
        src={phone}
        style={{
          position: "absolute",
          width: "587px",
          height: "791.5px",
          left: "705px",
          top: "195px",
        }}
      />
      <img
        src={shape41}
        style={{
          position: "absolute",
          width: "145px",
          height: "137px",
          left: "606px",
          top: "676px",
        }}
      />
      <img
        src={shape41}
        style={{
          position: "absolute",
          width: "145px",
          height: "137px",
          left: "595px",
          top: "639px",
        }}
      />
      <img
        src={shape21}
        style={{
          position: "absolute",
          width: "115px",
          height: "114px",
          left: "1163px",
          top: "764px",
        }}
      />
    </div>
  );
}

export default Navbar;
