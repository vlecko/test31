<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <b-form-input
        v-model="text"
        @input="sortCarsList"
        placeholder="Выберите марку"
      ></b-form-input>
      <div class="d-flex justify-content-between my-2">
        <div v-for="brand in this.brands" :key="brand.id">
          <div class="btn" @click="addBrand(brand.name)">{{ brand.name }}</div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="car in this.sortCarsList()" :key="car.id">
          <RouterLink :to="'/car/' + car.id">
            <div class="card shadow-sm">
              <b-img left :src="car.image" alt="carsList"></b-img>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CarList",
  data() {
    return {
      cars: [],
      text: "",
      brands: [
        {
          id: 0,
          name: "Volkswagen",
        },
        {
          id: 1,
          name: "Subaru",
        },
        {
          id: 2,
          name: "BMW",
        },
        {
          id: 3,
          name: "Skoda",
        },
        {
          id: 4,
          name: "Opel",
        },
        {
          id: 5,
          name: "Mercedes-Benz",
        },
        {
          id: 6,
          name: "Audi",
        },
        {
          id: 7,
          name: "Subaru",
        },
      ],
    };
  },

  methods: {
    ...mapGetters(["sortedCarsList"]),
    ...mapActions(["fetchCars"]),

    fetchData() {
      this.fetchCars();
    },
    addBrand(name) {
      console.log("name", name);
      this.text = name;
      this.sortCarsList();
    },
    sortCarsList() {
      return this.sortedCarsList()(this.text);
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
