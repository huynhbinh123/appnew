<template>
  <section id="events" class="py-16 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">
        Próximos eventos en <br />discoteca Room
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <EventCard
          v-for="(event, index) in events"
          :key="index"
          :event="event"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";

interface Event {
  id: string;
  date: string;
  time: string;
  title: string;
  subtitle: string;
  image: string;
  age: string;
}

const events: Event[] = [
  {
    id: "golden-friday-09-mayo",
    date: "VIE. 09 MAYO",
    time: "00:30 - 07:00",
    title: "GOLDEN FRIDAY | ROOM",
    subtitle: "hits",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/2b35d3c8-1749-4765-db3a-4552b1754200/w=1350",
    age: "+18",
  },
  {
    id: "check-in-perreo-10-mayo",
    date: "SÁB. 10 MAYO",
    time: "00:30 - 07:00",
    title: "CHECK IN AL PERREO | ROOM",
    subtitle: "reggaeton",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/e6aa7743-6cf9-4698-bf47-aad2ba84f800/w=1350",
    age: "+18",
  },
  {
    id: "golden-friday-16-mayo",
    date: "VIE. 16 MAYO",
    time: "00:30 - 07:00",
    title: "GOLDEN FRIDAY | ROOM",
    subtitle: "hits",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/a9f84013-89a8-427b-8fa0-b55d896ea800/w=1350",
    age: "+18",
  },
  {
    id: "check-in-perreo-17-mayo",
    date: "SÁB. 17 MAYO",
    time: "00:30 - 07:00",
    title: "CHECK IN AL PERREO | ROOM",
    subtitle: "reggaeton",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/6cc133b2-77d9-4fdd-14e8-0abf256d0800/w=1350",
    age: "+18",
  },
  {
    id: "golden-friday-23-mayo",
    date: "VIE. 23 MAYO",
    time: "00:30 - 07:00",
    title: "GOLDEN FRIDAY | ROOM",
    subtitle: "hits",
    image:
      "https://fourvenues.com/cdn-cgi/imagedelivery/kWuoTchaMsk7Xnc_FNem7A/a9f84013-89a8-427b-8fa0-b55d896ea800/w=1350",
    age: "+18",
  },
];
</script>
