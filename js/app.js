const students = $('.student-item');
let names = [];


$('.student-details h3').each(function() {
	names.push($(this).text());
}) //end loop creating names array

//Add search box
$('.page-header').append(`
	<div class="student-search">
    	<input placeholder="Search for students...">
        <button>Search</button>
    </div>`);

//Gather input value
$('.student-search button').click(function() {
	const input = $('.student-search input').val().toLowerCase(); //Gather search input
	console.log(input);
	console.log(names);
	names.each(function() {
		if($(this) !== input) {
			$(this).hide();
		} else {
			$(this).show();
		}
	})
}); //end button click event



//Hide all students after #10

$("li:gt(9)").hide();

//Add pagination links

//Create div
$('.page').append(`<div class="pagination"><ul></ul></div>`);

//Loop through students.
students.each(function(){
	//Calculate pagination number to add
	const pagNum = (Math.ceil($(this).index()/10)+1); 

	//Create new pagination link whenever last digit of index is zero
	if($(this).index()%10 === 0) {
		$('.pagination ul').append(`
			<li class="pagBtn">
	       	 <a class="active" href="#">${pagNum}</a>
	        </li>
		`)}
});

$('.pagBtn').children().toggleClass('active', false);
$('.pagination ul a:eq(0)').toggleClass('active', true);

//Show correct students
$('.pagBtn').on("click", function() {
	$('.pagBtn').children().toggleClass('active', false);
	$(this).children().toggleClass('active', true);
	const btnNumber = $(this).text();
	students.each(function() {
		if(btnNumber * 10 > $(this).index() && $(this).index() >= (btnNumber - 1) * 10) {
			$(this).show();
		} else {
			$(this).hide();
			
		}
	})
});












