import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    textDirectionRTL: {
        textAlign: 'right',
        writingDirection: 'rtl',
        padding: 3,
    },
    viewDirectionRTL: {flexDirection: 'row-reverse'},
    mainContainer: {flex: 1, marginBottom: 15, borderRadius:20},
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    bottomScrollContainer: {marginBottom: 20, width: '100%'},
    image: {flex: 1, resizeMode: 'cover'},
    loginSubTextView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 180,
    },
    loginSubText: {
        fontSize: 12,
        color: '#000',
    },
    loginBtnText: {
        color: '#FFF',
        fontSize: 14,
    },

    cardComponent: {
        backgroundColor: '#072F5F',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    },
    cardComponentTextWhite: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
    },
    cardComponentTextblack: {
        color: 'black',
        paddingLeft: 3,
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '400',
    },
    cardComponentSentIcon: {
        backgroundColor: 'white',
        marginHorizontal: 6,
        alignSelf: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        marginRight: 10,
    },
    cardComponentTextBlack: {
        color: 'black',
        fontSize: 16,
        paddingRight: 15,
        alignItems: 'center',
    },
    cardComponentTopPart: {
        flexDirection: 'row',

        display: 'flex',
        justifyContent: 'space-between',
    },
    cardComponentInsideTextArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        height: 160,
        borderRadius: 1,
    },
    cardComponentTextSize: {
        fontSize: 18,
        textAlign: 'center',
        marginRight: 5,
        flexDirection: 'row',

        fontWeight: '400',
    },
    cardComponentCInsideContainer: {
        width: 200,
        padding: 1,
        aspectRatio: 1,
        alignSelf: 'center',
    },
    cardComponentImage: {width: '100%', aspectRatio: 1},
    cardComponentTextContainer: {
        width: 220,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    cardComponentButton: {
        backgroundColor: 'white',
        width: 160,
        height: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',

    },
    loginInput: {
        backgroundColor: '#fff',
        marginBottom: 8,
        marginTop: 20,
        padding: 10,
        textAlign: 'right',

        borderRadius: 6,
        width: 180,
        color: '#8B8787',
    },
    loginBtn: {
        marginTop: 20,
        width: 180,
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
    excelFileUpload: {color: 'black', marginHorizontal: 15},
    bottomMenuButton: {
        backgroundColor: '#B6CEFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1,
        padding: 8,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 24,
    },
    buttonTextDisable: {
        fontSize: 24,
        color: 'grey',
    },
});
