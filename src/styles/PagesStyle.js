import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {flex: 1, paddingRight: 10, paddingLeft: 5},
    container: {flex: 1, justifyContent: "center", alignItems: "center"},
    bottomScrollContainer: {marginBottom: 20, width: "100%",},
    image: {flex: 1, resizeMode: "cover"},
    loginSubTextView: {
        fontFamily: 'Assistant', flexDirection: "row", justifyContent: "flex-end", alignItems: "center", width: 180,
    },
    loginSubText: {
        fontFamily: 'Assistant', fontSize: 12, color: "#000",
    },
    loginBtnText: {
        fontFamily: 'Assistant', color: "#FFF", fontSize: 14,
    },

    cardComponent: {width: 278, height: 203, backgroundColor: '#072F5F', margin: 2},
    cardComponentTextWhite: {fontFamily: 'Assistant', color: 'white', fontSize: 14, fontWeight: 400},
    cardComponentTextBlack: {fontFamily: 'Assistant', color: 'black', fontSize: 16, paddingTop: 5},
    cardComponentTopPart: {flexDirection: 'row', display: 'flex', justifyContent: 'space-between'},
    cardComponentInsideTextArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        height: 155,
        borderRadius: 10
    },
    cardComponentTextSize: {fontSize: 12,fontWeight:400, textAlign: 'right', fontFamily: 'Assistant'},
    cardComponentCInsideContainer: {width: 100, padding: 1, aspectRatio: 1, alignSelf: 'center'},
    cardComponentImage: {width: "100%", aspectRatio: 1},
    cardComponentTextContainer: {
        width: 100, display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'
    },
    cardComponentButton: {
        width: 100,
        backgroundColor: "#1261A0",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginInput: {
        backgroundColor: "#fff",
        marginBottom: 5,
        marginTop: 20,
        padding: 10,
        textAlign: "right",
        fontFamily: 'Assistant',
        borderRadius: 6,
        width: 180,
        color: "#8B8787",
    },
    loginBtn: {
        marginTop: 20,
        width: 180,
        backgroundColor: "#1261A0",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    excelFileUpload: {color: "black", marginHorizontal: 15},
    bottomMenuButton: {
        backgroundColor: "#B6CEFF", justifyContent: "center", alignItems: "center", marginVertical: 1, padding: 10,
    },
    buttonText: {
        fontFamily: 'Assistant', fontSize: 24
    }
});