import 'whatwg-fetch';
class HttpService {
    getProducts= () => { //its a synchronous request according to following numbers
        //1 
        var promise = new Promise((resolve,reject) => {
            //2
        fetch('http://localhost:3004/product')
        .then(response => {
            resolve(response.json());
        })
    });
//3
    return promise;
    }
}
export default HttpService;