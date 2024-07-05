import { useState } from 'react'
import '../src/Styles/HomeMain.css'
import slider1 from "../src/assets/slider1.jpeg"
import slider2 from "../src/assets/slider2.jpeg"
import slider3 from "../src/assets/slider3.jpeg"
import shirt from "../src/assets/Ellipse 3.png"
import deals from "../src/assets/deals.png"
import women from "../src/assets/Women.png"
import watch from "../src/assets/watch.png"
import boys from "../src/assets/boys.png"
import saree from "../src/assets/Saree.png"
import kurtha from "../src/assets/kurtha.png"
import shoe from "../src/assets/shoe.png"
import right from "../src/assets/right.png"
import left from "../src/assets/left.png"
import NavBar from "./NavBar"
import SeeAll from "./SeeAll"
import { Link } from 'react-router-dom'
Link
const HomeMain = ({setMainArr,mainArr}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, src: slider1, alt: 'Slide 1' },
    { id: 2, src: slider2, alt: 'Slide 2' },
    { id: 3, src: slider3, alt: 'Slide 3' },
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = ({}) => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
return (
  <>
  < NavBar setMainArr={setMainArr}  mainArr={mainArr}/>
   <div className='main'>
    <div className='custom-slider' style={{ backgroundImage: `url(${slides[currentSlide].src})` }}>
      <button onClick={handlePrev} className='arrow-button'>
          <img src={left} alt="left" />
      </button>
      <button onClick={handleNext} className='arrow-button'>
          <img src={right} alt="right" />
      </button>
    </div>
      <div className='non-slider'>
          <div className='new-arrivals'>
              <h4>NEW ARRIVALS</h4>
              <h1>Shirts</h1>
              <p>Shop now the<br/> new collections</p>
          </div>
          <div className='new-arrivals'>
              <h4>NEW ARRIVALS</h4>
              <h1>Shirts</h1>
              <p>Shop now the<br/> new collections</p>
          </div>
      </div>
   </div>
   <div className='category'>
    <div className='title'>
      <h3>Shop By Category</h3>
      <p>see all</p>
    </div>
    <div id='category'>
      <div className='cate'>
        <img src={deals} alt="category" />
        <p>Deals</p>
      </div>
      <div className='cate exclude-hover'>
        <img src={shirt} alt="category exclude-hover" />
        <p>Shirt</p>
      </div>
      <div className='cate'>
        <img src={women} alt="category" />
        <p>Women</p>
      </div>
      <div className='cate'>
        <img src={watch} alt="category" />
        <p>Watch</p>
      </div>
      <div className='cate'>
        <img src={boys} alt="category" />
        <p>Boys</p>
      </div>
      <div className='cate'>
        <img src={saree} alt="category" />
        <p>Saree</p>
      </div>
      <div className='cate exclude-hover'>
        <img src={kurtha} alt="category exclude-hover" />
        <p>Kurtha</p>
      </div>
      <div className='cate'>
        <img src={shoe} alt="category" />
        <p>Shoe</p>
      </div>
    </div>
   </div>
  </>
)
}

export default HomeMain