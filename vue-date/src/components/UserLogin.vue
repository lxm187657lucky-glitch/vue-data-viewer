<template>
  <div>
    <input type="file" @change="onFileChange" accept=".csv" />
    <div v-if="parsedData">
      <table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in parsedData" :key="index">
            <td v-for="(value, key) in row" :key="key">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// 如果在项目中通过npm安装，可以这样引入
import Papa from "papaparse";

export default {
  data() {
    return {
      parsedData: null,
      headers: [],
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      // 使用FileReader读取文件
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        // 使用PapaParse解析CSV内容
        Papa.parse(content, {
          header: true, // 将第一行作为header，这样每行会是一个对象
          dynamicTyping: true, // 自动转换数据类型，比如字符串数字转为数字
          skipEmptyLines: true, // 跳过空行
          complete: (results) => {
            // 解析完成后的回调
            // results.data 是解析后的数据数组（每个元素是一个对象，键为第一行）
            this.parsedData = results.data;
            // 获取表头（即第一行）
            this.headers = results.meta.fields;
            // 如果解析过程中有错误，可以检查results.errors
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      };
      reader.readAsText(file);
    },
  },
};
</script>
<style lang="less">
.login_box {
  background-image: url(../assets/images/login3.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
}

.login_form {
  margin-top: 5%;
  width: 40%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login_box .el-form-item__label {
  color: white;
}
</style>
