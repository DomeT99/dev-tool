export default defineNuxtRouteMiddleware(async (to, from) => { 
  const user = await getCurrentUser();

  if (!isNull(user) && to.name === "login") {
    navigateTo("/");
  }

  if (!isNull(user) && to.name !== "login") {
    navigateTo("/login");
  }
});
