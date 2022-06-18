<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <HeaderPage />

        <v-row>
          <v-col style="text-align: center !important">
            <h2>{{ find }}</h2>
          </v-col>
        </v-row>

        <Searche />
      </v-container>
    </v-main>

    <v-main>
      <v-container>
        <v-carousel hide-delimiters>
          <template v-for="(item, index) in 20">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index + item"
            >
              <v-row class="flex-nowrap" style="height: 100%">
                <template v-for="(n, i) in columns">
                  <template v-if="+index + i < 20">
                    <v-col :key="i" class="px-4">
                      <v-sheet color="white" height="100%">
                        <v-row
                          v-for="i in 5"
                          :key="i + index"
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div>
                            <img :src="sliderImg" class="w-100 rounded" />
                            <h5 class="my-4">
                              A Plan to Rebuild the Bus Terminal Everyone Loves
                              to Hate
                            </h5>
                            <p class="text-muted">1h ago - by Troy Corlson</p>
                          </div>
                        </v-row>
                      </v-sheet>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>
      </v-container>
    </v-main>

    <v-footer
      dark
      padless
      style="background: rgba(41, 78, 152, 0.72)"
      class="py-5"
    >
      <v-container>
        <v-row class="align-items-center">
          <v-col md="6">
            <v-row class="align-items-center">
              <v-col md="4">
                <v-img width="100%" :src="footer" class="white--text rounded" />
              </v-col>
              <v-col>
                <h4>İletişim</h4>
                <p>{{ address }}</p>
                <p>{{ email }}</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6">
            <iframe
              width="100%"
              height="300"
              :src="mapSRC"
              frameborder="0"
              scrolling="no"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded"
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import axios from "axios";
import HeaderPage from "./components/HeaderPage.vue";
import Searche from "./components/Searche.vue";
export default {
  name: "Home",
  components: {
    HeaderPage,
    Searche,
  },
  data: () => ({
    searchString: "",
    postList: [],
    sliderImg: "/carousel.png",
    text: "/text.png",
    footer: "/footer.png",
    address:
      "Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151 1F İç Kapı No: 2B03 Esenler/İstanbul",
    email: "Email: bilgi@tesodev.com",
    mapSRC:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6020.241492007537!2d28.8894919!3d41.0226142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1655238985505!5m2!1str!2str",
    find: "Find in records ",
  }),
  methods: {
    getData() {
      axios.get("mockData.json").then((response) => {
        const list = response.data.data;
        for (let i = 0; i < list.length; i++) {
          const x = list[i];

          this.postList.push({
            name: x[0],
            company: x[1],
            email: x[2],
            date: x[3],
            country: x[4],
            city: x[5],
          });
        }
      });
    },
    goList() {
      this.$router.push({
        path: "/list",
      });
    },
  },
  computed: {
    filteredData() {
      var self = this;
      self.postList = self.postList.filter((customer) => {
        if (
          customer.name
            .toLowerCase()
            .indexOf(self.searchString.toLowerCase()) >= 0
        )
          return customer;
      });

      return self.postList;
    },
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
  },
  created() {
    axios.get("mockData.json").then((response) => {
      const list = response.data.data;
      for (let i = 0; i < list.length; i++) {
        const x = list[i];

        this.postList.push({
          name: x[0],
          company: x[1],
          email: x[2],
          date: x[3],
          country: x[4],
          city: x[5],
        });
      }
    });
  },
};
</script>

<style scoped>
</style>
