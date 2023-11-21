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
        this.log = "Informe o usuario e senha para logar.";
        event.preventDefault();
      } else {
        this.log = "Go";
      }
    }
  }
});