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
  <pv-datatable :value="products" tableStyle="min-width: 50rem" paginator :rows="3" :rows-per-page-options="[3,6,9,13]" sort-mode="multiple"> 
    <pv-column field= "id" header="Record Id" sortable></pv-column>
    <pv-column field="treadmillId" header="Treadmill Id" sortable></pv-column>
    <pv-column field="serialNumber" header="Serial Number" sortable></pv-column>
    <pv-column field="name" header="Center Name" sortable></pv-column>
    <pv-column field="quantity" header="Date" sortable></pv-column>
    <pv-column field="hour" header="Time" sortable></pv-column>
    <pv-column field="volts" header="Volts" sortable></pv-column>
    <pv-column field="watts" header="Watts" sortable></pv-column>
    <pv-column field="hp" header="HP" sortable></pv-column>
</pv-datatable>
</template>

<style scoped>

</style>