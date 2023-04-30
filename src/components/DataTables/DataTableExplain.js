import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import ThreeDotCircleIcon from '../IconsSvg/ThreeDotCircleIcon';
import ReturnIcon from '../IconsSvg/ReturnIcon';
import ApproveIcon from '../IconsSvg/ApproveIcon';

const DataTableExplain = ({groupName}) => {
    return (
        <DataTable style={styles.container}>
            <DataTable.Row style={styles.row}>
                <DataTable.Cell>{'ממתין למשוב'}</DataTable.Cell>
                <DataTable.Cell>
                    <ThreeDotCircleIcon />
                </DataTable.Cell>
                <DataTable.Cell>{groupName}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.row}>
                <DataTable.Cell>{'הוחזר לתיקונים'}</DataTable.Cell>
                <DataTable.Cell>
                    <ReturnIcon />
                </DataTable.Cell>
                <DataTable.Cell>{groupName}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.row}>
                <DataTable.Cell>{'אושר'}</DataTable.Cell>
                <DataTable.Cell>
                    <ApproveIcon />
                </DataTable.Cell>
                <DataTable.Cell>{groupName}</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
};

export default DataTableExplain;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    row: {
        borderWidth: 1,
        borderColor: '#1261A0',
        borderBottomColor: '#1261A0',
    },
});
