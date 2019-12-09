<template>
  <div>
    <h1>Navigation</h1>
    <label for="origin">Origin</label>
    <input id="origin" type="text" v-model="origin" />
    <label for="destination">Destination</label>
    <input id="destination" type="text" v-model="destination" />
    <button @click="getDirection(origin, destination)">
      FInd the best way
    </button>
  </div>
</template>

<script>
import MapBox from "@/api/mapBox.js";
export default {
  data() {
    return {
      origin: "2.2945,48.8584",
      destination: "2.2950,48.8738"
    };
  },
  methods: {
    getDirection: (origin, destination) => {
      MapBox.getDirection(origin, destination).then(res =>
        console.log("reponse", res)
      );
    }
  }
};
</script>

<style></style>
