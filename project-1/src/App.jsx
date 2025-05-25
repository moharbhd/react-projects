import { CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import LoadingPage from "./components/LoadingPage";
import { AuthContext } from "./providers/AuthProvider";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import AppTheme from "./theme/AppTheme";

function App() {
  const { session, isLoading } = useContext(AuthContext);

  const { i18n } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  if (isLoading) {
    return (
      <ThemeProvider theme={AppTheme(direction)}>
        <CssBaseline />
        <LoadingPage />
      </ThemeProvider>
    );
  }

  return (
    <div dir={direction}>
      <ThemeProvider theme={AppTheme(direction)}>
        <CssBaseline />
        {session ? <DashboardRoutes /> : <AuthRoutes />}
      </ThemeProvider>
    </div>
  );
}

export default App;
