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

function upDate (course ) { // course
    return {
        id: course.id,
        name: `Lớp: ${course.name}`,
        coin: `Giá: ${course.coin}`
    };
};

// map duyệt qua và trả về giá trị trong function
var newCourses = courses.map (upDate)

console.log (newCourses);