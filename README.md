## Demo Video

![ScreenRecording2024-11-22at12 44 23PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/cd368cf3-24a4-4da4-bff1-f0f0e8e3c82d)


## File Description
- **`resource/`**:
  - **`Sleep.jsx`**: Main component for the Sleep page.
  - **`SelectDropdown.jsx`**: Dropdown selector for switching between different views.
  - **`SleepSummary.jsx`**: Component for displaying sleep summary statistics.

- **`resource/charts/`**:
  - **`stages/`**: Components related to the "Stages" chart, including different time ranges (day, week, month).
  - **`amounts/`**: Components related to the "Amounts" chart.
  - **`comparisons/`**: Components related to the "Comparisons" chart.
  - **`Charts.jsx`**: Main entry file for charts.
  - **`data/`**: Data folder containing static data required for the charts.

## Potential Issues
The BarChart component in Gifted Charts does not natively support setting specific x-coordinates for each bar. Instead, it automatically calculates the horizontal positions of bars based on initialSpacing and spacing. This can lead to poor visual results on the x-axis when dealing with grouped data. 
