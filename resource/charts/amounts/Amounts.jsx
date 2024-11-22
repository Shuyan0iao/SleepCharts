import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from "react-native-gifted-charts";

export default function Amounts() {
    const barData = [
        {
            value: 4,
            frontColor: '#6A0DAD',
            label: 'Time in Bed',
        },
        {
            value: 5, 
            frontColor: '#D2691E', 
            label: 'Time Asleep',
        },
    ];

    const yAxisLabelTexts = ['7 AM', '5 AM','3 AM','1 AM', '11 PM', '9 PM'];

    return (
        <View>
            <BarChart
                data={barData}
                width={300}
                height={200} 
                barWidth={50} 
                spacing={50}
                noOfSections={5} 
                maxValue={5}
                yAxisLabelTexts={yAxisLabelTexts}
                yAxisTextStyle={{
                    fontSize: 12,
                    color: 'grey',
                }}
                xAxisLabelTextStyle={{
                    fontSize: 12,
                    color: 'grey',
                }}
                yAxisColor="lightgray"
                xAxisColor="lightgray"
                hideRules={true}
                hideDataPoints={true}
            />
        </View>
    );
}