import { companyData } from '.';
import {
    EmailIcon,
    HeadsetMicIcon,
    LocationPinIcon,
    Looks3Icon,
    LooksOneIcon,
    LooksTwoIcon,
} from '../components/mui/Icons';

const contactData = {
    title: `Let’s talk about your electrical needs.`,
    panel: {
        title_01: `What happens next?`,
        items_01: [
            {
                id: 1,
                icon: <LooksOneIcon sx={{ color: '#757575' }} />,
                text: `A licensed electrician will contact you to discuss your needs and gather key details.`,
            },
            {
                id: 2,
                icon: <LooksTwoIcon sx={{ color: '#757575' }} />,
                text: `If necessary, we’ll schedule a site visit to better understand the scope of the project.`,
            },
            {
                id: 3,
                icon: <Looks3Icon sx={{ color: '#757575' }} />,
                text: `You’ll receive a clear proposal including estimated costs, timelines, and service breakdowns.`,
            },
        ],
        title_02: `Contact Info:`,
        items_02: [
            {
                id: 1,
                icon: <HeadsetMicIcon fontSize='small' />,
                value: companyData.phone,
            },
            {
                id: 2,
                icon: <EmailIcon fontSize='small' />,
                value: companyData.email,
            },
            {
                id: 3,
                icon: <LocationPinIcon fontSize='small' />,
                value: companyData.location,
            },
        ],
    },
    form: {
        requiredLabel: '* Mandatory fields',
        fields: [
            {
                id: 'fullName',
                label: 'Full Name',
                helperText: 'John Smith',
                multiline: false,
            },
            {
                id: 'email',
                label: 'E-mail',
                helperText: 'you@example.com',
                multiline: false,
            },
            {
                id: 'phone',
                label: 'Phone',
                helperText: '587-555-1234',
                multiline: false,
            },
            {
                id: 'description',
                label: 'Describe the issue or service you’re requesting',
                multiline: true,
                rows: 7,
            },
        ],
        sendBtnLabel: 'Send Request',
        privacyLabel: 'Your privacy is protected',
    },
};

export default contactData;
