import { Tabs } from '@mantine/core';
import { IconEmpathize, IconCalendarEvent, IconId, IconReportMedical, IconCreditCard } from '@tabler/icons';
import Appointments from './Appointments';
import Insurance from './Insurance';
import Patients from './Patients';
import Payments from './Payments';
import Records from './Records';

const Page = () => {
  return (
    <Tabs variant="outline" defaultValue="appointments">
      <Tabs.List grow>
        <Tabs.Tab value="appointments" icon={<IconCalendarEvent size={14} />}>
          Appointments
        </Tabs.Tab>
        <Tabs.Tab value="patients" icon={<IconId size={14} />}>
          Patients
        </Tabs.Tab>
        <Tabs.Tab value="records" icon={<IconReportMedical size={14} />}>
          Medical Records
        </Tabs.Tab>
        <Tabs.Tab value="insurance" icon={<IconEmpathize size={14} />}>
          Insurance Cover
        </Tabs.Tab>
        <Tabs.Tab value="payments" icon={<IconCreditCard size={14} />}>
          Payment Bills
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="appointments" pt="xs">
        <Appointments />
      </Tabs.Panel>

      <Tabs.Panel value="patients" pt="xs">
        <Patients />
      </Tabs.Panel>

      <Tabs.Panel value="records" pt="xs">
        <Records />
      </Tabs.Panel>

      <Tabs.Panel value="insurance" pt="xs">
        <Insurance />
      </Tabs.Panel>

      <Tabs.Panel value="payments" pt="xs">
        <Payments />
      </Tabs.Panel>
    </Tabs>
  );
};
export default Page;
