<template>
  <v-app id="inspire">
    <v-main>
      <Header style="max-height: -webkit-fill-available" />

      <v-container>
        <v-row class="justify-content-center">
          <v-col cols="12" md="6">
            <template v-for="(data, x) in getPost">
              <v-list v-if="x < 5" :key="x + 1">
                <v-list-item @click="go()">
                  <v-list-item-icon>
                    <v-icon color="indigo"> mdi-map-marker </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ data.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ data.city }} - {{ data.country }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-subtitle
                      v-text="data.name"
                    ></v-list-item-subtitle>
                    <v-list-item-action-text
                      v-text="data.date"
                    ></v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-list>
            </template>
          </v-col>

          <v-col cols="12" md="2" v-show="totalRows > 0">
            <v-menu offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn rounded v-bind="attrs" v-on="on" class="order-btn">
                  <v-icon> mdi-arrow-down-thin</v-icon>
                  <v-icon> mdi-arrow-up-thin</v-icon>
                  Order By
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="item in items" :key="item.id" link>
                  <v-list-item-title
                    v-text="item.name"
                    @click="order(item.id)"
                  ></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>

        <v-row style="z-index: 100; position: relative" v-show="totalRows > 0">
          <v-col>
            <div class="text-center">
              <v-pagination
                :length="totalRows"
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                :total-visible="5"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  /* eslint-disable */
  // eslint-disable-next-line
  name: "Home",
  components: {
    Header,
  },
  data: () => ({
    searchString: "",
    postList: [],
    items: [
      { name: "Name ascending", id: 0 },
      { name: "Name descending", id: 1 },
      { name: "Year ascending", id: 2 },
      { name: "Year descending", id: 3 },
    ],
    currentPage: 1,
    perPage: 5,
    page: 1,
  }),
  methods: {
    go() {
      this.$router.push({
        path: "/add",
      });
      this.$store.commit("setSearchString", this.searchString);
    },
    order(value) {
      const sort_by = (field, reverse, primer) => {
        const key = primer
          ? function (x) {
              return primer(x[field]);
            }
          : function (x) {
              return x[field];
            };

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
          return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
        };
      };

      switch (value) {
        case 0:
          this.getPost.sort(sort_by("name", false, (a) => a.toUpperCase()));
          break;
        case 1:
          this.getPost
            .sort(sort_by("name", false, (a) => a.toUpperCase()))
            .reverse();
          break;
        case 2:
          this.getPost.sort(sort_by("date", false, (a) => a.toUpperCase()));
          break;
        case 3:
          this.getPost
            .sort(sort_by("date", false, (a) => a.toUpperCase()))
            .reverse();
          break;
      }
    },
    pagination() {
      this.getPost.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
      this.$store.commit("setFilteredList", this.getPost);
      this.getPost = this.$store.getters.getFilteredList;
    },
  },
  computed: {
    getPost() {
      const self = this;
      const oldList = this.$store.getters.getFilteredList;
      const list = oldList.slice(
        (self.currentPage - 1) * self.perPage,
        self.currentPage * self.perPage
      );
      this.$store.commit("setPaginationList", list);
      return this.$store.getters.getPaginationList;
    },
    totalRows() {
      return this.getPost.length;
    },
  },
  created() {
    this.searchString = this.$store.getters.getSearchString;
  },
};
</script>

<style scoped>
.order-btn {
  background-color: #f3f2f2 !important;
  border-color: #414141;
  color: black;
  font-style: normal;
}
</style>