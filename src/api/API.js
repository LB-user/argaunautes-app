class Api {
    static getEquipage = (callback) => {
        const requestGet = new XMLHttpRequest();
        requestGet.open("GET", "https://127.0.0.1:8001/user/", true);
        requestGet.addEventListener("readystatechange", function () {
            if (requestGet.readyState === XMLHttpRequest.DONE) {
                if (requestGet.status === 200) {
                    const response = JSON.parse(requestGet.responseText);
                    callback(response);
                } else {
                    alert("Error " + requestGet.status + " !");
                }
            }
        });
        requestGet.send()
    }

    static postEquipage = (name, callback) => {
        const requestPost = new XMLHttpRequest();
        requestPost.open("POST", 'https://127.0.0.1:8001/user/new', true);
        requestPost.setRequestHeader("Content-Type", "application/json");
        requestPost.addEventListener("readystatechange", function () {
            if (requestPost.readyState === XMLHttpRequest.DONE) {
                const response = JSON.parse(requestPost.responseText);
                callback()
            }
        });
        var data = JSON.stringify({"name": name});
        requestPost.send(data);
    }
}

export default Api;