import Vuex from 'vuex';

export const store = new Vuex.Store({
    namespaced: true,
    state: {
        chuck: ''
    },
    mutations: {
        setSentenceChuck(state, chuck) {
            state.chuck = chuck;
        }
    },
    getters: {
        getSentenceChuck(state) {
            return state.chuck;
        }
    },
    actions: {
        setPhraseChuck({ commit }, chuck) {
            commit('setSentenceChuck', chuck);
        }
    }
});