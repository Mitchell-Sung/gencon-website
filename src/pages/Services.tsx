import { Typography } from '../components/mui';
import { Page } from '../components/Tags';

function Services() {
    return (
        <Page>
            <Typography variant='h1' gutterBottom>
                Hello Services Page
            </Typography>
        </Page>
    );
}

export default Services;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import getProjectData from '../libs/getProjectData';
// import { EffectCards } from 'swiper/modules';
// import ProjectCard from '../components/ProjectCard';
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// function SwiperEffectCard() {
//     const projects = getProjectData();

//     return (
//         <Swiper
//             effect={'cards'}
//             grabCursor={true}
//             modules={[EffectCards]}
//             style={{
//                 width: '17rem',
//                 height: '29rem',
//                 display: 'flex',
//                 justifyContent: 'center',
//             }}
//         >
//             {projects.map((project) => (
//                 <SwiperSlide key={project.id}>
//                     <ProjectCard project={project} />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// }
