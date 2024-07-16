export type ICategory = {
  name: string;
  description: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};
