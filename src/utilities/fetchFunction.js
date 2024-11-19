async function fetchFunction(routeName,extra={}){
    var apiPath = process.env.REACT_APP_APIPATH + routeName;

    var res = await fetch(apiPath , extra);
    var result = await res.json();
    return result;
}

export default fetchFunction;