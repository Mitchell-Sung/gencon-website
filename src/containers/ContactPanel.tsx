import data from '../data/contactData';
import { Container, Content, Item, Section } from '../components/Tags';
import { Typography } from '../components/mui';
import { sx_ContactPanel } from '../styles/contactSx';

function ContactPanel() {
    return (
        <Container sx={sx_ContactPanel.container}>
            <Typography variant='h4'>{data.title}</Typography>
            <Section sx={sx_ContactPanel.section_01}>
                <Typography variant='h5'>{data.panel.title_01}</Typography>
                <Content sx={sx_ContactPanel.content_01}>
                    {data.panel.items_01.map((item) => (
                        <Item key={item.id} sx={sx_ContactPanel.item_01}>
                            {item.icon}
                            <Typography>{item.text}</Typography>
                        </Item>
                    ))}
                </Content>
            </Section>
            <Section sx={sx_ContactPanel.section_02}>
                <Typography variant='h5'>{data.panel.title_02}</Typography>
                <Content sx={sx_ContactPanel.content_02}>
                    {data.panel.items_02.map((item) => (
                        <Item key={item.id} sx={sx_ContactPanel.item_02}>
                            {item.icon}
                            <Typography sx={sx_ContactPanel.typography}>
                                {item.value}
                            </Typography>
                        </Item>
                    ))}
                </Content>
            </Section>
        </Container>
    );
}

export default ContactPanel;
