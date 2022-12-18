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
      <Accordion defaultValue="Operation Theatre Management">
        <Accordion.Item value="Operation Theatre Management">
          <Accordion.Control>Operation Theatre Management</Accordion.Control>
          <Accordion.Panel>
            Automatic notification can be sent to customers on test results. Lab notifications like
            email, SMS of the test reports sent from the Automated Lab notification module.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>
          Multiple appointment books with different scheduling rules and costs allocation
        </List.Item>
        <List.Item>Block-booking by surgical department or individual surgeon</List.Item>
        <List.Item>Wait-list for cases where the scheduled dated is unconfirmed</List.Item>
        <List.Item>Fully coded surgical procedures with length of time</List.Item>
        <List.Item>Standardized processes with reminders to minimize cancellations</List.Item>
        <List.Item>
          Administrative workflow automation with links to Patient Administration and Billing
          systems
        </List.Item>
        <List.Item>
          OT Chit to improve co-ordination between the theatres and inpatient wards during patient
          movements
        </List.Item>
        <List.Item>
          Big Board View to keep track of the patient’s location movement within the operating
          theatre.
        </List.Item>
        <List.Item>Reduce administrative overheads</List.Item>
        <List.Item>Scalable to handle large hospitals with greater than 20 OTs</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>
  );
};
export default Page;
