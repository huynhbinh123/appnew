<template>
  <div class="flex flex-col min-h-screen bg-black text-white font-sans">
    <SiteHeader />
    <main class="flex-grow">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts"></script>
