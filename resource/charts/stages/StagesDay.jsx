import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { LinearGradient, Stop } from 'react-native-svg';
import { dayData } from '../data/stagesData';

export default function StagesDay() {
  const stages = ['Deep', 'Core', 'REM', 'Awake'];

  return (
    <View>
      <LineChart
        data={dayData}
        stepChart={true}
        width={350}
        height={200}
        // Bar
        spacing={30}
        // Axis
        noOfSections={4}
        maxValue={3}
        stepValue={1}
        initialSpacing={20}
        yAxisLabelTexts={stages}
        xAxisLabelTextStyle={{
          fontSize: 14,
          color: 'grey',
          width: 80,
        }}
        yAxisTextStyle={{
          fontSize: 12,
          color: 'grey',
        }}
        xAxisColor="lightgray"
        yAxisColor="lightgray"
        // Rules  
        thickness={2}
        hideRules={true}
        hideDataPoints={true}
        // Line Gradient
        lineGradient
        lineGradientId="gradient"
        lineGradientComponent={() => {
          return (
            <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="red" />
              <Stop offset="0.5" stopColor="orange" />
              <Stop offset="1" stopColor="blue" />
            </LinearGradient>
          );
        }}
      />
    </View>
  );
};

