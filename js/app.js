/*
  Create a program that shows 10 students on a page.  Use 'Unobtrusive JavaScript'
  to append markup for the pagination links.  For example, if there are 23
  students, there should be 3 pagination links created; if there are 38 students,
  there should be 4 pagination links created and so on.
*/

//---------------------------------------------------------------------------//

//Create a variable that will pass the student list through the functions
let studentListArray = document.getElementsByClassName('student-item');


//Create a function to hide the list of students from the website
//Use a studentList parameter to get the student list
function hideStudentList(studentList)
{
  //Use the parameter variable to hold the student list
  //studentList = document.getElementsByClassName('student-item');

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
  hideStudentList(studentList);

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


/*
  Create a function that dynamically appends the page links to the site.
  When the page links have been appended to the site, create an event handler
  when a link has been clicked (according to the page link number), the students
  will show on the page.  I.E.(if page link 3 is clicked, students 21-30 should
  show on the page). The fucntion will pass one parameter - studentList
*/
function appendPageLinks(studentList)
{

  //Create a variable to hold the number of pages for the site
  //Round up the variable to the top number, i.e.(if number is 4.4, round up to 5).
  let totalPages = Math.ceil(studentList.length / 10);

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

  //Create a variable to hold the anchor list
  let pageActive = document.getElementsByTagName('a');

  //Create an event handler for the links when 'clicked'
  newPaginationDiv.addEventListener('click', (event) =>
  {
    event.preventDefault(); //Prevent the screen jumping back to the top after a link has been clicked.
    event.target.tagName = "A"; //Initiate the event.target
    let linkButton = event.target.textContent; //Hold the text content of the clicked link in a variable
    showPage(linkButton, studentList); //Call the 'showPage' function

    //Use a 'for' loop to loop through the anchor elements
    for(let i = 0; i < pageActive.length; i++)
    {
      //Remove the 'active' class from the anchor element
      pageActive[i].classList.remove('active');

      //Add the 'active' class to the link that is clicked
      event.target.classList.add('active');
    }
  });

}

//Create a function that removes the pagination links for the html file
function removeLinks()
{
  let paginationDiv = document.getElementsByClassName('pagination')[0];
  paginationDiv.remove();
}


//---------------------------------------------------------------------------//
//--Exceeds Expectations--//
/*
- Optional -
Create a function that dynamically appends the search input and search button
to the site.  When the user types in a name(or portion of a name), show the
student or students.  When the student(s) are on the page, append the page
links based on search.  When the search has no results, show a message on the
screen stating that there were no students found.  This function will pass one
parameter - studentList
*/

//Create a function that creates and appends the search bar and search button
function appendSearch(studentList)
{
  //Create and append the student search class to the html file
  const newStudentSearchDiv = document.createElement('div');
  newStudentSearchDiv.className = "student-search";
  const pageHeaderClass = document.getElementsByClassName('page-header')[0];
  pageHeaderClass.appendChild(newStudentSearchDiv);

  //Create and append the search bar to the student-search class in the html file
  //Enter a place holder for the search bar
  const newStudentSearchBar = document.createElement('input');
  newStudentSearchBar.placeholder += "Search for students...";
  newStudentSearchDiv.appendChild(newStudentSearchBar);

  //Createt and append the search button to the student-search class in the html file
  //Enter text content as 'Search'
  const newStudentSearchButton = document.createElement('button');
  newStudentSearchButton.textContent = "Search";
  newStudentSearchDiv.appendChild(newStudentSearchButton);

  //Create an event handler when the 'search' button is clicked
  newStudentSearchButton.addEventListener('click', (event) =>
  {
    event.preventDefault();  //Prevent the screen from jumping to the top when the button is clicked.
    hideNoStudentsFoundMessage(); //Call the 'hideNoStudentsFoundMessage' function to hide the 'No students found' Message when the button is clicked.
    let newStudentSearchArray = [];  //Create an empty array variable.
    let studentInputValue = newStudentSearchBar.value.toLowerCase(); //Create a variable to hold the value of the search input.
    newStudentSearchBar.value = ''; //Each time an input is entered, the input disappears from the search bar.

    //Use a 'for' loop to loop through the studentList parameter.
    for(let i = 0; i < studentList.length; i++)
    {
      //Create a variable to pull the element of the student name.
      let studentItems = document.getElementsByTagName('h3')[i].parentNode.parentNode;

      //Use an 'if' statement to find the index of the student items and pass them into the emppty array.
      if(studentItems.textContent.indexOf(studentInputValue) > -1)
      {
        newStudentSearchArray.push(studentItems); //Use the .push method to add the searched items into the empty array.
        studentList[i].style.display = "block"; //Show the searched student(s).
      }else
      {
        studentList[i].style.display = "none"; //Hide the remaining students.
      }
    }
      //Call the 'removeLinks' function to remove the links from the page.
      removeLinks();

      //Call the 'hideStudentList' function and pass the searched students array into the function.
      hideStudentList(newStudentSearchArray);

      //Use an 'if' statement to see if the searched students array is greater
      //and call the 'showPage' and 'appendPageLinks' functions if true.  If
      //false, call the 'showNoStudentsFoundMessage' function.
      if(newStudentSearchArray.length > 0)
      {
        //Call the 'showPage' function and pass the searched students array into the function.
        showPage(1, newStudentSearchArray);

        //Call the 'appendPageLinks' function and pass the searched students array into the function.
        appendPageLinks(newStudentSearchArray);
      } else
      {
        //Call the 'showNoStudentsFoundMessage' function to show the message.
        showNoStudentsFoundMessage();

        //Call the 'appendPageLinks' function and pass the searched students
        //array into the function.  This will show no pagination links on the
        //screen, but will still be functional dynamically in the html file
        //when the search button is clicked and reloads the initial start page.
        appendPageLinks(newStudentSearchArray);
      }
      newStudentSearchArray = [];  //Clear the searched students array after each search.
  });
}


//Create a function that creates and appends the no students found message in the
//html file.
function noStudentsFoundMessage()
{
  const messageDiv = document.createElement('div');
  messageDiv.className = "no-students-found";
  const pageClass = document.getElementsByClassName('page')[0];
  messageDiv.textContent = "No students found";
  messageDiv.style.fontWeight = "bold";
  messageDiv.style.display = "none";
  pageClass.appendChild(messageDiv);
}

//Call the 'noStudentsFoundMessage' function
noStudentsFoundMessage();

//Create a function that shows the no students found message on the screen
function showNoStudentsFoundMessage()
{
  const showStudentMessage = document.getElementsByClassName('no-students-found')[0];
  showStudentMessage.style.display = "block";
}

//Create a function that hides the no students found message on the screen
function hideNoStudentsFoundMessage()
{
  const hideStudentMessage = document.getElementsByClassName('no-students-found')[0];
  hideStudentMessage.style.display = "none";
}


//Call the 'showPage' function and show the first page of students
showPage(1, studentListArray); //Pass the initial student list variable in the function

//Call the 'appendPageLinks' function
appendPageLinks(studentListArray); //Pass the initial student list variable in the function

//Call the 'appendSearch' function
appendSearch(studentListArray); //Pass the initial student list variable in the function
