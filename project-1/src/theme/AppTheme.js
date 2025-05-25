import { createTheme } from "@mui/material/styles";

const AppTheme = (direction) =>
  createTheme({
    direction: direction,
    palette: {
      mode: "dark",
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
    },
    typography: {
      fontFamily:
        direction === "rtl" ? "Cairo, sans-serif" : "Roboto, sans-serif",
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            textAlign: direction === "rtl" ? "right" : "left",
          },
         
        },
      },
    },
  });

export default AppTheme;
