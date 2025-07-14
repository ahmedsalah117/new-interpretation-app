import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { Box, Stack, Typography, Grid, Link } from '@mui/material';
import FooterFormCopy from '@/components/FooterCopy/FooterFormCopy/FooterFormCopy';
import { useTranslation } from 'next-i18next';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterCopy = () => {
  const { t: translate } = useTranslation();
  const { asPath } = useRouter();
  const isContactUsPage = asPath === '/contact-us';
  const isBlogPage = asPath === '/blog';
  const isBlogPostPage = asPath === '/blog-post';
  const backgroundImageUrl = '/images/footer-bg.png';

  let currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/company' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'Consulting', href: '/services' },
      { name: 'Projects', href: '/projects' },
    ],
  };

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://www.facebook.com/wexcute', label: 'Facebook' },
    { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/wexcute/', label: 'LinkedIn' },
    { icon: TwitterIcon, href: 'https://twitter.com/wexcute', label: 'Twitter' },
    { icon: InstagramIcon, href: 'https://instagram.com/wexcute', label: 'Instagram' },
    { icon: YouTubeIcon, href: 'https://youtube.com/wexcute', label: 'YouTube' },
  ];

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
      {!isContactUsPage && !isBlogPage && !isBlogPostPage && <FooterFormCopy />}

      {/* Footer Links Section */}
      <Box sx={{ paddingX: { xs: '24px', md: '48px' }, paddingY: '60px' }}>
        <Grid container spacing={4}>
          {/* Company Links */}
          <Grid columns={{xs: 12, sm: 6, md: 3}}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '16px',
                }}
              >
                Company
              </Typography>
              <Stack spacing={2}>
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: 400,
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Support Links */}
          <Grid columns={{xs: 12, sm: 6, md: 3}}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '16px',
                }}
              >
                Support
              </Typography>
              <Stack spacing={2}>
                {footerLinks.support.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: 400,
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Services Links */}
          <Grid columns={{xs: 12, sm: 6, md: 3}}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '16px',
                }}
              >
                Services
              </Typography>
              <Stack spacing={2}>
                {footerLinks.services.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: 400,
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Social Media Links */}
          <Grid columns={{xs: 12, sm: 6, md: 3}}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '18px',
                  marginBottom: '16px',
                }}
              >
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <social.icon sx={{ fontSize: '20px' }} />
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingX: { xs: '24px', md: '48px' },
          paddingY: '32px',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: 400,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © {currentYear} Wexcute. {translate(`common:footer:bottomLine`)}
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <Link
              href="/terms"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 400,
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 400,
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterCopy;
