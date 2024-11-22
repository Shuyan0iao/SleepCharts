import React from 'react';
import { StyleSheet, View } from 'react-native';
import StagesDay from './Stages/StagesDay';
import StagesWeek from './Stages/StagesWeek';
import StagesMonth from './Stages/StagesMonth';
import Amounts from './amounts/Amounts';
import Comparisons from './comparisons/Comparisons';

export default function Charts({ selectedView, selectedType }) {

  const renderSelectedView = () => {
    if (selectedType === 'Stages'){
      if (selectedView === 'Day') {
        return <StagesDay />;
      } else if (selectedView === 'Week') {
        return <StagesWeek />;
      } else if (selectedView === 'Month') {
        return <StagesMonth />;
      }
    }
    else if (selectedType === 'Amounts') {
      return <Amounts />;
    }
    else if (selectedType === 'Comparisons') {
      return <Comparisons />
    }
    return null;
  };

  return (
    <View style={styles.chartPlaceholder}>
      <View style={styles.chartContainer}>{renderSelectedView()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartPlaceholder: {
    height: 350,

    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});