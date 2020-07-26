import React from "react";
import play from "../assets/svg/playbtn.svg";
import heart from "../assets/svg/heart.svg";
import cyberpunk1 from "../assets/images/cyberpunk1.png";
import cyberpunk2 from "../assets/images/cyberpunk2.png";
import cyberpunk3 from "../assets/images/cyberpunk3.png";

function Upcoming() {
  return (
    <div className='upcoming' id='#3'>
      <div className='upcoming-bg1 bg-prop'>
        <div className='container'>
          <div className='col'>
            <div className='upcoming-text col'>
              <h6>PROJEKT RED</h6>
              <div className='upcoming-title col h-center'>
                <span>CYBERPUNK</span>
                <span>2077 </span>
              </div>
            </div>
            <div className='upcoming-btn'>
              <div className='col'>
                <button className='upcoming-btn1 row v-center'>
                  <img src={play} alt='' />
                  WATCH TRAILER
                </button>
                <button className='upcoming-btn2'>SYSTEM REQUIREMENTS</button>
              </div>
            </div>

            <button className='add-to-fav row v-center'>
              <img src={heart} alt='' />
              ADD TO FAVOURITES
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='desc-text col'>
          <h3>DESCRIPTION</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            quam ab magnam velit tempore et minima repellat eaque saepe illum
            suscipit obcaecati, minus voluptate fugit delectus dolorem, id quod
            pariatur.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ducimus quam ab magnam velit tempore et minima repellat eaque saepe
            illum suscipit obcaecati, minus voluptate fugit delectus dolorem, id
            quod pariatur.
          </p>
        </div>
        <div className='screenshots'>
          <h3>SCREENSHOTS</h3>
          <div className='col h-center'>
            <img src={cyberpunk1} alt='' />
            <img src={cyberpunk2} alt='' />
            <img src={cyberpunk3} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
