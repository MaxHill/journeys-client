import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // Initial state
        test: 'Initial'
    },
    mutations: {
        SET_TEST_VALUE(state, value) {
            state.test = value;
        }
    },
    actions: {
        setTestValue({commit}, value) {
            commit('SET_TEST_VALUE', value);
        }
    },
    getters: {
        test: state => state.test
    }
});
