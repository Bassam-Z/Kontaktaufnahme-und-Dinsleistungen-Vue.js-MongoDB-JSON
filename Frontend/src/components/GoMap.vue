<template>
  <div class="map-wrap">
    <Navbar />
    <a href="https://www.maptiler.com" class="watermark"><img
        src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
    <div class="map" ref="mapContainer" ></div>
  </div>
</template>

<script>
import { Map, NavigationControl, Marker  } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import Navbar from './MapNave.vue';

export default {
  name: "Map",
  components: {
      Navbar
    },
  setup () {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);
    // const marker = shallowRef(null);

    onMounted(() => {
      const apiKey = 'pz8PamGdhkuVVlaDQBbC';

      const initialState = { lng: 7.465298, lat: 51.513587, zoom: 12 };

      map.value = markRaw (new Map({
        container: mapContainer.value,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      }));
      // Füge den Zoom-Controller hinzu
      map.value.addControl(new NavigationControl(), 'top-right');

      // Berechne die Mitte der Karte
      const mapCenter = map.value.getCenter();
      
      // Füge einen Pin (Marker) hinzu
      // new Marker({color: "#FF0000"})
      // .setLngLat([7.508298, 51.548587])
      // .addTo(map.value);
          
    }),

    onUnmounted(() => {
      // map.value?.remove();
      if (map.value) {
        map.value.remove();
      }
    })

    return {
      map, mapContainer
    };
  }
};
</script>


<style scoped>
@import '../../node_modules/maplibre-gl/dist/maplibre-gl.css';


.map-wrap {
  position: relative;
  width: 100%;
  height: calc(60vh - 55px); /*calculate height of the screen minus the heading*/
}

.map {
  box-shadow: 2px 4px 6px rgb(28, 6 ,49, 0.1);
  border-radius: 6px;
  position: absolute;
  width: 100%;
  height: 90%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}


</style>