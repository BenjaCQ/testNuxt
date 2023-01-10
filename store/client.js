export const state = () => ({
    nameClient: '',
    processesClient: []
})

export const getters = {
    getSentenceChuck(state) {
        return state.nameClient;
    },
    getProcesses(state) {
        return state.processesClient;
    },
}

export const mutations = {
    setSentenceChuck(state, clientName) {
        state.nameClient = clientName;
    },
    setProcesses(state, process) {
        state.processesClient.push(process);
    },
}

export const actions = {
    async setPhraseChuck({ clientName }) {
        commit('setSentenceChuck', clientName);
    }
}