import Vuex from 'vuex';
import Vue from 'vue';
import feature from './modules/feature'
Vue.use(Vuex);


//Create a store

export default new Vuex.Store({
modules: {
    feature
}
});