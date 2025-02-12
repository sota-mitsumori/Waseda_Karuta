function load(path){
    let xhr = new XMLHttpRequest(),
        method = "GET",
        url = path + ".html";
        path = url.slice(0, -5);
        path = path.slice(9,);
    var box=document.getElementById(path);

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let restxt=xhr.responseText;
            box.innerHTML=restxt;
        }
    };
    xhr.send();
}