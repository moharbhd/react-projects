import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

export default function EditItem() {
  const location = useLocation();
  const editItem = location.state?.item;

  const { id } = useParams();
  const [title, setTitle] = useState(editItem.title);
  const [description, setDescription] = useState(editItem.description);
  const navigate = useNavigate();
  const [isDirty, setIsDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await supabase
        .from("items")
        .update({
          title: title.trim(),
          description: description.trim(),
        })
        .eq("id", id)
        .select("*")
        .then((data) => {
          if (data.data !== null) {
            navigate(-1);
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title.trim() && description.trim() && description.trim()) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  }, [title, description, editItem.title, editItem.description]);

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {t("update_page_title")}
      </Typography>

      <TextField
        label={t("title")}
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label={t("description")}
        fullWidth
        margin="normal"
        multiline="true"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button
          variant="contained"
          disabled={!isDirty}
          onClick={handleUpdate}
          sx={{
            width: "60%",
            borderRadius: "12px",
            py: 1.5,
          }}
        >
          {loading ? (
            <CircularProgress size={25} sx={{ color: "white" }} />
          ) : (
            t("update")
          )}
        </Button>
      </Box>
    </Box>
  );
}
