<script setup lang="ts">
//@ts-ignore
import { EButton, EText } from "easy-kit-component";

const { trySignInWithGoogle, trySigninWithEmailAndPassword, registration } =
  useAuthComposable();
</script>

<template>
  <form class="card container is-max-tablet p-6">
    <h1 class="title has-text-centered">Welcome back</h1>

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
          placeholder="Enter your password"
          type="password"
          v-model="registration.password"
        />
      </div>
    </div>

    <div class="control mt-6">
      <EButton
        class="button is-primary is-medium w-100"
        @click="trySigninWithEmailAndPassword"
        >Sign In</EButton
      >
    </div>

    <div class="control mt-4 has-text-centered">
      <p class="is-size-6">
        Don't have an account? <NuxtLink to="/signup">Sign up</NuxtLink>
      </p>
    </div>
    <hr />
    <div class="control mt-4 has-text-centered">
      <p class="is-size-6">OR</p>
    </div>
    <div class="control mt-4 has-text-centered">
      <CommonGoogleButton
        label="Sign in with Google"
        @click="trySignInWithGoogle"
      />
    </div>
  </form>
</template>
