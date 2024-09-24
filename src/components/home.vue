<template>
  <p>Home</p>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    let loggedUser = localStorage.getItem("UserInfo");
    console.log(loggedUser);
    if (!loggedUser) {
      this.$router.push({ name: "Register" });
    }
  },
};
</script>
