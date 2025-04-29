import React from 'react'
import ProductCard from './ProductCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ProductCardContainer.css';
import nazad from '../../../public/nazad.svg';


export default function ProductCardContainer({products}) {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }


  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 6000,
    rtl: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
  
  }
  return (
    <div className='ProductCartContainer'>
        <Slider {...settings} className='SlickSlider'>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
        </Slider>
    </div>
  )
}
