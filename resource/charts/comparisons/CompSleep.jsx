import React from 'react';
import { BarChart } from "react-native-gifted-charts";
import { sleepData } from '../data/comparisonsData';

export default function CompSleep() {
    return (
        <BarChart
            width={350}
            height={100}
            spacing={0}
            barWidth={16}
            hideRules={false}
            noOfSections={2}
        
            data={sleepData}
            yAxisThickness={0}
            xAxisThickness={0}
            hideYAxisText={true}
            showVerticalLines={true}
            noOfVerticalLines={3}
            verticalLinesSpacing={50}
        />
    )
};