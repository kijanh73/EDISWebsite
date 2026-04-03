"use client";

import { Container, Title, Text, SimpleGrid, Paper, Flex } from '@mantine/core';

export function Mission() {
  return (
    <Container size="lg" py="xl" id="mission">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>

        <Flex direction="column" justify="center">
          <Text c="teal" fw={700} tt="uppercase" size="sm" style={{ letterSpacing: '1.5px' }}>Clinical Impact</Text>
          <Title order={2} size="h1" mb="md">Why Early Detection Matters</Title>
          <Text c="dimmed" size="lg" mb="md">
            Ovarian cancer is the most lethal malignancy of the female reproductive system. The five-year survival rate at Stage I is over 90%, but it drops dramatically when diagnosed at later stages.
          </Text>
          <Text c="dimmed" size="lg">
            Because symptoms are often vague or entirely absent during early progression, a vast majority of cases are not caught until Stage III or IV. By leveraging machine learning on standard blood panels, we are building a bridge between routine clinical check-ups and specialized oncology care, flagging high-risk patients before the window for early intervention closes.
          </Text>
        </Flex>

        <Flex align="center">
          <Paper p="xl" radius="md" bg="teal.0" style={{ borderLeft: '6px solid #12b886' }}>
            <Text size="xl" fw={500} fs="italic" c="teal.9">
              "To improve patient survival rates, we must shift the diagnostic paradigm from reactive treatment to proactive risk stratification."
            </Text>
          </Paper>
        </Flex>

      </SimpleGrid>
    </Container>
  );
}