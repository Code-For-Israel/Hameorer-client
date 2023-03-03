import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import PlaceholderImage from '../../assets/fallbackImage.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ImageViewer from "./ImageViewer";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

const guideCard = ({studentName, subject, country, yearBorn, yearDeath, image, onPress}) => (<>
    <View>
        <Card style={stylesIn.cardComponent}>
            <Card.Content>
                <View style={stylesIn.cardComponentTopPart}>
                    <View>
                        <MaterialIcons name="mail" color="#fff" size={15}/>
                    </View>
                    <View>
                        <Text style={stylesIn.cardComponentTextWhite}>{studentName}</Text>
                    </View>
                </View>

                <View style={stylesIn.cardComponentInsideTextArea}>
                    <View style={stylesIn.cardComponentCImageContainer}>
                        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={image}
                                     width={width * 0.33}/>
                    </View>
                    <View style={stylesIn.cardComponentTextContainer}>
                        <Text style={stylesIn.cardComponentTextSize}>
                            <B>נושא:</B> {subject}
                        </Text>
                        <Text style={stylesIn.cardComponentTextSize}>
                            <B>מדינה:</B> {country}
                        </Text>
                        <Text style={stylesIn.cardComponentTextSize}>
                            <B>תאריך לידה:</B> {yearBorn}
                        </Text>
                        <Text style={stylesIn.cardComponentTextSize}>
                            <B>תאריך פטירה:</B> {yearDeath}
                        </Text>
                        <TouchableOpacity style={stylesIn.cardComponentButton} onPress={onPress}>
                            <Text style={stylesIn.cardComponentTextWhite}>{'לציטוט המלא'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card.Content>
        </Card>
    </View>
</>);

export default guideCard;

const stylesIn = StyleSheet.create({
    cardComponent: {width: width * 0.75, height: height * 0.25, backgroundColor: '#072F5F', margin: 2},
    cardComponentTextWhite: {
        color: 'white', fontSize: 14, fontWeight: '400',
    },
    cardComponentTextBlack: {color: 'black', fontSize: 16, paddingTop: 5},
    cardComponentTopPart: {flexDirection: 'row', display: 'flex', justifyContent: 'space-between'},
    cardComponentInsideTextArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: height * 0.20,
        width: width * 0.67,
        borderRadius: 10,
        padding: 2
    },
    cardComponentTextSize: {
        fontSize: 12, fontWeight: '400', textAlign: 'right',
    },
    cardComponentCImageContainer: {
        width: width * 0.34, paddingTop: 10, alignItems: 'flex-end', alignSelf: 'center'
    },
    cardComponentTextContainer: {
        width: width * 0.32, display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'
    },
    cardComponentButton: {
        width: width * 0.30,
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
            width: 1, height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
