import http from "./service.conf";

export const testApi = () => http.get("abc");
