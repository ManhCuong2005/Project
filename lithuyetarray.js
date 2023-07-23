var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    },
    {
        id: 2,
        name: 'C',
        coin: 710
    },
    {
        id: 3,
        name: 'Python',
        coin: 2205
    },
    {
        id: 4, 
        name: 'Java',
        coin: 0
    }
];

// tìm kiếm phần tử trong array
var course = courses.find(function(course) {
    return course.name == 'Python';
});
console.log (course)

// duyệt qua phần tử trong mảng 
courses.forEach(function(course, index) {
    console.log (course, index)
});

 /* kiểm tra trong mảng có coin nào bằng 0 không
 nếu có trả về gtri true, else false */
 var isFree = courses.some(function(course) {
    return course.coin == 0;
});
console.log (isFree)

/* kiểm tra trong mảng tất cả coin có bằng 0 không
 nếu có trả về gtri true, else false */
var isFree = courses.every(function(course) {
    return course.coin == 0;
});
console.log (isFree);

// tìm kiếm tất cả phần tử trong array
var course = courses.find(function(course) {
    return course.name == 'Python';
});
console.log (course)


// By: Nguyễn Mạnh Cường