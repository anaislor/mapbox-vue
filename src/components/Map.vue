<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    container="map"
    :center="[2.3522, 48.8566]"
    :zoom="11"
  >
    <MglNavigationControl position="top-right" />
    <MglMarker
      v-for="coord in POI"
      :key="coord.id"
      :coordinates="coord.center"
      :color="blue"
      ><MglPopup
        ><VCard>
          <h3 class="popUp-text">{{ coord.place_name }}</h3></VCard
        ></MglPopup
      ></MglMarker
    >
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglNavigationControl, MglPopup } from "vue-mapbox";
export default {
  props: ["POI"],
  components: {
    MglMap,
    MglMarker,
    MglNavigationControl,
    MglPopup
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
#map {
  margin-top: 50px;
  width: 100%;
  height: 600px;
  text-align: left;
}
.mapboxgl-canvas {
  position: relative;
  width: 100%;
}

.popUp-text {
  font-size: 10px;
  color: dodgerblue;
}
</style>
