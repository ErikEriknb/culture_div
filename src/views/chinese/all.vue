<script setup>
import { reactive,onMounted,ref, shallowRef } from 'vue';
import { timeQuantumOptions,countryOptions } from '../../constant';
import {getSearchAttentionByCountryAndTimeQuantum} from '../../api'
import * as echarts from 'echarts'
//定义传递参数
const queryParams = reactive({
    timeQuantum: timeQuantumOptions[0].value,
    country: countryOptions[0].value,
    categories:['来华留学','汉语学习','HSK考试']
})

const queryCountryTime = ()=>{
    getSearchAttentionByCountryAndTimeQuantum(queryParams).then(
        (res) => {
            renderSearchEchart(
                res.data,
                // console.log(res.data)
            )
        }
    )
}

//画echarts图表
const searchAttentionEchart = ref()
const myEchart = shallowRef()
const colors = ["#5d86e5", "#d8463f", "#8cb24b"];
const renderSearchEchart = (data)=>{
    // console.log(data)
    const xAis = []
    // const series = []
    data.forEach((item) => {
    const index = xAis.findIndex(
      (x) => x.year === item.year && x.month === item.month
    );

    if (index === -1) {
        xAis.push({
        year: item.year,
        month: item.month,
      });
    }
  });
  if (myEchart.value) {
    myEchart.value.dispose();
  }
  myEchart.value=echarts.init(searchAttentionEchart.value)
    const option = {
        title: {
            text: 'Stacked Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['Email']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAis.map((x) => `${x.year}年${x.month}月`),
        },
        yAxis: {
            type: 'value'
        },
        // series: [
        //     {
        //     name: 'Email',
        //     type: 'line',
        //     data: series.map((x) => `${x.data}`),
        //     },
        //     // {
        //     // name: '123',
        //     // type: 'line',
        //     // data: series.map((x) => `${x.data}`),
        //     // },
        // ]  
        series: queryParams.categories.map((item, index) => {
            return {
                name: `${item}搜索关注度`,
                color: colors[index],
                type: "line",
                data: data
                .filter((iten) => iten.index === item)
                .map((x) => `${x.data}`),
            };
    }),
    };
    myEchart.value.setOption(option)
    window.addEventListener("resize", () => {
    myEchart.value.resize();
  });
}



onMounted(()=>{
    queryCountryTime()
})

</script>
<template>
    <el-select v-model="queryParams.timeQuantum" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in timeQuantumOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-select v-model="queryParams.country" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in countryOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-button @click="queryCountryTime">搜索</el-button>
  <div class="echart" ref="searchAttentionEchart"></div>
</template>
<style>
.echart{
    width: 100%;
    height: 500px;
}
</style>