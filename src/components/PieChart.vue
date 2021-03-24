<script>
import { Pie } from 'vue-chartjs'
import Vue from 'vue';

  export default Vue.component('PieChart', {
    extends: Pie,
    props: ['labels','datac'],

    data () {
      return {
        chartData: {
          labels: this.labels,
          datasets: [{
              backgroundColor: [
              'rgba(0, 9, 230, 0.75)',
              'rgba(116, 224, 255, 0.75)',
              'rgba(230, 0, 0, 0.75)',
              'rgba(255, 169, 0, 0.75)',                
              'rgba(206, 102, 154, 0.75)',                
              ],
              data: this.datac
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  })
</script>