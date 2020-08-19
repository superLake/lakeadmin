<template>
  <div class="form-box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="APP名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          :headers="headers"
          :action="actionUrl"
          :on-preview="handlePreview"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          :file-list="form.appImg"
          :limit="1"
          list-type="picture"
        >
          <el-button size="small" type="primary">上传图标</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="info" @click="ondeleted">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      //图片上传接口
      actionUrl:this.baseURL+'app/iconupload',
      headers:{
        token:localStorage.getItem('LOGIN')
      },
      form: {
        name: "",   //app名称
        appImg: [], //app logo
      }
    };
  },
  methods: {
    handleSuccess(response){
      console.log('后台返回结果：',response)
      if(response.state===1){
        this.$message({
            message: response.msg,
            type: 'success'
          });
      }else{
        this.$message.error(response.msg);
      }
    },
    handleError(error){
      console.log('error:',error)
      this.$message.error('上传失败！请稍后再试！')
    },
    ondeleted(){
        let tempState=false
        tempState=this.isShow===false?true:false
        this.changeShow(tempState)
    },
    onSubmit() {
      console.log('actionUrl:',this.actionUrl);
      console.log('header:',this.headers);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    ...mapActions(['changeShow'])
  },
  computed:{
      ...mapState(['isShow'])
  },
  mounted(){
    console.log('actionUrl:',this.actionUrl);
  }
  
};
</script>  
<style lang="stylus" scoped>
.form-box
  width: 500px
  background:#fff
  padding:20px
  border :1px solid #ccc
  box-shadow:6px 5px 5px #333333
  border-radius :20px
  position: absolute
  top: 50%
  left : 50%
  transform: translate(-50%, -50%)
  z-index: 2009
  .el-form .el-form-item .el-button
      margin-right:20px
</style>