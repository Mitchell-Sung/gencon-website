import { homeHeroProjectImgData } from '../data';
import { Container } from '../components/Tags';
import { UnderLineTitle } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Swiper.css';

function HomeHeroProject() {
    return (
        <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
            <UnderLineTitle width='100px' height='7px' />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={2}
                navigation={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='mySwiper'
            >
                {homeHeroProjectImgData.map((project) => (
                    <SwiperSlide key={project.id}>
                        <img src={project.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}

export default HomeHeroProject;
