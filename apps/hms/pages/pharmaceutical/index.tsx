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
      <Accordion defaultValue="Pharmacy Management">
        <Accordion.Item value="Pharmacy Management">
          <Accordion.Control>Pharmacy Management</Accordion.Control>
          <Accordion.Panel>
            Comprehensive Pharmacy Management handles stock, Prescription Integration, Ward Request, Stock Management, Stock Moment and intelligent reports.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Prescription Management">
          <Accordion.Control>Prescription Management</Accordion.Control>
          <Accordion.Panel>
            Manage commonly and recently used medicines. Option to show medicines available in the
            pharmacy. SMS|Email prescriptions to Patients.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>Pharma Product Management</List.Item>
        <List.Item>Pharma Sales & Marketing Management</List.Item>
        <List.Item>Financing Pharmaceuticals</List.Item>
        <List.Item>Pharma Production Management</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>
  );
};
export default Page;
