import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[2]}px;
  text-align: center;
  max-width: 90%;
  width: 500px;
  border-radius: ${props => props.theme.radii.medium};
  border: 5px solid ${props => props.theme.colors.white};
 `;  

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.accent};
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: #98d4ec;
`;

// export const ExtendedTr = styled(Tr)`
//   background-color: ${props =>
//     props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
// `;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: center;

  :first-child {
    border-top-left-radius: ${props => props.theme.radii.medium};
  }

  :last-child {
    border-top-right-radius: ${props => props.theme.radii.medium};
  }
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

// export const Td = styled.td`
//   padding-left: ${props => props.theme.space[4]}px;
//   border-right: 0.125rem solid #e9edff;
// `;

// export const Type = styled(Td)`
//   text-transform: capitalize;
// `;
