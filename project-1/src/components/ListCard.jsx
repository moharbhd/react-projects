import { Delete, Edit } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ListCard = ({ item, handleDelete})=> {
  const navigate = useNavigate();
  return (
    <>
      <Card key={item.id} sx={{ mb: 2, p: 2, borderRadius: 2}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {item.description}
            </Typography>
            <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
              {new Date(item.created_at).toLocaleString()}
            </Typography>
          </Box>

          <Box>
            <IconButton
              color="primary"
              onClick={() => navigate(`/edit/${item.id}`, { state: { item }})}
            >
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(item.id)}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
}
