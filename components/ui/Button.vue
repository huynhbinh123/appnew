<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary", // e.g., primary, secondary, danger
    },
    size: {
      type: String,
      default: "md", // e.g., sm, md, lg
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        "btn",
        `btn-${this.variant}`,
        `btn-${this.size}`,
        { disabled: this.disabled },
      ];
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.65;
}
</style>