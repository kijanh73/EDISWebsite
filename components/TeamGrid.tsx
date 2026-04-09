"use client";

import { SimpleGrid, Card, Avatar, Text, Group, Button, Title, Container } from '@mantine/core';

const teamMembers = [
  {
    name: 'Jonathan Pham',
    role: 'Machine Learning & Backend Engineer',
    bio: 'Jonathan spearheaded the architectural pipelines, conducting rigorous exploratory data analysis and training the classification models on the LARCC HPC.',
    link: 'https://www.linkedin.com/in/jonathan-pham-0658a23b4/',
  },
  {
    name: 'Justin Nguyen',
    role: 'Machine Learning & Backend Engineer',
    bio: 'Justin co-led the backend logic and ML development, focusing on hyperparameter tuning with Optuna and building the FastAPI endpoints.',
    link: 'https://www.linkedin.com/in/justin-nguyen-b06a40286/',
  },
  {
    name: 'Kevin Bach',
    role: 'DevOps Engineer & Frontend',
    bio: 'Kevin manages the scalable AWS environment (S3, EC2, MLFlow) and ensures a seamless deployment pipeline from local code to cloud hosting.',
    link: 'https://www.linkedin.com/in/kevin-bach-code/',
  },
  {
    name: 'Dan Nguyen',
    role: 'Full-Stack Developer & Frontend Lead',
    bio: 'Dan brings his experience with React and Tailwind CSS to the frontend, combining his passion for data analytics and the healthcare industry to build out the intuitive clinical dashboard.',
    link: 'https://www.linkedin.com/in/kijanh/',
  }
];

export function TeamGrid() {
  return (
    <Container size="lg" py="xl" id="team">
      <Text c="teal" fw={700} tt="uppercase" size="sm" style={{ letterSpacing: '1.5px' }} ta="center">Our Team</Text>
      <Title order={2} ta="center" mb="xl" size="h1">Meet the Developers</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {teamMembers.map((member) => (
          <Card key={member.name} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="center" mb="md">
              <Avatar size={80} radius="100%" color="teal" variant="light">{member.name.charAt(0)}</Avatar> 
            </Group>
            <Text fw={700} ta="center">{member.name}</Text>
            <Text size="sm" c="teal" fw={600} ta="center" mb="sm">{member.role}</Text>
            <Text size="sm" c="dimmed" ta="center" mb="xl" h={100}>{member.bio}</Text>
            
            {member.link ? (
              <Button component="a" href={member.link} target="_blank" fullWidth variant="light" color="teal">LinkedIn</Button>
            ) : (
              <Button fullWidth variant="subtle" disabled>LinkedIn Unavailable</Button>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}