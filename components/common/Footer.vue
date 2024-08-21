<script setup lang="ts">
import { openLink } from "~/utils/utility";

const dateNow = computed(() => new Date().getFullYear());
</script>
<template>
  <footer class="footer">
    <div class="content has-text-centered">
      &copy; {{ dateNow }} Made with ❤️ by
      <b class="pointer" @click="openLink('https://linktr.ee/domenicotenace')">Domenico Tenace</b>
    </div>
  </footer>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
