import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from "@mui/material";

const EventList = ({ events, onDelete, onSelect }) => {
  const generateRandomId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < 7; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomId;
  };

  return (
    <Box sx={{ mt: 3 }}>
      {/* Título da seção */}
      <Typography variant="h6" gutterBottom>
        Lista de eventos disponiveis
      </Typography>

      {/* Container da Tabela com estilização */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table>
          {/* Cabeçalho da Tabela */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#4fc3f7" }}>
              {/* Cabeçalhos das colunas da tabela */}
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                ID
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Nome do evento
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Tipo do evento
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Tamanho do evento
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Localizacao
              </TableCell>

              <TableCell
                align="center"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Acoes
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell align="center">{generateRandomId()}</TableCell>
                <TableCell align="center">{event.nameEvent}</TableCell>
                <TableCell align="center">{event.typeEvent}</TableCell>
                <TableCell align="center">{event.sizeEvent}</TableCell>
                <TableCell align="center">{event.location}</TableCell>

                <TableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onSelect(event)}
                    sx={{ mr: 1, borderColor: "#4fc3f7", color: "#4fc3f7" }}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onDelete(event.id)}
                    sx={{ borderColor: "#ff7961", color: "#ff7961" }}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EventList;
