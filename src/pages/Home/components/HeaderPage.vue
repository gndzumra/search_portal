<template>
  <v-content>
    <div class="d-flex mb-4">
      <v-btn
        @click="goAdd()"
        style="border-radius: 12px"
        color="#204080"
        class="ml-auto"
      >
        <span style="color: white; text-transform: none">
          {{ newRecord }}
        </span>
      </v-btn>
    </div>
    <div class="text-center mb-6">
      <img
        :src="require('./../../../../public/logo.png')"
        contain
        style="width: 100%; max-width: 250px"
      />
    </div>
  </v-content>
</template>

<script>
/* eslint-disable */

export default {
  /* eslint-disable */
  // eslint-disable-next-line
  name: "HeaderPage",

  data: () => ({
    find: "Find in records ",
    newRecord: "Add New Record",
  }),
  methods: {
    goAdd() {
      this.$router.push({
        path: "/add",
      });
    },
  },
};
</script>
