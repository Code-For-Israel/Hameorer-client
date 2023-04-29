import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { selectAccess } from '../../../../redux/userSlice';
import { getSubjects, selectSubjects } from '../../../../redux/dataSlice';
import { useEffect } from 'react';
// import ImageViewer from '../../../../components/ImageViewer';
const PlaceholderImage = require('../../../../../assets/fallback2.png');
import NextButton from '../../../../components/NextButton';

const SubjectBox = ({ item }) => {
    return (
        <View style={styles.itemBox}>
            <Image
                source={item&& item.media ? item.media[0].http_link : PlaceholderImage}
                style={{
                    width: 90,
                    height: 90,
                    resizeMode: 'contain',
                }}
            />
            <View style={styles.itemBoxView}>
                <Text style={{
                    color: 'white',
                    fontSize: 12,
                    height: "100%",
                    // display: 'flex',
                    // flexWrap: 'wrap',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // flexDirection: 'row'
                }}>{item.subject}</Text>
            </View>
        </View>


    )
}


const IndexPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);
    const subjects = useSelector(selectSubjects);

    useEffect(() => {
        if (access) {
            dispatch(getSubjects(access));
        }
    }, [access, dispatch]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>בחרו נושא להדרכה מתוך הרשימה:</Text>
            <Text style={styles.subTitle} >רשימת העזרים הקיימים לרשותכם תוצג לכם עם בחירת הנושא</Text>
            <ScrollView>
                <View style={styles.itemBoxContainer}>
                    {subjects ? (
                        subjects
                            .filter(item => item.type == "polin-activity")
                            .map((item) => {
                                console.log(item)

                                return (
                                    <TouchableOpacity key={item._id}
                                        onPress={() => { navigation.navigate('Page1', item); }}
                                    >
                                        <SubjectBox item={item} />
                                    </TouchableOpacity>
                                )
                            })
                    )
                        : (
                            <Text>אין נושאים להדרכה</Text>
                        )
                    }
                </View>
            </ScrollView>
            <View style={styles.btnView}>
                <View style={{ width: 100 }}>
                    <NextButton title="הקודם" onPress={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    )
}
export default IndexPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 18,
        color: '#1261a0',
    },
    subTitle: {
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 12,
        color: 'grey',
        marginBottom: 20,
    },
    itemBoxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: 500,
    },
    itemBox: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 135,
        width: 100,
        borderWidth: 1,
        borderColor: '#1261a0',
        borderRadius: 10,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: '#1261a0',
    },
    itemBoxView: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 3,
    },
    btnView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15
    }
})