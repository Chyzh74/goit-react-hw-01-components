import React from 'react';
import PropTypes from 'prop-types';
import { Td, Type, ExtendedTr } from './TableRow.styled';

export const TableRow = ({ type, amount, currency, index }) => {
  return (
    <ExtendedTr idx={index}>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </ExtendedTr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
