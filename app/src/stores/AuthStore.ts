import { defineStore } from 'pinia';
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  User,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { LocalStorage } from 'quasar';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loggedIn: false,
  }),

  getters: {},

  actions: {
    async createUser(fullname: string, email: string, password: string): Promise<string> {
      return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(
          getAuth(),
          email,
          password,
        ).then((userCredential: UserCredential) => {
          updateProfile(userCredential.user, {
            displayName: fullname,
          });
          resolve('');
        }).catch((error) => {
          reject(error.code);
        });
      });
    },
    async logIn(email: string, password: string): Promise<string> {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(
          getAuth(),
          email,
          password,
        )
          .then((userCredential: UserCredential) => {
            this.loggedIn = true;
            this.user = userCredential.user;
            LocalStorage.set('user_token', userCredential.user.getIdToken);
            resolve('');
          })
          .catch((error) => {
            reject(error.code);
          });
      });
    },
    async logOut() {
      signOut(getAuth());
      LocalStorage.remove('user_token');
      this.loggedIn = false;
      this.user = null;
    },
  },
});
