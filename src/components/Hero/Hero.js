import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to Bryan's<br />
        Professional Portfolio
      </SectionTitle>
      <SectionText>
      <p>I'm an aspiring software engineer! My hobbies include playing badminton, reading light novels and webtoons, and watching anime. Currently learning full stack development, and hope to grow a lot as a software engineer. I am in my last year to complete my Computer Science MS degree at UCSB!</p>
      </SectionText>
      <Button onClick={() => {window.open('resume.pdf', '_blank');}}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;