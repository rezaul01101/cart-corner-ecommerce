
import { authKey } from "../constants/storageKey";
import { setToLocalStorage } from "../utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

