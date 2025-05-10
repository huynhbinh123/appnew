<template>
  <section class="py-16 bg-black">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="text-center md:text-left order-2 md:order-1">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Reserva tu<br>mesa VIP</h2>
          <Button variant="destructive" size="lg">Reserva ahora</Button>
        </div>
        
        <div class="relative order-1 md:order-2">
          <img 
            src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-3.png" 
            alt="VIP table at Room" 
            class="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>