<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit" class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input v-model="email" id="email" name="email" type="email" class="form-control" placeholder="Email"
          autocomplete="username" required autofocus>
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input v-model="password" id="password" name="password" type="password" class="form-control"
          placeholder="Password" autocomplete="current-password" required>
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2022-2023
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  // Data must be a function to keep a component’s data separate for each initialization.
  // Methods and such stay the same.
  // Vue avoids error happen by having data be a function that returns an object.
  data() {
    // A function needs to be returned
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        emial: this.email,
        password: this.password
      })
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data', data)
    }
  }
}
</script>

