<template>
  <div class="pt-16">
    <!-- Hero Banner -->
    <div class="relative h-[40vh] md:h-[50vh]">
      <img 
        src="https://roomclub.es/wp-content/uploads/2024/12/Galeria-Bandido-1024x509.png" 
        alt="Private events at Room Club" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="text-3xl md:text-5xl font-bold mb-2">Eventos Privados</h1>
          <p class="text-xl text-gray-300">Celebra tu evento especial en Room</p>
        </div>
      </div>
    </div>

    <!-- Event Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column - Info -->
        <div>
          <div class="bg-zinc-900 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">Tu evento en Room</h2>
            
            <div class="prose prose-invert max-w-none">
              <p>
                Room Club es el lugar perfecto para celebrar tu evento privado en Valencia. Ofrecemos un espacio único y exclusivo para todo tipo de celebraciones:
              </p>
              
              <ul>
                <li>Cumpleaños y aniversarios</li>
                <li>Despedidas de soltero/a</li>
                <li>Eventos corporativos</li>
                <li>Fiestas privadas</li>
                <li>Presentaciones de producto</li>
              </ul>
              
              <p>
                Nuestro equipo de profesionales se encargará de que tu evento sea un éxito, adaptándonos a tus necesidades y preferencias.
              </p>
              
              <h3>¿Qué ofrecemos?</h3>
              
              <ul>
                <li>Espacio exclusivo y personalizable</li>
                <li>Servicio de catering</li>
                <li>Barra libre</li>
                <li>DJ y música personalizada</li>
                <li>Decoración temática</li>
                <li>Servicio de fotografía</li>
              </ul>
              
              <p>
                Contáctanos para más información y para reservar tu fecha. ¡Haremos que tu evento sea inolvidable!
              </p>
            </div>
          </div>
          
          <!-- Gallery -->
          <div class="bg-zinc-900 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Galería</h2>
            <div class="grid grid-cols-2 gap-4">
              <img 
                src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-3.png" 
                alt="Private event at Room" 
                class="w-full h-40 object-cover rounded-md"
              />
              <img 
                src="https://roomclub.es/wp-content/uploads/2024/12/Galeria-Bandido-1024x509.png" 
                alt="Private event at Room" 
                class="w-full h-40 object-cover rounded-md"
              />
              <img 
                src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-2.png" 
                alt="Private event at Room" 
                class="w-full h-40 object-cover rounded-md"
              />
              <img 
                src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-3.png" 
                alt="Private event at Room" 
                class="w-full h-40 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        
        <!-- Right Column - Form -->
        <div>
          <PrivateEventForm />
          
          <!-- Testimonials -->
          <div class="bg-zinc-900 rounded-lg p-6 mt-8">
            <h2 class="text-2xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            
            <div class="space-y-4">
              <div class="border-l-4 border-red-600 pl-4">
                <p class="italic text-gray-300 mb-2">
                  "Celebramos el cumpleaños de mi pareja en Room y fue increíble. El equipo se encargó de todo y pudimos disfrutar sin preocupaciones."
                </p>
                <p class="text-sm font-bold">María G.</p>
              </div>
              
              <div class="border-l-4 border-red-600 pl-4">
                <p class="italic text-gray-300 mb-2">
                  "Organizamos un evento corporativo y superó todas nuestras expectativas. El espacio, el servicio, todo perfecto."
                </p>
                <p class="text-sm font-bold">Carlos M. - Director de Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrivateEventForm from '@/components/PrivateEventForm.vue';
</script>

<style scoped>
.prose {
  @apply text-gray-300;
}
.prose h3 {
  @apply text-white text-xl font-bold mt-6 mb-3;
}
.prose p {
  @apply mb-4;
}
.prose ul {
  @apply list-disc pl-5 mb-4;
}
</style>