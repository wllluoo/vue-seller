
import fetch from 'isomorphic-fetch';
import config from './config';
import { queryToUrl } from '@/utils';

const headers = {
  'Content-Type': 'application/json',
};
const baseUrl = config.urlBase;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
function parseJSON(response) {
  return response.json()
}
const action = ({ url, method = 'GET', data, Authorization, completeUrl, success }) => {
  if (!method || (!url && !completeUrl)) throw new TypeError('请传入正确的method与url')
  let queryUrl = url || completeUrl;
  if (method === 'GET') {
    queryUrl = queryToUrl(url || completeUrl, data);
  }
  if (queryUrl.includes('undefined') || queryUrl.includes('null')) {
    throw new TypeError('请`传入正确的query');
  }
  if (Authorization) {
    headers.Authorization = Authorization;
  }
  const apiUrl = completeUrl ? queryUrl : baseUrl + queryUrl;

  return fetch(
    apiUrl,
    {
      headers,
      method,
      body: JSON.stringify(data)
    }
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      if (success) success(response)
    })
}

export default action
