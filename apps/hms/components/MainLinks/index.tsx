import React from 'react';
import {  IconMicroscope, IconHeartRateMonitor, IconFaceMask, IconVaccineBottle, IconEmpathize, IconStethoscope, IconEmergencyBed, IconOld, IconCheckupList, IconFirstAidKit, IconVirusSearch, IconHeartbeat, IconEyeCheck } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}

const MainLink = ({ icon, color, label, path }: MainLinkProps) => {
  const router = useRouter()
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group onClick={() => router.push(`${path}`)}>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

const data = [
  { icon: <IconStethoscope size={16} />, color: 'blue', label: 'Clinical', path: "/clinical" },
  { icon: <IconCheckupList size={16} />, color: 'teal', label: 'Financial', path: "/clinical" },
  { icon: <IconMicroscope size={16} />, color: 'violet', label: 'Laboratory', path: "/clinical" },
  { icon: <IconEmergencyBed size={16} />, color: 'red', label: 'Inpatient', path: "/clinical" },
  { icon: <IconOld size={16} />, color: 'green', label: 'Outpatient', path: "/clinical" },
  { icon: <IconFaceMask size={16} />, color: 'gray', label: 'Operation Theatre', path: "/clinical" },
  { icon: <IconFirstAidKit size={16} />, color: 'yellow', label: 'Materials', path: "/clinical" },
  { icon: <IconEmpathize size={16} />, color: 'grape', label: 'Nursing', path: "/clinical" },
  { icon: <IconVaccineBottle size={16} />, color: 'orange', label: 'Pharmaceutical', path: "/clinical" },
  { icon: <IconVirusSearch size={16} />, color: 'pink', label: 'Pathology', path: "/clinical" },
  { icon: <IconHeartRateMonitor size={16} />, color: 'indigo', label: 'Cardiology', path: "/clinical" },
  { icon: <IconEyeCheck size={16} />, color: 'cyan', label: 'Ophthalmology', path: "/clinical" },
];

const MainLinks = () => {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
};
export default MainLinks;
