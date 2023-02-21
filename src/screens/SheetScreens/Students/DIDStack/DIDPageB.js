import {ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import React, {useEffect, useState} from "react";
import NextButton from "../../../../components/NextButton";
import {ProgressBar, Searchbar} from "react-native-paper";
//redux
import {useDispatch, useSelector} from "react-redux";
import {getSubjects, selectSubjects} from "../../../../redux/dataSlice";
import {selectAccess} from "../../../../redux/userSlice";

const DIDPageB = ({navigation, route}) => {
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);
    const figures = useSelector(selectSubjects);
    const [filteredFigure, setFilteredFigure] = useState([]);
    const [figureQuery, setFigureQuery] = useState("");

    // const tags = route.params;

    useEffect(() => {
        if (access) {
            dispatch(getSubjects(access));
        }
    }, []);

    useEffect(() => {
        if (figures.length) {
            setFilteredFigure(figures);
        }
    }, [figures]);

    const onChangeSearch = (query) => {
        setFigureQuery(query);
        setFilteredFigure(figures.filter((item) => item.subject.toLowerCase().includes(query.toLowerCase()))
            // .slice(0, 20)
        );
    };
    const handleFigurePress = (props) => {
        // navigation.navigate("DIDPageC", { ...props, tags });
        navigation.navigate("DIDPageC", props);
    };
    return (<>
        <ScrollView style={styles.container}>
            {/* first searchbar */}
            <View style={styles.SearchbarStyleContainer}>
                <Searchbar
                    placeholder="חפש דמות"
                    inputStyle={styles.SearchbarStyle}
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
            <View style={styles.figuresContainer}>
                {filteredFigure.map((item, index) => {
                    return (<TouchableOpacity
                        key={index}
                        onPress={() => handleFigurePress(item)}
                    >
                        <View style={styles.figureBox}>
                            <Text style={styles.figureHead}>{item.subject}</Text>
                            <Text style={styles.figureBody}>{item.body}</Text>
                            {item.birth_date && (<Text style={styles.figureBody}>
                                נולד ב: {item.birth_date} , וחי עד: {item.death_date}
                            </Text>)}
                        </View>
                    </TouchableOpacity>);
                })}
            </View>
        </ScrollView>

        <View style={styles.footerContainer}>
            <View style={styles.ProgressBarContainer}>
                <ProgressBar
                    progress={0.5}
                    color={"#D9D9D9"}
                    style={styles.ProgressBarStyle}
                />
            </View>

            <View
                style={{
                    width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                }}
            >
                <View style={{width: 100}}>
                    <NextButton
                        title="הבא"
                        onPress={() => {
                            handleFigurePress({
                                head: "בחר דמות", body: "",
                            });
                        }}
                    />
                </View>
                <Text style={styles.headText}>שלב 1 מתוך 2</Text>
                <View style={{width: 100}}>
                    <NextButton title="הקודם" onPress={() => navigation.goBack()}/>
                </View>
            </View>
        </View>
    </>);
};

export default DIDPageB;

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#fff",
    }, footerContainer: {
        backgroundColor: "#fff", // marginTop: 10,
        flexDirection: "column", justifyContent: "space-between", paddingHorizontal: 20,
    }, headText: {
        fontSize: 16,
    }, ProgressBarContainer: {
        marginTop: 5, marginBottom: 5, width: "90%", display: "flex", marginLeft: "5%",
    }, ProgressBarStyle: {
        height: 8, backgroundColor: "#ADBCF2",
    }, SearchbarStyleContainer: {
        marginHorizontal: 8, marginTop: 20, opacity: 0.7,
    }, SearchbarStyle: {
        textAlign: "right",
    }, tagsContainer: {
        flexDirection: "row-reverse", flexWrap: "wrap", padding: 10, marginTop: 20,
    }, tagBox: {
        backgroundColor: "#FCBF49",
        paddingVertical: 10,
        paddingHorizontal: 8,
        opacity: 0.9,
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }, tagText: {
        fontSize: 18, color: "#fff",
    }, figuresContainer: {
        padding: 10,
    }, figureBox: {
        borderColor: "#3895D3", borderWidth: 1, marginBottom: 10, // marginHorizontal: 5,
        padding: 10, borderRadius: 15,
    }, figureHead: {
        fontSize: 18, fontWeight: "bold", marginBottom: 5,
    }, figureBody: {
        color: "black",
    }, prevText: {
        opacity: 0,
    },
});