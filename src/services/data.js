const AbortController = window.AbortController;
const controller = new AbortController();
const signal = controller.signal;

class Data {
  get(url) {
    return fetch(url, { signal: signal }).then(function(response) {
      return {
        promise: response.json(),
        link: response.headers.get("link")
      };
    });
  }

  abort() {
    controller.abort();
  }
}

export default new Data();
