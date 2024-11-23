import React from 'react';
import { BarChart } from "react-native-gifted-charts";
import { sleepData } from '../data/comparisonsData';

export default function CompSleep() {
    return (
        <BarChart
            stackData={sleepData}
            width={300}
            height={100}
            // Bar
            spacing={0}
            barWidth={30}
            // Axis
            noOfSections={2}
            initialSpacing={20}
            xAxisColor="lightgray"
            yAxisColor="lightgray"
            hideYAxisText={true}
            // Vertical line
            showVerticalLines={true}
            noOfVerticalLines={3}
            verticalLinesSpacing={100}
            verticalLinesStrokeDashArray={[3,10]}
            verticalLinesColor={'gray'}
        />
    )
};