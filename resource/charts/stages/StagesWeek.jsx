import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { weekData as rawStackData } from '../data/stagesData';

export default function StagesWeek() {
  const chartHeight = 200;
  const noOfSections = 8
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
        height={200}
        // Bar
        spacing={15}
        barWidth={30}
        // Axis
        noOfSections={noOfSections}
        maxValue={8}
        initialSpacing={20}
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
        yAxisLabelPrefix=""
        yAxisLabelSuffix=" AM"
        // Rules
        thickness={2}
        hideRules={true}
        hideDataPoints={true}

      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
