<template>
  <div
    class="max-w-full "
  >
    <div class="container">
      <section class="section">
        <div
          class="intro flex flex-col text-center justify-center align-center py-10 space-y-4"
        >
          <h3 class="text-2xl text-gray-700 font-semibold">
            BEST ONLINE STORE OF THE YEAR
          </h3>
          <h1 class="text-3xl font-bold text-gray-700">
            We don't do fashion, we are fashion
          </h1>
          <button
            class="font-medium bg-blue-800 w-max mx-auto p-2 rounded-lg text-white"
            @click="$router.push('/products')"
          >
            Shop Now
          </button>
        </div>

        <Swiper
          class="!pb-10"
          :slides-per-view="3"
          :space-between="50"
          :autoplay="{ delay: 2_500, pauseOnMouseEnter: true }"
          :speed="1_000"
          :loop="true"
          :navigation="true"
          :modules="[Navigation, Autoplay]"
        >
          <SwiperSlide v-for="i of 9" :key="i">
            <Card />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

// Css
import "swiper/css/navigation";
</script>

<style lang=""></style>
