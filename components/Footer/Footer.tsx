import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { Box, Stack } from '@mui/material';
import FooterForm from '@/components/Footer/FooterForm/FooterForm';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t: translate } = useTranslation<any>();
  const { asPath } = useRouter();
  const isContactUsPage = asPath === '/contact-us';
  const isBlogPage = asPath === '/blog';
  const isBlogPostPage = asPath === '/blog-post';
  const backgroundImageUrl = '/images/footer-bg.png';

  let currentYear = new Date().getFullYear();

  return (
    <Box
      id="footer"
      sx={{
        alignItems: 'center',
        paddingTop: { xs: '40px', sm: isContactUsPage ? '0' : '0' },
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: { xs: '40px 40px 0px 0px', sm: '80px 80px 0px 0px', lg: '100px 100px 0px 0px' },
      }}
    >
      {!isContactUsPage && !isBlogPage && !isBlogPostPage && <FooterForm />}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          color: isContactUsPage ? 'black' : 'neutral.main',
          paddingTop: '40px',
          paddingBottom: '40px',
          textAlign: 'center',
          paddingX: '24px',
        }}
      >
        <Stack>
          ©{currentYear}. {translate(`common:footer:bottomLine`)}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
