import { ContactForm, ContactPanel } from '../containers';
import { Page, Section } from '../components/Tags';
import { UnderLineTitle } from '../components';
import { sx_Contact } from '../styles/contactSx';

function Contact() {
    return (
        <Page sx={sx_Contact.page}>
            <UnderLineTitle width='100px' height='7px' />
            <Section sx={sx_Contact.section}>
                <ContactPanel />
                <ContactForm />
            </Section>
        </Page>
    );
}

export default Contact;
