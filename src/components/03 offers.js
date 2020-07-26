import React from "react";
import plus from "../assets/svg/plus.svg";
import cod from "../assets/images/codmw.png";
import crew2 from "../assets/images/crew2.png";
import hitman from "../assets/images/hitman.png";

function About() {
  return (
    <div className='offers' id='#2'>
      <div className='container'>
        <ul>
          <div className='col2'>
            <li>
              <div className='offer col h-center'>
                <h6>20% OFF</h6>
                <img src={cod} alt='' />
                <div className='offer-price row center'>
                  <button>34.99$</button>
                  <img src={plus} alt='' />
                </div>
              </div>
            </li>
            <li>
              <div className='offer col h-center'>
                <h6>30% OFF</h6>
                <img src={crew2} alt='' />
                <div className='offer-price row center'>
                  <button>24.99$</button>
                  <img src={plus} alt='' />
                </div>
              </div>
            </li>
            <li>
              <div className='offer col h-center'>
                <h6>35% OFF</h6>
                <img src={hitman} alt='' />
                <div className='offer-price row center'>
                  <button>29.99$</button>
                  <img src={plus} alt='' />
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default About;
