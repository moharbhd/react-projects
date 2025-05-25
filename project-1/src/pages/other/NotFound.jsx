import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h4" gutterBottom>404 - Page Not Found</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Container>
  );
}
