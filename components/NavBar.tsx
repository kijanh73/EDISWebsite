"use client";

import { Group, Button, Container, Text, Box } from '@mantine/core';

export function NavBar() {
  return (
    <Box style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e5e5e5' }}>
      <Container size="lg" h={70}>
        <Group justify="space-between" h="100%">
          <Text size="xl" fw={900} c="teal.8">OC <Text component="span" c="dark.9">Biomarker</Text></Text>
          <Group gap="sm" visibleFrom="sm">
            <Button component="a" href="#overview" variant="subtle" color="dark">Overview</Button>
            <Button component="a" href="#milestones" variant="subtle" color="dark">Milestones</Button>
            <Button component="a" href="#highlights" variant="subtle" color="dark">Highlights</Button>
            <Button component="a" href="#team" variant="subtle" color="dark">Team</Button>
            <Button component="a" href="#acknowledgments" variant="subtle" color="dark">Acknowledgments</Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}