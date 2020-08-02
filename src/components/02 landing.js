import React, { useEffect, useState } from "react";

function Landing() {
  let [slideIndex, newIndex] = useState(1);
  useEffect(() => {
    showSlides(slideIndex);

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  });

  return (
    <div className='landing'>
      <div className='slides landing-bg1'>
        <div className='container col'>
          <div className='landing-text col'>
            <h6>UBISOFT</h6>
            <div className='title col h-center'>
              <span>ASSASSIN'S </span>
              <span>CREED IV </span>
              <span>BLACK FLAG</span>
            </div>
          </div>
          <div className='landing-btn col'>
            <button className='landing-price'>14.99$</button>
            <button className='landing-cart'>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className='slides landing-bg2'>
        <div className='container col'>
          <div className='landing-text col'>
            <h6>ROCKSTAR GAMES</h6>
            <div className='title col h-center'>
              <span>GRAND </span>
              <span>THEFT </span>
              <span>AUTO V </span>
            </div>
          </div>
          <div className='landing-btn col'>
            <button className='landing-price'>35.99$</button>
            <button className='landing-cart'>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className='slides landing-bg3'>
        <div className='container col'>
          <div className='landing-text col'>
            <h6>UBISOFT</h6>
            <div className='title col h-center'>
              <span>WATCH </span>
              <span>DOGS </span>
            </div>
          </div>
          <div className='landing-btn col'>
            <button className='landing-price'>29.99$</button>
            <button className='landing-cart'>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className='slides landing-bg4'>
        <div className='container col'>
          <div className='landing-text col'>
            <h6>UBISOFT</h6>
            <div className='title col h-center'>
              <span>RAINBOW </span>
              <span>SIX </span>
              <span>SIEGE </span>
            </div>
          </div>
          <div className='landing-btn col'>
            <button className='landing-price'>19.99$</button>
            <button className='landing-cart'>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className='dots'>
        <span className='dot' onClick={() => newIndex((slideIndex = 1))}></span>
        <span className='dot' onClick={() => newIndex((slideIndex = 2))}></span>
        <span className='dot' onClick={() => newIndex((slideIndex = 3))}></span>
        <span className='dot' onClick={() => newIndex((slideIndex = 4))}></span>
      </div>
    </div>
  );
}

export default Landing;
