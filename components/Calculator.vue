<template>
  <div class="calculator">
    <div class="display">{{ current || 0 }}</div>
    <div @click="clear" class="button">Clear</div>
    <div @click="sign" class="button">+/-</div>
    <div @click="percent" class="button">%</div>
    <div class="button operator">/</div>
    <div @click="append('7')" class="button">7</div>
    <div @click="append('8')" class="button">8</div>
    <div @click="append('9')" class="button">9</div>
    <div class="button operator">X</div>
    <div @click="append('4')" class="button">4</div>
    <div @click="append('5')" class="button">5</div>
    <div @click="append('6')" class="button">6</div>
    <div class="button operator">-</div>
    <div @click="append('1')" class="button">1</div>
    <div @click="append('2')" class="button">2</div>
    <div @click="append('3')" class="button">3</div>
    <div class="button operator">+</div>
    <div class="button zero">0</div>
    <div class="button">.</div>
    <div class="button operator">=</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Calculator",
      meta: [
        {
          hid: "Calculator",
          name: "Calculator",
          content: "Calculator"
        }
      ]
    };
  },
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  },
  data() {
    return {
      current: ""
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      this.current = `${this.current}${number}`;
    }
  }
};
</script>
<style scoped>
.calculator {
  margin: 0 auto;
  font-size: 40px;
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50, auto);
}
.display {
  grid-column: 1/5;
  background-color: black;
  color: white;
}
.zero {
  grid-column: 1/3;
}
button {
  cursor: pointer;
}
.button {
  font-size: 40px;
  background-color: white;
  border: 1px solid gray;
}
.button:active {
  transform: scale(0.95);
}
.operator {
  background-color: orange;
  color: white;
}
</style>