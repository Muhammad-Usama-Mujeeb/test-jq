import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface ResumeScoreProps {
    score: number;
    textColor?: string;
    backgroundColor?: string;
}

const ResumeScore = ({ score, textColor = "rgba(0, 0, 0, 0.50)", backgroundColor = "rgba(0, 0, 0, 0.10)" }: ResumeScoreProps) => {
    const [jobMatchResult, setJobMatchResult] = useState<string | undefined>();
    
    useEffect(() => {
        if (score >= 0 && score <= 50) {
            setJobMatchResult('Poor');
        } else if (score >= 51 && score <= 59) {
            setJobMatchResult('Marginal');
        } else if (score >= 60 && score <= 74) {
            setJobMatchResult('Fair');
        } else if (score >= 75 && score <= 89) {
            setJobMatchResult('Good');
        } else if (score >= 90 && score <= 100) {
            setJobMatchResult('Excellent');
        } else {
            setJobMatchResult(undefined);
        }
    }, [score]);

    return (
        <Paper
            sx={{
                width: '233px',
                height: '233px',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: backgroundColor,
            }}
            elevation={3}
        >
            <Box>
                <Typography variant="h3" color={textColor}>
                    {score}
                </Typography>
                <Typography color={textColor}>
                    /100
                </Typography>
            </Box>
            {jobMatchResult && (
                <Typography variant="body1" sx={{color: textColor, pt:'1.5rem'}} >
                    {jobMatchResult}
                </Typography>
            )}
        </Paper>
    );
}

export default ResumeScore;
