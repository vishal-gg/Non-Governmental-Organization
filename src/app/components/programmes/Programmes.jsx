import React from "react";
import {GiBookCover} from "react-icons/gi";
import {BsHeartPulseFill} from "react-icons/bs";
import {FaHandsHelping} from "react-icons/fa";
import {TbHeartHandshake} from "react-icons/tb";

import "./Programmes.scss";

function Programmes() {
   return (
      <div className="programmes__container">
         <h2 className="programmes_title"> Our Programmes</h2>
         <div className="programmes_wrapper">
            <div className="programmes_card">
               <div className="card_icon">
                  <GiBookCover />
               </div>
               <div className="card_details">
                  <h4 className="card_title">Education</h4>
                  <p className="card_description">
                     Education, nutrition and holistic development of children
                  </p>
               </div>
            </div>
            <div className="programmes_card">
               <div className="card_icon">
                  <BsHeartPulseFill />
               </div>
               <div className="card_details">
                  <h4 className="card_title">Healthcare</h4>
                  <p className="card_description">
                     Taking healthcare services to doorsteps of hard to reach
                     communities
                  </p>
               </div>
            </div>
            <div className="programmes_card">
               <div className="card_icon">
                  <FaHandsHelping />
               </div>
               <div className="card_details">
                  <h4 className="card_title">Women empowerment</h4>
                  <p className="card_description">
                     Empowering adolescent girls & women through community
                     engagement
                  </p>
               </div>
            </div>
            <div className="programmes_card">
               <div className="card_icon">
                  <TbHeartHandshake />
               </div>
               <div className="card_details">
                  <h4 className="card_title">Livelihood</h4>
                  <p className="card_description">
                     Skill training and placement support for underprivileged
                     youth
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Programmes;
