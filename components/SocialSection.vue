<template>
  <section class="py-16 bg-red-700">
    <div class="container mx-auto px-4 text-center">
      <div class="grid grid-cols-2 gap-2 mb-8 justify-center">
        <div class="flex justify-center">
          <div class="w-8 h-8 bg-white"></div>
          <div class="w-8 h-8 bg-white"></div>
        </div>
        <div class="flex justify-center">
          <div class="w-8 h-8 bg-white"></div>
          <div class="w-8 h-8 bg-white"></div>
        </div>
      </div>
      
      <h2 class="text-xl md:text-2xl font-bold mb-2">¡Síguenos en nuestras redes</h2>
      <p class="text-lg mb-6">y mencionanos en tus mejores fotos!</p>
      
      <div class="flex justify-center space-x-4 mb-8">
        <a href="#" class="text-white hover:text-gray-200">
          <Instagram class="h-6 w-6" />
        </a>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img 
          src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-3.png" 
          alt="Fiesta en Room Valencia" 
          class="w-full h-64 object-cover"
        />
        <img 
          src="https://roomclub.es/wp-content/uploads/2024/12/Galeria-Bandido-1024x509.png" 
          alt="Room Club event" 
          class="w-full h-64 object-cover"
        />
        <img 
          src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-2.png" 
          alt="decoración de Room Discoteca Valencia" 
          class="w-full h-64 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Instagram } from 'lucide-vue-next';
</script>