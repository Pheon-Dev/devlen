import React from 'react';
import { IconMicroscope, IconHeartRateMonitor, IconFaceMask, IconVaccineBottle, IconEmpathize, IconStethoscope, IconEmergencyBed, IconOld, IconCheckupList, IconFirstAidKit, IconVirusSearch, IconHeartbeat, IconEyeCheck, IconHealthRecognition } from '@tabler/icons';
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
      onClick={() => router.push(`${path}`)}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: router.pathname === path ? theme.colors.dark[6] : "",

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

const data = [
  { icon: <IconHeartRateMonitor size={16} />, color: 'blue', label: 'Dashboard', path: "/dashboard" },
  { icon: <IconStethoscope size={16} />, color: 'pink', label: 'Clinical', path: "/clinical" },
  { icon: <IconCheckupList size={16} />, color: 'teal', label: 'Financial', path: "/financial" },
  { icon: <IconMicroscope size={16} />, color: 'violet', label: 'Laboratory', path: "/laboratory" },
  { icon: <IconEmergencyBed size={16} />, color: 'red', label: 'Inpatient', path: "/inpatient" },
  { icon: <IconOld size={16} />, color: 'green', label: 'Outpatient', path: "/outpatient" },
  { icon: <IconFaceMask size={16} />, color: 'gray', label: 'Op. Theatre', path: "/operations-theatre" },
  { icon: <IconFirstAidKit size={16} />, color: 'yellow', label: 'Materials', path: "/materials" },
  { icon: <IconEmpathize size={16} />, color: 'grape', label: 'Nursing', path: "/nursing" },
  { icon: <IconVaccineBottle size={16} />, color: 'orange', label: 'Pharmaceutical', path: "/pharmaceutical" },
  { icon: <IconVirusSearch size={16} />, color: 'pink', label: 'Pathology', path: "/pathology" },
  { icon: <IconHealthRecognition size={16} />, color: 'indigo', label: 'Cardiology', path: "/cardiology" },
  { icon: <IconEyeCheck size={16} />, color: 'cyan', label: 'Ophthalmology', path: "/ophthalmology" },
];

const MainLinks = () => {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
};
export default MainLinks;
