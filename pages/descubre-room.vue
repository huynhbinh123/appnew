<template>
  <div class="absolute inset-0 z-0">
    <NuxtImg
      src="~/assets/img/banner_descubre.jpg"
      alt="Room Club background"
      class="w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 flex items-center justify-center z-10 flex-col"
    >
      <h1 class="text-white font-medium text-center mb-8 text-4xl">
        <span class="block mb-4">DESCUBRE</span>
        ROOM THE ONLY CLUB
      </h1>
      <h1 class="text-white text-6xl font-bold text-center mb-16 text-600">
        La discoteca mas
        <br />
        <span style="color: #c60200">vibrante</span> de la ciudad
      </h1>

      <a href="#algo" class="inline-block animate-bounce">
        <Icon
          name="material-symbols:arrow-cool-down"
          class="size-8 text-white"
        />
      </a>
    </div>

    <div class="desc bg-black px-4 py-[110px]" id="algo">
      <div class="max-w-4xl mx-auto">
        <p class="text-white text-2xl font-normal text-justify mb-6">
          Una de las cuatro discotecas y clubes nocturnos bajo el sello de
          <span style="color: #c60200">Cosmic Group</span>, este club se
          caracteriza por su música vibrante y un ambiente energético,
          <span style="color: #c60200">
            perfecto para quienes buscan bailar toda la noche.
          </span>
        </p>
        <p class="text-white text-2xl font-normal text-justify mb-6">
          Se caracteriza por sus zonas Vip y su inconfundible equipo
          audiovisual. Una gran puesta en escena con más de 15000W de sonido e
          iluminación de última tecnología. Descubre sus diferentes zonas Vip y
          disfruta de su programación variada en
          <span style="color: #c60200">estilos house y latino.</span>
        </p>
        <h1 class="text-white text-5xl font-medium text-center mt-10">
          Descubre
          <br />
          <span style="color: #c60200">el espacio Room</span>
        </h1>
      </div>
    </div>

    <div class="bg-black">
      <NuxtImg
        src="/assets/img/Galeria-Descubre-Room1.png"
        alt=""
        class="w-full"
      />
    </div>

    <div class="bg-black flex justify-center items-center flex-col py-[90px]">
      <div
        class="text-white text-5xl font-semibold text-center mb-6 leading-tight"
      >
        No te pierdas nuestros<br />
        próximos eventos
      </div>

      <nuxtLink
        to="entradas-room"
        class="text-white px-7 py-2 rounded-lg font-medium hover:bg-red-700 transform hover:scale-110 transition duration-300 ease-out will-change-transform"
        style="background-color: #bb020c"
      >
        Próximos eventos
      </nuxtLink>
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
      <button
        class="bg-white px-7 py-2 rounded-lg font-normal hover:bg-white transform hover:scale-110 transition duration-300 ease-out will-change-transform"
        style="color: #c0020c"
      >
        Colabora con nosotros
      </button>
    </div>

    <div class="map w-full">
      <div class="elementor-custom-embed w-full">
        <iframe
          class="w-full h-[600px] border-0"
          loading="lazy"
          src="https://maps.google.com/maps?q=C%2F%20de%20Sant%20Vicent%20M%C3%A0rtir%2C%20305%2C%20Jes%C3%BAs%2C%2046017%20Val%C3%A8ncia%2C%20Valencia&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
          title="C/ de Sant Vicent Màrtir, 305, Jesús, 46017 València, Valencia"
          aria-label="C/ de Sant Vicent Màrtir, 305, Jesús, 46017 València, Valencia"
        ></iframe>
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
  title: "Descubre Room Page",
  ogTitle: "Descubre Room Page",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
