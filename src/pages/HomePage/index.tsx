import { Box, Link, Typography } from "@mui/material";
import FileInputForm from "../../components/FileInputForm";
import Navbar from "../../components/Navbar";

function HomePage() {
    return (
        <Box>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', m: '5rem', textAlign: 'center' }}>
                <Box>
                    <Typography variant="h4" component="div" sx={{
                        fontWeight: 'bold',
                        color: 'grey',
                        fontSize: '28px'
                    }}>
                        Does Your Resume Align With The Job?
                    </Typography>
                    <Typography variant="body1">
                        Generate a job match score, use GPT-powered engine to tailor your resume for the job.
                    </Typography>
                </Box>
                <FileInputForm />
                <Link href="/guide" color="inherit" sx={{ textDecoration: 'none', '&:hover': { fontWeight: 'bold', color: 'blue' } }}>
                    How it Works 👇
                </Link>
            </Box>
        </Box>
    );
}

export default HomePage;
