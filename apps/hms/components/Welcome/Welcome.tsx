import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          HMS
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is a {" "}
        <Text inherit variant="gradient" component="span">
          Hospital Management System {" "}
        </Text>
        that manages the information related to the health care of patients and aids in the completion of health care providers. To kick off, let's get started with your eyes, toggle the switch to the theme of your liking.
      </Text>
    </>
  );
}
