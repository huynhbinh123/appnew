<template>
  <div>
    <div class="flex flex-col min-h-screen bg-black text-white font-sans">
      <SiteHeader />
      <main class="flex-grow">
        <slot />
      </main>
      <SiteFooter />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
