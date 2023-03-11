import React from 'react';
import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import ThreeDotCircleIcon from '../IconsSvg/ThreeDotCircleIcon';
import ReturnIcon from '../IconsSvg/ReturnIcon';
import ApproveIcon from '../IconsSvg/ApproveIcon';

const DataTableGuide = ({headers, data}) => {
    let pendingFigure = 0;
    let reviewFigure = 0;
    let doneFigure = 0;
    let otherFigure = 0;

    data.map((dataType) => {
        if (dataType.status === 'pending') pendingFigure += 1;
        else if (dataType.status === 'review') reviewFigure += 1;
        else if (dataType.status === 'done') doneFigure += 1;
        else otherFigure += 1;
    });

    return (
        <DataTable style={styles.container}>
            <DataTable.Row>
                <DataTable.Cell>{pendingFigure}</DataTable.Cell>
                <DataTable.Cell>{headers[0]}</DataTable.Cell>
                <DataTable.Cell>
                    <ThreeDotCircleIcon></ThreeDotCircleIcon>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>{reviewFigure}</DataTable.Cell>
                <DataTable.Cell>{headers[1]}</DataTable.Cell>
                <DataTable.Cell>
                    {' '}
                    <ReturnIcon></ReturnIcon>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>{doneFigure}</DataTable.Cell>
                <DataTable.Cell>{headers[2]}</DataTable.Cell>
                <DataTable.Cell>
                    {' '}
                    <ApproveIcon></ApproveIcon>{' '}
                </DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
};

export default DataTableGuide;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    }
});
