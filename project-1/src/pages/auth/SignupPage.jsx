import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../../components/LanguageToggle";
import { supabase } from "../../supabase/supabaseClient";
import { validateEmail, validatePassword } from "../../util/validation";


export default function SignupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password, true);
    setErrors({ email: emailError, password: passwordError });
    return !emailError && !passwordError;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setSubmitError(error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography fontSize={50} sx={{ mb: 4 }}>
        {t("signup")}
      </Typography>

      <TextField
        label={t("email")}
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        onBlur={() => setErrors({ ...errors, email: validateEmail(email) })}
      />

      <TextField
        label={t("password")}
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
        onBlur={() =>
          setErrors({ ...errors, password: validatePassword(password, true) })
        }
      />

      {submitError && (
        <Typography color="error" sx={{ mt: 1 }}>
          {submitError}
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSignup}
      >
        {t("signup")}
      </Button>

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => navigate("/")}
      >
        {t("login")}
      </Button>



      <Box sx={{ mt:"30%", display: 'flex', justifyContent: 'center'}}>
        <LanguageToggle />
      </Box>
    </Container>
  );
}
