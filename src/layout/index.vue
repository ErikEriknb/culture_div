<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 默认选中的菜单
const activeMenu = ref()

const route = useRoute()
// 监听路由变化
watch(
  //相当于index的路径
  () => route.path,
  path => {
    // 更新选中的菜单
    activeMenu.value = path
    // localStorage.setItem('activeMenu', path)
  }
)
</script>


<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <el-button link @click="$router.push('/admin')">数据查询</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
          :default-active="activeMenu" router 
      >
        <el-sub-menu index="/chinese">
          <template #title>
            <el-icon><location /></el-icon>
            <span>汉语传播</span>
          </template>
          <el-menu-item index="/chinese/all">全部</el-menu-item>
          <el-menu-item index="/chinese/study">汉语学习</el-menu-item>
          <el-menu-item index="/chinese/hsk">HSK考试</el-menu-item>
          <el-menu-item index="/chinese/china">来华留学</el-menu-item>
        </el-sub-menu>
        <!-- <el-sub-menu index="/culture">
          <template #title>
            <el-icon><location /></el-icon>
            <span>文化传播</span>
          </template>
          <el-menu-item index="/culture/all">全部</el-menu-item>
          <el-menu-item index="/culture/politics">政治</el-menu-item>
          <el-menu-item index="/culture/economy">经济</el-menu-item>
          <el-menu-item index="/culture/technology">科技</el-menu-item>
          <el-menu-item index="/culture/society">社会</el-menu-item>
          <el-menu-item index="/culture/amusement">娱乐</el-menu-item>
          <el-menu-item index="/culture/life">生活</el-menu-item>
          <el-menu-item index="/culture/military">军事</el-menu-item>
          <el-menu-item index="/culture/health">健康</el-menu-item>
          <el-menu-item index="/culture/education">教育</el-menu-item>
        </el-sub-menu> -->
      </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
</style>