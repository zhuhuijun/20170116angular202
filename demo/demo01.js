/**
 * Created by Administrator on 2017/2/6.
 */
alert('hello world in TypeScript!');
function area(shape, width, height) {
    var area = width * height;
    return "i am a " + shape + "width an area of " + area + " cm suared.";
}
document.body.innerHTML = area("rectangle", 30, 50);
