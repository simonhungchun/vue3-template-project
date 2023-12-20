import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
export { storeToRefs } from "pinia";
export { useUserStore } from "./modules/user";
export default createPinia().use(piniaPluginPersist);
