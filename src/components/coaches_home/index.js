import React from "react"
import { Swiper, SwiperSlide, autoPlay, SwiperCore } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
    FitTrainerWrapper,
    FitHeading,
    HeadingTitle
} from '../coaches_home/styled'
//import { delay } from "lodash";

const susy = require('../../assets/imgs/coach1.png')
const carmen = require('../../assets/imgs/coach3.png')
const julia = require('../../assets/imgs/coach5.png')
const slide_img = [
  {img: susy , name:"Susy", title:"Vive intensamente, pero sobre todo vive siendo tu mismo",description:"Quiero que venga a mi clase a aprender, conocerás el sentido de esta disciplina, exigiendo que des tú máximo. Una clase donde vivirás una experiencia y donde el movimiento se convertirá en magia.Conectaremos mente, cuerpo y emociones en tan solo 45 min. sacando lo mejor de tí.",fun_fact1:"Me gusta toda la música que me haga bailar y sobre todo sentir, depende el modo que andemos, pero mis tops son: Rufus du sol y la reina de reinas Beyonce.",fun_fact2:"",fun_fact3:""},
  {img: carmen , name:"Carmen", title:"Agradece un día más y a tu cuerpo por el gran esfuerzo",description:"Instructora de pilates y coach de indoor cycling. Mis clases son para que trabajes todo el cuerpo y tu mente, que te retes y al mismo tiempo disfrutes rodar. Mi música varía dependiendo del modo del momento, pero siempre hará moverte. Como coach quiero enseñarte a dar lo mejor de ti, a rodar con el corazón y posición adecuada, que salgas llena de energía y mejor actitud.",fun_fact1:"- Al final de clase siempre hay sentadillas",fun_fact2:"- Dog lover",fun_fact3:'Decir “una más” aunque falten 2 jajaja'},
  {img: julia , name:"Larissa", title:"",description:"",fun_fact1:"",fun_fact2:"",fun_fact1:""},
];


const Couch  = () => (
    <FitTrainerWrapper id="instructores">
        <Container>
            <Row>
                <Col lg={12} className="offset-xl-0 offset-lg-2 offset-md-1">
                    <FitHeading className="fit_heading text-center">
                        <HeadingTitle className="heading_title">MEET THE TEAM</HeadingTitle>
                    </FitHeading>
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <div className="fit_trainer_inner">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        speed={800}
                        autoPlay={{
                            delay: 5000
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 1
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 3,
                                
                                spaceBetween: 30,
                            }
                        }}
                        className="swiper-container"
                        >
                        {slide_img.map((data, i) => {
                            return (
                                <SwiperSlide>
                                    <div className="trainer_inner_slider">
                                        <div className="inner_slider_img">
                                            <img src={data.img} className="img-fluid" alt="image" />
                                            <div className="trainer_data">
                                                <h2>{data.title}</h2>
                                                <p>{data.description}</p>
                                                <h3>FUN FACTS</h3>
                                                <p>{data.fun_fact1}</p>
                                                <p>{data.fun_fact2}</p>
                                                <p>{data.fun_fact3}</p>
                                            </div>
                                        </div>
                                        <h1 className="fit_trainer_title">{ data.name }</h1>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        </Swiper>
                    </div>
                </Col>
            </Row>
        </Container>
      
    </FitTrainerWrapper>
)

export default Couch
