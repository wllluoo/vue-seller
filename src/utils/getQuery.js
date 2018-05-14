export default function (search) {
  const url = search; // 获取url中"?"符后的字串
  const theRequest = new Object();
  if (url.indexOf('?') != -1) {
      const str = url.substr(1);
      if (str.indexOf('&') != -1) {
          const strs = str.split('&');
          for (let i = 0; i < strs.length; i++) {
              theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
          }
      } else {
          theRequest[str.split('=')[0]] = decodeURI(str.split('=')[1]);
      }
  }
  return theRequest;
}
