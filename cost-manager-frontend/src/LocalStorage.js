import moment from "moment";
const LOCAL_STORAGE_KEY = "cost_items";

export default class LocalStorageLibrary {
  static async addCostItem(costItem) {
    try {
      let costItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      costItems.push(costItem);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(costItems));
    } catch (error) {
      throw error;
    }
  }

  static async getCostItems() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    } catch (error) {
      throw error;
    }
  }

  static async getReport(month, year) {
    try {
      const costItems = await this.getCostItems();
      const filteredItems = costItems.filter((item) => {
        const itemDate = moment(item.date);
        return itemDate.month() === month - 1 && itemDate.year() === year;
      });
      return filteredItems;
    } catch (error) {
      throw error;
    }
  }
}
