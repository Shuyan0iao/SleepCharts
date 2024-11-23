import React from 'react';
import { StyleSheet } from 'react-native';
import { BarChart, yAxisSides } from "react-native-gifted-charts";
import { heartData } from '../data/comparisonsData';

export default function CompHeart() {
    return (
        <BarChart
            stackData={heartData}
            width={300}
            height={100}
            // Bar
            spacing={10}
            barWidth={12}
            barBorderRadius={6}
            // Axis
            noOfSections={2}
            maxValue={100}
            initialSpacing={30}
            yAxisLabelTextStyle={{
                fontSize: 10,
                color: 'gray',
            }}
            xAxisLabelTextStyle={{
                fontSize: 12,
                color: 'gray',
                width: 40,
            }}
            xAxisLabelTexts={['8 PM', '', '', '11 PM', '', '', '2 AM', '', '', '5AM', '', '']}
            yAxisColor="lightgray"
            xAxisColor="lightgray"
            yAxisSide={yAxisSides.RIGHT}
        />
    );
}
const styles = StyleSheet.create({
    xGridLine: {
        position: 'absolute',
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
});