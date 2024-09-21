<script setup lang="ts">
//@ts-ignore
import { EButton, EText } from "easy-kit-component";

const { tryResetPasswordWithEmail, registration } = useAuthComposable();
</script>

<template>
  <GeneralForm :data="{ title: 'Reset your password' }">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <EText
          class="input is-medium"
          type="email"
          placeholder="Enter your email"
          v-model="registration.email"
        />
      </div>
    </div>
    <NuxtLink to="/login">Return to login</NuxtLink>

    <div class="control mt-6">
      <EButton
        class="button is-primary is-medium w-100"
        @click="tryResetPasswordWithEmail"
        >Send</EButton
      >
    </div>
  </GeneralForm>
</template>
