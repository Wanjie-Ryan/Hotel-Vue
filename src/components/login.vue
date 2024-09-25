<template>

<div class="w-100 min-vh-100 d-flex justify-content-center align-items-center">

<div class="w-50 min-vh-60 bg-primary d-flex flex-column justify-content-center align-items-center">

  <form>
    <h2>Hotel Login</h2>

    <div>
        <label class="mb-1 fw-600">Email</label>
        <input type="email" placeholder="Email Address" class="form-control" value="email" @input="handleEmail"/>

    </div>

    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Password</label
        >
        <div class="d-flex">
          <input
            :type="isVisible ? 'text' : 'password'"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter your password"
            v-model="password"
            @input="handlePassword"
          />
          <i
            class="bi bi-flower3"
            style="margin-left: -20px; margin-top: 5px; cursor: pointer"
            @click="toggleVisibility"
          ></i>
        </div>
      </div>
      <div class="w-100">
        <div v-if="loading">
          <!-- <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading... -->
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div v-else class="w-100 d-flex justify-content-center mx-auto">
          <button class="btn btn-primary" style="width: 100%" type="submit">
            Register
          </button>
        </div>
      </div>



  </form>

</div>

</div>


    
</template>

<script>
export default{
    name:'LoginComponent',
    data(){
      return{
        email:'',
        password:'',
        loading:false,
        isVisible:false
      }
    },
    methods:{
      handleEmail(e){
        this.email = e.target.value
      },
      handlePassword(e){
        this.password = e.target.value
      },
      toggleVisibility(){
        this.isVisible = !this.isVisible
      }


    }
}
</script>