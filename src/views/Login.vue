<template>
  <div class="login">
    <svg-icon icon="logo" class="login-logo"></svg-icon>
    <div class="login-desc">做华中地区最具影响力的物业管理平台</div>
    <a-form>
      <a-form-item>
        <a-input placeholder="用户名" v-model:value="formState.account">
          <template #prefix><user-outlined /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input placeholder="密码" v-model:value="formState.password">
          <template #prefix><lock-outlined /></template>
          <template #suffix>
            <eye-invisible-outlined v-if="passwordVisible" />
            <eye-outlined v-else />
          </template>
        </a-input>
      </a-form-item>
      <a-row>
        <a-col :span="14">
          <a-form-item>
            <a-input
              placeholder="验证码"
              v-model:value="formState.captcha"
            ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <img
            class="captcha-image"
            v-show="captchaImage"
            :src="captchaImage"
            alt="图形验证码"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="14">
          <a-form-item>
            <a-checkbox>记住密码</a-checkbox>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <router-link style="float: right; color: #faa250" to="/"
            >忘记密码</router-link
          >
        </a-col>
      </a-row>
      <a-button type="primary" :loading="loading" block @click="login"
        >登录</a-button
      >
    </a-form>
    <div @click="userStore.decrease" class="copyrights">
      <strong>{{ count }}</strong>
      Copyright © 2020-2022 颐和网络科技有限公司版权所有 All rights reserved。
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore, storeToRefs } from "@/store";
// 组合式API （API + 组合）=> hooks (以use开头命名的函数)
import { useLogin } from "@/hooks/useLogin";
const userStore = useUserStore();
// 通过storeToRefs解构state
const { count } = storeToRefs(userStore);
let passwordVisible = ref(false);
// 登录相关逻辑
let [formState, captchaImage, loading, login] = useLogin();
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg.svg");
}
.login-logo {
  display: block;
  margin: auto;
  font-size: 160px;
}
.login-desc {
  font-size: 14px;
  text-align: center;
  color: rgb(0 0 0 / 45%);
}
.ant-form.ant-form-horizontal {
  margin: 20px auto;
  width: 300px;
}
.captcha-image {
  margin-left: 21px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  box-sizing: border-box;
}
.copyrights {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  text-align: center;
  color: #999999;
  line-height: 80px;
}
</style>
