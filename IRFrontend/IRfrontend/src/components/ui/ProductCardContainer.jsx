import React from 'react'
import ProductCard from './ProductCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ProductCardContainer.css';

export default function ProductCardContainer({products, add_item, inCart}) {
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
    autoplaySpeed: 5000,
    rtl: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
  };
  const sortedProducts = products.sort((a,b)=> new Date(b.date) - new Date(a.date));
  const releases = sortedProducts.slice(0, 8);
  return (
    <div className='ProductCartContainer'>
        <Slider {...settings} className='SlickSlider'>
        {releases.map((product) => (<ProductCard key={product.id} product={product} add_item={add_item} inCart={inCart[product.id] || false} />))}
        {/* {products.map(product => <ProductCard key={product.id} product={product} />)} */}
        </Slider>
    </div>
  )
}
