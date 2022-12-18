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
      <Accordion defaultValue="Lab Management">
        <Accordion.Item value="Lab Management">
          <Accordion.Control>Lab Management</Accordion.Control>
          <Accordion.Panel>
            Comprehensive Lab Management handles complete order management, Custom Reports, Smart
            Notifications, Credit Settlement, detailed MIS Reports, Analytics and App for
            Phlebotomist.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>Order Management</List.Item>
        <List.Item>Custom Reports</List.Item>
        <List.Item>Smart Notifications</List.Item>
        <List.Item>Credit Settlement</List.Item>
        <List.Item>Master Information System (MIS) Reports</List.Item>
        <List.Item>Analytics</List.Item>
        <List.Item>Payments and insurance claims for any molecular testing</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>
  );
};
export default Page;
