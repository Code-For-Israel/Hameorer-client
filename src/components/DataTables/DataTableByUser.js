import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import ThreeDotCircleIcon from '../IconsSvg/ThreeDotCircleIcon';
import ReturnIcon from '../IconsSvg/ReturnIcon';
import ApproveIcon from '../IconsSvg/ApproveIcon';
import Icon from '@mdi/react';
import { mdiNoteAlertOutline } from '@mdi/js';

const DataTableByUser = ({storiesByUser}) => {
    return (
        <DataTable style={styles.container}>
            <DataTable.Header>
                <DataTable.Title>שם מלא</DataTable.Title>
                {/*<DataTable.Title>סוג</DataTable.Title>*/}
                <DataTable.Title>שם קבוצה</DataTable.Title>
                <DataTable.Title>ציטוט מונפש</DataTable.Title>
                <DataTable.Title>הדרכה עצמית</DataTable.Title>
            </DataTable.Header>
            {storiesByUser.map((userStory, key) => (
                <DataTable.Row key={key}>
                    <DataTable.Cell>{userStory.fullName}</DataTable.Cell>
                    {/*<DataTable.Cell>{dataType.subjectType}</DataTable.Cell>*/}
                    <DataTable.Cell>{userStory.group}</DataTable.Cell>
                    {userStory.statusDid === 'pending' && (
                        <DataTable.Cell>
                            <ThreeDotCircleIcon></ThreeDotCircleIcon>
                        </DataTable.Cell>
                    )}
                    {userStory.statusDid === 'review' && (
                        <DataTable.Cell>
                            <ReturnIcon></ReturnIcon>
                        </DataTable.Cell>
                    )}
                    {userStory.statusDid === 'done' && (
                        <DataTable.Cell>
                            <ApproveIcon></ApproveIcon>
                        </DataTable.Cell>
                    )}
                    {userStory.statusDid !== 'done' && userStory.statusDid !== 'review' && userStory.statusDid !== 'pending' && (
                        <DataTable.Cell>
                            <Icon path={mdiNoteAlertOutline} size={1} />
                        </DataTable.Cell>
                    )}
                    {userStory.statusPolinActivity === 'pending' && (
                        <DataTable.Cell>
                            <ThreeDotCircleIcon></ThreeDotCircleIcon>
                        </DataTable.Cell>
                    )}
                    {userStory.statusPolinActivity === 'review' && (
                        <DataTable.Cell>
                            <ReturnIcon></ReturnIcon>
                        </DataTable.Cell>
                    )}
                    {userStory.statusPolinActivity === 'done' && (
                        <DataTable.Cell>
                            <ApproveIcon></ApproveIcon>
                        </DataTable.Cell>
                    )}
                    {userStory.statusPolinActivity !== 'done' && userStory.statusPolinActivity !== 'review' && userStory.statusPolinActivity !== 'pending' && (
                        <DataTable.Cell>


                            <Icon path={mdiNoteAlertOutline} size={1} />
                        </DataTable.Cell>
                    )}
                </DataTable.Row>
            ))}
        </DataTable>
    );
};

export default DataTableByUser;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        padding: 15,
    },
});
