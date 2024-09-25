<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      isVisible: false,
    };
  },
  methods: {
    handleEmail(e) {
      this.email = e.target.value;
    },
    handlePassword(e) {
      this.password = e.target.value;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    async handleLogin() {
      if (!this.password || !this.email) {
        this.$toast.open({
          message: "Please fill all fields",
          type: "warning",
          duration: 5000,
          position: "top",
          dismissible: true,
        });
        return;
      }

      const data = {
        email: this.email,
        password: this.password,
      };

      try {
        this.loading = true;

        const response = await axios.post("http://localhost:3000/user/login", data);
        console.log(response);

        if (response.status == 200) {
          this.$toast.open({
            message: "Login Successful",
            type: "success",
            duration: 5000,
            position: "top",
            dismissible: true,
          });
          localStorage.setItem("UserInfo", JSON.stringify(response.data));

          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 1000);
        }
        
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

     mounted() {
    let loggedUser = localStorage.getItem("UserInfo");
    console.log(loggedUser);
    if (loggedUser) {
      this.$router.push({ name: "Home" });
    }
  },


  },
};
</script>
