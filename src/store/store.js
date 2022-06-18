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
        }
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
        }
    },
    actions: {
        getJsonData: ({ commit }) => {
            const data = [];
            axios.get("mockData.json").then((response) => {
                const list = response.data.data;
                for (let i = 0; i < list.length; i++) {
                    const item = list[i];
                    data.push({
                        name: item[0],
                        company: item[1],
                        email: item[2],
                        date: item[3],
                        country: item[4],
                        city: item[5],
                    });
                    commit('setJsonData', data)
                }
            });
        },
    }
});
