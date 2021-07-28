import axios from 'axios';

export const getJobs = async (data, collection, document) => {
  return new Promise((resolved, reject) => {
    axios
      .post('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
      .then(resp => {
        resolved(resp);
        console.log(resp);
      })
      .catch(e => {
        reject(e);
        console.log(e);
      });
  });
};
