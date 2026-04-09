"use client";

import { SimpleGrid, Card, Avatar, Text, Group, Button, Title, Container } from '@mantine/core';

const teamMembers = [
  {
    name: 'Jonathan Pham',
    role: 'DevOps/Arch & ML Engineer',
    bio: 'Jonathan spearheaded the architectural & system designs, acting as tech lead setting up robust cloud infrastructure & defining technical implementation and business requirements.',
    link: 'https://www.linkedin.com/in/jonathan-pham-0658a23b4/',
  },
  {
    name: 'Justin Nguyen',
    role: 'Machine Learning & Backend Engineer',
    bio: 'Justin leads the backend and ML development, spearheading the exploratory data analysis and LARCC HPC resources, as well as optimizing model performance and deployment.',
    link: 'https://www.linkedin.com/in/justin-nguyen-b06a40286/',
  },
  {
    name: 'Kevin Bach',
    role: 'Database & Frontend Engineer',
    bio: 'Kevin developed the database architecture, contributing to securing authentication flows and frontend integration - heavily involved in fast prototyping and good UX.',
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