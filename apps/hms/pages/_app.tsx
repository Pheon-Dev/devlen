import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Title,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import useStyles from '../styles';
import { MainLinks, Welcome } from '../components';
import { useRouter } from 'next/router';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>HMS</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/heartbeat.svg" color='pink' />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
          {router && router.pathname === "/" && <Welcome /> ||
            <AppShell
              /* styles={{ */
              /*   main: { */
              /*     background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], */
              /*   }, */
              /* }} */
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                  <Navbar.Section grow mt="xs">
                    <MainLinks />
                  </Navbar.Section>
                  {/* <Navbar.Section> */}
                  {/*   <User /> */}
                  {/* </Navbar.Section> */}
                </Navbar>
              }
              /* aside={ */
              /*   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}> */
              /*     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}> */
              /*       <Text>Application sidebar</Text> */
              /*     </Aside> */
              /*   </MediaQuery> */
              /* } */
              /* footer={ */
              /*   <Footer height={60} p="md"> */
              /*     Application footer */
              /*   </Footer> */
              /* } */
              header={
                <Header height={{ base: 50, md: 50 }} p="md">
                  <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                      <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                      />
                    </MediaQuery>

                    <Text
                      variant="gradient"
                      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                      ta="center"
                      fz="xl"
                      fw={700}
                    >
                      Health Management System
                    </Text>
                  </div>
                </Header>
              }
            >
              <Component {...pageProps} />
            </AppShell>
}
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
