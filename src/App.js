import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import Fox1 from "./assets/fox1.png";
import Fox2 from "./assets/fox2.png";
import Mark from "./assets/eth-mark.png";
import BattleFox from "./assets/battle-fox.png";
import { Container, Row, Col } from "react-bootstrap";

const transition = { duration: 2, delay: 2, ease: "easeInOut" };

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function App() {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("fox3")[0].style.visibility = "visible";
    }, 1000);
    setTimeout(() => {
      document.getElementsByClassName("top-center")[0].style.visibility =
        "visible";
    }, 2000);
  }, [height, width]);
  return (
    <div className="home">
      <Container>
        <Row>
          <Col xs={4}>
            <p className="section1-symbol1">01/01</p>
          </Col>
          <Col xs={4}>
            <p className="section1-title">REWI POWERED BY</p>
          </Col>
          <Col xs={4}>
            <p className="section1-symbol2">01/01</p>
          </Col>
        </Row>
      </Container>
      <div>
        <p className="section1-subtitle">REWI-SECURE-THEGRID.EXE</p>
      </div>
      <hr style={{ border: "0.5px solid grey", marginTop: "5px" }}></hr>
      <Container>
        <Row>
          <Col xs={5}>
            <div className="fox-img img-title">
              <img className="fox1" src={Fox1} alt="" />
              <div className="top-left">GAME</div>
            </div>
            <div>
              <p className="fox1-description">
                The supply chains of The Grid <br></br>
                has to be protected by the <br></br>
                citizens of Arbela who call <br></br>
                themselves Rewi.
              </p>
            </div>
          </Col>
          <Col xs={2}>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                height: "100%",
              }}
            >
              <img className="eth-mark" src={Mark} alt="" />
              <div className="eth-mark-vertical">
                TRANSMISSION&nbsp; ON&nbsp; GOING
              </div>
            </div>
          </Col>
          <Col xs={5}>
            <div className="img-title fox-img">
              <img className="fox2" src={Fox2} alt="" />
              <div className="top-right">REWI.</div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="battle-fox img-title">
        <img src={BattleFox} className="fox3" alt="battlefox" />
        <div className="top-center">ARBELA&nbsp; &nbsp;METAVERSE</div>
      </div>
      <div className="line-effect">
        <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600}>
          <motion.path
            d="M372,71 420,71 468,0"
            fill="transparent"
            strokeWidth="2"
            stroke="grey"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
      <div className="line-effect">
        <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600}>
          <motion.path
            d="M613,71 566,71 516,0"
            fill="transparent"
            strokeWidth="2"
            stroke="grey"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
      <div className="line-effect">
        <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600}>
          <motion.path
            d="M302,106 476,106 476,450 88,450 88, 570"
            fill="transparent"
            strokeWidth="2"
            stroke="grey"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
      <div className="line-effect">
        <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600}>
          <motion.path
            d="M682,106 506,106 506,450 895,450 895, 570"
            fill="transparent"
            strokeWidth="2"
            stroke="grey"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
      <div className="line-effect">
        <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600}>
          <motion.path
            d="M256,170 456,170 456,420 46,420 46, 570"
            fill="transparent"
            strokeWidth="2"
            stroke="grey"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
      <div className="line-effect">
        <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600}>
          <motion.path
            d="M728,170 526,170 526,420 941,420 941, 570"
            fill="transparent"
            strokeWidth="2"
            stroke="grey"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
    </div>
  );
}
