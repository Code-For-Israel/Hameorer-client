import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {flex: 1},
    container: {flex: 1, justifyContent: "center", alignItems: "center"},
    bottomScrollContainer: {marginBottom: 20, width: "100%",},
    image: {flex: 1, resizeMode: "cover"},
    loginSubTextView: {flexDirection: "row", justifyContent: "flex-end", alignItems: "center", width: 180,},
    loginSubText: {fontSize: 12, color: "#000",},
    loginBtnText: {color: "#FFF", fontSize: 14,},
    loginInput: {
        backgroundColor: "#fff",
        marginBottom: 5,
        marginTop: 20,
        padding: 10,
        textAlign: "right",
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
        backgroundColor: "#B6CEFF",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 1,
        padding: 10,
    },
    buttonText: {fontSize: 24}
});
