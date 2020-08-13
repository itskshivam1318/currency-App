import { AsyncStorage } from "react-native";
export default new (class Storage {
  async setTodo(key, data) {
    console.log("saving Storage key", key, "data", data);
    try {
      await AsyncStorage.setItem(key, data);
      return Promise.resolve("saved");
    } catch (err) {
      return Promise.reject(err);
      console.log(err);
    }
  }

  async getTodo(key) {
    try {
      let data = await AsyncStorage.getItem(key);
      Promise.resolve(data);
    } catch (err) {
      Promise.reject(err);
    }
  }
})();
