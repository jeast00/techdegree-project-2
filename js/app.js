/*
  Create a program that shows 10 students on a page.  Use 'Unobtrusive JavaScript'
  to append markup for the pagination links.  For example, if there are 23
  students, there should be 3 pagination links created; if there are 38 students,
  there should be 4 pagination links created and so on.
*/


//Create a function named 'showPage' that accepts two parameters for page numbers
//and student list.
function showPage(pageNumber, studentList) {
//Hide all of the students from the page.
  studentList = $('.student-list li').hide(); //Use the parameter variable to hold the student list
  //Loop through all of the students and show only 10 students on a page.
  $(studentList).each(function(list){
      if(list >= 10 * (pageNumber - 1) && list < 10 * pageNumber) {
          $(this).show();
      }
  });
}

//Call the showPage function
showPage(1); //Putting a 1 in the parentheses will show the first page when the site loads

// Create a function named 'appendPageLinks' that accepts a parameter for the student list
function appendPageLinks(studentList) {
  //Need to determine how many pages needed for the student list.  In this case,
  //there are 54 students on the list and there will need to be a total of 6
  //pages needed.
  studentList = $('.student-list li').length; //Hold the length of the student list into the parameter variable
  let $totalPages = studentList / 10; //10 is the amount of students that are to be on one page at a time.

  //Dynamically create the pagination div with an unordered list and append to the html file.
  let $newDiv = document.createElement('div'); //Create a variable to hold the created element
  $($newDiv).addClass('pagination'); //Use the created element to add a class called 'pagination'
  $('.page').append($newDiv); //append the 'pagination' class to the bottom of the 'page' class

  let $newUL = document.createElement('ul'); //Create a variable to hold the created element of an unordered list
  $('.pagination').append($newUL); //Append the unordered list to the 'pagination' class

  //Create a 'for' loop for every page
    for(let i = 0; i < $totalPages; i++) { //Use the '$totalPages' variable to loop through the total amount of pages from the student list.
    //add a page link to the page link section
    $('.pagination ul').append('<li><a href="#">'+(i+1)+'</a></li>'); //Append a list and anchor with the 'href' and increment the link by 1.
    }

  //Create a function that listens for an event (for example: click event).
  //The function will also remove and add a class named 'active' each time
  //a link is clicked.
  $('.pagination li a').on('click', function() {
    //remove the 'active' class when another link has been clicked.
    $('.pagination li a').removeClass('active');
    //add the 'active' class to the link that has been clicked.  Use the 'this'
    //event to toggle the click to the link that was just clicked.
    $(this).addClass('active');
    //Use the 'showPage' function to display the page for the link that was clicked.
    //Use the 'this' event and show the text on the screen.
    showPage($(this).text());
  });
}

//Call the 'appendPageLinks' function
appendPageLinks();


//Create a function named 'searchForStudent' that accepts a parameter of the student list
function searchForStudent(studentList) {


//Dynamically create the search div and append it to the html file
let $newSearchDiv = document.createElement('div'); //Create a variable to hold the div element.
$($newSearchDiv).addClass('student-search'); //Use the created element to add a class called 'student-search'.
$('.page-header').append($newSearchDiv); //Append the 'student-search' class to the 'page-header' class.

//Dynamically create the input area and append it to the html file below the
//newly created 'student-search' class.
let $newInput = $('<input placeholder="Search for students...">'); //Create a variable to hold the input element.
$('.student-search').append($newInput); //Append the input element to the 'student-search' class.

//Dynamically create a search button and append it to the html file below the
//'student-search' class.
let $newSearchButton = $('<button>Search</button>'); //Create a variable to hold the button element.
$('.student-search').append($newSearchButton); //Append the button element to the 'student-search' class.

}

//Call the 'searchForStudent' function.
searchForStudent();
