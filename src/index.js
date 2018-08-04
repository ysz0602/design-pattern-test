function loadImg(src){
    let promise = new Promise((resolve,reject) => {
        let img = document.createElement('img');
        img.onload = () => resolve(img);
        img.onerror = () => reject('图片加载失败');
        img.src = src;
    });
    return promise;
}

let src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533365673939&di=b2255d7816f03137f0a0dffc96563b91&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2934349b033b5bb5c54a2ac53dd3d539b600bc6f.jpg';
let result = loadImg(src);
result.then((img) => {
    alert(`width:${img.width}`);
    return img;
}).then((img) => {
    alert(`height: ${img.height}`)
}).catch((ex) => {
    alert(ex);
})