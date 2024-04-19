
import Vuex from "vuex";

export default  new Vuex.Store({
  state: {
    mixButton: false,
  },
  mutations: {
    toggleMixButton(state){
        state.mixButton = !state.mixButton
    }
  },
  actions: {},
});
