<script setup>
  import { onMounted, ref } from "vue";
  const input1 = ref(null);
  const input2 = ref(null);
  const result = ref(0);

  function add() {
    result.value = input1.value + input2.value;
  }

  function sub() {
    result.value = input1.value - input2.value;
  }
  function mul() {
    result.value = input1.value * input2.value;
  }
  function div() {
    result.value = input1.value / input2.value;
  }
</script>

<template>
  <main>
    <div class="simple-calculator">
      <h1>Simple Calculator</h1>
      <div class="input-fields">
        <div class="input-group">
          <label for="num1">Number 1:</label>
          <input type="number" id="num1" v-model="input1">
        </div>
        <div class="input-group">
          <label for="num2">Number 2:</label>
          <input type="number" id="num2" v-model="input2">
        </div>
      </div>
      <div class="buttons">
        <button @click="add">&plus;</button>
        <button @click="sub">&minus;</button>
        <button @click="mul">&times;</button>
        <button @click="div">&div;</button>
      </div>
      <div class="result">
        <p>Result: </p>
        <h2>{{ result }}</h2>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .simple-calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .input-fields {
    display: flex;
    gap: 2rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 2.4rem;
    font-size: 1rem;
    border-radius: 8px;
    outline: none;
    border: 2px solid gray;
    color: white;
    background: rgba(0, 0, 0, 0.1);
    padding: 4px 10px;
  }

  input:focus {
    border: 2px solid #327959;
    transition: all 500ms ease;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background: transparent;
    color: white;
    font-size: 2rem;
  }
  .result {
    text-align: center;
  }
</style>
