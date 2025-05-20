<template>
  <section class="py-16 bg-red-700">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-xl md:text-2xl font-bold mb-2">
        ¡Síguenos en nuestras redes
      </h2>
      <p class="text-lg mb-6">y mencionanos en tus mejores fotos!</p>

      <div class="flex justify-center space-x-4 mb-8">
        <a href="#" class="text-white hover:text-gray-200">
          <Icon name="fa6-brands:instagram" />
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <NuxtImg
          src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-3.png"
          alt="Fiesta en Room Valencia"
          class="w-full h-64 object-cover"
        />
        <NuxtImg
          src="https://roomclub.es/wp-content/uploads/2024/12/Galeria-Bandido-1024x509.png"
          alt="Room Club event"
          class="w-full h-64 object-cover"
        />
        <NuxtImg
          src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-2.png"
          alt="decoración de Room Discoteca Valencia"
          class="w-full h-64 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
