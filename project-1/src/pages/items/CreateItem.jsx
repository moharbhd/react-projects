import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

export default function CreateItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  

  const handleCreate = async () => {
    try {
      setLoading(true);
      await supabase
        .from("items")
        .insert({ title, description })
        .select("*")
        .then((data) => {
          if (data.data !== null) {
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title.trim() && description.trim()) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  }, [title, description]);

  return (
    <Box>
      <Typography sx={{ fontSize: 28 }}>
       {t('create_page_title')}
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
          onClick={handleCreate}
          sx={{
            width: "60%",
            borderRadius: "12px",
            py: 1.5,
          }}
        >
          {loading ? (
            <CircularProgress size={25} sx={{ color: "white" }} />
          ) : (
             t('create')
          )}
        </Button>
      </Box>
    </Box>
  );
}
