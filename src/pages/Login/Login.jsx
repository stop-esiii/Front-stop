// src/pages/Login/Login.js
import React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function Login() {
  return (
    <Box sx={{ backgroundColor: '#f74440', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        className="login-container"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          className="login-box"
          sx={{
            padding: "20px",
            backgroundColor: "#ffc94d",
            borderRadius: "8px",
            width: "500px",
          }}
        >
          <h2>LOGIN</h2>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: "20px" }}
          >
            Fazer Login com Google
          </Button>
          <Box
            className="divider"
            sx={{ display: "flex", alignItems: "center", margin: "20px 0" }}
          >
            <hr style={{ flex: 1 }} /> <span>OU</span>{" "}
            <hr style={{ flex: 1 }} />
          </Box>
          <form>
            <TextField
              label="Login"
              variant="outlined"
              fullWidth
              placeholder="Insira seu e-mail ou nome aqui."
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Insira sua senha aqui."
              sx={{ marginBottom: "20px" }}
            />
            <Button variant="contained" color="primary" fullWidth>
              ENTRAR
            </Button>
          </form>
          <Box
            className="login-footer"
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            <p>
              Esqueceu sua senha? <a href="#">Clique aqui</a>
            </p>
            <p>
              Não possui login? <a href="#">Cadastre-se</a>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
