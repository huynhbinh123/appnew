<template>
  <section
    class="relative min-h-screen flex items-center justify-center text-center pt-16"
  >
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="https://roomclub.es/wp-content/uploads/2024/12/355435266_2426284420878268_5200076589570081586_n-1.png"
        alt="Room Club background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">ROOM THE ONLY CLUB</h1>
      <p class="text-xl md:text-2xl mb-8">
        Vibra al ritmo del único "real" club
      </p>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
      >
        <UiButton variant="destructive" size="lg" class="w-full md:w-auto">
          ENTRADAS, VIPS & LISTAS
        </UiButton>
        <UiButton
          variant="outline"
          size="lg"
          class="w-full md:w-auto border-white text-white hover:text-white"
        >
          EVENTOS PRIVADOS
        </UiButton>
      </div>

      <a href="#events" class="inline-block animate-bounce">
        <Icon
          name="material-symbols:arrow-cool-down"
          class="size-8 text-white"
        />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
