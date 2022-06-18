/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        searchString: "",
        filteredList: [],
        jsonData: [],
        paginationList: []
    },
    getters: {
        getFilteredList(state) {
            return state.filteredList;
        },
        getSearchString(state) {
            return state.searchString;
        },
        getJsonData(state) {
            return state.jsonData;
        },
        getPaginationList(state) {
            return state.paginationList;
        },
    },
    mutations: {
        setFilteredList: (state, list) => {
            state.filteredList = list;
        },
        setSearchString: (state, data) => {
            state.searchString = data;
        },
        setJsonData: (state, data) => {
            state.jsonData = data;
        },
        setPaginationList(state, data) {
            state.paginationList = data;
        },
    },
    actions: {
        getJsonData: ({ commit }) => {
            const data = [];
            axios.get("mockData.json").then((response) => {
                const list = response.data.data;
                for (let i = 0; i < list.length; i++) {
                    const x = list[i];
                    data.push({
                        name: x[0],
                        company: x[1],
                        email: x[2],
                        date: x[3],
                        country: x[4],
                        city: x[5],
                    });
                    commit('setJsonData', data)
                }
            });
        },
    }
});
