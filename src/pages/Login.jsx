import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { VisuallyHiddenInput } from "../components/styels/StyeldComponets";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggoleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSinUp = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgb(255 225 209), rgb(249 159 159))",
      }}
    >
      <Container
        component={"main"}
        maxWidth={"xs"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{ marginTop: "2rem", width: "100%" }}
                onSubmit={handleLogin}
              >
                <TextField
                  label="Username"
                  required
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  label="Password"
                  required
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  fullWidth
                  color="secondary"
                  type="submit"
                >
                  Login
                </Button>
                <Typography textAlign={"center"} margin={"1rem"}>
                  OR
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  onClick={() => toggoleLogin()}
                >
                  Sing up
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{ marginTop: "2rem", width: "100%" }}
                onSubmit={handleSinUp}
              >
                <Stack position={"relative"} width={"9rem"} margin={"auto"}>
                  <Avatar
                    sx={{ width: "8rem", height: "8rem", objectFit: "contain" }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.5)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography m={"0.5rem auto"} color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  label="Name"
                  required
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  label="Bio"
                  required
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />

                <TextField
                  label="Username"
                  required
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  label="Password"
                  required
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  fullWidth
                  color="secondary"
                  type="submit"
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} margin={"1rem"}>
                  OR
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => toggoleLogin()}
                  color="secondary"
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
