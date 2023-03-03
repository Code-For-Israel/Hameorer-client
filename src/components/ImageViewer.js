import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage, width }) {
  const imageSource =
    selectedImage != null && selectedImage !== 'none'
      ? { uri: selectedImage }
      : placeholderImageSource;

  return <Image source={imageSource} style={[styles.image, { width: width }]} />;
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    resizeMode: 'contain',
  },
});
