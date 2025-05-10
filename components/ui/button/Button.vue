<template>
  <component
    :is="asChild ? Slot : 'button'"
    :class="[
      buttonVariants({
        variant,
        size,
        className,
      }),
      className,
    ]"
    :disabled="disabled || loading"
    v-bind="props"
  >
    <Loader2Icon v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { Loader2Icon } from "lucide-vue-next";
import { Slot } from "radix-vue";
import { buttonVariants } from ".";
import { computed } from "vue";

const props = defineProps<{
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}>();

const className = computed(() => props.className);
</script>