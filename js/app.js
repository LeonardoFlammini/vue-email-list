const {createApp} = Vue;

createApp({
  data(){
    return{
      apiMail: "https://flynn.boolean.careers/exercises/api/random/mail",
      mailString: "",
      mailArray: [],
      items: 10
    }
  },
  methods:{
    getApi(){
      for(let i = 0; i < this.items; i++){
        axios.get(this.apiMail)
                .then((response)=>{
                 this.mailString = response.data.response;
                 this.mailArray.push(this.mailString);
                })
      }
      
    }
  },
  mounted(){
    this.getApi();
    console.log(this.mailArray);
    
  }
}).mount("#app");