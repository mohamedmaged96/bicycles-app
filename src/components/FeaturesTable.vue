<template>
  <v-data-table
    :headers="headers"
    :items="allFeatures"
    sort-by="attributes.OBJECTID"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title> Fahrrad Foerderung Koeln</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <!-- eslint-disable-next-line -->
    <template #item.attributes.LINK_KOMPL="{ value }">
        <a :href="value">
          View More Details
        </a>
    </template>
    <!-- eslint-disable-next-line -->
    <template #item.attributes.ART="{ value }">
          {{ measureTypes[value-1] }}
    </template>
        <!-- eslint-disable-next-line -->
    <template #item.attributes.BEZIRK="{ value }">
          {{ districts[value-1] }}
    </template>
    <template template v-slot:[`item.actions`]="{ item }">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
        medium
        @click="goToMap(item.geometry)"
          v-bind="attrs"
          v-on="on"
        >
          mdi-google-maps
        </v-icon>
      </template>
      <span>Standort anzeigen</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
        medium
        @click="deleteItem(item.attributes.OBJECTID)"
          v-bind="attrs"
          v-on="on"
        >
          mdi-delete
        </v-icon>
      </template>
      <span>Eintrag löschen</span>
    </v-tooltip>
    </template>
    <template v-slot:no-data>
<h3>No data is available :(</h3>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import constants from '../constants.js';
  export default {
      name:"FeaturesTable",
      computed: mapGetters(['allFeatures']),
      created() {
        this.fetchFeatures();
        },
      data: () => ({
            headers: [
                {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'attributes.OBJECTID',
                },
                { text: 'Jahr', value: 'attributes.JAHR' },
                { text: 'Bezirk', value: 'attributes.BEZIRK' },
                { text: 'Ort', value: 'attributes.WO', sortable: false },
                { text: 'Art', value: 'attributes.ART' },
                { text: 'Maßnahme', value: 'attributes.MASSNAHME', sortable: false },
                { text: 'Mehr Details', value: 'attributes.LINK_KOMPL', sortable: false },
                { text: 'Aktionen', value: 'actions', sortable: false },
            ],
            features: [],
            measureTypes:constants.measureTypes,
            districts:constants.districts
            }),
    methods: {
    ...mapActions(['fetchFeatures','deleteFeature']),

      deleteItem (id) {
        this.deleteFeature(id);
      },
      goToMap (geometry) {
        window.open(constants.mapUrl+geometry.y+"+"+geometry.x,'_blank');
      },
    },
  }
</script>