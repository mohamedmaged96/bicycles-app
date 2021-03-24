import axios from 'axios';
import groupBy from'json-groupby';

const url="https://geoportal.stadt-koeln.de/arcgis/rest/services/Fahrradverkehr_Ma%C3%9Fnahmen/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson";

const state={
    features:[]
};
const getters={
    numberOfFeatures: (state)=>state.features.length,
    allFeatures: (state)=>state.features,
    entriesPerYear: (state)=>{
       var grouped=groupBy(state.features, ['attributes.JAHR']);
       var years=Object.keys(grouped);
       var vals=[];
       for(var x of Object.keys(grouped) ){
           vals.push(grouped[x].length);
       }
       return [years,vals];
    },
    entriesPerDistrict: (state)=>{
        var grouped=groupBy(state.features, ['attributes.BEZIRK']);
        var vals=[];
        for(var x of Object.keys(grouped) ){
            vals.push(grouped[x].length);
        }
        return vals;
     },
     entriesPerCategory: (state)=>{
        var grouped=groupBy(state.features, ['attributes.ART']);
        var vals=[];
        for(var x of Object.keys(grouped) ){
            vals.push(grouped[x].length);
        }
        return vals;
     }
};
const actions={
    async fetchFeatures({ commit }){
        if(state.features.length==0){
            const response =await axios.get(url);
            commit('setFeatures',response.data.features);
        }else{
            commit('setFeatures',state.features);
     
        }
    },
    deleteFeature({ commit }, objectid) {
        commit('removeFeature', objectid);
      },
};

const mutations={
    setFeatures:(state,features)=> (state.features=features),
    removeFeature: (state, OBJECTID) =>(state.features = state.features.filter(feature => feature.attributes.OBJECTID !== OBJECTID))
};

export default {
    state,
    getters,
    actions,
    mutations
};