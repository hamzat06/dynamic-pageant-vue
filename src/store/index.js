import { createStore } from "vuex";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const store = createStore({
  state: () => ({
    currentContestant: null,
    authIsReady: false,
    loading: false,
    alertMsg: "",
    msgType: "",
    loggedIn: false,
    usersModal: false,
  }),
  getters: {
    getLoadingState: (state) => state.loading,
    getAlertMsg: (state) => state.alertMsg,
    getMsgType: (state) => state.msgType,
    getLoggedInState: (state) => state.loggedIn,
    getAuthIsReady: (state) => state.authIsReady,
  },
  mutations: {
    START_LOADER: (state) => {
      state.loading = true;
    },
    STOP_LOADER: (state) => {
      state.loading = false;
    },
    SET_ALERT: (state, payload) => {
      state.alertMsg = payload.message ? payload.message : payload;
    },
    CLEAR_ALERT: (state) => {
      state.alertMsg = "";
      state.msgType = "";
    },
    SET_ALERT_TYPE: (state, payload) => {
      state.msgType = payload;
    },
    SET_CURRENT_USER: (state) => {
      state.currentContestant = auth.currentUser;
      state.loggedIn = true;
    },
    CLEAR_CURRENT_USER: (state) => {
      state.currentContestant = null;
      state.loggedIn = false;
    },
    SET_AUTH_USER: (state, payload) => {
      state.authIsReady = payload;
    },
  },
  actions: {
    startLoader({ commit }) {
      commit("START_LOADER");
    },
    stopLoader({ commit }) {
      commit("STOP_LOADER");
    },
    dataAlert({ commit }, payload) {
      commit("SET_ALERT", payload);
    },
    clearAlert({ commit }) {
      commit("CLEAR_ALERT");
    },
    setAlertType({ commit }, payload) {
      commit("SET_ALERT_TYPE", payload);
    },
    setCurrentUser({ commit }, payload) {
      commit("SET_CURRENT_USER", payload);
    },
    clearCurrentUser({ commit }) {
      commit("CLEAR_CURRENT_USER");
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit("SET_AUTH_USER", true);
    store.dispatch("setCurrentUser", user);
  }
  unsub();
});

export default store;
