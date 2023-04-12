<template>
    <div class="details">
      <el-container>
        <el-header>医学文献智能识别检索系统</el-header>
        <el-container>
          <el-aside width="200px"><nav>
              <router-link to="/">首页</router-link> <br>
              <router-link to="/list">列表页</router-link> <br>
              <router-link to="/details">详情页</router-link>
            </nav>
          </el-aside>
          <el-main>
            <el-container>
  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="10" :on-exceed="handleExceed" :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
 </el-container>
          </el-main>

        </el-container>
        <el-footer> 
         
          </el-footer>
      </el-container>    
    </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [{name: '1', url: 'https://www.51wendang.com/pic/d1ad8cf5a074899dec641af4/11-810-jpg_6-1080-0-0-1080.jpg'}, {name: '2', url: 'https://www.mianfeiwendang.com/pic/c20582e7221be96b54efa2e3/1-1960-png_6_0_0_0_0_844_1153_844.92_1153.08-1436-0-0-1436.jpg'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>