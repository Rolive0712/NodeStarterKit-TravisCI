// without promise API
// with this issue comes up if we have more deeper callback functions.
// we eventually have the christmas tree problem with many nested callbacks
const fetchDataWithoutPromise = callback => {
      setTimeout(() => {
        callback('Done!');
      }, 1500);
  };
  
  // setTimeout used for async simulation
  setTimeout(() => {
        console.log('Timer is done!');
        fetchDataWithoutPromise(text => {
           console.log(text);
        });
    }, 2000);

    console.log('Hello!');
    console.log('Hi!');


    // using Promise API, we manage callbacks effectively
const fetchDataWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  // setTimeout used for async simulation
  setTimeout(() => {
    console.log('Timer is done!');
    fetchDataWithPromise()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');
  