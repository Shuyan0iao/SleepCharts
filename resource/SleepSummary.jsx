import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SleepSummary = () => {
  return (
    <View style={styles.container}>
      {/* Sleep Summary Section */}

      <Text style={styles.sectionTitle}>Sleep Summary</Text>

      {/* First Row */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Awake</Text>
          <Text style={styles.cardValue}>
            1h 30m <Text style={styles.redText}>(17%)</Text>
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. REM</Text>
          <Text style={styles.cardValue}>
            0h 55m <Text style={styles.redText}>(17%)</Text>
          </Text>
        </View>
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Core</Text>
          <Text style={styles.cardValue}>
            6h 14m <Text style={styles.blueText}>(72%)</Text>
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Deep</Text>
          <Text style={styles.cardValue}>N/A</Text>
        </View>
      </View>

      {/* Third Row */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Time in Bed</Text>
          <Text style={styles.cardValue}>7 hr 41 min</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Time Asleep</Text>
          <Text style={styles.cardValue}>7 hr 26 min</Text>
        </View>
      </View>

      {/* Fourth Row */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Sleep Goal</Text>
          <Text style={styles.cardValue}>8 hrs</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Hypnogram</Text>
          <Text style={styles.cardValue}>90 - 120 min</Text>
        </View>
      </View>

      {/* Fifth Row */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Heart Rate</Text>
          <Text style={styles.cardValue}>59 - 84 bpm</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Avg. Respiratory Rate</Text>
          <Text style={styles.cardValue}>12.5 - 16.5 breaths/min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  redText: {
    color: '#d9534f',
  },
  blueText: {
    color: '#0275d8',
  },
});

export default SleepSummary;
