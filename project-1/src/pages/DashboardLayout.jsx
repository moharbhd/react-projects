import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavWidget } from '../components/NavWidget';
import { supabase } from '../supabase/supabaseClient';


export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  const {i18n, t} = useTranslation();
  const isAr = i18n.language === 'ar';
  const drawerWidth = 250;

return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavWidget />
      <Box component="div" sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            mr: `${isAr ? drawerWidth : 0}px`,
            ml: `${!isAr ? drawerWidth : 0}px`,
            borderBottom: '1px solid grey',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">{t('dashboard')}</Typography>
            <Button
            variant="outlined"
            color='error'
            onClick={handleLogout}
            >
              {t('logout')}
            </Button>
          </Toolbar>
        </AppBar>

        <Toolbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}