import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//hi
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TRANSPORT MANAGEMENT SYSTEM
            </Typography>
            <Button component={Link} to="/login" color="inherit">Login</Button>
            <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
          </Toolbar>
        </AppBar>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <Box width="50%" mb={2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>TRIP DETAILS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Details for trips will be displayed here.</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box width="50%" mb={2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>BUS DETAILS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Details of buses will be displayed here.</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box width="50%" mb={2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>BUS STAGES</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Details for bus stages will be displayed here.</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box width="50%">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>CONTACT US</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Contact information will be displayed here.</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


