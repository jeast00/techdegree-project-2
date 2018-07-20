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
  $('.student-list li').hide();
  //Loop through all of the students and show only 10 students on a page.
  $('.student-list li').each(function(list){
      if(list >= 10 * (pageNumber - 1) && list < 10 * pageNumber) {
          $(this).show();
      }
  });
}

//Call the showPage function
showPage(1); //Currently testing pageNumber to ensure program is working

// Create a function named 'appendPageLinks' that accepts a parameter for the studentList
function appendPageLinks(studentList) {
  //Need to determine how many pages needed for the student list.
  //Create a page link section
  //Create a 'for' loop for every page
    //add a page link to the page link section
  //remove the old page link section from the site
  //append the new page link section to the site
  //define what happens when you click a link (action listener)
    //use the 'showPage' function to display the page for the link clicked
    //mark that link as "active"
}
