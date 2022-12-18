import { Divider, List } from '@mantine/core';
import { IconCheckbox, IconSquare } from '@tabler/icons';

const Payments = () => {
  return (
    <>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>
          Details about each appointment, including the tests or procedures you had and the dates they
          took place
        </List.Item>
        <List.Item>
          The name and dose of each drug prescribed and the name of the doctor who prescribed them
        </List.Item>
        <List.Item>
          Copies of checks and credit card receipts for co-pays and other health care costs
        </List.Item>
        <List.Item>A current copy of your medical insurance coverage</List.Item>
        <List.Item>
          Bills and invoices from health care providers, such as doctor’s offices, hospitals, or labs
        </List.Item>
        <List.Item>Insurance claims filed by you, your doctor, or your hospital</List.Item>
        <List.Item>
          Explanation of benefits statements from your insurance company for processed claims
        </List.Item>
        <List.Item>Insurance reimbursements you have received</List.Item>
        <List.Item>
          Insurance claim rejections you have received and appeal letters you have written
        </List.Item>
        <List.Item>Payments and insurance claims for any molecular testing</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>

  );
};

export default Payments;
