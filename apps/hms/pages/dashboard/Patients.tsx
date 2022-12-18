import { Table } from '@mantine/core';

const elements = [
  { id: 687235654, phone: 254712011283, name: 'Bender Rodriguez', insurance: 'covered' },
  { id: 787634587, phone: 254714007279, name: 'Carol Miller', insurance: 'not covered' },
  { id: 393452396, phone: 254788906275, name: 'Homer Simpson', insurance: 'not covered' },
  { id: 562345967, phone: 254713733306, name: 'Spongebob Squarepants', insurance: 'covered' },
  { id: 582345769, phone: 254714012292, name: 'Silvia June', insurance: 'covered' },
];
const Patients = () => {
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.phone}</td>
      <td>{element.insurance}</td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover withBorder>
      <thead>
        <tr
          style={{
            cursor: 'pointer',
          }}
        >
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Insurance</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default Patients;
