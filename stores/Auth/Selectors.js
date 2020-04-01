const getAuthToken = state => state['authLogin'].get('authToken');

export const AuthSelectors = {
  getAuthToken,
};
