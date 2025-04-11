import {
    ButtonLearnMore,
    TypoTitleSection,
    TypoStartIcon,
} from '../components';
import { CheckCircleIcon, InfoOutlineIcon } from '../components/mui/Icons';
import { Container, Content, Img, Item, Section } from '../components/Tags';
import AboutUs from '../assets/AboutUs.jpg';
import { ROUTE } from '../consts';
import { homeAboutUsContainerData } from '../data';

function HomeAboutUsContainer() {
    return (
        <Container>
            <TypoTitleSection label='Who We Are' />
            <Section sx={{ display: 'flex', gap: '1.5rem' }}>
                <Content
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        flex: '0 0 60%',
                        justifyContent: 'center',
                    }}
                >
                    <Item
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            justifyContent: 'center',
                            paddingLeft: '1rem',
                            paddingTop: '1rem',
                        }}
                    >
                        {homeAboutUsContainerData.map((label) => (
                            <TypoStartIcon
                                key={label}
                                label={label}
                                variant='subtitle1'
                                fontWeight='400'
                                icon={
                                    <CheckCircleIcon
                                        sx={{ color: '#ef5350' }}
                                    />
                                }
                            />
                        ))}
                    </Item>
                    <ButtonLearnMore
                        width='150px'
                        label='Learn More'
                        link={ROUTE.ABOUT_US}
                        icon={<InfoOutlineIcon />}
                    />
                </Content>
                <Img
                    src={AboutUs}
                    alt={'Home About Img'}
                    style={{ width: '100%', borderRadius: '10px' }}
                />
            </Section>
        </Container>
    );
}

export default HomeAboutUsContainer;
