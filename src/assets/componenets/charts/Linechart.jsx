import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function Linechart({ chartdata }) {
  return (
    <div>
      <Line 
        data={chartdata}
        

        
        options={{
            maintainAspectRatio: false,
        }}
      
      
      />
    </div>
  )
}

export default Linechart