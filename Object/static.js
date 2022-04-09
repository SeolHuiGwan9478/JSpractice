class Math{
    static PI = 3.14;

    static getCircleArea(radius){
        return Math.PI * radius * radius;
    }
}

console.log(Math.PI);
console.log(Math.getCircleArea(6));

Math.PI = 3.141592;
Math.getRectangleArea = function(width, height){
    return width * height;
}

console.log(Math.PI);
console.log(Math.getRectangleArea(6, 4));

console.log(Date.now()); //static 메소드의 예시