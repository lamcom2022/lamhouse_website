<template>
    <div class="max-w-2xl mx-auto py-2 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:grid">
        <div class="lg:col-span-4">
            <SectionGroup />
        </div>
        <div class="mt-16 lg:mt-0 lg:col-start-5 lg:col-span-7">
            <!-- Rigt side... -->
            <div class="flow-root">

                <GMapMap ref="myMap" :center="center" :zoom="15" :options="{
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: true,
                }" style="width: 475px; height: 500px; margin: auto">
                    <GMapMarker :key="marker.id" :position="marker.position" :clickable="true" :draggable="true">
                        <GMapInfoWindow :closeclick="true" @closeclick="openInfoWindow(null)"
                            @click="openMarker(marker.id)" :opened="true">
                            <div>{{ marker.description }}</div>
                        </GMapInfoWindow>
                    </GMapMarker>
                </GMapMap>

            </div>
            <!-- Rigt side... -->
        </div>
    </div>

</template>
<script>
//https://vue-map.netlify.app/components/info-window.html#open-close-info-window-on-marker-click
export default {
    layout: 'main',
    data() {
        return {
            openedMarkerID: null,
            marker: {
                description: "1400 Centennial Ave, Piscataway, NJ 08854",
                id: "1",
                position: {
                    lat: 40.553672662190046,
                    lng: -74.43510371286766,
                },
            },
            center: { lat: 40.53593756641602, lng: -74.45833547277596 }
        };
    },
    methods: {
        openMarker(id) {
            this.openedMarkerID = id
        }
    },
    created() {
        useNuxtApp().$bus.$on('evtLocationChange', (data) => {
            this.marker.description = data.address.street
            //alert(marker.description)
            this.marker.id = data._id
            this.marker.position.lat = data.location.coordinates[0]
            this.marker.position.lng = data.location.coordinates[1]
        });
    },
}

</script>
<script setup>
definePageMeta({
    //colorMode: 'system',
    layout: "main",
})
</script>

