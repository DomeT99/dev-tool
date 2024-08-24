<script setup lang="ts">
const { trySignInOut } = useAuthComposable();
</script>

<template>
  <h1 class="title">Ciao champs</h1>
  <button class="button is-primary" @click="trySignInOut">SignOut</button>
</template>
