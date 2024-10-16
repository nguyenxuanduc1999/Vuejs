<script setup>

import { ref, reactive } from 'vue'

const isLoggedIn = ref(true);

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
}

const isVisible = ref(true)
const toggleShow = () => {
  isVisible.value = !isVisible.value ;
}

const userStatus = ref('online')

const changeStatus = () => {
  if (userStatus.value === 'online'){
    userStatus.value = 'away'
  } else if (userStatus.value === 'away'){
    userStatus.value = 'busy'
  } else if (userStatus.value === 'busy'){
    userStatus.value = 'online'
  }
}

</script>

<template>
  <div>
    <h1 v-if="isLoggedIn">Chào Mừng người dùng đã đăng nhập</h1>
    <h1 v-else>Chào Mừng khách</h1>
    <button @click="toggleLogin">{{ isLoggedIn ? 'Logout' : 'Login' }}</button>
    <br />
    <h1 v-if="userStatus === 'online'">Người dùng đang Online</h1>
    <h1 v-else-if="userStatus ===  'away'">Người dùng đang vắng mặt</h1>
    <h1 v-else-if="userStatus === 'busy'">Người dùng đang bận</h1>
    <h1 v-else>Không rõ trạng thái</h1>
    <button @click="changeStatus">Thay đổi trạng thái người dùng</button>
    <br />
    <h1 v-show="isVisible">Nội dung này ẩn hoặc hiễn thị</h1>
    <button @click="toggleShow">{{ isVisible ? 'An':'Hien' }}</button>

  </div> 

</template>