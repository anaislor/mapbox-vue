<template>
  <div>
    <h1>Static Map</h1>
    <img :src="staticMap" alt="static map" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      staticMap: `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/2.3507,48.8597,9.88/600x400?access_token=${process.env.VUE_APP_MAPBOX_API_KEY}`
    };
  }
};
</script>

<style></style>
