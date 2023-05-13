/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  console.log(arr.map(student => {
    if(student.marks > 50) {
        return student;
    }
  }));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if(student.marks > 50){
        console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i = 0; i < arr.length; i++){
      if(arr[i].marks < 50){
          arr.splice(i, 1);
      }
    }
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 7, name: "john8", age: "16", marks: 81 },
    { id: 8, name: "jack8", age: "29", marks: 95 },
    { id: 9, name: "karen8", age: "29", marks: 55 },
  ];
  arr.concat(arr2);
}

//`PrintStudentbyMap()`: console.log all students with marks over 50 using the `.map` function.
//`PrintStudentbyForEach()`: console.log all the students who have marks over 50 using the `.forEach` function.
//`addData()`: In this function, create another student object and append it to the array. For example, push this in the array - `{id:4,name:"susan",age:"20",marks:45}` and then console.log it.
//`removeFailedStudent()`: In this function, remove the student who has failed, i.e. with less than 50 marks. console.log the changed array.
//`ConcatenateArray()`: Create another array with 3 student objects similar to the one in the given array but with different ids and all other parameters.