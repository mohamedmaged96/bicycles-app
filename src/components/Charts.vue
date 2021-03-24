<template>
  <v-container
    id="google-maps"
    fluid
    tag="section"
  >
    <v-row>
            <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="px-2 py-1"
        >
          <v-card-text class="px-0 pb-0">
          <v-app-bar dark color="#94bbf0" >
          <v-toolbar-title>Maßnahmen pro Bezirk</v-toolbar-title>
          <v-spacer></v-spacer>     
          </v-app-bar>
              <v-sheet>
                 <BarChart :key="k1" v-bind:labels="bezriks" v-bind:datac="entriesPerDistrict" barColor="#00525b"/>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="px-2 py-1"
        >
          <v-card-text class="px-0 pb-0">
              <v-app-bar dark color="#94bbf0" >
            <v-toolbar-title>Maßnahmen pro Jahr </v-toolbar-title>
            <v-spacer></v-spacer>     
            </v-app-bar>
            <v-sheet>
              <BarChart :key="k3" v-bind:labels="entriesPerYear[0]" v-bind:datac="entriesPerYear[1]" barColor="#84a2fd"/>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="px-3 py-2"
        >
        <v-app-bar dark color="#94bbf0" >
        <v-toolbar-title>Maßnahmen Pro Art</v-toolbar-title>
        <v-spacer></v-spacer>     
        </v-app-bar>
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <PieChart :key="k2" v-bind:labels="arts" v-bind:datac="entriesPerCategory"/>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';
import { mapGetters, mapActions } from 'vuex';
import constants from '../constants.js';
export default {
  components: {
   BarChart,
    PieChart
  },
  created() {
    this.fetchFeatures();
  },
  beforeUpdate(){
    this.forceRerender();
  },
  computed: {
        ...mapGetters(['allFeatures','entriesPerYear','entriesPerDistrict','entriesPerCategory'])
  },

  methods:{
    ...mapActions(['fetchFeatures']),
    forceRerender() {
      this.k1 += 1;
      this.k2 += 1;
      this.k3 += 1;
    }
  },
  data:()=> ( {
      k1:0,
      k2:100,
      k3:1000,
      arts:constants.measureTypes,
      bezriks:constants.districts
  }),
}
</script>

<style>
</style>