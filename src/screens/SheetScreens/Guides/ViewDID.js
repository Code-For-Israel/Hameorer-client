import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-native-paper';
import PlaceholderImage from '../../../../assets/fallbackImage.png';
import ImageViewer from '../../../components/ImageViewer';

const ViewDID = ({ route }) => {
  const data = route.params;
  return (
    route &&
    data && (
      <Provider>
        <ScrollView style={styles.container}>
          {/* headSection - name dates and + button*/}
          <View style={styles.HeadSection}>
            <View style={styles.ImageContainer}>
              {/* <Icon name="add" size={30} color={"#fff"} /> */}
              <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={data.media?.image}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.h1}>{data.subject.subject}</Text>
              <Text style={styles.textBody}>{data.body.qoute_location}</Text>

              <Text style={styles.textSubTitle}>תאריך לידה: {data.body.birth_date}</Text>
              <Text style={styles.textSubTitle}>תאריך פטירה: {data.body.death_date}</Text>
            </View>
          </View>
          {/* end of head Section */}

          {/* quote */}
          {
            <View style={styles.TextInputContainer}>
              <TextInput
                disabled={true}
                direction="rtl"
                multiline={true}
                style={[styles.input, styles.inputBig]}
                value={data.body.qoute}
              />
            </View>
          }
          {/* origin */}
          <View style={styles.TextInputContainer}>
            <TextInput
              disabled={true}
              direction="rtl"
              style={styles.input}
              value={data.body.quote_source}
            />
          </View>
          {/* send btn */}
        </ScrollView>
      </Provider>
    )
    // end of sound
  );
};

export default ViewDID;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  HeadSection: {
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  h1: {
    fontSize: 24,
    color: '#2B3F66',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textBody: {
    fontSize: 16,
    marginBottom: 5,
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  TextInputContainer: {
    width: '100%',
    paddingHorizontal: 15,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'right',
  },
  inputBig: {
    height: 280,
    textAlignVertical: 'top',
  },

  send: {
    width: 100,
    marginLeft: 15,
    marginTop: 5,
  },
  ImageContainer: {
    // flex: 1,
    // padding: 1,
    borderRadius: 65,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  greyText: {
    alignSelf: 'center',
    color: '#8B8787',
    marginBottom: 10,
  },
});
