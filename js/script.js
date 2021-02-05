// Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.     DONE
// La chiamata ajax vi ritornerà ogni volta un'email random.      DONE

new Vue({
    el: '#root',
    data: {
      emails: [],
    },
    mounted() {
      const self=this;
      for(let x=0; x<10; x++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(resp){
          self.emails.push(resp.data.response);
        });
      }
    }
  });
  Vue.config.devtools=true