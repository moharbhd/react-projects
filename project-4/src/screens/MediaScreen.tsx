import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { globalStyles } from "../styles/global";

export const MediaGallery = () => {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const addMedia = async () => {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      selectionLimit: 10,
      allowsMultipleSelection: true,
    }).then((res) => {
      setMedia(res.assets ?? []);
    });
  };

  const removeMedia = () => {
    setMedia([]);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ ...styles.button, flex: 1 }}
          onPress={addMedia}
        >
          <Text style={styles.buttonText}>Pick Images/Videos</Text>
        </TouchableOpacity>

        {media.length >= 1 ? (
          <TouchableOpacity
            style={{ ...styles.button, marginLeft: 10, backgroundColor: "red" }}
            onPress={removeMedia}
          >
            <Text style={styles.buttonText}>Empty</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>

      {media.length >= 1 ? (
        <ScrollView contentContainerStyle={styles.mediaContainer}>
          {media.map((item, index) =>
            item.type?.startsWith("image") ? (
              <Image
                key={index}
                source={{ uri: item.uri }}
                style={styles.media}
              />
            ) : (
              <View key={index} style={styles.videoBox}>
                <Text style={styles.videoText}>🎥 Video</Text>
              </View>
            )
          )}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ ...globalStyles.title }}>No Media</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  button: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
  mediaContainer: {
    marginTop: 15,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  media: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
  videoBox: {
    width: 100,
    height: 100,
    backgroundColor: "#444",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  videoText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
