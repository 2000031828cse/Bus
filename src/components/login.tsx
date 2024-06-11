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
  userId: Yup.string().email().required('User ID is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage: React.FC = () => {
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
          <strong>Welcome!</strong>
        </Typography>
        <Formik
          initialValues={{ userId: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
                  User ID*
                </Typography>
                <Field
                  as={TextField}
                  name="userId"
                  placeholder="Enter User ID"
                  fullWidth
                  variant="outlined"
                  error={touched.userId && Boolean(errors.userId)}
                  helperText={touched.userId && errors.userId}
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Link href="#" underline="hover" sx={{ color: 'grey.600' }}>
                  Forgot Password
                </Link>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: '100%' }}
                >
                  Login
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
            <PhoneIphoneIcon sx={{ mr: 1, color: '#1976d2' }} />
            9876544665
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;

