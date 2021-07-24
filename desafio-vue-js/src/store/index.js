import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    customers: [
      { label: '', value: ''}
    ]
  },
  mutations: {
    addCostumer (state, customer){
      state.customers.push(customer)
    }
  }
});

export {store}