import React from 'react';
import styled from 'styled-components/native';
import FullStar from '../assets/star.svg';
import HalfStar from '../assets/star_half.svg';
import EmptyStar from '../assets/star_empty.svg';

const StarArea = styled.View`
  flex-direction: row;
`;

const StarView = styled.View``;

const StarText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #737373;
`;

export default ({stars, showNumber}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let rest = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }

  if (rest > 0) {
    s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <EmptyStar width="18" height="18" fill="#FF9200" />}
          {i === 1 && <HalfStar width="18" height="18" fill="#FF9200" />}
          {i === 2 && <FullStar width="18" height="18" fill="#FF9200" />}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};
