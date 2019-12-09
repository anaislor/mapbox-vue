<template>
  <div>
    <h1>Search Features Map</h1>
    <label for="search">Search</label>
    <input
      id="search"
      type="text"
      v-model="search"
      @change="GetSearch(search)"
    />
    <Map />
  </div>
</template>

<script>
import MapBox from "@/api/mapBox.js";
import Map from "@/components/Map.vue";

export default {
  data() {
    return {
      search: ""
    };
  },
  components: {
    Map
  },
  methods: {
    getSearch(s) {
      MapBox.GetSearch(s).then(res => console.log(res.data.features));
    }
  }
};
</script>

<style></style>
