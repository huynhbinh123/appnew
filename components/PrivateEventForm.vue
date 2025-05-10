<template>
  <div class="bg-zinc-900 rounded-lg p-6">
    <h2 class="text-2xl font-bold mb-4">Solicita información</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="name" class="block text-sm font-medium mb-1"
            >Nombre</label
          >
          <Input
            id="name"
            v-model="form.name"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium mb-1"
            >Email</label
          >
          <Input
            id="email"
            type="email"
            v-model="form.email"
            placeholder="tu@email.com"
            required
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="phone" class="block text-sm font-medium mb-1"
            >Teléfono</label
          >
          <Input
            id="phone"
            type="tel"
            v-model="form.phone"
            placeholder="+34 000 000 000"
            required
          />
        </div>
        <div>
          <label for="date" class="block text-sm font-medium mb-1"
            >Fecha del evento</label
          >
          <Input id="date" type="date" v-model="form.date" required />
        </div>
      </div>

      <div>
        <label for="guests" class="block text-sm font-medium mb-1"
          >Número de invitados</label
        >
        <Input
          id="guests"
          type="number"
          v-model="form.guests"
          placeholder="50"
          required
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium mb-1"
          >Mensaje</label
        >
        <Textarea
          id="message"
          v-model="form.message"
          placeholder="Cuéntanos más sobre tu evento..."
          rows="4"
        />
      </div>

      <Button type="submit" variant="destructive" class="w-full"
        >Enviar solicitud</Button
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
  // Here you would typically send the form data to your backend
  alert("¡Gracias por tu solicitud! Te contactaremos pronto.");
};
</script>
