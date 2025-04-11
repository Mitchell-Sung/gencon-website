import { TextField } from './mui';

type Props = {
    field: {
        label: string;
        helperText?: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
};

function TextFieldContactForm({ field }: Props) {
    return (
        <TextField
            required
            variant='outlined'
            label={field.label}
            helperText={field.helperText}
            value={field.value}
            onChange={field.onChange}
            slotProps={{
                inputLabel: { shrink: true },
            }}
        />
    );
}

export default TextFieldContactForm;
