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

    <form class="container d-flex flex-column mt-3 justify-content-center " style="min-height:90vh; width:60%;">
      <!-- <input type="text" placeholder="Enter name" />
      <input type="email" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button>Regsiter</button> -->

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Username</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Username"
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
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Password</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your password"
          
        />
      </div>

      <button class="btn btn-primary ">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
};
</script>
