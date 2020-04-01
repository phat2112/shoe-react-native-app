const getListShoe = state => state['listShoeReducer'].get('listShoe');
const getListShoeId = state =>
  state['listShoeIdReducer'].get('listShoeCategory');
const getIdShoeData = state => state['shoeInformation'].get('idShoeData');
export const ShoeSelectors = {
  getListShoe,
  getListShoeId,
  getIdShoeData,
};
