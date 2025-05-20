<template>
  <div class="absolute inset-0 z-0">
    <NuxtImg
      src="https://roomclub.es/wp-content/uploads/2024/12/355435266_2426284420878268_5200076589570081586_n-1.png"
      alt="Room Club background"
      class="w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 flex items-center justify-center z-10 flex-col text-center"
    >
      <h1 class="text-white text-6xl font-bold mb-16 text-600">
        Celebra con nosotros
        <br />
        tus eventos en
        <span style="color: #c60200">Room</span>
      </h1>

      <!-- Khung input -->
      <div class="lg:w-[570px] w-full p-6 space-y-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Nombre"
          class="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
        />

        <input
          type="text"
          placeholder="Organización"
          class="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
        />

        <div class="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Teléfono"
            class="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
          />

          <input
            type="text"
            placeholder="Correo"
            class="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
          />
        </div>

        <textarea
          type="text"
          style="height: 166px"
          placeholder="Mensaje"
          class="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
        />
      </div>
      <button
        class="text-white px-7 py-2 rounded-lg font-medium flex items-center justify-center bg-[#bb020c] focus:outline-none focus:ring-2 focus:ring-red-600"
      >
        Enviar
        <Icon
          name="charm:chevrons-right"
          class="p-2 ml-2 mt-1"
          width="10"
          height="10"
        />
      </button>
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
  title: "Celebra Tu Evento Room Page",
  ogTitle: "Celebra Tu Evento Room Page",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
