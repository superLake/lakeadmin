<template>
  <el-popover placement="right" width="500" trigger="click">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="APP名称">
        <el-input v-model="form.appName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
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
      </el-form-item>
    </el-form>
    <el-menu-item slot="reference">添加APP</el-menu-item>
  </el-popover>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        appImg: []
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>