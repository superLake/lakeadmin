<template>
  <el-container style="height:100vh">
    <el-header>APP外链管理后台</el-header>
    <el-main>
      <div class="login-form">
        <h3>Login</h3>
        <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="username"></el-input>
        <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-input class="scode" prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="scode">
          <template slot="append">
            <img :src="imageUrl" @click="getScode()" />
          </template>
        </el-input>

        <el-button type="primary" @click="Login()">登录</el-button>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import { setTimeout } from 'timers';
// import axios from "axios";
//自定义axios实例
// const $http=axios.create({
//   baseURL:'http://localhost:32971/user',
//   headers:{
//     'Content-Type':''
//   }
// })
export default {
  data() {
    return {
      username: "",    //用户名
      password: "",    //密码
      scode: "",       //验证码
      imageUrl: ""     //验证码图片
    };
  },
  methods: {
    Login() {
      if (this.username === "" || this.password === "") {
        this.$message.error("用户名或密码不能为空");
      } else {
        this.$http.post('/user/login',{
          username:this.username,
          password:this.password,
          scode:this.scode
        }).then(response => {
          // console.log(response.headers.token);
          const data = response.data;
          if (response.data.status === 1) {
            //登录成功
            //后端获取的token
            // localStorage.setItem('LOGIN',response.headers.token)
            this.$message({
              message: data.msg,
              type: "success"
            });
            setTimeout(()=>{
              this.$router.push('/main')
            },2000)
          } else if (data.status === 10) {
            //验证码错误
            this.$message.error(data.msg);
            this.getScode();
          } else {
            //账号或密码错误
            this.$message.error(data.msg);
            this.getScode();
          }
        }).catch(error=>{
          console.log(error)
        });
      }
    },
    getScode() {
      this.imageUrl ="http://localhost:8088/user/getscode?randomCode=" + Math.random();
      // const _this=this
      // this.$http.get('/getscode',{
      //   params: {
      //     randomCode: Math.random()
      //   }
      // }).then((response)=>{
      //   console.log(response.data)
      //   _this.imageUrl=response
      // })
    }
  },
  mounted() {
    this.getScode();
  }
};
</script>
<style lang="stylus" scoped>
// @import url('../assets/style/valible.styl');
// @import '~style/valible.styl' 
.el-header,
.el-footer
  background-color: $theme
  color: #fff
  font-size: 20px
  font-weight: bolder
  line-height: 60px
body > .el-container
  margin-bottom: 40px
.el-main
  background-color: #e9eef3
  color: #333
  position: relative
.login-form
  width: 300px
  position: absolute
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)
  .el-button
    width: 100%
  h3
    float: left
    font-size: 35px
    margin-bottom: 20px
    padding: 10px 0
    border-bottom: 6px solid $theme
  .el-input
    margin-bottom: 10px
    .el-input-group__append
    img
      width: 100%
      height: 100%
      position: absolute
      top: 0
</style>
<style>
  .el-input-group__append{
    width: 100px;
    padding: 0
  }
</style>