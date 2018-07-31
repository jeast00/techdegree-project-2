/*
  Create a program that shows 10 students on a page.  Use 'Unobtrusive JavaScript'
  to append markup for the pagination links.  For example, if there are 23
  students, there should be 3 pagination links created; if there are 38 students,
  there should be 4 pagination links created and so on.
*/


//Create two functions - showPage and appendPageLinks

//First function 'showPage' holds two parameters - pageNumber and studentList

function showPage(pageNumber, studentList)
  {
    //Create a variable to hold all of the students from the list and
    //Hide all of the students from the page
    studentList = $('.student-list li');
    $(studentList).hide();
    //loop through the students and 'show' 10 students on the page at a time
    $(studentList).each(function(list)
      {
        if(list >= 10 * (pageNumber - 1) && list < pageNumber * 10)
          {
            $(this).show();
          }
      });
  }

//call the 'showPage' function
showPage(1);


//Second function 'appendPageLinks' holds one parameter - studentList

function appendPageLinks(studentList)
  {
    //Use the studentList parameter to determine the total amount of pages
    //needed for the total student list -- 10 students per page
    studentList = $('.student-list li').length;
    $pagesPerStudentList = studentList / 10;

    //dynamically create the pagination class and add it to the html file
    let $newPaginationDiv = document.createElement('div');
    $($newPaginationDiv).addClass('pagination');
    $('.page').append($newPaginationDiv);

    //dynamically create an unordered list element and add it to the html file
    let $newPaginationUL = document.createElement('ul');
    $('.pagination').append($newPaginationUL);



    //Use a 'for' loop to dynamically create the list and anchor elements
    for (let i = 0; i < $pagesPerStudentList; i++)
      {
        $('.pagination ul').append('<li><a href="#">'+(i+1)+'</a></li>');
      }

    //Function to add and remove links as active when 'clicked'
    $('.pagination li a').on('click', function()
      {
        $('.pagination li a').removeClass('active');
        $(this).addClass('active');
        showPage($(this).text());
      });

  }


//Call the 'appendPageLinks' function
appendPageLinks();
