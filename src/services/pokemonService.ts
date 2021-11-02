import http from "./http-common";

const randomSearch = (random: any) => {
  return http.get(`/${random}`);
};

export { randomSearch };
