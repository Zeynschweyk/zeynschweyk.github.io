import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Hackathons'},
  { number: 3.90, text: 'GPA', },
  { number: 8, text: 'Leadership positions', },
  { number: 2, text: 'Internships', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Statistics</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
