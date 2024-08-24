export default defineNuxtRouteMiddleware(async (to, from) => { 
  const user = await getCurrentUser();

  if (isTrue(user) && to.name === "login") {
    navigateTo("/");
  }

  if (isTrue(user) && to.name !== "login") {
    navigateTo("/login");
  }
});
