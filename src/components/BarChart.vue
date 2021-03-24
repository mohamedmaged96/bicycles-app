<script>
import { Bar } from "vue-chartjs";
import Vue from 'vue';
export default Vue.component('BarChart', {
  extends: Bar,
  props: ['labels','datac', 'barColor'],
  mounted() {
    this.renderChart(
      {
        labels:this.labels,
        datasets: [
          {
            label: "Maßnahmen",
            backgroundColor: this.barColor,
            data: this.datac
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
})

</script>