<template>
  <v-container>
    <v-row justify="space-around" style="z-index: 99; position: relative">
      <v-menu
        max-width="400px"
        max-height="400px"
        :nudge-width="200"
        :close-on-click="closeOnClick"
        offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <div class="d-flex align-items-center gap-3 w-75">
            <v-text-field
              v-model="searchString"
              hide-details="auto"
              outlined
              clearable
              v-on="on"
            >
            </v-text-field>
            <v-btn
              @click="goList()"
              v-bind="attrs"
              large
              class="white--text ma-5 button2"
              style="border-radius: 12px"
            >
              Search
            </v-btn>
          </div>
        </template>

        <template v-for="(item, index) in filteredData">
          <v-list v-if="index < 3" :key="index + item">
            <v-list-item>
              <v-list-item-icon>
                <v-icon> mdi-map-marker </v-icon>
              </v-list-item-icon>
              <v-list-item-content class="">
                <v-list-item-title> {{ item.name }} </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.city }} {{ item.country }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
        <v-list>
          <v-list-item class="d-flex align-items-center">
            <v-list-item-action>
              <v-btn
                text
                @click="goList()"
                v-show="filteredData.length > 3"
                class="showBtn"
              >
                Show More...</v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import axios from "axios";

export default {
  name: "Searche",

  data: () => ({
    searchString: "",
    postList: [],
    searchList: [],
    closeOnClick: false,
    find: "Find in records ",
    newRecord: "Add New Record",
  }),
  methods: {
    goList() {
      this.$router.push({
        path: "/list",
      });
      this.$store.commit("setFilteredList", this.filteredData);

      //Arama alanına yazılan veri
      this.$store.commit("setSearchString", this.searchString);
    },
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    },
    search() {
      var self = this;
      this.postList.filter((item) => {
        if (
          item.name.toLowerCase().indexOf(self.searchString.toLowerCase()) >= 0
        ) {
          this.searchList.push(item);
        }
      });
    },
    getPost() {
      return this.$store.getters.getJsonData;
    },
    filteredData() {
      return this.getPost.filter((customer) => {
        if (
          customer.name
            .toLowerCase()
            .indexOf(this.searchString.toLowerCase()) >= 0
        )
          return customer;
      });
    },
  },
  created() {
    this.$store.dispatch("getJsonData");
  },
};
</script>

<style scoped>
.showBtn {
  background-color: white !important;
}
</style>
