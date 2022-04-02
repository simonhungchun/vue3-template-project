import http from "./service.conf";

export const getCaptcha = (): Promise<{
  code: number;
  data: { expire: number; img: string };
}> => http.get("/pc/user/captcha");
interface UserInfo {
  id: number;
  account: string;
  open_id?: number;
  real_name: string;
  gender: number;
  avatar_url: string;
  phone: string;
  join_company_at: number;
  admin: number;
  created_at: number;
  subscribed?: unknown;
  access: number[];
}
interface CommunityList {
  community_id: number;
  access_nfc: number;
  access_qrcode: number;
  access_remote: number;
  fitment_pledge: number;
  name: string;
}

interface PostInfo {
  department?: unknown;
  job?: unknown;
  community_list: CommunityList[];
  default_community_id: number;
  wechat_payment: number;
}

interface LoginRes {
  code: number;
  data: {
    token: string;
    userInfo: UserInfo;
    postInfo: PostInfo;
  };
}

export const login = (data: {
  account: string;
  password: string;
  captcha: string;
}): Promise<LoginRes> => http.post("/pc/user/account_login", data);
