import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import PlaceholderImage from '../../assets/fallbackImage.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;

const guideCard = ({ studentName, subject, country, yearBorn, yearDeath, onPress }) => (
  <>
    <View>
      <Card style={stylesIn.cardComponent}>
        <Card.Content>
          <View style={{ height: 26 }}>
            <View style={stylesIn.cardComponentTopPart}>
              <View>
                <MaterialIcons name="mail" color="#fff" size={15} />
              </View>
              <View>
                <Text style={stylesIn.cardComponentTextWhite}>{studentName}</Text>
              </View>
            </View>
          </View>

          <View style={stylesIn.cardComponentInsideTextArea}>
            <View style={stylesIn.cardComponentCInsideContainer}>
              <Image source={PlaceholderImage} style={stylesIn.cardComponentImage}></Image>
            </View>
            <View style={stylesIn.cardComponentTextContainer}>
              <Text style={stylesIn.cardComponentTextSize}>
                <B>נושא:</B> {subject}
              </Text>
              <Text style={stylesIn.cardComponentTextSize}>
                <B>מדינה:</B> {country}
              </Text>
              <Text style={stylesIn.cardComponentTextSize}>
                {yearBorn} <B>:תאריך לידה</B>
              </Text>
              <Text style={stylesIn.cardComponentTextSize}>
                {yearDeath} <B>:תאריך פטירה</B>
              </Text>
              <TouchableOpacity style={stylesIn.cardComponentButton} onPress={onPress}>
                <Text style={stylesIn.cardComponentTextWhite}>{'לציטוט המלא'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  </>
);

export default guideCard;

const stylesIn = StyleSheet.create({
  cardComponent: { width: 278, height: 203, backgroundColor: '#072F5F', margin: 2 },
  cardComponentTextWhite: {
    fontFamily: 'Assistant',
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
  },
  cardComponentTextBlack: { fontFamily: 'Assistant', color: 'black', fontSize: 16, paddingTop: 5 },
  cardComponentTopPart: { flexDirection: 'row', display: 'flex', justifyContent: 'space-between' },
  cardComponentInsideTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 155,
    borderRadius: 10,
  },
  cardComponentTextSize: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'right',
    fontFamily: 'Assistant',
  },
  cardComponentCInsideContainer: { width: 100, padding: 1, aspectRatio: 1, alignSelf: 'center' },
  cardComponentImage: { width: '100%', aspectRatio: 1 },
  cardComponentTextContainer: {
    width: 100,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  cardComponentButton: {
    width: 100,
    backgroundColor: '#1261A0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
