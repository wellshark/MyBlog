export default class Utils {
  static getUniqueId() {
    return `f${(+new Date()).toString(16)}`;
  }
}
