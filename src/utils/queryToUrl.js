import getQuery from './getQuery';

export default function (url, query) {
  let _url = url;
  let _query = query;
  if (url.indexOf('?') != -1) {
    const perQuery = getQuery(url.substr(url.indexOf('?')));
    _url = url.substr(0, url.indexOf('?'));
    _query = Object.assign({}, perQuery, query);
  }

  if (_query) {
    let keys = [];
    _url = `${_url}?`;
    try {
      keys = Object.keys(_query);
    } catch (e) {
      console.log(e);
    }
    keys.forEach((key) => {
      if (_query[key] === 0 || !!_query[key] || _query[key] == false) {
        if (_query[key] instanceof Array && !_query[key].length) {
          return;
        }
        _url = `${_url}${key}=${_query[key]}&`;
      }
    });
    _url = _url.slice(0, -1);
  }
  return _url;
}
