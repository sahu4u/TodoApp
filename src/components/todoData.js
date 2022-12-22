// const todoData=[
//     {
//         id:1,
//         text: "Take out the trash",
//         completed: true
//     },
//     {
//         id:2,
//         text: "Groccery Shopping",
//         completed: false
//     },
//     {
//         id:3,
//         text: "Clean The Room",
//         completed: true
//     },
//     {
//         id:4,
//         text: "Studyyyy!!",
//         completed: false
//     },
//     {
//         id:5,
//         text: "Code forces Streak",
//         completed: true
//     }

// ]


    const todoData = JSON.parse(localStorage.getItem("todoComponents")) ?? [];


export default todoData
