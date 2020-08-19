<template>
  <el-table :data="item">
    <el-table-column prop="colNum" label="序号"></el-table-column>
    <el-table-column prop="appName" label="APP名字"></el-table-column>
    <el-table-column prop="appPic" label="APP图标"></el-table-column>
    <el-table-column prop="creator" label="创建人"></el-table-column>
    <el-table-column prop="creatime" label="创建时间"></el-table-column>
    <el-table-column prop="updatetime" label="更新时间"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          colNum: "1",
          appName: "见圳",
          apPic:"",
          creator: "创建人",
          creatime: "2019-09-05",
          updatetime: "2019-09-05"
        }
      ]
    };
  }
};
</script>  
<style lang="stylus"></style>