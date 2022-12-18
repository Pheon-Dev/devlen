import { Accordion, Text } from '@mantine/core';
import { Divider, List } from '@mantine/core';
import { IconCheckbox, IconSquare } from '@tabler/icons';

const Page = () => {
  return (
    <>
      <Text
        variant="gradient"
        gradient={{ from: 'white', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta="left"
        fz="xl"
        fw={700}
      >
        TODO:
      </Text>
      <Accordion defaultValue="Patient Data Retrieval">
        <Accordion.Item value="Patient Data Retrieval">
          <Accordion.Control>Patient Data Retrieval</Accordion.Control>
          <Accordion.Panel>
            HMS makes it possible to access all the data related to a patient via a system by the means of a few simple clicks. Information like patient history, current illness, doctors involved, tests reports taken, billing information and many more can be made visible to the user. These data will help to connect the dots about the patient, like specific diagnosis, related treatment, and medication.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Appointment Management">
          <Accordion.Control>Appointment Management</Accordion.Control>
          <Accordion.Panel>
            For hospitals having their own site, appointment widgets will be integrated onto the site. Patients visiting the hospital’s website can book online appointments with ease.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>Complex surgeries, as well as some routine ones</List.Item>
        <List.Item>Serious illnesses or medical issues that require substantial monitoring</List.Item>
        <List.Item>Childbirth, even in cases that don’t require a cesarean section</List.Item>
        <List.Item>Rehabilitation services for psychiatric illnesses, substance misuse, or severe injuries</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>
  );
};
export default Page;
