import {StyleSheet, View} from 'react-native';
import React from 'react';
import {List, Provider} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {logoutThunk} from '../../../redux/userSlice';
import PrevButton from '../../../components/NextButton';

const GuideHeader = ({groupInfo}) => {
    const dispatch = useDispatch();
    return (
        <Provider>
            <View style={stylesIn.HeaderSection}>
                <View style={{width: '100%'}}>
                    <List.Accordion
                        style={{
                            margin: 10,
                            background: '#D9D9D9',
                            height: 47,
                            textAlignLast: 'right',
                            borderRadius: 5,
                        }}
                        title={groupInfo?.group_name}
                        left={(props) => <List.Icon {...props} icon="file-edit-outline" />}
                    >
                        <List.Item title="חלק 1 שנפתח" style={{textAlignLast: 'right'}} />
                        <List.Item
                            title="?חלק 2 שנפתח - מה שמים פה"
                            style={{textAlignLast: 'right'}}
                        />
                    </List.Accordion>
                </View>
            </View>
            <PrevButton
                style={{
                    margin: 10,
                }}
                title={'התנתק'}
                onPress={() => dispatch(logoutThunk())}
            ></PrevButton>
        </Provider>
    );
};

export default GuideHeader;

const stylesIn = StyleSheet.create({
    HeaderSection: {
        padding: 0,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
});
