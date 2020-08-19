<template>
  <el-container style="height: 100vh;">
    <transition name="el-fade-in">
        <add-app2 v-show="isShow"></add-app2>
    </transition>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>导航一
          </template>
          <el-menu-item index="/main/applist">APP列表</el-menu-item>
          <el-menu-item @click="showBox">添加APP</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Lake</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// import AddApp from './AddApp'
import AddApp2 from './AddApp2'
import { mapState, mapActions } from 'vuex'
export default {
    components:{
        // AddApp,
        AddApp2,
    },
    data() {
      return {}
    },
    computed:{
        ...mapState(['isShow'])
    },
    methods: {
      showBox(){
          console.log(this.isShow)
          let tempState=false
          tempState=(this.isShow===false?true:false)
          console.log(tempState)
          this.changeShow(tempState)
      },
      ...mapActions(['changeShow'])
    }
};
</script>
<style lang="stylus" scoped>
.el-header
  background-color: $theme
  color: #333
  line-height: 60px
  i, span
    color: #fff
.el-aside
  color: #333

</style>