import { getCaptcha, login } from "@/service";
import store from "storejs";
import { message } from "ant-design-vue/es";
import "ant-design-vue/es/message/style/index.less";
import router from "@/router";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useLogin = () => {
  const user = reactive({
    account: "",
    password: "",
    captcha: "",
  });
  const captcha = ref("");
  getCaptcha().then((response) => (captcha.value = response.data.img));
  const loading = ref(false);
  const doLogin = () => {
    loading.value = true;
    login(user)
      .then((res) => {
        console.log(res);
        store.set("token", res.data.token);
        message.info("登录成功!");
        router.push("/layout");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loading.value = false;
      });
  };
  return [user, captcha, loading, doLogin] as const;
};
