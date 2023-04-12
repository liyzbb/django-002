<template>
  <div class="list">
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
              <div class="table">
  <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
   <el-table-column prop="Briefcontent" label="简要内容" width="180">
   </el-table-column>
   <el-table-column prop="date" label="日期" width="180">
   </el-table-column>
   <el-table-column prop="author" label="作者">
   </el-table-column>
   <el-table-column prop="source" label="来源">
   </el-table-column>
  </el-table>
 </div>   
            </el-container>
          </el-main>

        </el-container>
        <el-footer> 
      <!-- 分页器 -->
  <div class="block" style="margin-top:15px;">
   <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10,20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
   </el-pagination>
  </div>
          </el-footer>
      </el-container>
    </div>
  </div>

</template>
<style >
div{
  display: block;
 
}
.table{
  width: 100%;
}
*{
  padding: 0;
    margin: 0;
}
.pages {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    display: inline-block;
}
.pages :hover{
  color: #fff;
    background-color: #4b9ced;
}
.pages a{
  padding: 3px 8px;
  border: 1px solid #d2d2d2;
  text-decoration: none;
  color:#444;
}
.pages a.invisible{
  visibility: hidden;
}
.pages a.on{
  color: #fff;
  border-color: #d36969;
  background: #d36969;
}
.icon{
  width: 10px;
  height: 10px;
}
</style>
<script>
import { create } from 'domain';
import axios from 'axios';
export default {
 data() {
  return {
   tableData: [
  //   {
  //   Briefcontent: "青霉素V钾的有机半合成及其抑菌效果表征——推荐一个化学生物学综合实验",
  //   date: "2023-03-20",
  //    author: "王一鸣",
  //    source:"rfwf",
  //    download: ""
  //   },
  //   {
  //   Briefcontent: "青霉素与α-酪蛋白结合作用机制的光谱法研究",
  //   date: "2023-03-20",
  //    author: "王小二",
  //    source:"rfwf",
  //    download:"11"
  //   },
  //   {
  //   Briefcontent: "止咳糖浆1",
  //   date: "2023-03-20",
  //    author: "董楠裕",
  //    source:"rfwf",
  //    download:"11"
  //   },
  //  {
  //   Briefcontent: "止咳糖浆2",
  //   date: "2023-03-20",
  //    author: "董大师",
  //    source:"rfwf",
  //    download:"11"
  //   },
  //   {
  //   Briefcontent: "肾上腺素1",
  //   date: "2023-03-20",
  //    author: "夹克",
  //    source:"rfwf",
  //    download:"11"
  //   },
  //   {
  //   Briefcontent: "肾上腺素2",
  //   date: "2023-03-20",
  //    author: "杰克",
  //    source:"rfwf",
  //    download:"11"
  //   },
  //   {
  //   Briefcontent: "头孢1",
  //   date: "2023-03-20",
  //    author: "凯迪",
  //    source:"rfwf",
  //    download:"11"
  //   },
  //   {
  //   Briefcontent: "头孢2",
  //   date: "2023-03-20",
  //    author: "奥金锭",
  //    source:"rfwf",
  //    download:"11"
  //   }
    ],
  
   currentPage: 1, // 当前页码
   total: 20, // 总条数
   pageSize: 5 // 每页的数据条数
  };
 },
 methods: {
  handleSizeChange(val) {
   console.log(`每页 ${val} 条`);
   this.currentPage = 1;
   this.pageSize = val;
  },
 initData(){
  this.tableData=
  this.axios.get('http://localhost:3000/api/user/query').then((response) => {
            console.log(response)
            console.log('--------')
  })
 },
  handleCurrentChange(val) {
   console.log(`当前页: ${val}`);
   this.currentPage = val;
  }
 };
 created(){
  this.initData();
 }
};
</script>


