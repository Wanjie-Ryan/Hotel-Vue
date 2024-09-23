<template>
  <div>
    <div class="d-flex justify-content-center bg-primary">
      <div class="">
        <img src="../assets/logo.png" class="w-50 h-auto" />
      </div>
      <div class="d-flex align-items-center">
        <h2 class="text-light text-center">Register</h2>
      </div>
    </div>

    <form
      class="container d-flex flex-column mt-3 justify-content-center"
      style="min-height: 90vh; width: 60%"
    >
      
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Username</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Username"
          v-model="username"
          @input="handleUsername"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          v-model="email"
          @input="handleEmail"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Password</label
        >
        <div class="d-flex">

            <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your password"
            v-model="password"
            @input="handlePassword"
            />
            <i class="bi bi-flower3" style="margin-left:-20px; margin-top:5px; cursor: pointer;"></i>
        </div>
      </div>

      <button class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data(){
    return{
        username:"",
        email:"",
        password:""
    }
  },
  methods:{
    handleUsername: function(){
        this.username = event.target.value
        console.log(this.username)
    },
    handleEmail: function(){
        this.email = event.target.value
    },
    handlePassword: function(){
        this.password = event.target.value
    }
  }
};
</script>
