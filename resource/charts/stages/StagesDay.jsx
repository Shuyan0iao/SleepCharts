import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { LinearGradient, Stop } from 'react-native-svg';
import { dayData } from '../data/stagesData';

export default function StagesDay() {
  const stages = ['Deep', 'Core', 'REM', 'Awake'];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LineChart
        data={dayData}
        yAxisLabelTexts={stages}
        stepChart={true} 
        
        width={350}
        height={200}
        thickness={2}
        spacing={30}
        initialSpacing={20}
        yAxisThickness={2}
        xAxisThickness={2}
        xAxisLabelTextStyle={{
          fontSize: 10,
          color: 'grey',
        }}
        yAxisTextStyle={{
          fontSize: 12,
          color: 'grey',
        }}
        xAxisColor="lightgray"
        yAxisColor="lightgray"
        hideRules={true}
        hideDataPoints={true}

        maxValue={3}
        stepValue={1}
        noOfSections={4}
        overflowBottom={10}
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

