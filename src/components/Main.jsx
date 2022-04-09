import React from "react";
import creditCard from "./pics/Credit Card.png";
import cards from "./pics/Cards.png";
import learnMore from "./pics/Learn More.png";
import chart from "./pics/Chart.png";
import arrowRight1 from "./pics/Arrow-Right 1.png";

function Main() {
  return (
    <main style={{ position: "relative" }}>
      <div
        style={{
          // position: "absolute",
          width: "946px",
          height: "268px",
          left: "247px",
          top: "1194px",
          // display: "flex",
          // flexDirection: "row",
        }}
        className="feature-1"
      >
        <div
          style={{
            // position: "absolute",
            width: "360px",
            height: "253px",
            left: "247px",
            top: "1202px",
          }}
        >
          <h1
            style={{
              position: "absolute",
              width: "366px",
              height: "120px",
              left: "250px",
              top: "1202px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "120%",
              color: "#554DDE",
            }}
          >
            One card for all your payments
          </h1>
          <p
            style={{
              position: "absolute",
              width: "366px",
              height: "90px",
              left: "247px",
              top: "1365px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              color: "#6A6D9E",
            }}
          >
            Get 3% back on everything you buy with the Draft card. Register
            today and enjoy every aspect of your business.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            width: "463px",
            height: "268px",
            left: "730px",
            top: "1194px",
          }}
        >
          <img src={creditCard} />
        </div>
      </div>
      <div
        className="feature-2-section"
        style={{
          // display: "flex",
          // flexDirection: "row",
          // position: "absolute",
          width: "946px",
          height: "458px",
          left: "247px",
          top: "1722px",
        }}
      >
        <div
          className="cards"
          style={
            {
              // position: "absolute",
              // width: "463px",
              // height: "458px",
              // left: "247px",
              // top: "1722px",
            }
          }
        >
          <div
            style={{
              position: "absolute",
              width: "223px",
              height: "180px",
              left: "247px",
              top: "1722px",
              backgroundColor: "white",
              border: "0.5px solid #CAD6F1",
              boxSizing: "border-box",
              boxShadow: "0px 25px 50px rgba(22, 25, 79, 0.05",
              borderRadius: "50px",
            }}
          ></div>
          <p
            style={{
              position: "absolute",
              width: "72px",
              height: "30px",
              left: "287px",
              top: "1762px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              color: "black",
            }}
          >
            Balance
          </p>
          <h3
            style={{
              position: "absolute",
              width: "125px",
              height: "60px",
              left: "287px",
              top: "1802px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "150%",
              color: "#554DDE",
            }}
          >
            $5,600
          </h3>
          <div
            style={{
              position: "absolute",
              width: "223px",
              height: "180px",
              left: "487px",
              top: "1722px",
              backgroundColor: "white",
              border: "0.5px solid #CAD6F1",
              boxSizing: "border-box",
              boxShadow: "0px 25px 50px rgba(22, 25, 79, 0.05",
              borderRadius: "50px",
            }}
          ></div>
          <p
            style={{
              position: "absolute",
              width: "149px",
              height: "30px",
              left: "527px",
              top: "1762px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              color: "black",
            }}
          >
            Last Transaction
          </p>
          <h3
            style={{
              position: "absolute",
              width: "92px",
              height: "60px",
              left: "527px",
              top: "1802px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "150%",
              color: "#554DDE",
            }}
          >
            $230
          </h3>
          <div>
            <img
              src={chart}
              style={{
                position: "absolute",
                width: "463px",
                height: "248px",
                left: "247px",
                top: "1932px",
                backgroundColor: "white",
                border: "0.5px solid #CAD6F1",
                boxSizing: "border-box",
                boxShadow: "0px 25px 50px rgba(22, 25, 79, 0.05",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>
        <div
          className="feature2"
          // style={{ display: "flex", flexDirection: "column" }}
        >
          <h1
            style={{
              position: "absolute",
              width: "366px",
              height: "180px",
              left: "845px",
              top: "1759px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "120%",
              color: "#554DDE",
            }}
          >
            Manage your finances like a pro in no time
          </h1>
          <p
            style={{
              position: "absolute",
              width: "366px",
              height: "90px",
              left: "842px",
              top: "1969px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "150%",
              color: "#6A6D9E",
            }}
          >
            With Draft, book keeping, banking, and invoices are all in one
            place. You will always know where you stand.{" "}
          </p>
          <button
            style={{
              position: "absolute",
              width: "200px",
              height: "54px",
              left: "845px",
              top: "2089px",
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
            Learn More{" "}
            <img
              src={arrowRight1}
              style={{
                marginLeft: "3px",
              }}
            />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
