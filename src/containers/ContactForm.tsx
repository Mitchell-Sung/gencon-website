import data from '../data/contactData';
import { Content, Item } from '../components/Tags';
import { Button, Paper, TextField, Typography } from '../components/mui';
import { SendIcon, VerifiedUserIcon } from '../components/mui/Icons';
import { sx_ContactForm } from '../styles/contactSx';

function ContactForm() {
    return (
        <Paper sx={sx_ContactForm.paper}>
            <Typography variant='caption' sx={sx_ContactForm.typo_01}>
                {data.form.requiredLabel}
            </Typography>
            <Content sx={sx_ContactForm.content_01}>
                {data.form.fields.map((field) => (
                    <TextField
                        key={field.id}
                        required
                        variant='outlined'
                        label={field.label}
                        helperText={field.helperText}
                        multiline={field.multiline}
                        rows={field.rows}
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                    />
                ))}
            </Content>
            <Content sx={sx_ContactForm.content_02}>
                <Button
                    variant='contained'
                    endIcon={<SendIcon />}
                    sx={sx_ContactForm.button_01}
                >
                    {data.form.sendBtnLabel}
                </Button>
                <Item sx={sx_ContactForm.item_01}>
                    <VerifiedUserIcon
                        fontSize='small'
                        sx={sx_ContactForm.icon_01}
                    />
                    <Typography sx={{ fontSize: '0.95rem' }}>
                        {data.form.privacyLabel}
                    </Typography>
                </Item>
            </Content>
        </Paper>
    );
}

export default ContactForm;
