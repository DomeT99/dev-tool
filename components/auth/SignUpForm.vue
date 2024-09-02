<script setup lang="ts">
//@ts-ignore
import { EButton, EText } from "easy-kit-component";

const { registration, tryCreateUserWithEmailAndPassword } = useAuthComposable();
</script>

<template>
  <GeneralForm :data="{ title: 'Create new account' }">
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

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <EText
          class="input is-medium"
          placeholder="Enter a password"
          type="password"
          v-model="registration.password"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <div class="control">
        <EText
          class="input is-medium"
          placeholder="Confirm password"
          type="password"
          v-model="registration.confirmPassword"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">API Key</label>
      <div class="control">
        <EText
          class="input is-medium"
          placeholder="Enter your API key"
          v-model="registration.apiKey"
        />
      </div>
    </div>

    <div class="control mt-6">
      <EButton
        class="button is-primary is-medium w-100"
        @click="tryCreateUserWithEmailAndPassword"
        >Sign Up</EButton
      >
    </div>

    <div class="control mt-4 has-text-centered">
      <p class="is-size-6">
        Already have an account? <NuxtLink to="/login">Continue</NuxtLink>
      </p>
    </div>
  </GeneralForm>
</template>
