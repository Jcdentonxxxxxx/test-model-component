<script setup>
import { ref, reactive, nextTick, computed  } from "vue";
defineProps({
  msg: {
    type: String,
    required: true
  }
})

const msgString = ref('class');
const msgHtml = ref('<span style="color: red;">HTML</span>');

const objectOfAttributes = {
  id: 'idhtml',
  class: 'classHTML'
}

const obj = reactive({
  nested: {count: 0},
  arr: ['foo', 'bar']
});

function hello() {
  return 'hello';
}

const object = { foo: ref(1) }
const { foo } = object;

//=================
const state = reactive({count: 0});
function increment() {
  obj.nested.count++;
  nextTick(() => {
    // access updated DOM
    console.log('Dom update');
  })
}

// ================
const author = ref({
  name: 'John Doe',
  books: {
    allBooks: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
  }
});

const hasBooks = computed( () => {
  console.log(author.value.books);
  return author.value.books.allBooks.length > 0 ? 'Yes' : 'No';
})

function deleteBook(event) {
  console.log(event.target.tagName);
  author.value.books.allBooks.pop();
}

function addBook() {
  author.value.books.allBooks.push('Vue 2 - Advanced Guide');
}
// =================
const classObject = reactive({
  active: true,
  'text-danger': true
});

const isActive = ref(true);
const error = ref(null);


const classObjectComputed = computed( () => {
  return {
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
  }
} );
// ============== v-for
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <p>{{ msgString }}</p>
    <p v-html="msgHtml"></p>
    <p v-bind:="objectOfAttributes">idhtml</p>
    <p :data-color-attribute="msgString.length < 4 ? `length=${msgString.length}` : 'cool'">idhtml</p>
    <p v-bind:class="hello()" v-bind:="objectOfAttributes">{{ hello() }}</p>
    <p :[msgString]="hello()">Dinamic directive</p>
    <hr>
    <div class="row">
      <p v-bind:="objectOfAttributes">{{ obj.nested.count }}</p>
      <button class="button" @click="increment">Count</button>
    </div>
    <p>{{ foo  + 1}}</p>
    <hr>
    <p>Books length: <span v-bind:="objectOfAttributes">{{ author.books.allBooks.length }}</span></p>
    <p>Has published books:
      <span v-bind:="objectOfAttributes">{{ hasBooks }}</span>
    </p>
    <div class="row">
      <button class="button" @click="deleteBook">Delete one book</button>
      <button class="button" @click="addBook">Add one book</button>
    </div>
    <hr>
    <p :class="classObject">Classes</p>
    <p :class="classObjectComputed">Classes</p>
    <hr>
    <p v-for="(book, index) in author.books.allBooks">
      Книга №: {{index}} - {{book}}
    </p>

    <p v-for="(value, key, index) in myObject">
      {{ index }}: {{ key }} - {{ value }}
    </p>
    <ul v-for="numbers in sets">
      <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>
  </div>

</template>

<style scoped>
.active {
  font-size: 20px;
  font-style: italic;
  text-decoration: line-through;
}
.active.text-danger {
  font-size: 20px;
  font-style: italic;
  color: crimson;
  font-weight: 600;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
}

.button {
  min-width: 100px;
  border: none;
  box-shadow: 0 0 2px #000;
  color: #fff;
  background-color: blueviolet;
  cursor: pointer;
  padding: 20px;
}
.hello {
  background-color:rgb(232, 248, 222);
  padding: 5px;
}

#idhtml {
  color: blueviolet;
  font-size: 25px;
}

.classHTML {
  font-weight: 900;
  font-style: italic;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
