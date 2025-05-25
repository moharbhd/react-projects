import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ListCard } from "../../components/ListCard";
import { supabase } from "../../supabase/supabaseClient";

export default function ListItems() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    fetchItems();

    const subscription = supabase
      .channel("realtime-items")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "items" },
        fetchItems
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      await supabase
        .from("items")
        .select("*")
        .order("id", { ascending: false })
        .then((data) => {
          if (data !== null) {
            setItems(data.data);
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await supabase.from("items").delete().eq("id", id);
    fetchItems();
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            minHeight: "calc(100vh - 200px)",
            width: "100%",
          }}
        >
          <CircularProgress size={40} />
        </Box>
      ) : items.length < 1 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            minHeight: "calc(100vh - 200px)",
            width: "100%",
          }}
        >
          <Typography variant="h6">No Data</Typography>
        </Box>
      ) : (
        items.map((item) => (
          <ListCard key={item.id} item={item} handleDelete={handleDelete} />
        ))
      )}
    </>
  );
}
