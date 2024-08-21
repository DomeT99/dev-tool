<template>
  <Html data-theme="light">
    <VitePwaManifest />
    <CommonNavbar />
    <section class="min-h-100">
      <slot />
    </section>
    <CommonFooter />
  </Html>
</template>
