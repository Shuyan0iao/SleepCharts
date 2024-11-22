import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { barData, barData2 } from '../data/comparisonsData';


export default function Comparisons() {

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sleep</Text>
            <BarChart
                width={300}
                height={50}
                spacing={0}
                barWidth={16}
                hideRules={false}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                hideYAxisText={true}
            />

            <Text style={styles.title}>Heart Rate</Text>
            <BarChart
                stackData={barData2}
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
                    fontSize: 5,
                    color: 'gray',
                }}
                rulesColor="lightgray"
                rulesThickness={1} 
                hideRules={false}
                barBorderRadius={6}
                                yAxisColor="lightgray"
                xAxisColor="lightgray"
                xAxisLabelTexts={['8 PM', '', '', '11 PM', '', '', '2 AM', '', '', '5AM', '', '']} 
                xAxisLabelsHeight={20} // 增加 X 轴标签容器的高度
                xAxisLabelsVerticalShift={5} // 调整标签的垂直位置
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
});