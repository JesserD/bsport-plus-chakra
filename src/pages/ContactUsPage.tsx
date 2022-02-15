import * as React from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea,
    Button,
} from '@chakra-ui/react';
import { H1, PageDiv } from '../components/CustomisedElements/CustomisedElements';

export default function ContactUsPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [invalidName, setInvalidName] = React.useState<boolean>(false);
    const [invalidEmail, setInvalidEmail] = React.useState<boolean>(false);
    const [invalidMessage, setInvalidMessage] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log('name: ' + name, 'invalidName: ' + (invalidName));
    }, [name, invalidName]);
    React.useEffect(() => {
        console.log('email: ' + email, 'invalidEmail: ' + (invalidEmail));
    }, [email, invalidEmail]);

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        const isValid = !(e.currentTarget.value.length === 0);
        setInvalidName(!isValid);
        setName(e.currentTarget.value);
    };
    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        const isValid =
            newValue.includes('@') &&
            newValue.includes('.') &&
            newValue.indexOf('@') < newValue.lastIndexOf('.');
        setInvalidEmail(!isValid);
        setEmail(newValue);
    };
    const handleMessageChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const isValid = !(e.currentTarget.value.length === 0);
        setInvalidMessage(!isValid);
        setMessage(e.currentTarget.value);
    };

    return (
        <PageDiv>
            <H1>Contact us</H1>
            <FormControl isRequired>
                <FormLabel htmlFor='name'>Full name</FormLabel>
                <Input id='name' type='name' value={name} onChange={handleNameChange} isInvalid={invalidName} />
                <FormHelperText> Enter your full name</FormHelperText>

                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' value={email} onChange={handleEmailChange} isInvalid={invalidEmail} />
                <FormHelperText> Enter your email address (format xxxx@xxx.xxx)</FormHelperText>

                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea id='message' type='message' value={message} onChange={handleMessageChange}
                    isInvalid={invalidMessage} placeholder='' />
                <FormHelperText>Enter your message</FormHelperText>

                <Button bg='#fed7d7' color='balck' mt={4} type='submit'>Submit</Button>
            </FormControl>
        </PageDiv>
    );
}