import "@/styles/styles.scss";
import Layout from "@/components/Layout";
import { appWithTranslation } from "next-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: {
  Component: any;
  emotionCache?: any;
  pageProps: any;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <GoogleAnalytics trackPageViews gaMeasurementId="G-Z7NVN9GR5C" />
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
