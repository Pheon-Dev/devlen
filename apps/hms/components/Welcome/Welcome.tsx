import { Title, Text, Anchor, Button, Group } from '@mantine/core';
import useStyles from './Welcome.styles';
import { IconHeartRateMonitor } from '@tabler/icons';
import { useRouter } from 'next/router';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function Welcome() {
  const { classes } = useStyles();
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          HMS
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is a{' '}
        <Text inherit variant="gradient" component="span">
          {' '}
          Hospital Management System{' '}
        </Text>
        that manages the information related to the health care of patients and aids in the
        completion of health care providers. To kick off, let's get started with your eyes,{' '}
        <Text inherit variant="gradient" component="span">
          {' '}
          toggle{' '}
        </Text>
        the switch to the theme of your liking.
      </Text>
      <Group position="center" mt="xl">
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="xl"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
          })}
        >
          {colorScheme === 'dark' ? (
            <IconSun size={20} stroke={1.5} />
          ) : (
            <IconMoonStars size={20} stroke={1.5} />
          )}
        </ActionIcon>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => router.push('dashboard')}
          leftIcon={<IconHeartRateMonitor size={18} />}
          styles={(theme) => ({
            root: {
              backgroundColor: '#00acee',
              border: 0,
              height: 42,
              paddingLeft: 20,
              paddingRight: 20,

              '&:hover': {
                backgroundColor: theme.fn.darken('#00acee', 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          Get Started
        </Button>
      </Group>
    </>
  );
}
