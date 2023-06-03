import React from 'react'
import "./style.css"
import Button from '../../../Commons/Button';
import iphone from '../../../Asset/iphone.png';
import gradient from "../../../Asset/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function MainComponent() {
    return (
      <div className="flex-info">
        <div className="left-component">
          <motion.h1
            className="track-crypto-heading"
            initial={{ opacity: 0.1, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            track crypto
          </motion.h1>
          <motion.h1
            className="real-time-heading"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            realtime
          </motion.h1>
          <p className="info-text">
            Track crypto in real time through public Api. Visit the dashboard to
            do so!
          </p>
          <div className="flex-btn">
            <Link to="/dashboard">
              <Button text={"Dashboard"} onClick={() => {
                console.log("hiivherfhfvherhre");
              }} />
            </Link>
            <Button
              text={"share"}
              outlined={true}
              onClick={() => {
                console.log("hiivherfhfvherhre");
              }}
            ></Button>
          </div>
        </div>

        <div className="phone-container">
          <motion.img
            src={iphone}
            className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.img>
          <img src={gradient} className="gradient"></img>
        </div>
      </div>
    );
}

export default MainComponent