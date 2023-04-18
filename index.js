const showOne = document.getElementById("targetOne").innerHTML = " Hello Summer"
console.log("this is ",showOne)

//section2
//an aray of object
const originalArray = [
{id:1, name:'John', age:8, desc: "Grade2"},
{id:2, name:'Kate', age:7, desc: "Grade1"},
{id:3, name:'Henry', age:5, desc: "GradeK"},
{id:4, name:'Harry', age:9, desc: "Grade3"},
{id:5, name:'Tom', age:10, desc: "Grade4"},

]

// we want to make a new array
// when we made map is a method we need to put ()

const showTwo = document.getElementById("targetTwo")
const showArray = document.getElementById("names");
const newArray = originalArray.map((person)=>{
    const li = document.createElement("li");
    const keys = Object.keys(person);
    keys.map((key)=>{
        const span = document.createElement("span");
        span.textContent = `${key}: ${person[key]}`;
        li.appendChild(span);
    });
showArray.appendChild(li);

});

// showTwo.innerHTML = newArray
console.log(newArray)




