import { Box } from '@mui/material'
import React from 'react'
import ContactUs from '@/components/contactUs/ContactUs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



const ContactUsPage = () => {
  return (
    <>
      <ContactUs />
    </>
  );
}

export default ContactUsPage

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
