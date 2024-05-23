'use client';
import styled from 'styled-components';
import CTAButton from '../_Atoms/CTAButton/CTAButton';

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto;
  width: 100%;
  :last-child {
    align-self: flex-end;
  }
`;

export default function ProjectCard({ title, description, slug }) {
  return (
    <ProjectWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <CTAButton text='Read More' url={`/projects/${slug}`} />
    </ProjectWrapper>
  );
}