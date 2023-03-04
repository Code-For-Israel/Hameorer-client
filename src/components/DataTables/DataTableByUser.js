import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import ThreeDotCircleIcon from '../IconsSvg/ThreeDotCircleIcon';
import ReturnIcon from '../IconsSvg/ReturnIcon';
import ApproveIcon from '../IconsSvg/ApproveIcon';

const DataTableByUser = ({data}) => {
    return (
        <DataTable style={styles.container}>
            <DataTable.Header>
                <DataTable.Title>שם מלא</DataTable.Title>
                <DataTable.Title>סטטוס</DataTable.Title>
                <DataTable.Title>סוג</DataTable.Title>
                <DataTable.Title>שם קבוצה</DataTable.Title>
                <DataTable.Title>סטטוס</DataTable.Title>
            </DataTable.Header>
            {data.map((dataType, key) => (
                <DataTable.Row key={key}>
                    <DataTable.Cell>{dataType.fullName}</DataTable.Cell>
                    <DataTable.Cell>{dataType.status}</DataTable.Cell>
                    <DataTable.Cell>{dataType.subjectType}</DataTable.Cell>
                    <DataTable.Cell>{dataType.group}</DataTable.Cell>
                    {dataType.status === 'pending' && <ThreeDotCircleIcon></ThreeDotCircleIcon>}
                    {dataType.status === 'review' && <ReturnIcon></ReturnIcon>}
                    {dataType.status === 'done' && <ApproveIcon></ApproveIcon>}
                </DataTable.Row>
            ))}
        </DataTable>
    );
};

export default DataTableByUser;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});
