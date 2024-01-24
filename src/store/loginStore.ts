import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export interface IUserDetails {
  _id: string;
  firstName: string;
  lastName: string;
  userEmail: string;
}

export class LoginStore {
  isLogin: boolean = false;
  rootStore: IRootStore;
  userDetails: IUserDetails | null = null;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLogin: observable,
      userDetails: observable,
      login: action,
      getUserToken: computed,
      getUserDetails: computed,
    });
    this.rootStore = rootStore;
  }

  logout() {
    this.isLogin = false;
    this.userDetails = null;
  }

  async login(userName: string, password: string) {
    const response = await axios.post("http://localhost:3005/auth/login", {
      email: userName,
      password: password,
    });
    console.log(response.data.user);
    if (response.data.user._id) {
      this.isLogin = true;
      this.userDetails = response.data.user;
    }
  }

  get getUserToken() {
    return this.isLogin;
  }

  get getUserDetails() {
    return this.userDetails;
  }
}
