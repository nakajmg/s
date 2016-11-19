new Vue({
  store,
  el: '#app',
  template: `
    <div>
      <display></display>
      <counter></counter>
    </div>
  `,
  components: {
    display: {
      template: `
        <div>count = {{count}}</div>
      `,
      computed: Vuex.mapGetters(['count'])
    },
    counter: {
      template: `<div>
        <button @click="decrement">decrement</button>
        <button @click="increment">increment</button>
      </div>
      `,
      methods: Vuex.mapActions(['increment', 'decrement'])
    }
  }
})
