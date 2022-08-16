import { Schema } from "@xieyuheng/ty"
import { UserSchema } from "../jsons/UserJson"
import { Http } from "../framework/http"

export class Api {
  url = import.meta.env.VITE_API_URL

  get token() {
    return localStorage.getItem("token") || ""
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.token}`,
      Accept: "application/json",
    }
  }

  get user() {
    return {
      get: () =>
        Http.get(`${this.url}/user`, {
          headers: this.headers,
          output: UserSchema,
        }).body(),
    }
  }

  // projects.get()
  // projects(slug).files.get()
  // projects(slug).files(path).get()

  // get projects() {
  //   return Http.resource(this.headers, {
  //     projects: {
  //       get: {
  //         url: `${this.url}/projects`,
  //         output: UserSchema,
  //       },
  //       post: {
  //         url: `${this.url}/projects`,
  //         output: UserSchema,
  //       },
  //       item: (slug) => ({
  //         files: {
  //           get: {
  //             url: `${this.url}/projects/${slug}/files`,
  //             output: UserSchema,
  //           },
  //           post: {
  //             url: `${this.url}/projects/${slug}/files`,
  //             output: UserSchema,
  //           },
  //           item: (path) => ({
  //             get: {
  //               url: `${this.url}/projects/${slug}/files/${path}`,
  //               output: UserSchema,
  //             },
  //             post: {
  //               url: `${this.url}/projects/${slug}/files/${path}`,
  //               output: UserSchema,
  //             },
  //           }),
  //         },
  //       }),
  //     },
  //   })
  // }

  // get projects() {
  //   return Http.resource(this.headers, {
  //     projects: {
  //       get: { output: UserSchema },
  //       post: { output: UserSchema },
  //       item: (slug) => ({
  //         files: {
  //           get: { output: UserSchema },
  //           post: { output: UserSchema },
  //           item: (path) => ({
  //             get: { output: UserSchema },
  //             post: { output: UserSchema },
  //           }),
  //         },
  //       }),
  //     },
  //   })
  // }

  // get projects() {
  //   return {
  //     get: () =>
  //       Http.get(`${this.url}/projects`, {
  //         headers: this.headers,
  //         output: UserSchema,
  //       }).body(),
  //     files: () => ({
  //       get: () =>
  //         Http.get(`${this.url}/projects/`, {
  //           headers: this.headers,
  //           output: UserSchema,
  //         }).body(),
  //     }),
  //   }
  // }
}
