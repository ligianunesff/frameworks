// Este componente é usado para criar ou editar um usuário.
// Quando o `initialValues` contém um ID, o formulário é usado para editar um usuário existente.
// Caso contrário, ele serve para criar um novo usuário.

import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";

const EventForm = ({ onSubmit, initialValues, onCancel }) => {
  const [nameEvent, setNameEvent] = useState("");
  const [typeEvent, setTypeEvent] = useState("");
  const [sizeEvent, setSizeEvent] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    setNameEvent(initialValues.nameEvent || "");
    setTypeEvent(initialValues.typeEvent || "");
    setSizeEvent(initialValues.sizeEvent || "");
    setLocation(initialValues.location || "");
  }, [initialValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      id: initialValues.id,
      nameEvent,
      typeEvent,
      sizeEvent,
      location,
    });
    // Limpa os campos após o envio
    setNameEvent("");
    setTypeEvent("");
    setSizeEvent("");
    setLocation("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        {/* Título que muda com base em `initialValues` (criar ou editar) */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            {initialValues.id ? "Editar Evento" : "Criar Evento"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="nameEvent"
            label={nameEvent.length === 0 ? "Nome do evento" : ""} // O rótulo desaparece se o campo estiver preenchido
            name="nameEvent"
            value={nameEvent}
            onChange={(e) => setNameEvent(e.target.value)} // Atualiza o valor do campo 'name'
            variant="outlined"
            InputProps={{
              style: {
                backgroundColor: "#ffffff", // Cor de fundo do campo
              },
            }}
            sx={{
              // Estilização do campo de entrada
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "8px", // Borda arredondada
                },
                "&:hover fieldset": {
                  borderColor: "#4fc3f7", // Cor da borda ao passar o mouse
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="sizeEvent"
            label={sizeEvent.length === 0 ? "Tamanho do evento" : ""} // O rótulo desaparece se o campo estiver preenchido
            name="sizeEvent"
            value={sizeEvent}
            onChange={(e) => setSizeEvent(e.target.value)} // Atualiza o valor do campo 'name'
            variant="outlined"
            InputProps={{
              style: {
                backgroundColor: "#ffffff", // Cor de fundo do campo
              },
            }}
            sx={{
              // Estilização do campo de entrada
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "8px", // Borda arredondada
                },
                "&:hover fieldset": {
                  borderColor: "#4fc3f7", // Cor da borda ao passar o mouse
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="location"
            label={location.length === 0 ? "Localizacao" : ""} // O rótulo desaparece se o campo estiver preenchido
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // Atualiza o valor do campo 'name'
            variant="outlined"
            InputProps={{
              style: {
                backgroundColor: "#ffffff", // Cor de fundo do campo
              },
            }}
            sx={{
              // Estilização do campo de entrada
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "8px", // Borda arredondada
                },
                "&:hover fieldset": {
                  borderColor: "#4fc3f7", // Cor da borda ao passar o mouse
                },
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="typeEvent"
            label={typeEvent.length === 0 ? "Tipo de evento" : ""} // O rótulo desaparece se o campo estiver preenchido
            name="typeEvent"
            value={typeEvent}
            onChange={(e) => setTypeEvent(e.target.value)} // Atualiza o valor do campo 'email'
            variant="outlined"
            InputProps={{
              style: {
                backgroundColor: "#ffffff", // Cor de fundo do campo
              },
            }}
            sx={{
              // Estilização do campo de entrada
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "8px", // Borda arredondada
                },
                "&:hover fieldset": {
                  borderColor: "#4fc3f7", // Cor da borda ao passar o mouse
                },
              },
            }}
          />
        </Grid>

        {/* Botões para salvar ou cancelar */}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Botão de envio, muda o texto dependendo se estamos criando ou editando */}
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#4fc3f7" }}
            >
              {initialValues.id ? "Atualizar" : "Cadastrar Evento"}
            </Button>
            {/* Botão de cancelar, visível apenas durante a edição */}
            {initialValues.id && (
              <Button
                variant="contained"
                onClick={onCancel} // Chama a função `onCancel` ao cancelar a edição
                sx={{ backgroundColor: "#ff7961", ml: 2 }}
              >
                Cancelar
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventForm;
