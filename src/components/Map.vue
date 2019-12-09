<template>
  <div id="mapContainer">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_API_KEY,
      mapStyle: "mapbox://styles/mapbox/streets-v11"
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>

<style>
#mapContainer {
  margin-top: 50px;
  width: 100%;
  height: 600px;
}
</style>
