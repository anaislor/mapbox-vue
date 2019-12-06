<template>
  <div>
    <Mapbox
      access-token="pk.eyJ1IjoiYW5haXNsb3IiLCJhIjoiY2szdHlxbml4MDdpaDNtcGszbHlrMG9wNyJ9.IS74VCKnAOg3X7cyiARsoQ"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3
      }"
    /></div
></template>

<script>
import Mapbox from "mapbox-gl-vue";

export default {
  data() {
    return {
      token: process.env.VUE_APP_MAPBOX_API_KEY
    };
  },
  components: { Mapbox }
};
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
