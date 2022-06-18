<template>
  <v-container>
    <div class="d-flex align-items-center gap-4 pt-4">
      <img
        :src="require('./../../../public/logo.png')"
        @click="back()"
        width="170"
      />
      <div @click="back()">
        <h4 class="mb-0">
          <v-icon x-large> mdi-arrow-left-thin </v-icon> Return to List Page
        </h4>
      </div>
    </div>

    <div style="margin: 7% 17%">
      <v-form>
        <v-row>
          <v-col cols="12" md="8">
            <h5 class="text-muted">Name Surname</h5>
            <v-text-field
              v-model="name"
              @input="$v.name.$touch()"
              label="Enter name and surname"
              hide-details="auto"
              single-line
              outlined
              dense
            ></v-text-field>
            <small v-if="!$v.name.required" class="form-text text-danger">
              Bu alan zorunludur...</small
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <h5 class="text-muted">Country</h5>
            <v-text-field
              v-model="country"
              @input="$v.country.$touch()"
              label="Enter a country"
              single-line
              outlined
              hide-details="auto"
              dense
            ></v-text-field>
            <small v-if="!$v.country.required" class="form-text text-danger">
              Bu alan zorunludur...</small
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <h5 class="text-muted">City</h5>
            <v-text-field
              v-model="city"
              @input="$v.city.$touch()"
              label="Enter a city"
              single-line
              outlined
              hide-details="auto"
              dense
            ></v-text-field>
            <small v-if="!$v.city.required" class="form-text text-danger">
              Bu alan zorunludur...</small
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <h5 class="text-muted">Email</h5>
            <v-text-field
              v-model="email"
              label="Enter a email(abc@xyz.com)"
              @input="$v.email.$touch()"
              single-line
              outlined
              hide-details="auto"
              dense
            ></v-text-field>
            <small v-if="!$v.email.required" class="form-text text-danger">
              Bu alan zorunludur...
            </small>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-btn
              color="primary"
              class="white--text my-2"
              x-large
              style="
                float: right;
                text-transform: none;
                background: #204080;
                border-radius: 12px;
              "
              >Add</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-container>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import { required } from "vuelidate/lib/validators";

export default {
  name: "Add",
  data() {
    return {
      name: "",
      country: "",
      city: "",
      email: "",
    };
  },
  validations: {
    name: {
      required,
    },
    country: {
      required,
    },
    city: {
      required,
    },
    email: {
      required,
    },
  },
  methods: {
    back() {
      this.$router.push({
        path: "/list",
      });
    },
  },
};
</script>

<style>
.v-text-field {
font-style: normal !important;
}
</style>