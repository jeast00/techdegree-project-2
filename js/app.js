/*
  Create a program that shows 10 students on a page.  Use 'Unobtrusive JavaScript'
  to append markup for the pagination links.  For example, if there are 23
  students, there should be 3 pagination links created; if there are 38 students,
  there should be 4 pagination links created and so on.
*/

//Construct global variables at the top of the javascript program
const studentList = document.getElementsByClassName('student-item');
//console.log(studentList); test variable to see all list items with console.log()
const listStudentsPerPage = 10;
const pagesPerStudentList = studentList / listStudentsPerPage;

//Create a function to hide the students from the page
function hideStudents() {
  for(let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = "none";
  }
  //return studentList;
}

//Call the hideStudents function to ensure the function is working properly
//hideStudents();

//Add two functions named 'showPage' and 'appendPageLinks'

//First function 'showPage'
//This function should hold two parameters in parenthesis
//For example 'function showPage(pageNumber, studentList)'
//When the function is created, the first thing to do is to hide all of the students
//This is where the 'hideStudents' function will be called
//Then use a 'for' loop to loop through the studentList variable
//Inside the 'for' loop, use an 'if' statement to show students 1-10

function showPage(pageNumber, studentList) {
  //Hide the students first
  hideStudents();
  //loop through the students
  for(let i = 0; i < studentList.length; i++) {
    //Use an 'if' statement to find the index of each student from 1-10 and add
    //the 10 students to the first page
    if(i >= (pageNumber * listStudentsPerPage) - 10 && i < (pageNumber * listStudentsPerPage)) {
        studentList[i].style.display = 'block';
    }
  }
  //return studentList;
}

//call the 'showPage' fucntion
showPage(1, studentList);
