import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import CSS file or add styles inline

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('http://127.0.0.1:8000/show_all_food/?shop_id=${shopId}')
      .then(response => response.json())
      .then(data => {
        setSlidesData(data);
        showSlides(slideIndex);
      })
      .catch(error => console.error('Error fetching slides data:', error));
  }, [slideIndex]);

  function plusSlides(n) {
    let newIndex = slideIndex + n;
    const totalSlides = slidesData.length;
    if (newIndex > totalSlides) {
      setSlideIndex(1); // Go back to the first slide when reaching the last one
    } else if (newIndex < 1) {
      setSlideIndex(totalSlides); // Go to the last slide when reaching the first one
    } else {
      setSlideIndex(newIndex);
    }
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  }

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, index) => (
        <div className="mySlides fade" key={index}>
          <div className="numbertext">{index + 1} / {slidesData.length}</div>
          <img src={slide.Food_picture}alt={`Slide ${index + 1}`} />
          <div className="text">{slide.Food_name}</div>
        </div>
      ))}
      
      {/* Navigation buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>

      {/* Dots */}
      <div style={{ textAlign: 'center' }}>
        {slidesData.map((_, index) => (
          <span className="dot" key={index} onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
