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
      <Accordion defaultValue="Purchasing">
        <Accordion.Item value="Purchasing">
          <Accordion.Control>Purchasing</Accordion.Control>
          <Accordion.Panel>
            Purchasing means to buy different materials by paying money or its equal from suppliers / salespersons. In this procedure, the resources are bought and assimilated using some uniform design. The action of purchasing is an essential task in the supply cycle. Purchasing is a store duty for the required materials of the right quality, at the right valuation, for the right source, at the right time and at the right place in the most cost-effective method. This also take account of choice of sources of supply, settlement of terms of purchase, assignment of purchase order, follow up, conservation of smooth relation with suppliers, authorisation of payments of suppliers, appraising and assessment of suppliers.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Storage & Preservation">
          <Accordion.Control>Storage & Preservation</Accordion.Control>
          <Accordion.Panel>
            These are an imperative part of the storekeeping role. When materials remain idle in the store, the materials need to be taken care of and looked after appropriately. Else, these materials may get damaged due to natural chemical reaction like rusting by moisture, melting by heat etc. and also may get affected by bugs, pests, rats etc.
            In order to guard the materials from numerous adverse effects the store manager should take relevant measures.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Inventory Control">
          <Accordion.Control>Inventory Control</Accordion.Control>
          <Accordion.Panel>
            Inventory control is employed in curtailing the total cost of inventory. This includes physical control of materials, maintenance of materials, minimization of desuetude and damage through timely clearance and efficient handling, preservation of stores records, suitable location, and stocking. Store is also accountable for the physical verification of stocks and reconciliation them with book figures. The inventory ordering quantities, defining stock level, lead time analysis and reporting.
            In order to guard the materials from numerous adverse effects the store manager should take relevant measures.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <List spacing="xs" mt="xl" size="sm" center icon={<IconSquare size={16} />}>
        <List.Item>Managing Money, not just Resources</List.Item>
        <List.Item>Co-operation with Physicians and Nursing Staff</List.Item>
        <List.Item>Contemplating total cost, not just price</List.Item>
        <List.Item>Create integrated Policies and Procedures</List.Item>
        <List.Item>Develop a process, not departmental focus</List.Item>
        <List.Item>Develop team focused, not individual focused processes</List.Item>
        <Divider m="xl" />
        <List.Item icon={<IconCheckbox size={16} />}>Submit once done</List.Item>
      </List>
    </>
  );
};
export default Page;
