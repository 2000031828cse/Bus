import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'),], 'Passwords must match').required('Confirm Password is required'),
});

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '2rem',
          boxShadow: 3,
          borderRadius: 6,
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8, mt: 1 }}>
          <img
            src="https://kfintech.com/new-assets/images/logo/kfintech-white-tagline.svg"
            alt="KFINTECH Logo"
            style={{ width: '200px', height: 'auto' }}
          />
        </Box>
        <Typography variant="h4" sx={{ mb: 4 }}>
          <strong>Create an Account</strong>
        </Typography>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
                  First Name*
                </Typography>
                <Field
                  as={TextField}
                  name="firstName"
                  placeholder="Enter First Name"
                  fullWidth
                  variant="outlined"
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
                  Last Name*
                </Typography>
                <Field
                  as={TextField}
                  name="lastName"
                  placeholder="Enter Last Name"
                  fullWidth
                  variant="outlined"
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
                  Email*
                </Typography>
                <Field
                  as={TextField}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  fullWidth
                  variant="outlined"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
                  Password*
                </Typography>
                <Field
                  as={TextField}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  fullWidth
                  variant="outlined"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
                  Confirm Password*
                </Typography>
                <Field
                  as={TextField}
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  fullWidth
                  variant="outlined"
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: '100%' }}
                >
                  Sign Up
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ textAlign: 'left' }}>
          <Typography
            variant="body2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              color: 'grey.600',
            }}
          >
            <InfoOutlinedIcon sx={{ mr: 1, color: 'primary' }} />
            If you are facing any technical issues or looking for help, please
            reach out to us.
          </Typography>
          <Link
            href="mailto:helpatkfintech.com"
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              color: 'grey.600',
            }}
          >
            <MailOutlineIcon sx={{ mr: 1, color: '#1976d2' }} />
            helpatkfintech.com
          </Link>
          <Typography
            variant="body2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'grey.600',
              mb: 2,
            }}
          >
            <PhoneIphoneIcon sx={{ mr:1, color: '#1976d2' }} />
            9876544665
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;

