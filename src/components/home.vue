<template>
  <div>
    <Header />

    <p>Home</p>
  </div>
</template>

<script>
import Header from "./header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    let loggedUser = localStorage.getItem("UserInfo");
    console.log(loggedUser);
    if (!loggedUser) {
      this.$router.push({ name: "Register" });
    }
  },
};
</script>
