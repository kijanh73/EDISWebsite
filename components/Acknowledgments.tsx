"use client";

import { Title, Text, SimpleGrid, Card, ThemeIcon, Container, Group, Image } from '@mantine/core';
import { IconSchool, IconMicroscope, IconStethoscope, IconServer, IconFlask, IconUsersGroup } from '@tabler/icons-react';

export function Acknowledgments() {
  return (
    <Container size="lg" py="xl" id="acknowledgments">
      <Text c="teal" fw={700} tt="uppercase" size="sm" style={{ letterSpacing: '1.5px' }}>Acknowledgments</Text>
      <Title order={2} size="h1" mb="xl">Advisors & Supporters</Title>
      <Text c="dimmed" size="lg" mb={40}>
        This project would not have been possible without the guidance of our advisors.
      </Text>

      {/* Dr. Kakar Feature Card */}
      <Card shadow="sm" padding="xl" radius="md" withBorder mb="xl" bg="gray.0">
        <Title order={3}>Dr. Sham S. Kakar, Ph.D., MBA</Title>
        <Text c="teal.7" fw={600} size="sm" mb="sm">
          Project Sponsor — Professor of Physiology, Medicine, and Biochemistry, UofL School of Medicine & James Graham Brown Cancer Center
        </Text>
        <Text c="dimmed" size="sm" lh="lg" mb="xl">
          Dr. Kakar is the Editor-in-Chief of the <em>Journal of Ovarian Research</em> and a leading expert in ovarian cancer biology. His extensive laboratory research focuses on the molecular mechanisms of hormone-related cancers, targeting ovarian cancer stem cells, and developing novel therapeutics—such as Withaferin A—to combat cancer-induced cardiac cachexia and tumor metastasis. As our primary sponsor, he provided the clinical dataset, guided the ROMA comparison framing, and is actively supporting a publication pathway for this Capstone research.
        </Text>
        <Image 
          src="assets/shamkakar.jpg" 
          alt="Dr. Sham Kakar presenting" 
          radius="md" 
          h={375} 
          w="auto" 
          fit="contain" 
          fallbackSrc="https://placehold.co/800x400?text=Dr.+Sham+Kakar" 
        />
      </Card>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} color="blue" variant="light" mt={4}><IconSchool size={20} /></ThemeIcon>
            <div>
              <Text fw={700}>Dr. Sai Nethra Betgeri</Text>
              <Text c="teal" size="xs" fw={600}>Faculty Advisor — CSE, University of Louisville</Text>
              <Text size="sm" c="dimmed" mt="xs">Capstone faculty advisor who guided the project from inception, provided dataset access, coordinated clinical connections, and is leading the publication manuscript.</Text>
            </div>
          </Group>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} color="teal" variant="light" mt={4}><IconMicroscope size={20} /></ThemeIcon>
            <div>
              <Text fw={700}>Dr. Hermann Frieboes</Text>
              <Text c="teal" size="xs" fw={600}>ML Advisor — Bioengineering, University of Louisville</Text>
              <Text size="sm" c="dimmed" mt="xs">Provided ML rigor guidance including validation methodology, bootstrap analysis, and clinical ML best practices for small-dataset medical applications.</Text>
            </div>
          </Group>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} color="indigo" variant="light" mt={4}><IconFlask size={20} /></ThemeIcon>
            <div>
              <Text fw={700}>Dylan Goodin</Text>
              <Text c="teal" size="xs" fw={600}>ML Research Advisor — Bioengineering, University of Louisville</Text>
              <Text size="sm" c="dimmed" mt="xs">Graduate researcher in Dr. Frieboes' lab who provided hands-on ML guidance and shared expertise in biomedical machine learning applications.</Text>
            </div>
          </Group>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} color="grape" variant="light" mt={4}><IconStethoscope size={20} /></ThemeIcon>
            <div>
              <Text fw={700}>Dr. Kanak Parmar, MD</Text>
              <Text c="teal" size="xs" fw={600}>Clinical Reviewer — Internal Medicine / Medical Oncology, NIH Fellowship</Text>
              <Text size="sm" c="dimmed" mt="xs">Provided real-world oncology perspective and identified critical questions about clinical applicability of the model in practice.</Text>
            </div>
          </Group>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} color="orange" variant="light" mt={4}><IconUsersGroup size={20} /></ThemeIcon>
            <div>
              <Text fw={700}>Dr. van Berkel</Text>
              <Text c="teal" size="xs" fw={600}>Department Connection</Text>
              <Text size="sm" c="dimmed" mt="xs">Facilitated the introduction between the capstone team and Dr. Frieboes' bioengineering lab, enabling the cross-disciplinary ML advisory relationship.</Text>
            </div>
          </Group>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} color="cyan" variant="light" mt={4}><IconServer size={20} /></ThemeIcon>
            <div>
              <Text fw={700}>UofL LARCC — Zurada HPC Cluster</Text>
              <Text c="teal" size="xs" fw={600}>High-Performance Computing Resources</Text>
              <Text size="sm" c="dimmed" mt="xs">Provided access to H100 and H200 GPU partitions for large-scale hyperparameter tuning across all 10 models with thousands of Optuna trials.</Text>
            </div>
          </Group>
        </Card>
      </SimpleGrid>
    </Container>
  );
}