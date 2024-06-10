<template>
  <!-- FormSingle ==> -->
  <span style="color: brown; font-size: 20px;">FormSingle</span>
  <div>name input: {{ name }}</div>    
  <FormSingle
    
    class="class1"
  />
  <!-- <== FormSingle -->




  <br>
  <br>




  <!-- FormMultiple ==> -->
  <span style="color: brown; font-size: 20px;">FormMultiple</span>
  <div>surname input: {{ surname }}</div> 
  <div>year select: {{ year }}</div> 
  <br>
  <FormMultiple 
    
  />
  <!-- <== FormMultiple -->



</template>

<script setup>
  import { ref } from "vue";
  import FormSingle from "@/components/FormSingle.vue";
  import FormMultiple from "@/components/FormMultiple.vue";

  // FormSingle ==>
  const name = ref('');
  // <== FormSingle


  // FormMultiple ==>
  const surname = ref('');
  const year = ref();
  // <== FormMultiple



</script>

<style scoped>

</style>