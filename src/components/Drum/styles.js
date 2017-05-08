import styled from 'styled-components';

export const StyledDrum = styled.div`
  border: solid ${props => props.pressed ? '#2A2A2A' : '#F50934'};
  width: 31.33333%;
  padding-top: 33.33333%;
  float: left;
  margin: 1%;
  position: relative;
  background: #2A2A2A;
  border-width: 0px 0px 8px 3px; 
  color: white;
`;

export const TitleContainer = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${props => props.pressed ? '43%' : '45%'};
  text-align: center;
  display: block;
`;

export const KeyContainer = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${props => props.pressed ? '28%' : '30%'};
  text-align: center;
  display: block;
`;
