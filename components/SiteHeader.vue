<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <button class="text-white" @click="toggleMenu">
          <MenuIcon class="h-6 w-6" />
        </button>
        <router-link to="/" class="text-white font-bold">ROOM</router-link>
      </div>

      <nav class="hidden md:flex items-center space-x-6">
        <nuxt-link
          to="descubre-room"
          class="text-white hover:text-red-500 text-sm cursor-pointer"
          >Descubre Room</nuxt-link
        >
        <a href="#" class="text-white hover:text-red-500 text-sm"
          >Carta de bebidas</a
        >
        <nuxt-link
          to="celebra-tu-evento-room"
          class="text-white hover:text-red-500 text-sm cursor-pointer"
        >
          Celebra tu evento</nuxt-link
        >

        <a
          href="#"
          class="text-white hover:text-red-500 text-sm bg-red-600 px-3 py-1 rounded-sm"
          >ENTRADAS</a
        >
      </nav>

      <div class="flex items-center space-x-4">
        <a href="#" class="text-white">
          <img
            src="https://roomclub.es/wp-content/uploads/2024/08/555417.png"
            alt="English flag"
            class="w-6 h-6"
          />
        </a>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-black absolute top-full left-0 right-0 p-4"
    >
      <nav class="flex flex-col space-y-4">
        <a
          href="https://roomclub.es/es/descubre-room/"
          class="text-white hover:text-red-500"
          >Descubre Room</a
        >
        <a href="#" class="text-white hover:text-red-500">Carta de bebidas</a>
        <a
          href="https://roomclub.es/es/celebra-tu-evento-room/"
          class="text-white hover:text-red-500"
          >Celebra tu evento</a
        >
        <a
          href="#"
          class="text-white hover:text-red-500 bg-red-600 px-3 py-1 rounded-sm inline-block"
          >ENTRADAS</a
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu as MenuIcon } from "lucide-vue-next";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
