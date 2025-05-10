<template>
  <section class="py-16 bg-black">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="relative">
          <img
            src="https://roomclub.es/wp-content/uploads/2024/12/Galeria-Bandido-1024x509.png"
            alt="Private event at Room"
            class="w-full h-[400px] object-cover"
          />
        </div>

        <div class="text-center md:text-right">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Celebra tu evento<br />privado en Room
          </h2>
          <Button variant="destructive" size="lg">Organiza tu evento</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>
