<template>

    <div>
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
              
            <div class="shuru">
                <el-select class="Dropdown" v-model="value" placeholder="请选择" clearable filterable @blur="selectBlur" @clear="selectClear" @change="selectChange">
                <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"/>
                </el-select>
             <input id="neirong" type="text" placeholder="请输入内容" autocomplete="off" value maxlength="100" style="color: rgb(125,125,125);">
             <input type="button" value="搜索" class="sousuo">
            </div>  
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
    name: 'HomePage',
    props: {
      msg: String
    },
    data() {
  return {
	value: '',
	options: [
		{value: '文字搜索', label: '文字搜索'},
		{value: '图片搜索', label: '图片搜索'}
 	],
  }
}


  }
  </script>
 
  <style>
.shuru{
  margin:0 auto;
}
#neirong{
  width: 600px;
  height: 40px; 
}
.sousuo{
  width: 40px;
  height: 40px;
}
.Dropdown{
  width: 120px;
}
</style>


 
  
  