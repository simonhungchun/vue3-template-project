<template>
  <a-layout>
    <a-layout-sider theme="light" style="width: 176px">
      <div class="ant-layout-sider-logo">
        <svg-icon icon="logo" style="font-size: 110px"></svg-icon>
      </div>
      <a-menu mode="inline" :style="{ borderRight: 0 }">
        <a-menu-item v-for="item in menus" :key="item.icon">
          <svg-icon class="menu-icon" :icon="item.icon"></svg-icon>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="height: 48px">
        <div class="tools">
          <div class="tools-item" @click="toggle">
            <fullscreen-exit-outlined v-if="isFullscreen" />
            <FullscreenOutlined v-else />
          </div>
          <div class="tools-item">
            <BellOutlined />
          </div>
          <div class="tools-item">
            <a-avatar
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          </div>
          <div class="tools-item">
            <TranslationOutlined />
          </div>
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <!-- <a-layout-footer>333</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, toggle } = useFullscreen();
const menus = ref([
  { icon: "blank", name: "首页" },
  { icon: "notice", name: "通知管理" },
  { icon: "control", name: "疫情防控" },
  { icon: "renovation", name: "装修登记" },
  { icon: "repair", name: "维修管理" },
  { icon: "complaint", name: "投诉建议" },
  { icon: "vehicle", name: "车辆管理" },
  { icon: "visitor", name: "访客登记" },
  { icon: "archives", name: "房产档案" },
  { icon: "homepage", name: "业主档案" },
  { icon: "baidu", name: "宠物管理" },
  { icon: "questionnaire", name: "问卷调查" },
]);
</script>
<style lang="scss">
.ant-layout {
  height: 100vh;
  background-color: #f6f7fb;
  &-sider {
    width: 100vw;
    &-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 48px;
    }
    .ant-menu {
      color: #999999;
      &-item {
        cursor: pointer;
        user-select: none;
        &::after {
          display: none;
        }
        .menu-icon {
          margin-right: 10px;
        }
        &-active {
          color: #faa251 !important;
        }
        &-selected {
          color: #ffffff !important;
          background: linear-gradient(157deg, #ffb967 0%, #fa8e51 100%);
        }
      }
    }
  }
  &-header {
    height: 48px;
    .tools {
      display: flex;
      align-items: center;
      float: right;
      height: inherit;
      color: #ffffff;
      &-item {
        padding: 0 12px;
        cursor: pointer;
        .ant-avatar {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  &-content {
    padding: 18px;
    box-sizing: border-box;
  }
}
</style>
