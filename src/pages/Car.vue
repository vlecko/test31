<template>
  <div>
    <div v-if="!isLoading">
      <HeaderExample
        :brand_name="car.car.brand_name"
        :model_name="car.car.model_name"
      />
      <div class="p-4 mt-5">
        <div class="d-flex">
          <b-avatar variant="info" :src="car.user.avatar.url"></b-avatar>
          <div class="block text-sm-start ms-2">
            <div class="fw-bold">{{ car.user.username }}</div>
            <div class="opacity-50">{{ car.user.main_auto_name }}</div>
          </div>
        </div>
        <div>
          <div class="fw-bold">{{ car.user.main_auto_name }}</div>
          <div>{{ car.car.engine }} {{ car.car.year }}</div>
        </div>
      </div>
      <div class="col" v-for="image in car.car.images" :key="image.id">
        <div class="card shadow-sm">
          <b-img :src="image.url" alt="car"></b-img>
        </div>
      </div>
      <div class="p-4">
        <ul v-for="post in posts.posts" :key="post.id">
          <div class="d-flex">
            <b-avatar variant="info" :src="car.user.avatar.url"></b-avatar>
            <div class="block text-sm-start ms-2">
              <div class="fw-bold">{{ car.user.username }}</div>
              <div class="opacity-50">{{ car.user.main_auto_name }}</div>
            </div>
          </div>
          <li class="list-group-item">{{ post.text }}</li>
          <div class="d-flex justify-content-between my-4">
            <div class="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
                color="black"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                />
              </svg>
              <div class="ms-2">{{ post.like_count }}</div>
            </div>
            <RouterLink class="text-decoration-none" :to="'/post/' + post.id">
              <div class="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-chat-dots"
                  viewBox="0 0 16 16"
                  color="black"
                >
                  <path
                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                  />
                  <path
                    d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"
                  />
                </svg>
                <div class="ms-2 text-dark text-decoration-none">
                  {{ post.comment_count }}
                </div>
              </div>
            </RouterLink>
            <div class="opacity-50">{{ dateTime(post.created_at) }}</div>
          </div>
        </ul>
      </div>
    </div>
    <div v-else>
      <LoaderExample />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

import HeaderExample from "../components/HeaderExample.vue";
import LoaderExample from "../components/LoaderExample.vue";

export default {
  name: "CarComponent",
  components: {
    HeaderExample,
    LoaderExample,
  },
  methods: {
    ...mapActions(["fetchCar", "fetchPosts"]),
    fetchData() {
      const carId = this.$route.params.id;
      this.fetchCar(carId);
      this.fetchPosts(carId);
    },
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY");
    },
  },
  computed: {
    ...mapGetters(["car", "posts"]),
  },

  created() {
    this.fetchData();
  },
};
</script>
