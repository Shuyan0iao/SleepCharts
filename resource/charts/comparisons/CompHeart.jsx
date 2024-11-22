import React from 'react';
import { BarChart } from "react-native-gifted-charts";
import { heartData } from '../data/comparisonsData';

export default function CompHeart() {
    return(
        <BarChart
        stackData={heartData}
        width={300}
        height={150}
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
        rulesColor="lightgray"
        rulesThickness={1}

        barBorderRadius={6}
        yAxisColor="lightgray"
        xAxisColor="lightgray"
        xAxisLabelTexts={['8 PM', '', '', '11 PM', '', '', '2 AM', '', '', '5AM', '', '']}
        xAxisLabelsHeight={20} 
        xAxisLabelsVerticalShift={5}
    />
    );
}