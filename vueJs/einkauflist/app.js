const app = Vue.createApp({
    data() {
      return { 
        enterList: '',
        goals: []
       };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enterList);
      },
      removeGoal(idx) {
        this.goals.splice(idx, 1);
      }
    }
  });
  
  app.mount('#list');