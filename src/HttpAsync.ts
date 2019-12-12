import http from 'http';

export default function getAsync(url: URL): Promise<any> {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      response.setEncoding('utf8');

      let output = '';
      response.on('data', data => {
        output += data;
      });

      response.on('end', () => {
        let responseObject = JSON.parse(output);
        resolve(responseObject);
      });

      response.on('error', error => {
        reject(error);
      });
    });
  });
}
