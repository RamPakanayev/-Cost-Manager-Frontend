const LocalStorage = {
  async setItem(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  },
  async getItem(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  async removeItem(key) {
    return window.localStorage.removeItem(key);
  },
  async getAllItems() {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items[key] = JSON.parse(localStorage.getItem(key));
    }
    return items;
  },
  async clear() {
    return window.localStorage.clear();
  },
};

export default LocalStorage;
