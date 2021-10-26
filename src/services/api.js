export const API_URL = 'https://eshopee.com.br/api';
// 'http://192.168.180.10'
// senha.viaconect.com/sicoob/api
export const POST_ITENS = (body, uri, method) => {
  return {
    url: `${API_URL}${uri}`,
    options: {
      method: method,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
      body: body,
    },
  };
};
export const GET_ITENS = (uri) => {
  return {
    url: `${API_URL}${uri}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};
export const GET_CEP = (uri) => {
  return {
    url: `https://viacep.com.br/ws/${uri}/json/`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};
