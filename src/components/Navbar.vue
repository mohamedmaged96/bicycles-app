<template>
   <nav>
      <v-navigation-drawer  v-model="drawer" dark app mini-variant mini-variant-width="100" class="cyan darken-1">
          <v-list>
               <v-list-item class="mb-6">
                  <v-list-item-action>
                  </v-list-item-action>
              </v-list-item >
          </v-list>

             <v-list flat>
              <v-list-item  router to="/">
                   <v-list-item-content>
                      <v-icon class="mb-2" large>mdi-bicycle</v-icon>
                      <v-list-item-subtitle align="center">Home</v-list-item-subtitle>
                  </v-list-item-content>  
              </v-list-item>
             </v-list>
             <v-list flat>
               <v-list-item  router to="/charts">
                  <v-list-item-content>
                      <v-icon class="mb-2" large>mdi-chart-bar</v-icon>
                      <v-list-item-subtitle align="center">Data</v-list-item-subtitle>
                  </v-list-item-content>  
              </v-list-item>
             </v-list>
          <v-list  style="position: absolute; bottom:0" class="ml-3" flat>
            <v-list-item  router to="/">
                  <v-list-item-action>
                      <v-icon class="mb-2" large>mdi-database-check</v-icon>
                    <v-list-item-subtitle align="center"><strong>{{numberOfFeatures}}</strong></v-list-item-subtitle>

                  </v-list-item-action>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
   computed: mapGetters(['numberOfFeatures']),

   data: () => ({
      drawer: true,
     
    }),
    components: {
  },
   
}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
/*.v-list-item--link::before { background-color: green; }*/
</style>