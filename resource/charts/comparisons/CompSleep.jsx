import React from 'react';
import { BarChart } from "react-native-gifted-charts";
import { sleepData } from '../data/comparisonsData';

export default function CompSleep() {
    return (
        <BarChart
            width={300}
            height={50}
            spacing={0}
            barWidth={16}
            hideRules={false}
            noOfSections={2}
            frontColor="lightgray"
            data={sleepData}
            yAxisThickness={0}
            xAxisThickness={0}
            hideYAxisText={true}
        />
    )
};