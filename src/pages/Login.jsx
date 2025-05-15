import { Alert, Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthProvider"

export const Login = () => {
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await login(username, password)
    } catch(err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h5" align="center" gutterBottom sx={{ color: "#61dafb", fontWeight: "bold" }}>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          sx={{ backgroundColor: "#474747", borderRadius: "8px" }}
          label="Usuário"
          variant="outlined"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          sx={{ backgroundColor: "#474747", borderRadius: "8px" }}
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
        <Box>
          <CircularProgress />
        </Box>
        ) : (
          <Button variant="contained" type="submit" sx={{ backgroundColor: "#61dafb", color: "black", fontWeight: "bold" }}>
            Entrar
          </Button>
        )}

        {error && <Alert severity="error">{error}</Alert>}
      </Box>
    </Container>
  )
}
