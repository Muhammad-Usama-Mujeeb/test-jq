import { Grid, Typography, Button, Box, Accordion, AccordionSummary, AccordionDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useState } from 'react';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import ResumeScore from '../../components/ResumeScore';
import RecommendationList from '../../components/RecommendationList';

const JobScorePage = () => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleChange = (panel: string) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
    if (isExpanded) {
      setExpanded([...expanded, panel]);
    } else {
      setExpanded(expanded.filter((item) => item !== panel));
    }
  };

  const recommendation = ["Your resume matches the job description very well.",
    "Your resume has an excellent chance of passing the keyword screening by Applicant Tracking Software.",
    "Your resume may be viewed as a qualifying one by a human reviewer.",
    "Do not customize your resume."
  ]

  const jobTitle = {
    "Occupation": {
      "requirement": "UX/UI Design",
      "resume": "UX/UI Design",
      "result": "Match"
    },
    "Seniority": {
      "requirement": "Senior",
      "resume": "Senior",
      "result": "Match"
    }
  }

  const experience = {
    "years": {
      "requirement": "5 Years",
      "resume": "3 years in Resume",
      "result": "No Match"
    },
    "experience": [
      {
        "requirement": "Practical experience with React",
        "resume": "The candidate has mentioned 'Delivered production-ready code using ReactJS, Redux, and Node.js with ES6' in their work experience at Wells Fargo. This shows that the candidate has practical experience with React.",
        "result": "Match"
      },
      {
        "requirement": "Hooks and functional Components",
        "resume": "The candidate has not mentioned any experience with hooks and functional components in their resume",
        "result": "No Match"
      },
      {
        "requirement": "Developing clean, valid, and compatible websites",
        "resume": "The candidate has mentioned 'Improved website performance by optimizing code and reducing page load times' in their work experience at Wells Fargo. This implies that the candidate has experience in developing clean and valid websites. However, there is no explicit mention of developing compatible websites",
        "result": "Partial Match"
      }
    ]
  }

  const skills = [
    {
      "requirement": "React",
      "resume": "The candidate has mentioned using ReactJS in their skills section and in their job bullet points",
      "result": "No Match"
    },
    {
      "requirement": "UX/UI Design",
      "resume": "The candidate has not mentioned UI/UX design in their resume.",
      "result": "Match"
    },
    {
      "requirement": "Design System",
      "resume": "The candidate has not mentioned visual design systems in their resume",
      "result": "No Match"
    },
    {
      "requirement": "ES6 Javascript",
      "resume": "The candidate has mentioned using ES6 Javascript in their skills section and in their job bullet points",
      "result": "Partial Match"
    },
    {
      "requirement": "Figma",
      "resume": "The candidate has not mentioned Figma in their resume.",
      "result": "Partial Match"
    },
    {
      "requirement": "API Interactions",
      "resume": "The candidate has mentioned API interactions in their job bullet points as 'Fetched REST APIs and made HTTP calls using Axios with Redux middlewares",
      "result": "Partial Match"
    }
  ]

  const responsibilities = [
    {
      "requirement": "Leading user-centered graphic design and interaction processes",
      "resume": "The resume does not mention leading user-centered graphic design and interaction processes.",
      "result": "No Match"
    },
    {
      "requirement": "Gathering and analyzing requirements from partners and iterating through user interface (UI) mockups and prototypes",
      "resume": "The resume does not mention gathering and analyzing requirements from partners and iterating through user interface (UI) mockups and prototypes.",
      "result": "No Match"
    },
    {
      "requirement": "Designing and developing frontend user interfaces at scale for the data and machine learning platform",
      "resume": "The resume mentions designing and developing frontend user interfaces but does not specify that it was at scale for a data and machine learning platform.",
      "result": "Partial Match"
    },
    {
      "requirement": "Working closely with team members and collaborating with other engineering teams",
      "resume": "The resume mentions collaborating with back-end developers, which implies working closely with team members and collaborating with other engineering teams.",
      "result": "Match"
    },
    {
      "requirement": "Scaling the platform to accommodate a large number of users",
      "resume": "The resume does not mention scaling the platform to accommodate a large number of users",
      "result": "No Match"
    }
  ]

  return (
    <Box margin={'5rem'}>
      <Typography variant="h5" sx={{ textAlign: "left", margin: '30px' }} >Your Job Match Score</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" sx={{ minWidth: '150px', justifyContent: 'left', background: 'rgba(0, 0, 0, 0.25)', color: "#000" }}>Score</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ minWidth: '150px', justifyContent: 'left', background: 'rgba(0, 0, 0, 0.25)', color: "#000" }}>X-Ray AWS</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ minWidth: '150px', justifyContent: 'left', background: 'rgba(0, 0, 0, 0.25)', color: "#000" }}>AWS Resume</Button>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: '1.5rem', alignItems: 'center' }}>
          <Grid item>
          <ResumeScore score={90} />
          </Grid>
          <Grid item>
            <Typography variant="h5">Recommendations</Typography>
            <RecommendationList recommendations={recommendation}></RecommendationList>
          </Grid>
        </Grid>
        <Accordion expanded={expanded.includes('panel1')} onChange={handleChange('panel1')} sx={{ background: 'rgba(0, 0, 0, 0.10)', }}>
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 }}>
              <Box sx={{ display: 'flex' }}>
                {expanded.includes('panel1') ? <Remove fontSize='small' /> : <Add fontSize='small' />}
                <Typography variant='body1'>Job Title Match</Typography>
              </Box>
              <Typography variant='body1'>100%</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table aria-label="job-title-match">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Item</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Job Requirement</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Resume</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(jobTitle).map(([key, item]) => (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell>{item.requirement}</TableCell>
                      <TableCell>{item.resume}</TableCell>
                      <TableCell>{item.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes('panel2')} onChange={handleChange('panel2')} sx={{ background: 'rgba(0, 0, 0, 0.10)', }}>
          <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 }}>
              <Box sx={{ display: 'flex' }}>
                {expanded.includes('panel2') ? <Remove fontSize='small' /> : <Add fontSize='small' />}
                <Typography variant='body1'>Years of Experience</Typography>
              </Box>
              <Typography variant='body1'>100%</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table aria-label="job-title-match">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Item</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Job Requirement</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Resume</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={"Years"}>
                    <TableCell>Years</TableCell>
                    <TableCell>{experience.years.requirement}</TableCell>
                    <TableCell>{experience.years.resume}</TableCell>
                    <TableCell>{experience.years.result}</TableCell>
                  </TableRow>
                  {experience.experience.map((exp, index) => (
                    <TableRow key={index}>
                      <TableCell>{index === 0 ? "Experience" : ""}</TableCell>
                      <TableCell>{exp.requirement}</TableCell>
                      <TableCell>{exp.resume}</TableCell>
                      <TableCell>{exp.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes('panel3')} onChange={handleChange('panel3')} sx={{ background: 'rgba(0, 0, 0, 0.10)', }}>
          <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header" >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 }}>
              <Box sx={{ display: 'flex' }}>
                {expanded.includes('panel3') ? <Remove fontSize='small' /> : <Add fontSize='small' />}
                <Typography variant='body1'>Skills</Typography>
              </Box>
              <Typography variant='body1'>100%</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table aria-label="job-title-match">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Job Requirement</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Resume</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {skills.map((skill, index) => (
                    <TableRow key={index}>
                      <TableCell>{skill.requirement}</TableCell>
                      <TableCell>{skill.resume}</TableCell>
                      <TableCell>{skill.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded.includes('panel4')} onChange={handleChange('panel4')} sx={{ background: 'rgba(0, 0, 0, 0.10)', }}>
          <AccordionSummary aria-controls="panel4bh-content" id="panel4bh-header">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1 }}>
              <Box sx={{ display: 'flex' }}>
                {expanded.includes('panel4') ? <Remove fontSize='small' /> : <Add fontSize='small' />}
                <Typography variant='body1'>Responsibility</Typography>
              </Box>
              <Typography variant='body1'>100%</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer>
              <Table aria-label="job-title-match">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Job Requirement</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Resume</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {responsibilities.map((responsibility, index) => (
                    <TableRow key={index}>
                      <TableCell>{responsibility.requirement}</TableCell>
                      <TableCell>{responsibility.resume}</TableCell>
                      <TableCell>{responsibility.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box >
  );
};

export default JobScorePage;