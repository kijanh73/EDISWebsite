"use client";
import { Title, Text, Paper } from '@mantine/core';

// Notice the 'export' keyword right here!
export function ProblemStatement() {
  return (
    <Paper shadow="sm" p="xl" radius="md" withBorder>
      <Title order={2} mb="md" c="teal.7">The Clinical Blind Spot</Title>
      <Text mb="sm" lh="lg">
        Ovarian cancer is a highly aggressive and often asymptomatic "liquid cancer" that is frequently not diagnosed until Stage 3 or 4. Traditional screening algorithms like ROMA assess the likelihood of malignancy using a narrow scope of variables, typically just 3 features including CA-125 and HE4.
      </Text>
      <Text mb="sm" lh="lg">
        Our approach utilizes an expanded combination of 17 standard blood biomarkers. Rather than replacing first-line screening, this tool is designed as a decision-support aide to assist physicians in risk stratification and referral prioritization after an initial clinical suspicion is raised.
      </Text>
    </Paper>
  );
}