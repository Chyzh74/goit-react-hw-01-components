import styled from 'styled-components';

export const Tr = styled.tr`
  :hover {
   background-color: #98d4ec;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
  border-right: 0.125rem solid #e9edff;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
