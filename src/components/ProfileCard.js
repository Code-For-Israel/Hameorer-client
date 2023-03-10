import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {styles} from '../styles/PagesStyle';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const profileCard = ({title, status, subject, onPress}) => {
    return (
        <>
            <View>
                <Card style={styles.cardComponent}>
                    <Card.Content>
                        <View style={{height: 26, marginBottom: 5}}>
                            <View style={styles.cardComponentTopPart}>
                                <View>
                                    <MaterialIcons name="mail" color="white" size={30} />
                                </View>
                                <View>
                                    <Text style={styles.cardComponentTextWhite}>{title}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardComponentInsideTextArea}>
                            <View style={styles.cardComponentTextContainer}>
                                <View style={styles.cardComponentSentIcon}>
                                    <Text style={styles.cardComponentTextSize}>{subject}</Text>
                                </View>
                                <View style={styles.cardComponentSentIcon}>
                                    <Text style={styles.cardComponentTextSize}>{status}</Text>
                                    <MaterialIcons name="send" color="black" size={25} />
                                </View>

                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                    }}
                                >
                                    <TouchableOpacity
                                        style={styles.cardComponentButton}
                                        onPress={onPress}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                alignSelf: 'center',
                                            }}
                                        >
                                            <View style={styles.cardComponentSentIcon}>
                                                <MaterialIcons
                                                    name="edit"
                                                    color="black"
                                                    size={25}
                                                />
                                                <Text style={styles.cardComponentTextblack}>
                                                    {'כניסה למשימה'}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </>
    );
};

export default profileCard;
