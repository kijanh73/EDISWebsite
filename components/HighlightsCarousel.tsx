"use client";

import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Title, Text, Container, Paper, List, ThemeIcon } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const slides = [
  {
    title: 'Rigorous Model Selection',
    desc: 'We didn\'t just pick a model — we evaluated all options systematically:',
    points: ['10 different classifiers trained and compared', 'Every 2-, 3-, 4-, and 5-model ensemble combination tested via brute-force search', 'Weights and threshold optimized jointly through 3,000 Optuna trials', 'The winning ensemble was a surprise — Logistic Regression at 86.4% weight outperformed complex models']
  },
  {
    title: 'Explainability-First Design',
    desc: 'Clinical adoption requires trust. Every prediction includes:',
    points: ['Dual SHAP values from both XGBoost (TreeExplainer) and Logistic Regression (LinearExplainer)', 'Per-patient waterfall plots showing which biomarkers pushed the prediction', 'Clinicians see the "why" behind every result — not just a probability score', 'Threshold tuned for sensitivity — missing cancer is worse than a false alarm']
  },
  {
    title: 'Full-Stack Cloud Deployment',
    desc: 'Not just a notebook — a production-ready clinical tool:',
    points: ['Next.js 16 frontend with Mantine UI, hosted on AWS Amplify', 'FastAPI backend on ECS Fargate Spot with CloudFlare Tunnel', 'AWS Cognito authentication for clinician access control', 'Full infrastructure-as-code via AWS CDK — reproducible deployments']
  },
  {
    title: 'HPC-Scale Hyperparameter Tuning',
    desc: 'We leveraged UofL\'s Zurada supercomputer:',
    points: ['SLURM job arrays running 10 models in parallel on H100/H200 partitions', '1,000+ Optuna trials per model with 10-fold stratified cross-validation', 'Expanded search spaces including regularization and class weights', 'Results synced to MLflow for centralized experiment tracking']
  }
];

export function HighlightsCarousel() {
  return (
    <Container size="lg" py="xl" id="highlights">
      <Text c="teal" fw={700} tt="uppercase" size="sm" style={{ letterSpacing: '1.5px' }}>Project Highlights</Text>
      <Title order={2} size="h1" mb="sm">What Makes This Project Unique</Title>
      
      <Carousel withIndicators height={350} slideSize="100%" slideGap="md" mt={40} styles={{ indicator: { backgroundColor: '#12b886' } }}>
        {slides.map((slide, index) => (
          <Carousel.Slide key={index}>
            <Paper shadow="xs" p="xl" radius="md" withBorder h="100%">
              <Title order={3} mb="md">{slide.title}</Title>
              <Text c="dimmed" mb="md">{slide.desc}</Text>
              <List spacing="sm" size="sm" center icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCheck size={16} /></ThemeIcon>}>
                {slide.points.map((point, i) => (
                  <List.Item key={i}>{point}</List.Item>
                ))}
              </List>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}