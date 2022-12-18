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
      <Accordion defaultValue="Pharmacy & Inventory">
        <Accordion.Item value="Pharmacy & Inventory">
          <Accordion.Control>Pharmacy & Inventory</Accordion.Control>
          <Accordion.Panel>
            Full inventory management suite to handle multi location clinics/pharmacies, barcode based drug dispensation & sales, stock adjustments, expiries, manage consumables and material issue to departments. Create and manage purchase requisitions, purchase orders, GRN, invoicing and payment. Advanced inventory reports for insights into consumption/sales patterns.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Accounting and Asset Management">
          <Accordion.Control>Accounting and Asset Management</Accordion.Control>
          <Accordion.Panel>
            Maintain control over assets, costs and accounts. Automated AP/AR entries through the procurement/sales process integrated with the accounting module. Calculate depreciation for each capital asset. Comprehensive reports for strong financial management as well as cost management.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Human Resource Management">
          <Accordion.Control>Human Resource Management</Accordion.Control>
          <Accordion.Panel>
            Centralize management of all employee information, payroll (integrated with accounting module), leave policy, department based hierarchy, role assignment and timesheet management.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Managing Multiple Locations">
          <Accordion.Control>Managing Multiple Locations</Accordion.Control>
          <Accordion.Panel>
            One point access for clinics at multiple locations controlling the clinic/s from anywhere using Role based access system for users like front desk, doctors etc.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default Page;
