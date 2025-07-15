import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Menu, MenuItem, Slide, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useWindowSize } from '@/hooks/useWindowSize';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { event } from 'nextjs-google-analytics';

const pages = ['home', 'company', 'services', 'projects', 'blog', 'faqs', 'contact_us'];
const langaugeSelector = [
  { name: 'English', route: 'en', flagUrl: '/images/en.svg' },
  { name: 'Deutsch', route: 'de', flagUrl: '/images/de.svg' },
];

const Header = () => {
  const { t: translate } = useTranslation<any>();
  const [currentRoute, setCurrentRoute] = useState('HOME');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { push, pathname, replace } = useRouter();
  const { isTabletView } = useWindowSize();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      setCurrentRoute('HOME');
    } else {
      setCurrentRoute(pathname.toUpperCase().replace('/', ''));
    }

    return () => {
      setCurrentRoute('');
    };
  }, [pathname]);

  useEffect(() => {
    console.log('the current isTabletView status is', isTabletView);
  }, [isTabletView]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const updateSelectedLanguage = (selectedLanguage) => {
    event('update_language_btn_click', {
      category: 'Language',
      action: 'Click',
      label: 'Change Language',
    });

    const { pathname } = router;
    const { route: languageRoute } = selectedLanguage;
    replace(`${languageRoute}${pathname}`, `${languageRoute}${pathname}`, { locale: `${languageRoute}` });
  };

  const handleLogoClick = () => {
    router.push(`/`);
  };

  const handleRouting = (page: string) => {
    const route = page.toUpperCase();

    switch (route) {
      case 'HOME':
        push(`/`);
        break;
      case 'COMPANY':
        push('/company');
        break;
      case 'SERVICES':
        push('/services');
        break;
      case 'PROJECTS':
        push('/projects');
        break;
      case 'BLOG':
        push('/blog');
        break;
      case 'FAQS':
        push('/faqs');
        break;
      case 'CONTACT_US':
        push('/contact-us');
        break;
      default:
        break;
    }

    if (mobileOpen) {
      setTimeout(() => {
        handleDrawerToggle();
      }, 100);
    }
  };

  const scrollToTargetById = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 76;
    const elementPosition = element?.getBoundingClientRect().top as number;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleLetsTalk = () => {
    event('lets_talk_header_btn_click', {
      category: 'Contact',
      action: 'Click',
      label: 'Lets talk Header Button',
    });

    scrollToTargetById('footer');
  };

  const drawer = (
    <Box paddingTop={1} sx={{ backgroundColor: 'black' }}>
      <Image src={'/images/wexcute-logo-text-1.svg'} width={168} height={40} alt="Wexcute Logo" />
      <Divider />

      <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
        {pages.map((page) => (
          <Slide in={mobileOpen} direction="down" timeout={500}>
            <ListItemButton
              key={page}
              onClick={() => handleRouting(page)}
              sx={{
                color: currentRoute === page.toUpperCase() ? 'primary.main' : 'secondary.contrastText',
              }}
            >
              <ListItemIcon sx={{ color: currentRoute === page.toUpperCase() ? 'primary.main' : 'secondary.contrastText' }}>
                {translate(`common:header:pages:${page}`)}
              </ListItemIcon>
            </ListItemButton>
          </Slide>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}>
      <AppBar
        position="absolute"
        component="nav"
        sx={{
          top: '16px',
          background: 'transparent',
          height: '90px',
          width: '100%',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          boxShadow: 'none',
        }}
      >
        <Stack className="section-content" direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
          {isTabletView ? (
            <Image
              src={'/images/wexcute-logo-icon.svg'}
              width={56}
              height={56}
              alt="Wexcute Logo"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <Image
              src={'/images/wexcute-logo-text-1.svg'}
              width={220}
              height={56}
              alt="Wexcute Logo"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer', filter: pathname === '/contact-us' ? 'invert(1)' : 'none' }}
            />
          )}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: 'white',
                  filter: pathname === '/contact-us' ? 'invert(1)' : 'none',
                  px: '20px',
                  borderBottom: currentRoute === page.toUpperCase() ? '2px solid #E41469' : 'none',
                  fontSize: '16px',
                  fontWeight: 400,
                  borderRadius: '0px',
                }}
                onClick={() => {
                  handleRouting(page);
                }}
              >
                {translate(`common:header:pages:${page}`)}
              </Button>
            ))}
          </Box>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="contained"
              sx={{
                display: { xs: 'none', lg: 'block' },
                padding: '0px',
                borderRadius: '100px',
                minWidth: '140px',
                height: '46px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
              onClick={handleLetsTalk}
            >
              {translate(`common:header:buttonText`)}
            </Button>

            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  ':hover': {
                    backgroundColor: 'black',
                  },
                  backgroundColor: '#232932',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                }}
              >
                <TranslateIcon />
              </IconButton>

              <Menu
                sx={{ mt: '56px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                disableScrollLock={true}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {langaugeSelector.map((language) => (
                  <MenuItem
                    key={language.name}
                    onClick={() => {
                      handleCloseUserMenu();
                      updateSelectedLanguage(language);
                    }}
                    sx={{ gap: '8px' }}
                  >
                    <Image src={language.flagUrl} width={27} height={27} alt="image" />
                    <Typography textAlign="center">{language.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              <IconButton
                size="large"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                color="inherit"
                sx={{ display: { md: 'block', lg: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Box id="drawer-wrapper">
          <Drawer
            disableScrollLock={true}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': { width: '240px' },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </AppBar>
    </motion.div>
  );
};

export default Header;
