<template>
  <v-container>
    <v-row class="align-items-center justify-content-between">
      <v-col cols="2">
        <img
          :src="require('./../../../../public/logo.png')"
          @click="back()"
          width="170"
        />
      </v-col>
      <v-col cols="2" class="order-0 ml-auto order-lg-2 ml-lg-0">
        <v-btn
          @click="goAdd()"
          style="float: right; border-radius: 12px"
          class="v-btn--block"
        >
          <span style="color: white; text-transform: none">
            {{ newRecord }}
          </span>
        </v-btn>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row class="align-items-center">
          <v-col cols>
            <v-text-field
              hide-details="auto"
              v-model="searchString"
              outlined
              clearable
            >
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn
              class="white--text v-size--default"
              x-large
              @click="getData()"
              style="
                text-transform: none;
                border-radius: 12px;
              "
            >
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
/* eslint-disable */
import Searche from "../../Home/components/Searche.vue";

export default {
  /* eslint-disable */
  // eslint-disable-next-line
  name: "Header",
  components: {
    Searche,
  },
  data: () => ({
    searchString: "",
    postList: [],
    find: "Find in records ",
    newRecord: "Add New Record",
  }),
  methods: {
    goAdd() {
      this.$router.push({
        path: "/add",
      });
    },
    getData() {
      this.postList = this.$store.getters.getJsonData;

      this.postList = this.postList.filter((customer) => {
        if (
          customer.name
            .toLowerCase()
            .indexOf(this.searchString.toLowerCase()) >= 0
        )
          return customer;
      });

      // console.log(this.postList)
      this.$store.commit("setFilteredList", this.postList);
    },
    back() {
      this.$router.push({
        path: "/",
      });
    },
  },
  created() {
    this.searchString = this.$store.getters.getSearchString;
    this.$store.dispatch("getJsonData");
  },
  computed: {},
};
</script>

<style scoped>
</style>
