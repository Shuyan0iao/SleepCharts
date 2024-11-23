## Demo Video
![ScreenRecording2024-11-22at4 39 08PM-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/b8d55c92-43c2-4a0e-a7b5-697b1b52d99b)

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
