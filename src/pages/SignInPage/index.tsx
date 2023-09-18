import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function SignInPage() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmitEmail = async () => {
        // Send a request to your backend to generate and send a verification code to the email.
        // You should implement this API call on the backend.
        // After sending the request, navigate to the VerificationPage.
        // Example: await sendVerificationCode(email);
        navigate('/verification');
    };

    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
                <img src={logo} alt="job-quest-logo" height={'101px'} width={'243px'} />
                <Box sx={{ maxWidth: '600px', border: '1px solid rgba(0, 0, 0, 0.20)', padding: '20px', display: 'flex', justifyContent:'flex-start', flexDirection: 'column', gap: '30px' }}>
                    <Box>
                        <Typography variant="h5">Sign In</Typography>
                        <Typography variant="body1">Use your email address to sign into your account</Typography>
                    </Box>
                    <input
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    // Add more props and event handlers as needed
                    />
                    <Button type='submit'>Submit</Button>
                </Box>
            </Box>
        </div>
    );
}

export default SignInPage;
