import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NextButton from '../../../../components/NextButton';
import {ProgressBar, Searchbar} from 'react-native-paper';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {getSubjects, selectSubjects} from '../../../../redux/dataSlice';
import {selectAccess} from '../../../../redux/userSlice';
import ImageViewer from '../../../../components/ImageViewer';
import PlaceholderImage from '../../../../../assets/fallbackImage.png';
import {styles} from "../../../../styles/PagesStyle";

const width = Dimensions.get('window').width; //full width

const DIDPageB = ({navigation}) => {
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);
    const figures = useSelector(selectSubjects);
    const [filteredFigure, setFilteredFigure] = useState([]);
    const [figureQuery, setFigureQuery] = useState('');

    // const tags = route.params;

    useEffect(() => {
        if (access) {
            dispatch(getSubjects(access));
        }
    }, [access, dispatch]);

    useEffect(() => {
        if (figures.length) {
            setFilteredFigure(figures);
        }
    }, [figures]);

    const onChangeSearch = (query) => {
        setFigureQuery(query);
        setFilteredFigure(
            figures.filter((item) => item.subject.toLowerCase().includes(query.toLowerCase())), // .slice(0, 20)
        );
    };
    const handleFigurePress = (props) => {
        // navigation.navigate("DIDPageC", { ...props, tags });
        navigation.navigate('DIDPageC', props);
    };
    return (
        <>
            <ScrollView style={stylesIn.container}>
                {/* first searchbar */}
                <View style={stylesIn.SearchbarStyleContainer}>
                    <Searchbar
                        placeholder="חפש דמות"
                        inputStyle={stylesIn.SearchbarStyle}
                        iconColor="#000"
                        onChangeText={onChangeSearch}
                        value={figureQuery}
                    />
                </View>
                {/*end of first searchbar */}
                {/* tags section */}
                {/* <View style={styles.tagsContainer}>
        {tags.map((tag, index) => {
          if (tag.isClicked) {
            return (
              <View style={styles.tagBox} key={index}>
                <Text style={styles.tagText}>{tag.value}</Text>
              </View>
            );
          }
        })}
      </View>*/}
                {/* end of tags */}
                <View style={stylesIn.figuresContainer}>
                    {filteredFigure.map((item, index) => {
                        let selectedImage = null;
                        if (item.media) {
                            selectedImage = item.media[0].http_link;
                        }
                        return (
                            <TouchableOpacity
                                style={stylesIn.figureBox}
                                key={index}
                                onPress={() => handleFigurePress(item)}
                            >
                                <View style={{width: width * 0.65}}>
                                    <Text style={[stylesIn.figureHead,styles.textDirectionRTL]}>{item.subject}</Text>
                                    <Text style={[stylesIn.figureBody,styles.textDirectionRTL]}>{item.body}</Text>
                                    {item.birth_date && (
                                        <Text style={[stylesIn.figureBody,styles.textDirectionRTL]}>
                                            נולד ב: {item.birth_date} , וחי עד: {item.death_date}
                                        </Text>
                                    )}
                                </View>
                                <View style={stylesIn.ImageContainer}>
                                    {/* <Icon name="add" size={30} color={"#fff"} /> */}
                                    <ImageViewer
                                        placeholderImageSource={PlaceholderImage}
                                        selectedImage={selectedImage}
                                        width={width * 0.23}
                                    />
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            <View style={stylesIn.footerContainer}>
                <View style={stylesIn.ProgressBarContainer}>
                    <ProgressBar progress={0.5} color={'#D9D9D9'} style={stylesIn.ProgressBarStyle} />
                </View>

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {/*<View style={{width: 100}}>*/}
                    {/*    <NextButton*/}
                    {/*        title="הבא"*/}
                    {/*        onPress={() => {*/}
                    {/*            handleFigurePress({*/}
                    {/*                head: 'בחר דמות',*/}
                    {/*                body: '',*/}
                    {/*            });*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</View>*/}
                    <Text style={stylesIn.headText}>שלב 1 מתוך 2</Text>
                    <View style={{width: 100}}>
                        <NextButton title="הקודם" onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        </>
    );
};

export default DIDPageB;

const stylesIn = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footerContainer: {
        backgroundColor: '#fff', // marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headText: {
        fontSize: 16,
    },
    ProgressBarContainer: {
        marginTop: 5,
        marginBottom: 5,
        width: '90%',
        display: 'flex',
        marginLeft: '5%',
    },
    ProgressBarStyle: {
        height: 8,
        backgroundColor: '#ADBCF2',
    },
    SearchbarStyleContainer: {
        marginHorizontal: 8,
        marginTop: 20,
        opacity: 0.7,
    },
    SearchbarStyle: {
        textAlign: 'right',
    }, // tagsContainer: {
    //   flexDirection: 'row-reverse',
    //   flexWrap: 'wrap',
    //   padding: 10,
    //   marginTop: 20,
    // },
    // tagBox: {
    //   backgroundColor: '#FCBF49',
    //   paddingVertical: 10,
    //   paddingHorizontal: 8,
    //   opacity: 0.9,
    //   marginLeft: 10,
    //   marginBottom: 10,
    //   borderRadius: 10,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // tagText: {
    //   fontSize: 18,
    //   color: '#fff',
    // },
    figuresContainer: {
        padding: 10,
    },
    figureBox: {
        borderColor: '#3895D3',
        borderWidth: 1,
        marginBottom: 10, // marginHorizontal: 5,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    figureHead: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    figureBody: {
        color: 'black',
    },
    ImageContainer: {
        // flex: 1,
        // padding: 1,
        height: width * 0.23,
        width: width * 0.23,
        borderRadius: 65,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    }, // prevText: {
    //   opacity: 0,
    // },
});
