/*
  Create a program that shows 10 students on a page.  Use 'Unobtrusive JavaScript'
  to append markup for the pagination links.  For example, if there are 23
  students, there should be 3 pagination links created; if there are 38 students,
  there should be 4 pagination links created and so on.
*/

//Create global variables to be accessed within the functions
let $studentList = $('.student-list li');
let $totalPages = $studentList.length / 10;

//Dynamically create the pagination and add it to the html file
let $newPaginationDiv = document.createElement('div');
$($newPaginationDiv).addClass('pagination');
$('.page').append($newPaginationDiv);
let $newUL = document.createElement('ul');
$('.pagination').append($newUL);

//Dynamically create the search bar and button and add it to the html file
let $newSearchDiv = document.createElement('div');
$($newSearchDiv).addClass('student-search');
$('.page-header').append($newSearchDiv);
let $newSearchInput = $('<input onkeyup="searchForStudent()" placeholder="Search for students..."></input>')
$('.student-search').append($newSearchInput);
let $newSearchButton = $('<button>Search</button>');
$('.student-search').append($newSearchButton);

//Create a function named 'showPage' that accepts two parameters for page numbers
//and student list.
function showPage(pageNumber, studentList) {
//Hide all of the students from the page.
  $studentList.hide();
  //Loop through all of the students and show only 10 students on a page.
  $($studentList).each(function(list){
    // Create an 'if' statement that puts 10 students from the entire list at one time
    // and use parameter 'pageNumber' that will hold the list for an undefined page number.
      if(list >= 10 * (pageNumber - 1) && list < 10 * pageNumber) {
          $(this).show(); //Use the 'this' event that toggles the studentList variable
      }
  });
}

//Call the showPage function
showPage(1); //Putting a 1 in the parentheses will show the first page when the site loads

// Create a function named 'appendPageLinks' that accepts a parameter for the student list
function appendPageLinks(studentList) {

  //Create a 'for' loop for the amount of page links to the amount of students from the entire list.
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

}

//Call the 'searchForStudent' function.
searchForStudent();
