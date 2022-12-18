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
      <Accordion defaultValue="Billing Management">
        <Accordion.Item value="Billing Management">
          <Accordion.Control>Billing Management</Accordion.Control>
          <Accordion.Panel>
            Integrated Billing with treatments, Lab and Radiology. Alerts will be sent on Discount Authorisation. Automatic due capture, Option to bill before and after consultation.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Appointment Analysis">
          <Accordion.Control>Appointment Analysis</Accordion.Control>
          <Accordion.Panel>
            Although analyzing appointments is not considered a financial report in the traditional sense, patients who do not show up for scheduled appointments cost the practice money. The ideal fill rate is usually about go to 95 percent. Calculate the actual fill rate and compare it to the desired fill rate to decide if any correction or additional action is needed. This report also shows which time of the day or which months are busier for your practice. This helps you determine if and when additional help is needed.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Profit & Loss Statement (P&L)">
          <Accordion.Control>Profit & Loss Statement (P&L)</Accordion.Control>
          <Accordion.Panel>
            A P&L tracks revenues and expenses, showing the profitability of your practice. It can help track key performance indicators such as total encounters, number of procedures, total charges and collections. Red flags could include a sudden drop in collections.
            Before deciding a course of action, look for an explanation behind any warning signs. For example, a decrease in collections this month should have been preceded by a decrease in charges last month.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Balance Sheet">
          <Accordion.Control>Balance Sheet</Accordion.Control>
          <Accordion.Panel>
            A balance sheet shows what your practice owns and what it owes. There are items that show up on a balance sheet that might not show on a P&L report. For example, a balance sheet will show you if certain loans are being paid down. It can also show where the practice needs to invest in terms of capital improvements. This type of report can also assist you in tax planning
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Accounts Receivable Aging Report">
          <Accordion.Control>Accounts Receivable Aging Report</Accordion.Control>
          <Accordion.Panel>
            Accounts Receivable (A/R) Aging Reconciliation is a process of categorizing all the amounts owed by patients, including the length of time the amounts have been unpaid. If it is taking longer than 45 days for a claim to be paid, one needs to check to see if the claim has been rejected or denied. Urgent attention is required if a claim has not been paid for go days. Claims that exceed 120+ days are rarely collectable
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Provider Productivity">
          <Accordion.Control>Provider Productivity</Accordion.Control>
          <Accordion.Panel>
            A provider performance and productivity report measures what each physician is contributing to the practice. From this report, you can spot areas of weakness or strength and increase revenue producing activity while holding down costs.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Claim Denials">
          <Accordion.Control>Claim Denials</Accordion.Control>
          <Accordion.Panel>
            Denied claims can lead to a cash-flow problem. When a practice does not follow up on a rejected claim, they are denying money owed to the practice. Study the Explanation of Benefits (EOB) to determine the reasons for denied claims. Different payers, as well as Medicare, might be using different explanations and codes. Keep a log. This enables the practice to spot trends early as well as react in a timely manner.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Value-Based Reporting">
          <Accordion.Control>Value-Based Reporting</Accordion.Control>
          <Accordion.Panel>
            As practices move toward a value-based reimbursement environment, they need to capture clinical quality measures for submission to the [Merit-based Incentive Payment Systems] and others. With [clinical registries], clinicians can view practice and physician quality scores and benchmark against peers. Quality measures also uncover potential areas for quality improvement and identify specific patients with gaps in care.
          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </>
  );
};
export default Page;
