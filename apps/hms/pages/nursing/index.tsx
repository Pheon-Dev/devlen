import { Accordion, Text } from '@mantine/core';

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
      <Accordion defaultValue="Staff Management">
        <Accordion.Item value="Staff management">
          <Accordion.Control>Staff management</Accordion.Control>
          <Accordion.Panel>
            Staff list, basic staff information, license information, qualification information,
            education record information, committee information, group membership information,
            long-term holiday information, maternity/childcare leave, work history information,
            contact address information, family information, search & data output, deployment list
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Roster Creation">
          <Accordion.Control>Roster Creation</Accordion.Control>
          <Accordion.Panel>
            Roster creation, time schedules, error checks, automatic creation, rosters, basic
            hospitalization fee calculation
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Overtime Management">
          <Accordion.Control>Overtime management</Accordion.Control>
          <Accordion.Panel>
            Working time input, overtime application list, overtime approval status reference,
            overtime order book (work time management book), salary data output
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Education Support">
          <Accordion.Control>Education Support</Accordion.Control>
          <Accordion.Panel>
            Training plan, training course participation history, career ladder, new nurse skills
            check
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Management Logs">
          <Accordion.Control>Management Logs</Accordion.Control>
          <Accordion.Panel>
            Ward log, outpatients log, nurse management log, surgery log, special outpatients log,
            etc
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Interface">
          <Accordion.Control>Interface</Accordion.Control>
          <Accordion.Panel>
            Information linkage with electronic medical records, personnel salary, surgery system
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Page;
