function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/dongcheon1020/H-M-page/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `http://my-json-server.typicode.com/dongcheon1020/H-M-page/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({
      type: "GET_SINGLE_PRODUCT_SUCCESS",
      payload: { data },
    });
  };
}

export const productAction = { getProductDetail, getProducts };
