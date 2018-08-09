/*
  Create a program that shows 10 students on a page.  Use 'Unobtrusive JavaScript'
  to append markup for the pagination links.  For example, if there are 23
  students, there should be 3 pagination links created; if there are 38 students,
  there should be 4 pagination links created and so on.
*/


//Create a function to hide the list of students from the website
//Use a studentList parameter to get the student list
function hideStudentList(studentList)
{
  //Use the parameter variable to hold the student list
  studentList = document.getElementsByClassName('student-item');

  //Use a 'for' loop to loop through the students, and hide the students from
  //the site
  for (var i = 0; i < studentList.length; i++)
  {
    studentList[i].style.display = "none"; //Hide each student
  }
}

/*
Create a function to show 10 students on a page at a time.  The function
will pass two parameters - pageNumber and StudentList.  The function will
need to pass the pageNumber when a page link is clicked showing the correct
students on the page.  I.E.(if page link 2 is clicked, students 11-20 will
be shown on the page.)
*/
function showPage(pageNumber, studentList)
{
  //Call the 'hideStudentList' function to first hide the students from the page
  hideStudentList();

  //Use the parameter variable to hold the student list
  studentList = document.getElementsByClassName('student-item');

  //Use a 'for' loop to loop through the students
  for (var i = 0; i < studentList.length; i++)
  {
    //Use an 'if' statement if the student should be on 'pageNumber'
    if(i >= (pageNumber * 10) - 10 && i < (pageNumber * 10))
    {
      studentList[i].style.display = "block"; //display the student(s)
    }
  }
}

//Call the 'showPage' function and show the first page of students
showPage(1);


/*
  Create a function that dynamically appends the page links to the site.
  When the page links have been appended to the site, create an event handler
  when a link has been clicked (according to the page link number), the students
  will show on the page.  I.E.(if page link 3 is clicked, students 21-30 should
  show on the page). The fucntion will pass one parameter - studentList
*/
function appendPageLinks(StudentList)
{
  //Use the parameter variable to hold the student list
  studentList = document.getElementsByClassName('student-item');

  //Create a variable to hold the number of pages for the site
  //Round up the variable to the top number, i.e.(if number is 4.4, round up to 5).
  let totalPages = Math.ceil(studentList.length / 10);
  //console.log(totalPages); Shows 6

  //Create and append the pagination class to the html file
  const newPaginationDiv = document.createElement('div');
  newPaginationDiv.className = "pagination";
  const pageClass = document.getElementsByClassName('page')[0];
  pageClass.appendChild(newPaginationDiv);

  //Create and append an unordered list to the pagination class in the html file
  const newPaginationUnorderedList = document.createElement('ul');
  newPaginationDiv.appendChild(newPaginationUnorderedList);

  //Use a 'for' loop to create and append list and anchor elements to the
  //unordered list element in the html file
  for(let i = 0; i < totalPages; i ++)
  {
    let newPaginationList = document.createElement('li');
    newPaginationUnorderedList.appendChild(newPaginationList);
    let newPaginationAnchor = document.createElement('a');
    newPaginationAnchor.href = "#";
    newPaginationAnchor.textContent = i+1;
    newPaginationList.appendChild(newPaginationAnchor);
  }

  //Set the first page link as 'active'
  let firstPaginationAnchor = document.getElementsByTagName('a')[0];
  firstPaginationAnchor.className = "active";

  //Create a variable to hold the anchor list
  let pageLinks = document.getElementsByTagName('ul')[1];
  console.log(pageLinks);

  //Create an event handler for the links when 'clicked'
  pageLinks.addEventListener('click', (event) =>
  {
    
  });


}

//Call the 'appendPageLinks' function
appendPageLinks();
