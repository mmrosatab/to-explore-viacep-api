import React from "react";
import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  Paper,
} from "@mui/material";

export default function CustomTable({ address }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Logradouro</StyledTableCell>
            <StyledTableCell align="center">Bairro</StyledTableCell>
            <StyledTableCell align="center">Localidade</StyledTableCell>
            <StyledTableCell align="center">UF</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow data-testid="rows-table" key={address.logradouro}>
            <StyledTableCell align="center">
              {address.logradouro}
            </StyledTableCell>
            <StyledTableCell align="center">{address.bairro}</StyledTableCell>
            <StyledTableCell align="center">
              {address.localidade}
            </StyledTableCell>
            <StyledTableCell align="center">{address.uf}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
