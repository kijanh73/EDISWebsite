"use client";

import { Title, Text, Container, SimpleGrid, Paper, Group, Badge, Button } from '@mantine/core';

const stats = [
  { value: '349', label: 'Patients Analyzed' },
  { value: '17', label: 'Blood Biomarkers' },
  { value: '10', label: 'Models Evaluated' },
  { value: '3,000+', label: 'Optuna Trials' },
  { value: '10,000+', label: 'MLflow Logged Runs' },
];

export function HeroStats() {
  return (
    <Container size="lg" py={100}>
      <Group justify="center" mb="md">
        <Badge color="teal" variant="light" size="lg" radius="xl">
          BACS Capstone Spring 2026 — University of Louisville
        </Badge>
      </Group>
      
      <Title order={1} size="h1" fw={900} ta="center" c="dark.9" style={{ fontSize: '3rem', lineHeight: 1.1 }}>
        Predicting Risk of Ovarian Cancer Using Machine Learning on Routine Blood Biomarkers
      </Title>
      
      <Text c="dimmed" mt="md" ta="center" size="xl" maw={800} mx="auto">
        A clinical decision-support tool that analyzes routine blood biomarkers to assess ovarian cancer risk with per-patient explainability.
      </Text>

      <Group justify="center" mt="xl" pb={60}>
        <Button component="a" href="#overview" size="lg" color="teal" radius="md">Learn More</Button>
        <Button component="a" href="#team" size="lg" variant="default" radius="md">Meet the Team</Button>
      </Group>

      <Paper withBorder p="xl" radius="md" shadow="sm" bg="dark.9">
        <SimpleGrid cols={{ base: 1, sm: 3, md: 5 }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <Text fw={800} size="h1" c="white" style={{ fontSize: '2.5rem' }}>{stat.value}</Text>
              <Text size="sm" c="dimmed" fw={600} tt="uppercase">{stat.label}</Text>
            </div>
          ))}
        </SimpleGrid>
      </Paper>
    </Container>
  );
}