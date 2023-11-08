<template lang="">
  <section class="section">
    <div class="container">
      <div v-if="!products.pending" class="py-10 grid grid-cols-3 gap-4">
        <!-- <Card
          v-for="product in products.data"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :price="product.price"
        /> -->
        <pre v-for="prod of products.data">{{ prod }}</pre>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProducts } from "#imports";
const products = await useProducts();
</script>

<style lang=""></style>
