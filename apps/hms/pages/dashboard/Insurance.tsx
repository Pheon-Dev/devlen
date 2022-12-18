
import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
const Insurance = () => {
  return (
    <>
      <Grid grow>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>NHIF</Text>
              {/* <Badge color="pink" variant="light"> */}
              {/*   On Sale */}
              {/* </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
              The National Health Insurance Fund commonly known as NHIF is the most affordable health insurance plan in Kenya with contributions ranging from KES 500 to 1700. The contributions are based on your income as well as the nature of employment one is engaged in.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Covered Patients
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Madison Insurance</Text>
              {/* <Badge color="pink" variant="light"> */}
              {/*   On Sale */}
              {/* </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
              The cover also offers one of the biggest inpatient limits of up to 1.5M a family.  Making it one of the highest in the market, especially for individuals and families.  The inpatient limits vary from 500K-1.5M while the outpatient limit varies from 50K – 100K. All these are family shared.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Covered Patients
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>GA SME Economy Plan</Text>
              {/* <Badge color="pink" variant="light"> */}
              {/*   On Sale */}
              {/* </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
              This health insurance cover provided by GA targets SMEs from 3-9 members. They provide relatively higher levels of cover with inpatients ranging from  300K-5M and outpatients from 50K-200K., dental and optical of between 10K-30K, and Maternity of between 75K-150K A family.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Covered Patients
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>APA Afya Nafuu</Text>
              {/* <Badge color="pink" variant="light"> */}
              {/*   On Sale */}
              {/* </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
              It is provided by APA and  has options for inpatient ranging from 100K-1M  per family and outpatient from 30K-100K per person. It also has maternity cover between 50K-100K. The premium contribution rates are based on the age bracket and consequently, the premium increases when your age increases.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Covered Patients
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Jubilee Micro Health Cover</Text>
              {/* <Badge color="pink" variant="light"> */}
              {/*   On Sale */}
              {/* </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
              This is available for SMEs and registered groups and organizations with at least 10-20 principal members. Cover rates for this micro health cover are based on benefits with a uniform age of between 18 years-60 years. The benefits range from 200K-500K inpatient, Outpatient of between 40K -60K, dental and optical between 5K-10K.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Covered Patients
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>UAP-Old Mutual Afya Imara County</Text>
              {/* <Badge color="pink" variant="light"> */}
              {/*   On Sale */}
              {/* </Badge> */}
            </Group>

            <Text size="sm" color="dimmed">
              The other product in the list of available health insurance covers Kenya has is the plan from UAP-Old Mutual called Afyaimara County. This particular plan has also undergone some major changes in recent years.  The plan has inpatient limits varying from 100K-1M and outpatient from 25K-50K.
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Covered Patients
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Insurance;
