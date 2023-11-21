new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    login: "",
    senha: "",
    log: "",
    alert: false
  },

  methods: {
    sub: function (event) {
      if (this.login == "" || this.senha == "") {
        this.alert = true;
        this.log = "User and Password is required.";
        event.preventDefault();
      } else {
        this.log = "Go";
      }
    }
  }
});
