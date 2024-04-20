import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    mixButton: false,
    lists: {},
  },
  mutations: {
    toggleMixButton(state) {
      state.mixButton = !state.mixButton;
    },
    addLists(state, payload) {

      // Провека List и добавление отсутствующих
      if (!(payload.indexList in state.lists)) {
        state.lists[payload.indexList] = {};
      }
      // Проверка Item и добавление отсутствующих
      if (!(payload.numberItem in state.lists[payload.indexList])) {
        state.lists[payload.indexList][payload.numberItem] = {
          isChecked: payload.isChecked,
          count: payload.countValue,
          color: payload.colorValue,
        };
      }else{
        delete state.lists[payload.indexList][payload.numberItem];
      }
      

      console.log(state.lists);
    },
  },
  getters: {
    allLists(state) {
      return state.lists;
    },
  },
});
