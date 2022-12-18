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
      <Accordion defaultValue="Discharge Summary">
        <Accordion.Item value="Discharge Summary">
          <Accordion.Control>Discharge Summary</Accordion.Control>
          <Accordion.Panel>
            Template based Discharge Summary. ICD10 integration. Option to prevent discharge summary
            till IP bill is closed.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>X-rays, MRIs, CT scans, and other types of imaging</List.Item>
        <List.Item>Lab tests, such as bloodwork</List.Item>
        <List.Item>Minor surgeries, particularly ones that use less invasive techniques</List.Item>
        <List.Item>Colonoscopies</List.Item>
        <List.Item>Mammograms</List.Item>
        <List.Item>Consultations or follow-ups with a specialist</List.Item>
        <List.Item>Routine physical exams</List.Item>
        <List.Item>
          Same-day emergent care, often treated at an urgent care facility versus the ER
        </List.Item>
        <List.Item>Chemotherapy or radiation treatment</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>
  );
};
export default Page;
