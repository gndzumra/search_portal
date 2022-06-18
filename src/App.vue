<template>
  <v-fade-transition mode="out-in">
    <router-view></router-view>
  </v-fade-transition>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap");

.v-btn {
  background: #204080 !important;
  font-family: "Roboto", sans-serif;
  text-transform: none;
}

.v-btn:hover {
  background: #207ad3 !important;
  text-transform: none;
}

.p,
.v-list-item-subtitle,
.v-list-item-title,
.v-text-field {
  font-family: "Inter", sans-serif;
  font-style: normal;
  text-transform: none !important;
  font-weight: 700;
  size: 16px;
  line-height: 24;
}
</style>