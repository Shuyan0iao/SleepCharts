import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { monthData as rawStackData } from '../data/stagesData';
export default function StagesWeek() {
    const chartHeight = 200;
    const noOfSections = 8;
    const pixelPerValue = chartHeight / noOfSections;
    const stackData = rawStackData.map((data) => ({
        ...data,
        stacks: data.stacks.map((stack) => ({
            ...stack,
            marginBottom: stack.marginBottom ? stack.marginBottom * pixelPerValue : undefined,
        })),
    }));


    return (
        <View>
            <BarChart
                stackData={stackData}
                width={350}
                height={chartHeight}
                thickness={2}
                spacing={3}

                initialSpacing={10}

                xAxisLabelTextStyle={{
                    fontSize: 12,
                    color: 'grey',
                }}
                yAxisTextStyle={{
                    fontSize: 12,
                    color: 'grey',
                }}
                xAxisColor="lightgray"
                yAxisColor="lightgray"
                barWidth={10}
                noOfSections={noOfSections}
                maxValue={8}
                yAxisLabelPrefix=""
                yAxisLabelSuffix=" AM"
                hideRules={true}
                hideDataPoints={true}
                // vertical Lines
                showVerticalLines={true}
                noOfVerticalLines={Math.floor(rawStackData.length / 4)}
                verticalLinesSpacing={350 / Math.floor(rawStackData.length) * 4}
                verticalLinesStrokeDashArray={[3,10]}
                verticalLinesColor={'gray'}
               
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});