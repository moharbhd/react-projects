import { Add as AddIcon, Home as HomeIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";
import { AuthContext } from "../providers/AuthProvider";

export const NavWidget = () => {
  const navigate = useNavigate();
  const { session } = useContext(AuthContext);

  const { i18n, t } = useTranslation();
  const align = i18n.language === "ar" ? "right" : "left";

  const menu = [
    { label: t("home"), icon: <HomeIcon />, path: "/" },
    { label: t("create"), icon: <AddIcon />, path: "/create" },
  ];

  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 1,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          pt: 2.5,
          borderRight: "1px solid grey",
        },
      }}
      variant="permanent"
      anchor={align}
    >
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Avatar sx={{ mx: "auto", width: 56, height: 56 }} />
        <Typography variant="body1" sx={{ mt: 1 }}>
          {t("welcome_back")}
        </Typography>
        <Typography variant="body2" color="grey">
          {session?.user?.email}
        </Typography>
      </Box>

      <List>
        {menu.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "25%",
                display: "flex",
                justifyContent: "flex-start"
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              sx={{
                textAlign: align,
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: "auto", p: 2, alignContent: "center", width: "100%" }}>
        <LanguageToggle />
      </Box>
    </Drawer>
  );
};
