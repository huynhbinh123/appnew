<template>
  <div class="absolute inset-0 z-0">
    <NuxtImg
      src="https://roomclub.es/wp-content/uploads/2024/12/355435266_2426284420878268_5200076589570081586_n-1.png"
      alt="Room Club background"
      class="w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 flex items-center justify-center z-10 flex-col"
    >
      <h1 class="text-white font-medium text-center mb-8 text-4xl">
        <span class="block mb-4">ROOM ENTRADAS</span>
      </h1>
      <h1 class="text-white text-6xl font-bold text-center mb-16 text-600">
        Descubre nuestros
        <br />
        <span style="color: #c60200">próximos eventos</span>
      </h1>

      <a href="#algo" class="inline-block animate-bounce">
        <ChevronDown class="h-8 w-8" />
      </a>
    </div>

    <div
      id="algo"
      class="bg-black flex justify-center items-center flex-col py-[90px]"
    >
      <div
        class="text-white text-5xl font-semibold text-center mb-6 leading-tight"
      >
        No te pierdas nuestros<br />
        próximos eventos
      </div>

      <div
        class="text-white px-7 py-2 rounded-lg font-medium hover:bg-red-700 transform hover:scale-110 transition duration-300 ease-out will-change-transform"
        style="background-color: #bb020c"
      >
        Próximos eventos
      </div>
    </div>

    <div
      class="bg-slate-400 flex justify-center items-center flex-col py-[90px]"
    >
      <div
        class="text-white text-5xl font-semibold text-center mb-6 leading-tight"
      >
        ¿Quieres que tu marca
        <br />
        aparezca en Room?
      </div>
      <div
        class="bg-white px-7 py-2 rounded-lg font-normal hover:bg-white transform hover:scale-110 transition duration-300 ease-out will-change-transform"
        style="color: #c0020c"
      >
        Colabora con nosotros
      </div>
    </div>

    <div class="bg-black flex justify-center items-center py-4">
      <h3 class="text-3xl mb-1">DESCUBRE</h3>
      <a href="https://cosmicgroup.es/en/">
        <NuxtImg src="assets/img/cosmic.png" alt="" class="w-[153px]" />
      </a>
    </div>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Entradas Room Page",
  ogTitle: "Entradas Room Page",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
