<template>
  <div
    class="flex flex-col bg-black border border-gray-800 rounded-md overflow-hidden"
  >
    <div class="bg-black text-white p-3 text-center text-sm">
      <div class="font-bold">{{ event.date }}</div>
      <div class="text-gray-400">{{ event.time }}</div>
      <div class="mt-1">{{ event.age }}</div>
    </div>

    <div class="relative">
      <img
        :src="event.image"
        :alt="event.title"
        class="w-full h-64 object-cover"
      />
    </div>

    <div class="p-4 bg-black text-center">
      <h3 class="font-bold text-lg">{{ event.title }}</h3>
      <p class="text-gray-400 text-sm">{{ event.subtitle }}</p>
    </div>

    <div class="mt-auto p-3 bg-black">
      <Button
        variant="destructive"
        class="w-full text-xs"
        @click="navigateToEvent"
      >
        Entradas y reservas
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

interface Event {
  date: string;
  time: string;
  title: string;
  subtitle: string;
  image: string;
  age: string;
  id?: string | number;
}

const props = defineProps<{
  event: Event;
}>();

const router = useRouter();

const navigateToEvent = () => {
  // Use the event ID if available, otherwise generate one from the title
  const eventId =
    props.event.id || props.event.title.toLowerCase().replace(/\s+/g, "-");
  router.push({ name: "EventDetails", params: { id: eventId } });
};
</script>
