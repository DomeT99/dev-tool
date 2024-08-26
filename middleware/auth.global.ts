export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();
  if (user === null && to.fullPath !== "/login" && to.fullPath !== "/signup") {
    return navigateTo("/login");
  } 
});
