<template>
  <div class="min-h-screen bg-background font-sans">
    <CommonNavbar />
    <main class="container mx-auto py-8 min-h-[90vh]">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>
