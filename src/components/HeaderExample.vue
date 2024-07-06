<template>
  <header class="border-bottom">
    <div
      class="navbar px-4 d-flex navbar-expand-lg justify-content-between navbar-light bg-light fixed-top"
    >
      <a
        href="#"
        class="navbar-brand d-flex align-items-center"
        @click="goBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
          color="black"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </a>
      <div class="fw-bold">{{ brand_name }} {{ model_name }}</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderExample",
  props: {
    brand_name: {
      type: String,
    },
    model_name: {
      type: String,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
