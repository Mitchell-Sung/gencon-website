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

// return (
//     <Card className={`${style.card_mobile} ${style.card_desktop}`}>
//         <CardHeader className={style.card_header} title={project.title} />
//         <CardMedia className={style.card_media}>
//             <Box
//                 component='img'
//                 className={style.card_media_img}
//                 src={project.img[0]}
//                 alt={project.imgAlt}
//                 loading='lazy'
//             />
//         </CardMedia>
//         <CardContent className={style.card_content}>
//             <Typography variant='body1' color='text.secondary'>
//                 {project.desc.substring(0, 90) + ' ...'}
//             </Typography>
//             <SectionDivider />
//             <Box component='div' className={style.card_content_div}>
//                 {project.stacks.map((stack, index) => (
//                     <Tooltip key={index} arrow title={stack.title}>
//                         <Box
//                             key={index}
//                             component='img'
//                             className={style.card_content_div_img}
//                             src={stack.img}
//                             alt='stack_icon'
//                         />
//                     </Tooltip>
//                 ))}
//             </Box>
//         </CardContent>
//         <CardActions className={style.card_actions}>
//             <Chip
//                 className={style.card_actions_chip}
//                 label='Learn More'
//                 variant='outlined'
//                 onClick={() =>
//                     navigateToUrl(`${ROUTE.PROJECTS}/${project.id}`)
//                 }
//             />
//         </CardActions>
//     </Card>
