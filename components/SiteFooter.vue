<template>
  <footer class="bg-zinc-100 text-black pt-8 pb-4">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="font-bold mb-4">Room</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-red-600">Entradas & VIPs</a></li>
            <li><a href="#" class="hover:text-red-600">Descubre Room</a></li>
            <li><a href="#" class="hover:text-red-600">Fotos</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-4">Cosmic Group</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-red-600">¿Quiénes somos?</a></li>
            <li><a href="#" class="hover:text-red-600">Contacto</a></li>
            <li>
              <a href="#" class="hover:text-red-600">Celebra tu evento</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-4">Discotecas en Valencia</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-red-600">Akuarela</a></li>
            <li><a href="#" class="hover:text-red-600">Mya</a></li>
            <li><a href="#" class="hover:text-red-600">Bandit</a></li>
            <li><a href="#" class="hover:text-red-600">Medusa</a></li>
          </ul>
        </div>

        <div>
          <div class="flex items-center justify-center md:justify-start mb-4">
            <div class="grid grid-cols-2 gap-1">
              <div class="w-6 h-6 bg-black"></div>
              <div class="w-6 h-6 bg-black"></div>
              <div class="w-6 h-6 bg-black"></div>
              <div class="w-6 h-6 bg-black"></div>
            </div>
          </div>

          <p class="text-sm mb-2">Ruta de Valencia +34 655 76 75 74</p>
          <p class="text-sm">
            Horario de atención: 10:00 - 14:00 / 16:00 - 19:00
          </p>
        </div>
      </div>

      <div
        class="border-t border-gray-300 pt-4 text-xs text-center md:text-left md:flex md:justify-between"
      >
        <p>Todos los derechos reservados © 2024</p>
        <div class="mt-2 md:mt-0 space-x-4">
          <a href="#" class="hover:text-red-600">Política de privacidad</a>
          <a href="#" class="hover:text-red-600">Aviso legal</a>
        </div>
      </div>

      <div class="mt-4 text-center">
        <a href="#" class="inline-block">
          <NuxtImg
            src="https://roomclub.es/wp-content/uploads/2024/08/Recurso-1@2x.png"
            alt="Four Venues"
            class="h-6"
          />
        </a>
      </div>
    </div>
  </footer>

  <div class="bg-black text-white py-2 text-center text-xs">
    <div class="container mx-auto px-4 flex items-center justify-center">
      <span class="mr-2">DESCUBRE</span>
      <span class="font-bold">COSMIC</span>
    </div>
  </div>

  <!-- WhatsApp button -->
  <a
    href="#"
    class="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
  >
    <Icon name="uil:github" style="color: black" />
  </a>
</template>

<script setup lang="ts"></script>
