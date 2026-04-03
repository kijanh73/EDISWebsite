import { Space } from '@mantine/core';
import { NavBar } from '../components/NavBar';
import { HeroStats } from '../components/HeroStats';
import { Mission } from '../components/Mission';
import { OverviewGrid } from '../components/OverviewGrid';
import { ProjectTimeline } from '../components/ProjectTimeline';
import { HighlightsCarousel } from '../components/HighlightsCarousel';
import { TeamGrid } from '../components/TeamGrid';
import { Acknowledgments } from '../components/Acknowledgments';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main style={{ scrollBehavior: 'smooth' }}>
        <HeroStats />
        <Space h={40} />

        <Mission />
        <Space h={60} />
        
        <OverviewGrid />
        <Space h={60} />
        
        <div id="milestones">
          <ProjectTimeline />
        </div>
        <Space h={60} />
        
        <HighlightsCarousel />
        <Space h={60} />
        
        <TeamGrid />
        <Space h={60} />

        <Acknowledgments />
        <Space h={100} />
      </main>
    </>
  );
}