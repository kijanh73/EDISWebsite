"use client";

import { Title, Text, SimpleGrid, Card, ThemeIcon, Container } from '@mantine/core';
import { IconDna, IconBrain, IconChartBar, IconDeviceDesktopAnalytics, IconCloudComputing, IconStethoscope } from '@tabler/icons-react';

const features = [
  { title: 'Blood Biomarker Analysis', desc: 'Analyzes 17 blood biomarkers from standard lab panels to classify patients as malignant or benign.', color: 'red', icon: IconDna },
  { title: 'Ensemble ML Model', desc: 'Weighted ensemble of XGBoost and Logistic Regression, trained on 349 patients with hyperparameters optimized on HPC.', color: 'blue', icon: IconBrain },
  { title: 'SHAP Explainability', desc: 'Every prediction comes with per-patient SHAP explanations showing exactly which biomarkers drove the result.', color: 'green', icon: IconChartBar },
  { title: 'Clinician-Facing Web Tool', desc: 'Next.js frontend with biomarker input form, CSV upload, patient dashboard, and per-patient result pages.', color: 'grape', icon: IconDeviceDesktopAnalytics },
  { title: 'Cloud Infrastructure', desc: 'Deployed on AWS using CDK — ECS Fargate, Cognito authentication, CloudFlare Tunnel, and MLflow.', color: 'orange', icon: IconCloudComputing },
  { title: 'Clinical Validation', desc: 'Reviewed by advisors across 3 specialties with a publication pathway in progress.', color: 'teal', icon: IconStethoscope },
];

export function OverviewGrid() {
  return (
    <Container size="lg" py="xl" id="overview">
      <Text c="teal" fw={700} tt="uppercase" size="sm" style={{ letterSpacing: '1.5px' }}>Project Overview</Text>
      <Title order={2} size="h1" mb="sm">What We Built</Title>
      <Text c="dimmed" size="lg" mb={40} maw={800}>
        A full-stack web application that uses machine learning to analyze routine bloodwork and assess ovarian cancer risk — providing clinicians with predictions they can understand and trust.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
        {features.map((feature) => (
          <Card key={feature.title} shadow="sm" padding="xl" radius="md" withBorder>
            <ThemeIcon size={50} radius="md" color={feature.color} variant="light" mb="md">
              <feature.icon size={26} stroke={1.5} />
            </ThemeIcon>
            <Text fw={700} size="lg" mb="xs">{feature.title}</Text>
            <Text size="sm" c="dimmed">{feature.desc}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}