import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

import {
  Container,
  LocationContainer,
  Texts,
  Dates,
  Search,
} from './styles';

const Filter = () => (
  <Container>
    <LocationContainer>
      <MdLocationOn />

      <Texts>Fortaleza - CE, Brasil</Texts>
    </LocationContainer>

    <Dates>
      <Dates>
        <BsFillCalendarWeekFill />

        <Texts>15/05/2022</Texts>
      </Dates>

      <Dates>
        <BsFillCalendarWeekFill className="second-calendar" />

        <Texts>20/08/2022</Texts>
      </Dates>
    </Dates>

    <Search>
      <BiSearch />
    </Search>
  </Container>
);

export default Filter;
