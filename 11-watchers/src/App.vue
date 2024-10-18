<script setup>
import { ref, watch, reactive, watchEffect} from 'vue'

const x = ref (0)
const y = ref (0)

// watch (
//   () => x.value + y.value,
//     (sum) => {
//     console.log(`Tong cua x + y la: ${sum}`);
//   }
// );

// watch (  [x, () => y.value +1], ([newX, newY]) => {
//     console.log(`Gia tri cap nhat: ${newX} va ${newY} `);
//   }
// );

// const increnent = () => {
//   x.value ++;
//   y.value ++;
// };

// const question = ref("")
// const isLoading = ref(false)
// const answer = ref("")

// watch(question, async (newQuestion) => {
//   // Kiểm tra xem question có chứa dấu '?' không
//   if (newQuestion.includes('?')) {
//     isLoading.value = true;
//     answer.value = "Đang suy nghĩ...";
//     try {
//       // Gọi API
//       const response = await fetch('https://yesno.wtf/api');
//       answer.value = (await response.json()).answer;
//     } catch (error) {
//       answer.value = "Error! Không thể gọi API.";
//     } finally {
//       isLoading.value = false;
//     }
//   }
// });


const user = reactive ({
  age: 18,
  class: {
    student: 0,
    name: "A",
  }
});


watchEffect(() => {
  console.log(`Gia tri x: ${x.value} va y: ${y.value}`);
});

watchEffect(() => {
  console.log(`User: ${JSON.stringify(user)}`);
});

// watch(user, (newUser, oldUser) => {
//   console.log(`User: ${JSON.stringify(newUser)}, ${JSON.stringify(newUser)}`);
// }, {deep: true});

const changeAge = () => {
  user.class.student++;
};

</script>

<template>
  <div>
    <h1> Watchers</h1>
    
    <button @click="changeAge">Change Age</button>
    <p>{{ user.age }}</p>

    <!-- <button @click=" increnent">Increnent</button>
    <p>{{ x }}, {{ y }}</p> -->

    <!-- <p> Hỏi một câu hỏi có thể trả lời bằng "yes" hoặc "no" </p>
    <input v-model="question" :disabled="isLoading" />
    <p>{{ answer }}</p> -->
  </div>
</template>
