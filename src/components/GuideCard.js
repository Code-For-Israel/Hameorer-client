import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {styles} from "../styles/PagesStyle";
import PlaceholderImage from "../../assets/fallbackImage.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const guideCard = ({studentName, subject, country, yearBorn, yearDeath, onPress}) => (<>
    <View>
        <Card style={styles.cardComponent}>
            <Card.Content>
                <View style={{height: 26}}>
                    <View style={styles.cardComponentTopPart}>
                        <View>

                            <MaterialIcons name="mail" color="#fff" size={15}/>
                        </View>
                        <View>
                            <Text style={styles.cardComponentTextWhite}>{studentName}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardComponentInsideTextArea}>
                    <View style={styles.cardComponentCInsideContainer}>
                        <Image source={PlaceholderImage} style={styles.cardComponentImage}></Image>
                    </View>
                    <View style={styles.cardComponentTextContainer}>
                        <Text style={styles.cardComponentTextSize}><B>נושא:</B> {subject}</Text>
                        <Text style={styles.cardComponentTextSize}><B>מדינה:</B> {country}</Text>
                        <Text style={styles.cardComponentTextSize}>{yearBorn} <B>:תאריך לידה</B></Text>
                        <Text style={styles.cardComponentTextSize}>{yearDeath} <B>:תאריך פטירה</B></Text>
                        <TouchableOpacity style={styles.cardComponentButton} onPress={onPress}>
                            <Text style={styles.cardComponentTextWhite}>{"לציטוט המלא"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card.Content>
        </Card>
    </View>
</>);


export default guideCard;
