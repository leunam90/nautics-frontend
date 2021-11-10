<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card mt-5">
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="user.email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
export default {
  data() {
    return {
      user: new User(),
    };
  },
  methods: {
    async login() {
      console.log(this.user);
      //const response = await fetch("https://nautics-demo.herokuapp.com/login")
      const res = await fetch("https://nautics-demo.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json(); 
      console.log(json.message)
      console.log(json.token)
        // .then((response) => response.json())
        // .catch((error) => console.log("Error", error))
        // .then((data) => console.log(data));
      this.user = new User();
    },
  },
};
</script>
