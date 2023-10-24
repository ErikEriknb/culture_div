<script setup>
// const queryParams = ref({
//   index: '',
//   country: '',
//   year: '',
//   time: '',
//   text: '',
//   pageNum: 1,
//   pageSize: 100
// })
// const handleClick = name => {
//   activeName.value = name
//   queryParams.value = {
//     index: '',
//     country: '',
//     year: '',
//     time: '',
//     text: '',
//     pageNum: 1,
//     pageSize: 100
//   }
//   queryTableData()
// }
</script>


<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>