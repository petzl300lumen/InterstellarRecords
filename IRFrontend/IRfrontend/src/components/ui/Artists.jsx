import React from 'react';
import api, { BASE_URL } from '../logic/api';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Artists.css";

export default function Artists({artists}) {

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
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
          speed: 9000,
          autoplaySpeed: 9000,
        //   rtl: true,
          cssEase: "linear",
        //   nextArrow: <SampleNextArrow />,
        //   prevArrow: <SamplePrevArrow />, 
        };


    const mrx = artists.filter((artist) => artist.artist_name.includes('Mareux'));
    const klngst = artists.filter((artist) => artist.artist_name.includes('Klangkuenstler'));
    const mrccdp = artists.filter((artist) => artist.artist_name.includes('Marc Acardipane'));
    const partanm = artists.filter((artist) => artist.artist_name.includes('Party Animals'));
    const dpchmd = artists.filter((artist) => artist.artist_name.includes('Depeche Mode'));
    const nunrb = artists.filter((artist) => artist.artist_name.includes('Nürnberg'));
    const pns = artists.filter((artist) => artist.artist_name.includes('Порез на собаке'));
    const pb4 = artists.filter((artist) => artist.artist_name.includes('4 Позиции Бруно'));
    const zpd81 = artists.filter((artist) => artist.artist_name.includes('Запад-81'));
    const lc = artists.filter((artist) => artist.artist_name.includes('Locked Club'));
    const lilp = artists.filter((artist) => artist.artist_name.includes('Lil Peep'));
    const md = artists.filter((artist) => artist.artist_name.includes('Molchat Doma'));
  return (
    <div>
    <div className="artists-background artists-arr">
    <Slider {...settings}>

        <div className='wrapper'>
        <div className="firstSlide">

           <div className="firstslideChildren FSC1" style={{
                  backgroundImage: `url(${BASE_URL}${partanm[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                <div className='div-an'> <p className='p-an'>Party Animals</p> </div>
            </div>
            {/* {partanm.map((artist) => ( <div key={artist.id} className="firstslideChildren FSC1">
                {<img src={`${BASE_URL}${artist.image}`} alt="Картинка" className='partyanimals'/>}
            </div>))} */}
            <div className="firstslideChildren FSC2" style={{
                  backgroundImage: `url(${BASE_URL}${mrccdp[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Marc Acardipane</p></div></div>
            <div className="firstslideChildren FSC3" style={{
                  backgroundImage: `url(${BASE_URL}${dpchmd[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Depeche Mode</p></div></div>
            <div className="firstslideChildren FSC4" style={{
                  backgroundImage: `url(${BASE_URL}${lc[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Locked Club</p></div></div>
            <div className="firstslideChildren FSC5" style={{
                  backgroundImage: `url(${BASE_URL}${lilp[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Lil Peep</p></div></div>
            <div className="firstslideChildren FSC6" style={{
                  backgroundImage: `url(${BASE_URL}${md[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Molchat Doma</p></div></div>
            {/* <div className="firstslideChildren FSC7">7</div>
            <div className="firstslideChildren FSC8">8</div> */}
        </div>
        </div>
        <div className='wrapper'>
        <div className="SecondSlide">
            <div className="secondslideChildren SSC1" style={{
                  backgroundImage: `url(${BASE_URL}${nunrb[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Nürnberg</p></div></div>
            <div className="secondslideChildren SSC2" style={{
                  backgroundImage: `url(${BASE_URL}${zpd81[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Запад-81</p></div></div>
            <div className="secondslideChildren SSC3"style={{
                  backgroundImage: `url(${BASE_URL}${klngst[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Klangkuenstler</p></div></div>
            <div className="secondslideChildren SSC4" style={{
                  backgroundImage: `url(${BASE_URL}${pns[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Порез на собаке</p></div></div>
            <div className="secondslideChildren SSC5"style={{
                  backgroundImage: `url(${BASE_URL}${mrx[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'> <p className='p-an'>Mareux</p></div></div>
            <div className="secondslideChildren SSC6" style={{
                  backgroundImage: `url(${BASE_URL}${pb4[0]?.image || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}><div className='div-an'><p className='p-an'>4 Позиции бруно</p></div></div>
            {/* <div className="secondslideChildren SSC7">7</div> */}
            {/* <div className="secondslideChildren SSC7">8</div> */}
        </div>
        </div>
    </Slider>    
    </div>


    </div>






    
    // <div>
    //     Artists
    // <div className="mareuxdiv">
    //     {mrx.map((artist) =>(
    //         <div key={artist.id}>
    //             {artist.artist_name}
    //             {artist.destination}
    //             <img src={`${BASE_URL}${artist.image}`} alt="Картинка"/>
    //         </div>
    //     ))}
    // </div>

    //     <div className="klgnslrdiv">
    //     {klngst.map((artist) =>(
    //         <div key={artist.id}>
    //             {artist.artist_name}
    //             {artist.destination}
    //             <img src={`${BASE_URL}${artist.image}`} alt="Картинка"/>
    //         </div>
    //     ))}
    //     </div>

    // </div>
  )
}
