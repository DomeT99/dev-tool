<script setup lang="ts">
const { warningData, closeWarningModal } = useErrorComposable();
</script>
<template>
  <div class="modal" :class="{ 'is-active': warningData.isShow }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">WARNING</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeWarningModal"
        ></button>
      </header>
      <section class="modal-card-body">{{ warningData.message }}</section>
    </div>
  </div>
</template>
