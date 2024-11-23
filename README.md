## Demo Video
![ScreenRecording2024-11-22at4 39 08PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/d45c30bf-24c9-496d-b2d5-3696c3e0ed1e)

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
