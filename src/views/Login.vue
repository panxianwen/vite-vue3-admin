<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">Log-Admin</div>
        </div>
      </div>
      <el-form
        label-position="top"
        :rules="rules"
        :model="ruleForm"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model.trim="ruleForm.username"
            autocomplete="off"
            placeholder="用户名"
            @keyup.enter="submitForm"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model.trim="ruleForm.password"
            autocomplete="off"
            placeholder="密码"
            @keyup.enter="submitForm"
          />
        </el-form-item>
        <el-form-item class="login-bottom">
          <el-button style="width: 100%" type="primary" @click="submitForm">登录</el-button>
          <!-- <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue'
  import { ElMessage } from 'element-plus'
  import { localSet } from '../utils/common'

  export default defineComponent({
    name: 'Login',
    setup() {
      const loginForm = ref()
      const state = reactive({
        ruleForm: {
          username: '',
          password: ''
        },
        checked: false,
        rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      })
      const submitForm = async () => {
        loginForm.value.validate((res: boolean) => {
          if (res) {
            console.log(res)
            if (state.ruleForm.username === 'admin' && state.ruleForm.password === '123456') {
              const res = `lx@${state.ruleForm.username}`
              localSet('token', res)
              window.location.href = '/'
            } else {
              ElMessage.error('用户名或密码错误')
            }
          } else {
            console.log('error')
            return false
          }
        })
      }
      const resetForm = () => {
        loginForm.value.resetFields()
      }
      return {
        ...toRefs(state),
        loginForm,
        submitForm,
        resetForm
      }
    }
  })
</script>
<style scoped>
  .login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f2f2f2;
    height: 100vh;
  }
  .login-container {
    width: 420px;
    height: 400px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
  }
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
  }
  .head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .head .title {
    font-size: 28px;
    color: #1baeae;
    font-weight: bold;
  }
  .head .tips {
    font-size: 12px;
    color: #999;
  }
  .login-form {
    width: 70%;
    margin: 0 auto;
  }
  .login-bottom {
    margin-top: 30px;
  }
</style>
<style>
  .el-form--label-top .el-form-item__label {
    padding: 0;
  }
  .login-form .el-form-item {
    margin-bottom: 12px;
  }
</style>
