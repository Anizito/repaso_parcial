<script>
import technogymtoolbarComponent from "@/components/technogymtoolbar-component.vue";
import {TechnoApiService} from "@/services/techno-data";

export default {
  name: "healthcheck",
  components: {technogymtoolbarComponent},
  data(){
    return{
      products: [],
      centers:[],
      treadmills:[]
    }
  },
  mounted(){
    new TechnoApiService().getAllRecords().then((response) => {
      this.products = response.data;
    });

    new TechnoApiService().getAllCenters().then((response) => {
      this.centers = response.data;
    });
  }
}
</script>

<template>
  <h1>HealthCheck view</h1>
  <pv-datatable :value="products" tableStyle="min-width: 50rem" paginator :rows="3" :rows-per-page-options="[3,6,9,13]">
    <pv-column field= "id" header="Record Id"></pv-column>
    <pv-column field="treadmillId" header="Treadmill Id"></pv-column>
    <pv-column field="serialNumber" header="Serial Number"></pv-column>
    <pv-column field="name" header="Center Name"></pv-column>
    <pv-column field="quantity" header="Date"></pv-column>
    <pv-column field="hour" header="Time"></pv-column>
    <pv-column field="volts" header="Volts"></pv-column>
    <pv-column field="watts" header="Watts"></pv-column>
    <pv-column field="hp" header="HP"></pv-column>
</pv-datatable>
</template>

<style scoped>

</style>