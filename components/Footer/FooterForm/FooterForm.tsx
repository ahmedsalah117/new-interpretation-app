import styles from './style.module.scss';
import { Stack, Typography, TextField, Button, FormControl } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';

const FooterForm = () => {

  const { t: translate } = useTranslation<any>();
  const { asPath } = useRouter();
  const isContactUsPage = asPath === '/contact-us';

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateFields = () => {
    let errors: any = {};


    // errors.firstName = formValues.firstName ? '' : 'Name is required';
    // errors.lastName = formValues.lastName ? '' : 'Last name is required';

    if (!formValues.firstName) {
      errors.firstName = 'First Name is required';
    } else if (/[`~!@#$%^&*()\-_=+\[\];:'"\\|,<.>/?]/.test(formValues.firstName)) {
      errors.firstName = 'Invalid Name';
    } else {
      errors.firstName = '';
    }

    if (!formValues.lastName) {
      errors.lastName = 'Last Name is required';
    } else if (/[`~!@#$%^&*()\-_=+\[\];:'"\\|,<.>/?]/.test(formValues.lastName)) {
      errors.lastName = 'Invalid Name';
    } else {
      errors.lastName = '';
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = '';
    }

    setFormErrors(errors);
    return !Object.values(errors).some((x) => x !== '');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (validateFields()) {
      sendEmail(formValues);
    }
  };

  const sendEmail = (templateParams: any) => {
    emailjs.send('service_ibjw9ha', 'template_ify6tqv', templateParams, 'dsE_EFZFMuVJdPC9k').then(
      (response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setFormValues({ firstName: '', lastName: '', email: '', text: '' });
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 5000);

        event('submit_form', {
          category: 'Contact',
          action: 'Click',
          label: 'Submit Form Message',
        });
      },
      (error) => {
        console.error('Email failed to send.', error);
      }
    );
  };

  return (
    <Stack className="section-container" direction={{ xs: 'column', md: 'row' }} pt="56px">
      <Stack id="contact-us-container" className="section-content" direction={{ xs: 'column', md: 'row' }} spacing={1}>
        <Stack spacing={5} maxWidth={'700px'} width="100%">
          <Stack spacing={2} width="100%">
            <Typography fontSize="40px" fontWeight={700} className="lets-talk-header" width="100%" maxWidth="330px">
              {translate(`common:footer:title`)}
            </Typography>
            <Typography fontSize="20px" fontWeight={400} lineHeight="32px" color="white">
              {translate(`common:footer:body`)}
            </Typography>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} maxWidth={'700px'} width="100%" spacing={{ xs: 4, md: '' }}>
            <Stack spacing={3} maxWidth={'300px'}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Image src={'/images/eg.svg'} width={27} height={20} alt="image" />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  {translate(`common:footer:address:egypt`)}
                </Typography>
              </Stack>

              <Stack spacing={1} justifyContent={'center'}>
                <Stack direction="row" alignItems="flex-start" spacing={2} minHeight="45px">
                  <LocationOnOutlinedIcon sx={{ color: 'white', width: '24px', height: '24px' }} />

                  <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="white">
                    Road 18, Sarayat El Maadi, 5th Floor,Building # 55, Cairo.
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="flex-start" spacing={2}>
                  <LocalPhoneOutlinedIcon sx={{ color: 'white', width: '24px', height: '24px' }} />

                  <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="white">
                    +20 11155 51059
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={3} maxWidth={'300px'}>
              <Stack direction="row" alignItems="flex-start" spacing={1}>
                <Image src={'/images/de.svg'} width={27} height={20} alt="image" />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  {translate(`common:footer:address:germany`)}
                </Typography>
              </Stack>

              <Stack spacing={1} justifyContent={'center'}>
                <Stack direction="row" alignItems="flex-start" spacing={2} minHeight="45px">
                  <LocationOnOutlinedIcon sx={{ color: 'white', width: '24px', height: '24px' }} />

                  <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="white">
                    Lindenstraße 1, 20099 Hamburg.
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="flex-start" spacing={2}>
                  <LocalPhoneOutlinedIcon sx={{ color: 'white', width: '24px', height: '24px' }} />

                  <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="white">
                    +49 1573 2897307
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} maxWidth={'700px'} width="100%">
            <Stack spacing={2} maxWidth="300px" width={'100%'}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailOutlinedIcon sx={{ color: 'white', width: '24px', height: '24px' }} />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  Email
                </Typography>
              </Stack>
              <Typography fontSize="16px" fontWeight={600} lineHeight="24px" color="white">
                <a href="mailto:info@wexcute.com">info@wexcute.com</a>
              </Typography>
            </Stack>

            <Stack spacing={2} maxWidth="300px" width="100%">
              <Stack direction="row" alignItems="center" spacing={1}>
                <AccessTimeOutlinedIcon sx={{ color: 'white', width: '24px', height: '24px' }} />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  {translate(`common:footer:workingHours`)}
                </Typography>
              </Stack>
              <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="white">
                Mon - Fri: 9 am — 6 pm
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2}>
            <a href="https://www.facebook.com/wexcute" target="_blank">
              <FacebookIcon sx={{ fontSize: '36px', color: 'white' }} />
            </a>

            <a href="https://www.linkedin.com/company/wexcute/" target="_blank">
              <LinkedInIcon sx={{ fontSize: '36px', color: 'white' }} />
            </a>
          </Stack>
        </Stack>

        <Stack
          alignSelf={{ sm: 'center' }}
          width="100%"
          spacing={3}
          maxWidth="485px"
          justifyContent="center"
          padding={{ xs: '20px', md: '48px' }}
          sx={{
            backgroundColor: 'white',
            borderRadius: '16px',
          }}
        >
          <Typography fontSize="20px" fontWeight={600} lineHeight="32px" align="left">
            {translate(`common:footer:form:title`)}
          </Typography>

          <Stack>
            <FormControl sx={{ width: '100%' }}>
              <Stack spacing={1}>
                {emailSent && (
                  <Typography color="primary.main" fontSize="20px" fontWeight={400} lineHeight="32px" textAlign="center">
                    Email has been sent successfully!
                  </Typography>
                )}
                <Stack spacing={3}>
                  <Stack spacing={2}>
                    <Stack direction="row" width="100%" spacing={3}>
                      <TextField
                        size="small"
                        required

                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        type="text"
                        variant="outlined"
                        label={translate(`common:footer:form:firstName`)}
                        sx={{
                          width: '100%',
                        }}
                        error={!!formErrors.firstName}
                        helperText={formErrors.firstName}
                      />

                      <TextField
                        required
                        name="lastName"
                        size="small"
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        type="text"
                        variant="outlined"
                        label={translate(`common:footer:form:lastName`)}
                        sx={{
                          width: '100%',
                        }}
                        error={!!formErrors.lastName}
                        helperText={formErrors.lastName}
                      />
                    </Stack>
                    <TextField
                      required
                      size="small"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      type="email"
                      variant="outlined"
                      label={translate(`common:footer:form:email`)}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                    />
                  </Stack>

                  <TextField
                    name="text"
                    value={formValues.text}
                    onChange={handleInputChange}
                    type="text"
                    variant="outlined"
                    multiline
                    rows={8}
                    label={translate(`common:footer:form:textArea`)}
                    error={!!formErrors.text}
                    helperText={formErrors.text}
                  />
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ fontWeight: 700, boxShadow: 'none', borderRadius: '100px' }}
                  >
                    {translate(`common:footer:form:buttonText`)}
                  </Button>
                </Stack>
              </Stack>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterForm;
