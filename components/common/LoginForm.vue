<script setup lang="ts">
//@ts-ignore
import { EButton } from "easy-kit-component";
</script>

<template>
  <form class="card container is-max-tablet p-6">
    <h1 class="title has-text-centered">Welcome back</h1>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input is-medium"
          type="email"
          placeholder="Enter your email"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input is-medium"
          placeholder="Enter your password"
          type="password"
        />
      </div>
    </div>

    <div class="control mt-6">
      <EButton class="button is-primary is-medium w-100">Sign In</EButton>
    </div>

    <div class="control mt-4 has-text-centered">
      <p class="is-size-6">Don't have an account? Sign up</p>
    </div>
    <hr />
    <div class="control mt-4 has-text-centered">
      <p class="is-size-6">OR</p>
    </div>
    <div class="control mt-4 has-text-centered">
      <CommonGoogleButton />
    </div>
  </form>
</template>
