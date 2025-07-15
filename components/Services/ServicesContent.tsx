import styles from './style.module.scss';
import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ServicesContent = () => {
  const { t: translate } = useTranslation<any>();
  const BackgroundImageUrl = '/images/expertise-deminsions-bg.png';

  const SERVICES_CARDS = [
    {
      icon: '/images/web-design-icon.svg',
      text: `${translate('services:expertiseDimensions:webDesign:body')}`,
      title: `${translate('services:expertiseDimensions:webDesign:title')}`,
    },
    {
      icon: '/images/web-app-icon.svg',
      text: `${translate('services:expertiseDimensions:webApplications:body')}`,
      title: `${translate('services:expertiseDimensions:webApplications:title')}`,
    },
    {
      icon: '/images/mobile-app-icon.svg',
      text: `${translate('services:expertiseDimensions:mobileApplications:body')}`,
      title: `${translate('services:expertiseDimensions:mobileApplications:title')}`,
    },

    {
      icon: '/images/modules-icon.svg',
      text: `${translate('services:expertiseDimensions:modules:body')}`,
      title: `${translate('services:expertiseDimensions:modules:title')}`,
    },
    {
      icon: '/images/web-games-icon.svg',
      text: `${translate('services:expertiseDimensions:webGames:body')}`,
      title: `${translate('services:expertiseDimensions:webGames:title')}`,
    },
    {
      icon: '/images/consulting-icon.svg',
      text: `${translate('services:expertiseDimensions:consulting:body')}`,
      title: `${translate('services:expertiseDimensions:consulting:title')}`,
    },
    {
      icon: '/images/vr-icon.svg',
      text: `${translate('services:expertiseDimensions:vr:body')}`,
      title: `${translate('services:expertiseDimensions:vr:title')}`,
    },
  ];

  return (
    <Stack className="section-container">
      <Stack
        className="section-content"
        id="services-page-expertise-section"
        spacing={"100px"}
      >
        <Stack
          pt="100px"
          maxWidth="1200px"
          direction={{ xs: "column", lg: "row" }}
          alignItems={{ xs: "flex-start", lg: "center" }}
          width="100%"
          spacing={{ xs: 2, lg: "80px" }}
        >
          <Typography
            fontSize={{ xs: "32px", lg: "48px" }}
            lineHeight="60px"
            fontWeight={700}
            className={styles["services-expertise-header"]}
            width="100%"
            maxWidth={{ xs: "100%", lg: "450px" }}
            // alignSelf="center"
          >
            {translate("services:ourExpertise:title")}
          </Typography>

          <Typography
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
            width="100%"
            maxWidth={{ xs: "100%", lg: "791px" }}
            color="#232932"
          >
            {translate("services:ourExpertise:body")}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={3}
          width="100%"
          className="solutions-section-wrapper"
          alignItems="center"
        >
          <Stack
            spacing={3}
            maxWidth="794px"
            width="100%"
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            <Stack
              maxWidth={{ xs: "383px", lg: "792px" }}
              width="100%"
              direction={{ xs: "column", lg: "row" }}
              sx={{
                padding: "24px",
                border: "1px solid #DFE6F0",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
              spacing={2}
            >
              <Stack
                maxWidth="360px"
                sx={{ borderRadius: "20px", overflow: "hidden" }}
                width="100%"
                alignItems="center"
              >
                <Image
                  src={"/images/start-up-solution-image.png"}
                  alt={"photo"}
                  width={360}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Stack>

              <Stack
                maxWidth="364px"
                width="100%"
                spacing="30px"
                textAlign="left"
              >
                <Typography
                  fontSize="24px"
                  fontWeight={700}
                  lineHeight="50px"
                  width="100%"
                >
                  {translate("services:startup:title")}
                </Typography>

                <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="30px"
                  width="100%"
                >
                  {translate("services:startup:body")}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              maxWidth={{ xs: "383px", lg: "792px" }}
              width="100%"
              direction={{ xs: "column", lg: "row" }}
              sx={{
                padding: "24px",
                border: "1px solid #DFE6F0",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
              spacing={2}
            >
              <Stack
                maxWidth="360px"
                sx={{ borderRadius: "20px", overflow: "hidden" }}
                width="100%"
                alignItems="center"
              >
                <Image
                  src={"/images/corporate-solution-image.png"}
                  alt={"photo"}
                  width={360}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Stack>

              <Stack maxWidth="364px" width="100%" spacing="30px">
                <Typography
                  fontSize={{ xs: "16px", lg: "24px" }}
                  fontWeight={700}
                  lineHeight="50px"
                  width="100%"
                >
                  {translate("services:corporate:title")}
                </Typography>

                <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="30px"
                  width="100%"
                >
                  {translate("services:corporate:body")}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            maxWidth="383px"
            width="100%"
            direction="column"
            sx={{
              paddingX: "24px",
              paddingY: "32px",
              border: "1px solid #DFE6F0",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
            spacing={2}
          >
            <Stack
              maxWidth="335px"
              sx={{ borderRadius: "20px", overflow: "hidden" }}
              alignItems="center"
              width="100%"
            >
              <Image
                src={"/images/app-development-image.png"}
                alt={"photo"}
                width={335}
                height={412}
                style={{
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </Stack>

            <Stack maxWidth="345px" width="100%" spacing="30px">
              <Typography
                fontSize="24px"
                fontWeight={700}
                lineHeight="50px"
                maxWidth="330px"
                width="100%"
              >
                {translate("services:appDevelopment:title")}
              </Typography>

              <Typography fontSize="16px" fontWeight={400} lineHeight="30px">
                {translate("services:appDevelopment:body")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          className="expertise-dimensions-wrapper"
          direction="row"
          maxWidth="1200px"
          flexWrap="wrap"
          sx={{
            paddingX: "40px",
            paddingTop: "64px",
            paddingBottom: "80px",
            backgroundImage: `url(${BackgroundImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "16px",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "start" },
            gap: "48px",
          }}
        >
          <Stack maxWidth="340px" width="100%">
            <Typography
              className={styles["expertise-dimensions-title"]}
              fontWeight={700}
              fontSize="24px"
              lineHeight="56px"
              sx={{ width: "100%", maxWidth: "308px" }}
            >
              {translate("services:expertiseDimensions:title")}
            </Typography>
          </Stack>

          {SERVICES_CARDS.map((card) => (
            <Stack
              maxWidth="340px"
              width="100%"
              direction="row"
              alignItems="flex-start"
              spacing="20px"
            >
              <Image src={card.icon} alt={"icon"} width="70" height="64" />
              <Stack spacing={2}>
                <Typography
                  fontSize="20px"
                  fontWeight={600}
                  lineHeight="24px"
                  color="#232932"
                >
                  {card.title}
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight={400}
                  lineHeight="24px"
                  color="#232932"
                >
                  {card.text}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesContent;
