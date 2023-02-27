import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Fragment, useState } from 'react';
import NextButton from '../../../../components/NextButton';
import { Modal, Portal, ProgressBar, Provider, RadioButton } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import ImageViewer from '../../../../components/ImageViewer';
import { hideModal, selectVisable, setRecording, setStory } from '../../../../redux/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccess } from '../../../../redux/userSlice';
import CloseIcon from '../../../../components/IconsSvg/CloseIcon';
import UploadIcon from '../../../../components/IconsSvg/UploadIcon';

const PlaceholderImage = require('../../../../../assets/fallbackImage.png');
const containerStyle = {
  backgroundColor: '#fff',
  padding: 10,
  width: 300,
  alignSelf: 'center',
  borderRadius: 15,
};

const ALLOWED_TYPES = [
  'audio/aac',
  'audio/mpeg',
  'audio/ogg',
  'audio/opus',
  'audio/3gpp',
  'audio/webm',
  'audio/wav',
];

const DIDPageC = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisable);
  const access = useSelector(selectAccess);
  const bucket = 'hameorer-audio';
  const [recordingFileName, setRecordingFileName] = useState('');
  const [recordingData, setRecordingData] = useState(undefined);
  const [textQuote, setTextQuote] = useState('');
  const [textOrigin, setTextOrigin] = useState('');
  const [checkedVoiceOrText, setCheckedVoiceOrText] = useState('quote');
  const [checkedVoiceType, setCheckedVoiceType] = useState('men');
  let selectedImage = null;
  const figure = route.params;
  if (figure.media) {
    selectedImage = figure.media[0].http_link;
  }

  const pickAudio = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: ALLOWED_TYPES });
    if (result.type === 'success') {
      if (ALLOWED_TYPES.includes(result.mimeType) === false)
        console.log('wrong type of file - only csv and excel');
      else {
        setRecordingFileName(result.file.name);
        setRecordingData(result.file);
      }
    }
  };

  const handleSend = () => {
    if (checkedVoiceOrText === 'voice') {
      let recording = new FormData();
      recording.append('type', recordingData.type);
      recording.append('file', recordingData);
      dispatch(setRecording({ access, recording, bucket, recordingFileName }));
    } else {
      const story = {
        subject: {
          type: 'figure',
          subject: figure.subject,
          date_birth: figure.birth_date,
          date_death: figure.death_date,
        },
        tags: ['_'],
        body: {
          background: '',
          quote_date: '',
          quote_source: textOrigin,
          qoute_location: figure.address,
          qoute_title: '',
          qoute: textQuote,
        },
        // created_by: "None",
        comments: {
          one: 'comment one',
          two: 'comment two',
        },
        status: 'review',
        media: {
          image: selectedImage ? selectedImage : 'none',
          sound: recordingFileName ? recordingFileName : 'none',
          soundType: recordingFileName ? checkedVoiceType : 'none',
        },
      };
      dispatch(setStory({ access, story }));
    }
    navigation.navigate('Profile');
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => {
            dispatch(hideModal());
          }}
          contentContainerStyle={containerStyle}
        >
          <View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Pressable
                onPress={() => {
                  dispatch(hideModal());
                }}
              >
                <CloseIcon />
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <Text>עבודה טובה !</Text>
              <Text>הציטוט שלך נשלח למשוב,</Text>
              <Text>תתקבל אצלך הודעה כשהוא יאושר.</Text>
            </View>
          </View>
        </Modal>
      </Portal>

      <ScrollView style={styles.container}>
        {/* headSection - name dates and + button*/}
        <View style={styles.HeadSection}>
          <View style={styles.ImageContainer}>
            {/* <Icon name="add" size={30} color={"#fff"} /> */}
            <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.h1}>{figure.subject}</Text>
            <Text style={styles.textBody}>{figure.location}</Text>

            <Text style={styles.textSubTitle}>תאריך לידה: {figure.birth_date}</Text>
            <Text style={styles.textSubTitle}>תאריך פטירה: {figure.death_date}</Text>
          </View>
        </View>
        {/* end of head Section */}

        <Text style={{ alignSelf: 'center', fontSize: 16 }}>
          אפשר להוסיף ציטוט בכתב או בהקלטת קול,
        </Text>
        <Text style={{ alignSelf: 'center', fontSize: 16 }}>מה ההעדפה שלך?</Text>
        {/* RadioButton */}
        <View style={styles.checkboxContainer}>
          {/* <Text style={styles.TextCheckbox}>סוג המדיה: </Text> */}
          <Text style={styles.TextCheckbox}>בכתב</Text>
          <RadioButton
            value="quote"
            status={checkedVoiceOrText === 'quote' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedVoiceOrText('quote')}
          />
          <Text style={styles.TextCheckbox}>בהקלטה</Text>
          <RadioButton
            value="voice"
            status={checkedVoiceOrText === 'voice' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedVoiceOrText('voice')}
          />
        </View>
        <Text style={styles.greyText}>*ציטוט בכתב יונפש עם דגימת קול אוטומטית</Text>

        {/* quote */}
        {checkedVoiceOrText === 'quote' && (
          <View style={styles.TextInputContainer}>
            <TextInput
              placeholder="הוסף ציטוט"
              direction="rtl"
              multiline={true}
              style={[styles.input, styles.inputBig]}
              onChangeText={setTextQuote}
              value={textQuote}
            />
          </View>
        )}
        {/* origin */}
        <View style={styles.TextInputContainer}>
          <TextInput
            placeholder={'הוסף מקור'}
            direction="rtl"
            style={styles.input}
            onChangeText={setTextOrigin}
            value={textOrigin}
          />
        </View>
        <Text style={styles.greyText}>*יש להוסיף פה את מקור הציטוט: לינק לאתר / שם הספר ועמוד</Text>
        {/* sound sample */}
        {checkedVoiceOrText === 'voice' && (
          <Fragment>
            <TouchableOpacity onPress={pickAudio}>
              <View style={styles.TextInputContainer}>
                <Text style={[styles.input, styles.inputSound]}>
                  {recordingFileName !== '' ? recordingFileName : 'העלה הקלטת ציטוט'}
                  <UploadIcon />
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.greyText}>*יש להקליט את הציטוט בקול בקול ברור ולהעלות כקובץ</Text>
            <View style={styles.checkboxContainer}>
              {/* <Text style={styles.TextCheckbox}>סוג המדיה: </Text> */}
              <Text style={styles.TextCheckbox}>קול של גבר</Text>
              <RadioButton
                value="men"
                status={checkedVoiceType === 'men' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedVoiceType('men')}
              />
              <Text style={styles.TextCheckbox}>קול של אישה</Text>
              <RadioButton
                value="woman"
                status={checkedVoiceType === 'woman' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedVoiceType('woman')}
              />
            </View>
          </Fragment>
        )}
        {/* end sound */}
        {/* send btn */}

        <View style={styles.ProgressBarContainer}>
          {/* note that the progress is reversed */}
          <ProgressBar progress={0} color={'#D9D9D9'} style={styles.ProgressBarStyle} />
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.send}>
            <NextButton title={'שליחה'} onPress={handleSend} />
          </View>
          <Text style={styles.headText}>שלב 2 מתוך 2</Text>
          <View style={{ width: 100 }}>
            <NextButton
              title="הקודם"
              onPress={() => {
                navigation.navigate('DIDPageB', figure.tags);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </Provider>
    // end of sound
  );
};

export default DIDPageC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  nextText: {
    opacity: 0,
  },
  headText: {
    fontSize: 16,
  },
  ProgressBarContainer: {
    marginTop: 5,
    width: '90%',
    display: 'flex',
    marginLeft: '5%',
  },
  ProgressBarStyle: {
    height: 8,
    backgroundColor: '#ADBCF2',
  },
  HeadSection: {
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusContainer: {
    fontSize: 24,
    backgroundColor: '#FCBF49',
    width: 67,
    height: 67,
    borderRadius: 67,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  TextCheckbox: {
    alignSelf: 'center',
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
  inputSound: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
