<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <button class="text-white" @click="toggleMenu">
          <Icon name="material-symbols:format-list-bulleted-rounded" />
        </button>
        <NuxtLink to="/" class="text-white font-bold">ROOM</NuxtLink>
      </div>

      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink
          to="descubre-room"
          class="text-white hover:text-red-500 text-sm cursor-pointer"
          >Descubre Room</NuxtLink
        >
        <NuxtLink to="/" class="text-white hover:text-red-500 text-sm">
          Carta de bebidas
        </NuxtLink>

        <NuxtLink
          to="celebra-tu-evento-room"
          class="text-white hover:text-red-500 text-sm cursor-pointer"
        >
          Celebra tu evento</NuxtLink
        >
      </nav>

      <div class="flex items-center space-x-4">
        <button class="text-white">
          <NuxtImg
            src="https://roomclub.es/wp-content/uploads/2024/08/555417.png"
            alt="English flag"
            class="w-6 h-6"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-black absolute top-full left-0 right-0 p-4"
    >
      <nav class="flex flex-col space-y-4">
        <NuxtLink to="descubre-room" class="text-white hover:text-red-500">
          Descubre Room
        </NuxtLink>
        <NuxtLink to="/" class="text-white hover:text-red-500">
          Carta de bebidas
        </NuxtLink>
        <NuxtLink
          to="celebra-tu-evento-room"
          class="text-white hover:text-red-500"
        >
          Celebra tu evento
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
