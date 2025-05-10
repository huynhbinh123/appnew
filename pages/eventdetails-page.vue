<template>
  <div class="pt-16">
    <!-- Hero Banner -->
    <div class="relative h-[50vh] md:h-[60vh]">
      <img
        :src="event.image"
        :alt="event.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1 class="text-3xl md:text-5xl font-bold mb-2">{{ event.title }}</h1>
          <p class="text-xl text-gray-300">{{ event.subtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Event Details -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Left Column - Event Info -->
        <div class="md:col-span-2">
          <div class="bg-zinc-900 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">Detalles del evento</h2>

            <div class="flex flex-col md:flex-row md:items-center mb-6 gap-4">
              <div class="flex items-center">
                <CalendarIcon class="h-5 w-5 mr-2 text-red-600" />
                <span>{{ event.date }}</span>
              </div>
              <div class="flex items-center">
                <ClockIcon class="h-5 w-5 mr-2 text-red-600" />
                <span>{{ event.time }}</span>
              </div>
              <div class="flex items-center">
                <UserIcon class="h-5 w-5 mr-2 text-red-600" />
                <span>{{ event.age }}</span>
              </div>
            </div>

            <div class="prose prose-invert max-w-none">
              <p>
                ¡Prepárate para una noche inolvidable en Room Club Valencia!
                {{ event.title }} es el evento que no te puedes perder.
              </p>
              <p>
                Disfruta de la mejor música {{ event.subtitle }} con nuestros
                DJs residentes y un ambiente único que solo Room puede
                ofrecerte.
              </p>
              <p>
                La discoteca Room se ha convertido en el referente de la noche
                valenciana, ofreciendo experiencias únicas en un espacio
                diseñado para disfrutar al máximo.
              </p>
              <h3>Line Up</h3>
              <ul>
                <li>DJ Cosmic (00:30 - 02:30)</li>
                <li>DJ Valencia (02:30 - 04:30)</li>
                <li>DJ Room (04:30 - 07:00)</li>
              </ul>
            </div>
          </div>

          <!-- Gallery -->
          <div class="bg-zinc-900 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">Galería</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-3.png"
                alt="Room Club event"
                class="w-full h-40 object-cover rounded-md"
              />
              <img
                src="https://roomclub.es/wp-content/uploads/2024/12/Galeria-Bandido-1024x509.png"
                alt="Room Club event"
                class="w-full h-40 object-cover rounded-md"
              />
              <img
                src="https://roomclub.es/wp-content/uploads/2024/08/Foto-Landing-Inicio-9-2.png"
                alt="Room Club event"
                class="w-full h-40 object-cover rounded-md"
              />
            </div>
          </div>

          <!-- Location -->
          <div class="bg-zinc-900 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Ubicación</h2>
            <div class="aspect-video bg-zinc-800 rounded-md mb-4">
              <!-- Placeholder for map -->
              <div class="w-full h-full flex items-center justify-center">
                <MapPinIcon class="h-12 w-12 text-red-600" />
              </div>
            </div>
            <p class="text-gray-300">
              Discoteca Room Valencia<br />
              Carrer de Sueca, 25, 46006 València, Valencia
            </p>
          </div>
        </div>

        <!-- Right Column - Tickets & Info -->
        <div>
          <!-- Ticket Options -->
          <div class="bg-zinc-900 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">Entradas</h2>

            <div class="space-y-4">
              <div
                v-for="(ticket, index) in tickets"
                :key="index"
                class="border border-zinc-800 rounded-md p-4 hover:border-red-600 transition-colors"
              >
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold">{{ ticket.name }}</h3>
                  <span class="font-bold text-red-600"
                    >{{ ticket.price }}€</span
                  >
                </div>
                <p class="text-sm text-gray-400 mb-3">
                  {{ ticket.description }}
                </p>
                <Button variant="destructive" class="w-full">Comprar</Button>
              </div>
            </div>
          </div>

          <!-- VIP Reservation -->
          <div class="bg-zinc-900 rounded-lg p-6 mb-8">
            <h2 class="text-2xl font-bold mb-4">Reserva VIP</h2>
            <p class="text-gray-300 mb-4">
              Disfruta de una experiencia exclusiva con nuestras mesas VIP.
              Servicio premium y las mejores vistas.
            </p>
            <Button
              variant="outline"
              class="w-full border-white text-white hover:text-white"
            >
              Reservar mesa VIP
            </Button>
          </div>

          <!-- Contact Info -->
          <div class="bg-zinc-900 rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">Información</h2>
            <div class="space-y-3">
              <div class="flex items-center">
                <PhoneIcon class="h-5 w-5 mr-2 text-red-600" />
                <span>+34 655 76 75 74</span>
              </div>
              <div class="flex items-center">
                <MailIcon class="h-5 w-5 mr-2 text-red-600" />
                <span>info@roomclub.es</span>
              </div>
              <div class="flex items-center">
                <InstagramIcon class="h-5 w-5 mr-2 text-red-600" />
                <span>@roomclubvalencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Events -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-8 text-center">Otros eventos</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <EventCard
            v-for="(relatedEvent, index) in relatedEvents"
            :key="index"
            :event="relatedEvent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard.vue";
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  User as UserIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Instagram as InstagramIcon,
} from "lucide-vue-next";

const route = useRoute();
const eventId = computed(() => route.params.id);

// This would normally come from an API based on the eventId
const event = ref({
  id: eventId.value,
  date: "VIE. 09 MAYO",
  time: "00:30 - 07:00",
  title: "GOLDEN FRIDAY | ROOM",
  subtitle: "hits",
  image:
    "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/2b35d3c8-1749-4765-db3a-4552b1754200/w=1350",
  age: "+18",
});

const tickets = [
  {
    name: "Entrada General",
    price: 15,
    description: "Acceso a la discoteca. Incluye una consumición.",
  },
  {
    name: "Entrada + Copa",
    price: 25,
    description: "Acceso a la discoteca. Incluye dos consumiciones.",
  },
  {
    name: "Lista de invitados",
    price: 10,
    description:
      "Acceso a la discoteca con nombre en lista. Incluye una consumición.",
  },
];

const relatedEvents = [
  {
    date: "SÁB. 10 MAYO",
    time: "00:30 - 07:00",
    title: "CHECK IN AL PERREO | ROOM",
    subtitle: "reggaeton",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/e6aa7743-6cf9-4698-bf47-aad2ba84f800/w=1350",
    age: "+18",
  },
  {
    date: "VIE. 16 MAYO",
    time: "00:30 - 07:00",
    title: "GOLDEN FRIDAY | ROOM",
    subtitle: "hits",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/a9f84013-89a8-427b-8fa0-b55d896ea800/w=1350",
    age: "+18",
  },
  {
    date: "SÁB. 17 MAYO",
    time: "00:30 - 07:00",
    title: "CHECK IN AL PERREO | ROOM",
    subtitle: "reggaeton",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/6cc133b2-77d9-4fdd-14e8-0abf256d0800/w=1350",
    age: "+18",
  },
];
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
