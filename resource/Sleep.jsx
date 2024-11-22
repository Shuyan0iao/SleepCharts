import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import SleepSummary from './SleepSummary';
import Charts from './charts/Charts';

import SelectDropdown from './SelectDropdown';

export default function Sleep() {
  const [selectedView, setSelectedView] = useState('Day');
  const [selectedType, setSelectedType] = useState('Stages');
  const options = ['Day', 'Week', 'Month'];
  const types = ['Stages', 'Amounts', 'Comparisons'];
  const handleSelection = (option) => {
    setSelectedView(option);
  };
  const handleSelection2 = (option) => {
    setSelectedType(option);
  }
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Sleep</Text>
            <View style={styles.timeInfo}>
              <View style={styles.timeBox}>
                <Text style={styles.timeTitle}>Time in Bed</Text>
                <Text style={styles.timeValue}>7 hr 41 min</Text>
              </View>
              <View style={styles.timeBox}>
                <Text style={styles.timeTitle}>Time Asleep</Text>
                <Text style={styles.timeValue}>7 hr 26 min</Text>
              </View>
            </View>
          </View>
          {/* Dropdown Section */}
          <View style={styles.dropdownContainer}>
            <SelectDropdown options={types} onSelect={handleSelection2} placeholder={types[0]} />
            <SelectDropdown options={options} onSelect={handleSelection} placeholder={options[0]} />
          </View>
          {/* Charts Section */}
          <Charts selectedView={selectedView} selectedType={selectedType} />
          {/* Sleep Summary Section */}
          <SleepSummary />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeBox: {
    alignItems: 'center',
  },
  timeTitle: {
    fontSize: 16,
    color: '#666',
  },
  timeValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});