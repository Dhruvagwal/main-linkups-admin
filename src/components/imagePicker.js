import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageSelector({style, setImage, image}) {

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Pressable onPress={pickImage} style={style}>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    </Pressable>
  );
}