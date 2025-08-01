import ReactCountryFlag from "react-country-flag";

import React from "react";
import styles from "./style.module.scss";
import { Stack, Typography } from "@mui/material";
import WexcuteCard from "@/components/Common/WexcuteCard/WexcuteCard";
import { useTranslation } from "next-i18next";

const OurExpertise = () => {
  const { t: translate } = useTranslation<any>();

  const LANGUAGE_CARDS = [
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "English",
      cardTitle: "English",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="ES"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Spanish",
      cardTitle: "Spanish",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="FR"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "French",
      cardTitle: "French",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="DE"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "German",
      cardTitle: "German",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="CN"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Mandarin",
      cardTitle: "Mandarin",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="SA"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Arabic",
      cardTitle: "Arabic",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="HK"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Cantonese",
      cardTitle: "Cantonese",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="KR"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Korean",
      cardTitle: "Korean",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="JP"
          svg
          style={{
            width: "4rem",
            height: "3.5rem",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        />
      ),
      cardText: "Japanese",
      cardTitle: "Japanese",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="AF"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Dari",
      cardTitle: "Dari",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="AF"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Pashto",
      cardTitle: "Pashto",
    },
    {
      cardIcon: (
        <ReactCountryFlag
          countryCode="HT"
          svg
          style={{
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "8px",
            border: "1px solid transparent",
          }}
        />
      ),
      cardText: "Haitian Creole",
      cardTitle: "Haitian Creole",
    },
  ];

  return (
    <Stack
      className="section-container"
      direction={{ xs: "column", lg: "row" }}
    >
      <Stack
        className="section-content"
        direction={{ xs: "column" }}
        justifyContent="space-between"
      >
        <Stack
          direction="column"
          spacing={3}
          alignItems={{ xs: "flex-start", lg: "center" }}
          justifyContent={"center"}
          maxWidth={{ xs: "100%" }}
        >
          <Typography
            fontSize={{ xs: "32px", lg: "48px" }}
            fontWeight={700}
            lineHeight="56px"
            className="services-header"
            width="100%"
            // maxWidth={{ xs: '445px', lg: '345px' }}
            alignSelf="flex-start"
          >
            {/* {translate('home:ourExpertise:title')} */}
            We Speak Your Language
          </Typography>

          <Typography
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
            width="100%"
          >
            {translate("home:ourExpertise:body")}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={15}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column" spacing={3} justifyContent="center">
            {LANGUAGE_CARDS.map(
              (card, index) =>
                index < Math.ceil(LANGUAGE_CARDS.length / 3) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                    height="200px"
                  />
                )
            )}
          </Stack>
          <Stack
            sx={{ mt: { xs: "0px", md: "64px !important" } }}
            direction="column"
            spacing={3}
            justifyContent="center"
          >
            {LANGUAGE_CARDS.map(
              (card, index) =>
                index >= Math.ceil(LANGUAGE_CARDS.length / 3) &&
                index < Math.ceil((LANGUAGE_CARDS.length * 2) / 3) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                    height="200px"
                  />
                )
            )}
          </Stack>
          <Stack
            sx={{ mt: { xs: "0px", md: "128px !important" } }}
            direction="column"
            spacing={3}
            justifyContent="center"
          >
            {LANGUAGE_CARDS.map(
              (card, index) =>
                index >= Math.ceil((LANGUAGE_CARDS.length * 2) / 3) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                    height="200px"
                  />
                )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurExpertise;
