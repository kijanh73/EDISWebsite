"use client";

import { Timeline, Text, Title, Paper, Container, Badge, Group } from '@mantine/core';

export function ProjectTimeline() {
  return (
    <Container size="lg" py="xl">
      <Text c="teal" fw={700} tt="uppercase" size="sm" style={{ letterSpacing: '1.5px' }}>Project Timeline</Text>
      <Title order={2} size="h1" mb="sm">Key Milestones</Title>
      <Text c="dimmed" size="lg" mb={40}>11 weeks of development across ML, backend, frontend, and infrastructure.</Text>

      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <Timeline active={11} bulletSize={20} lineWidth={2} color="teal">
          <Timeline.Item title={<Text fw={700} size="lg">Week 1 &mdash; Project Kickoff</Text>}>
            <Text c="dimmed" size="sm" mt={4}>Met with Dr. Kakar and Dr. Betgeri. Reviewed the 349-patient dataset and established project goals.</Text>
            <Badge mt="sm" color="violet" variant="light">Clinical</Badge>
          </Timeline.Item>
          
          <Timeline.Item title={<Text fw={700} size="lg">Week 3 &mdash; Technical Architecture</Text>}>
            <Text c="dimmed" size="sm" mt={4}>Presented detailed technical architecture. Organized GitHub repository structure with separate ML, backend, and frontend directories.</Text>
            <Badge mt="sm" color="blue" variant="light">Infrastructure</Badge>
          </Timeline.Item>

          <Timeline.Item title={<Text fw={700} size="lg">Week 5 &mdash; Preprocessing & Feature Selection</Text>}>
            <Text c="dimmed" size="sm" mt={4}>Completed KNN imputation, Boruta + MRMR feature selection (49 &rarr; 17 features). Built Next.js login prototype.</Text>
            <Group mt="sm" gap="xs">
              <Badge color="orange" variant="light">ML</Badge>
              <Badge color="green" variant="light">Frontend</Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item title={<Text fw={700} size="lg">Week 8 &mdash; Hyperparameter Tuning & SHAP</Text>}>
            <Text c="dimmed" size="sm" mt={4}>Ran Optuna hyperparameter tuning (2,000+ trials). Implemented SHAP explainability. Deployed MLflow on AWS.</Text>
            <Group mt="sm" gap="xs">
              <Badge color="orange" variant="light">ML</Badge>
              <Badge color="blue" variant="light">Infrastructure</Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item title={<Text fw={700} size="lg">Week 10 &mdash; Ensemble Discovery & Clinical Review</Text>}>
            <Text c="dimmed" size="sm" mt={4}>Winner: XGBoost + Logistic Regression. Clinical reviews with advisors across multiple oncology disciplines.</Text>
            <Group mt="sm" gap="xs">
              <Badge color="violet" variant="light">Clinical</Badge>
              <Badge color="orange" variant="light">ML</Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item title={<Text fw={700} size="lg">Week 11 &mdash; EDIS Preparation & Final Polish</Text>}>
            <Text c="dimmed" size="sm" mt={4}>Finalized EDIS poster and website. Secured AWS hosting with Cognito auth. Dr. Kakar live-tested the tool.</Text>
          </Timeline.Item>
        </Timeline>
      </Paper>
    </Container>
  );
}