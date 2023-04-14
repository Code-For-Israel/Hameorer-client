import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    TextSubtitle: {
        fontStyle: "normal",
        // fontWeight: "bold",
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'right',
        color: '#3E5991'
    },
    pageContainer: {
        flex: 1,
        alignItems: "center",
        // marginTop: 15,
        paddingTop: 15,
        backgroundColor: "#FFFF",
    },
    DropContainer: {
        width: "90%",
        // marginBottom: 20,
        zIndex: 100,
    },
    DropDownLine: {
        backgroundColor: "#f5f5f5",
        marginBottom: 20,
    },
    TextContainer: {
        width: "90%",
        flexDirection: "row",
        // alignItems: "end",
        justifyContent: "flex-end",
    }, TextContainerFull: {
        flexDirection: "row",
        // alignItems: "end",
        justifyContent: "flex-end",
    },
    TextOne: {
        fontSize: 16,
    },
    TextTwo: {
        fontSize: 22,
        // fontWeight: "bold",
        color: "#072F5F",
        marginBottom: 15,
    },
    textThree: {
        fontSize: 12,
        color: "#8B8787",
        marginBottom: 8,
    },
    TextInputContainer: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: '#ffffff'
    },
    input: {
        height: 280,
        padding: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        marginBottom: 30,
        textAlign: "right",
        textAlignVertical: 'top'
    },
    inputT: {
        height: 120,
        padding: 10,
        backgroundColor: "#fffff",
        borderRadius: 10,
        marginBottom: 30,
        textAlign: "right",
        textAlignVertical: 'top'
    },
    input2: {
        width: "100%",
        padding: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        marginBottom: 30,
        textAlign: "right",
    },
    ButtonContainer: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // position: "absolute",
        // bottom: 12
    },
    TextStatus: {
        fontSize: 24,
        // fontWeight: "bold",
        marginLeft: 20,
    },
    StatusContainer: {
        width: "90%",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
    },
});