import { homeHeroServiceData, serviceGroupListData } from '../data';
import { ROUTE } from '../consts';
import { Container, Content, Img, Item, Section } from '../components/Tags';
import {
    ButtonLearnMore,
    HeroHeadlineTypo,
    HeroOutlinedTypo,
    HeroSubHeadlineTypo,
    TypoStartIcon,
    UnderLineTitle,
} from '../components';
import { CheckCircleIcon, EmojiObjectsIcon } from '../components/mui/Icons';
import ServiceGroups from '../assets/ServiceGroups.jpg';

function HomeHeroService() {
    const { title, headline, subHeadline, buttonLabel } = homeHeroServiceData;
    return (
        <Container
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
            <UnderLineTitle width='100px' height='7px' />
            <Section sx={{ display: 'flex', gap: '2rem' }}>
                <Content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        flex: '0 0 50%',
                    }}
                >
                    <Img
                        src={ServiceGroups}
                        style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <Item
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                            padding: '0rem 0.5rem',
                        }}
                    >
                        {serviceGroupListData.map((service) => (
                            <TypoStartIcon
                                key={service.id}
                                label={service.title}
                                variant='subtitle1'
                                icon={
                                    <CheckCircleIcon
                                        sx={{ color: '#ef5350' }}
                                        fontSize='small'
                                    />
                                }
                            />
                        ))}
                    </Item>
                </Content>
                <Content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <HeroOutlinedTypo label={title} />
                    <HeroHeadlineTypo label={headline} />
                    <HeroSubHeadlineTypo label={subHeadline} />
                    <ButtonLearnMore
                        width='140px'
                        label={buttonLabel}
                        link={ROUTE.SERVICES}
                        icon={<EmojiObjectsIcon />}
                    />
                </Content>
            </Section>
        </Container>
    );
}

export default HomeHeroService;
