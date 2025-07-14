import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box } from "@mui/material";
import Hero from "@/components/Home/Hero/Hero";
import OurExpertise from "@/components/Home/OurExpertise/OurExpertise";
import WhyHireUs from "@/components/Home/WhyHireUs/WhyHireUs";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import OurValues from "@/components/Home/OurValues/OurValues";
import FeaturedProjects from "@/components/Home/FeaturedProjects/FeaturedProjects";
import OurServices from "@/components/Home/OurServices/OurServices";
import Pricing from "@/components/Home/Pricing/Pricing";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import RegisterationRequired from "@/components/Home/RegisterationRequired/RegisterationRequired";

export default function Home() {
  return (
    <Box>
      <Hero />
      <WhyHireUs />
      <OurServices />
      <OurExpertise />
      <Pricing />
      <Testimonials />
      <RegisterationRequired />
      {/* <FeaturedProjects /> */}
      {/* <HowItWorks /> */}
      {/* <OurValues /> */}
    </Box>
  );
}

export const getStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "company",
      "common",
      "home",
      "blog",
      "projects",
      "services",
      "faqs",
    ])),
  },
});
