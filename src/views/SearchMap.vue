<template>
  <div>
    <h1>Search Features Map</h1>
    <label for="search">Search</label>
    <input
      id="search"
      type="text"
      v-model="search"
      @change="getSearch(search)"
    />
    <Map :POI="results" />
  </div>
</template>

<script>
import MapBox from "@/api/mapBox.js";
import Map from "@/components/Map.vue";

export default {
  data() {
    return {
      search: "",
      results: []
    };
  },
  components: {
    Map
  },
  methods: {
    getSearch(s) {
      MapBox.getSearch(s).then(res => {
        console.log(res);
        this.results = res.data.features;
      });
    }
  }
};
</script>

<style></style>
