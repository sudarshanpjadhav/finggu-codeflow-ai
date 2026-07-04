export const fingguHelpers = {
  formatDate: (date) => {
    return new Date(date).toLocaleDateString();
  },
  generateUniqueId: () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
};