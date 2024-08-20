<script setup lang="ts">
//@ts-ignore
import { EButton, EText } from "easy-kit-component";
</script>

<template>
  <form class="card container is-max-tablet p-6">
    <h1 class="title has-text-centered">Create new account</h1>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <EText
          class="input is-medium"
          type="email"
          placeholder="Enter your email"
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
        />
      </div>
    </div>

    <div class="field">
      <label class="label">API Key</label>
      <div class="control">
        <EText
          class="input is-medium"
          placeholder="Enter your API key" 
        />
      </div>
    </div>

    <div class="control mt-6">
      <EButton class="button is-primary is-medium w-100">Sign Up</EButton>
    </div>

    <div class="control mt-4 has-text-centered">
      <p class="is-size-6">
        Already have an account? <NuxtLink to="/login">Continue</NuxtLink>
      </p>
    </div>
  </form>
</template>
