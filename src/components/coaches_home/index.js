import React, { useState, useRef, Fragment }  from "react"
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
    FitTrainerWrapper,
    FitHeading,
    HeadingTitle
} from '../coaches_home/styled'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Modal from "./modal";

const carmen = require('../../assets/imgs/trainer1.jpg')
const ivonne = require('../../assets/imgs/trainer2.jpg')
const larissa = require('../../assets/imgs/trainer3.jpg')
const susy = require('../../assets/imgs/trainer4.jpg')

const slide_img = [
  {img: susy , name:"Susy", title:"Vive intensamente, pero sobre todo vive siendo tu mismo",description:"Quiero que venga a mi clase a aprender, conocerás el sentido de esta disciplina, exigiendo que des tú máximo. Una clase donde vivirás una experiencia y donde el movimiento se convertirá en magia.Conectaremos mente, cuerpo y emociones en tan solo 45 min. sacando lo mejor de tí.",fun_fact1:"Me gusta toda la música que me haga bailar y sobre todo sentir, depende el modo que andemos, pero mis tops son: Rufus du sol y la reina de reinas Beyonce.",fun_fact2:"",fun_fact3:""},
  {img: carmen , name:"Carmen", title:"Agradece un día más y a tu cuerpo por el gran esfuerzo",description:"Instructora de pilates y coach de indoor cycling. Mis clases son para que trabajes todo el cuerpo y tu mente, que te retes y al mismo tiempo disfrutes rodar. Mi música varía dependiendo del modo del momento, pero siempre hará moverte. Como coach quiero enseñarte a dar lo mejor de ti, a rodar con el corazón y posición adecuada, que salgas llena de energía y mejor actitud.",fun_fact1:"- Al final de clase siempre hay sentadillas",fun_fact2:"- Dog lover",fun_fact3:'Decir “una más” aunque falten 2 jajaja'},
  {img: larissa , name:"Larissa", title:"No compares tu día 1 con el día 1000 de otra persona, disfruta tu proceso",description:"Hello!! Soy Lari, fitness coach de funcional, barre y cycling. En mis clases encontrarás el balance perfecto entre intensidad y disfrute. Si has ido a mis clases sabes que SIEMPRE habrá  una o dos canciones reggaetón para bailar y cantar. Mi misión  en cada clase es enseñarte a rodar correctamente para que puedas ir subiendo de nivel todos los días.",fun_fact1:"- Amo poner reggaetón en la clase.",fun_fact2:"- Soy la más chiquita del team, todas las medidas de mi bici son 1.",fun_fact3:"- Mi parte favorita de la clase es la energía e intensidad del ultimo RUN."},
  {img: ivonne , name:"Ivonne", title:"Un pensamiento positivo puede cambiar tu dia",description:"Con la buena vibra por delante siempre disfrutarás una clase con Ivonne. La mezcla perfecta de canciones modernas y beats clásicos hace que estés en sintonía para disfrutar de un ride único. Siempre con la actitud de hacer equipo, atrévete a llenar la clase con pura energía positiva para llevarte lo bueno que se transmite en tu día.",fun_fact1:"",fun_fact2:"",fun_fact3:""},
  
];

SwiperCore.use([Navigation])

const Couch = () => {
    
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [trainer, setTrainer] = useState();
    const [active, setActive] = useState(false);
    const handleClick =( acti, data ) =>{
        setActive(acti);
        setTrainer(data);
    }
    
    
    return (
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
                    <Col xs={4} sm={8} md={7} lg={12}>
                        <div className="fit_trainer_inner">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={30}
                                slidesPerView={3}
                                loop={true}
                                speed={800}
                                autoplay={{ delay: 1000 }}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                pagination={{ clickable: true }}
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
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="swiper-container"
                            >
                                {slide_img.map((data, i) => {
                                    return (
                                        <SwiperSlide key={i} onClick={ e => handleClick(true, data )}>
                                            <div className="trainer_inner_slider">
                                                <div className="inner_slider_img">
                                                    <img src={data.img} className="img-fluid" alt="image" />
                                                </div>
                                                <h1 className="fit_trainer_title">{data.name}</h1>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            
                            <div className="swiper-button-next trainer_nav" ref={nextRef}>
                                <span className="about_nav"><ArrowForwardIos /></span>
                            </div>
                            <div className="swiper-button-prev trainer_nav" ref={prevRef}>
                                <span className="about_nav"><ArrowBackIos /></span>
                            </div>
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal
                active={active}
                trainer = {trainer} 
                hideModal={() => setActive( (false))}
            >
            </Modal>
        </FitTrainerWrapper>
    )
}

export default Couch
