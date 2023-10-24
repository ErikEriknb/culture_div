<script setup>
///1234
</script>



<template>
    <el-container>
        <el-header>header</el-header>
        <el-container>
            <el-aside>
                <el-menu  router >
                    <el-menu-item index="/admin/import">数据管理</el-menu-item>
                    <el-menu-item index="/admin/account">账号管理</el-menu-item
                    >
                </el-menu>
            </el-aside>
            <el-main><RouterView/></el-main>
        </el-container>
    </el-container>
</template>