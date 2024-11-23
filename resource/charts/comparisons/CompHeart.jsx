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
            noOfSections={2}
            maxValue={100}
            barWidth={12}
            spacing={10}
            initialSpacing={15}
            yAxisLabelTextStyle={{
                fontSize: 10,
                color: 'gray',
            }}
            xAxisLabelTextStyle={{
                fontSize: 12,
                color: 'gray',
            }}

            rulesThickness={1}
            yAxisSide={yAxisSides.RIGHT}
            barBorderRadius={6}
            yAxisColor="lightgray"
            xAxisColor="lightgray"
            xAxisLabelTexts={['8 PM', '', '', '11 PM', '', '', '2 AM', '', '', '5AM', '', '']}
            xAxisLabelsHeight={20}
            xAxisLabelsVerticalShift={5}
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