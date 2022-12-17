
import { Title, Text, Anchor, Button, Group } from '@mantine/core';
import useStyles from './Dashboard.styles';
import { IconHeartRateMonitor } from '@tabler/icons';
import { useRouter } from 'next/router';
export function Dashboard() {
  const { classes } = useStyles();
  const router = useRouter()

  return (
    <Group position='center' m="xl">
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
  );
}
