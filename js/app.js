const students = $('.student-item');

function init() {
$("ul li:gt(9)").hide(); //Hide all students after #10
};
init();
//Add pagination links
$('.page').append(`<div class="pagination"><ul></ul></div>`); //Create div

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

//Add search box
$('.page-header').append(`
	<div class="student-search">
    	<input placeholder="Search for students...">
        <button>Search</button>
    </div>`);

//Gather input value
$('.student-search input').keyup(function() {
	let input = $(this).val();
	//reset page if input is deleted
	console.log(input.length);
	if(input.length < 1) {
		$(".student-list li:gt(9)").hide();
	}
	//compare students to input
	$(students).each(function() {
		if($(this).text().search(new RegExp(input, "i")) < 0) {
			$(this).hide();
		} else {
			$(this).show();
		}
	}) //End search loop

	//Alert if no matches exist
	if ($('.student-list').children(':visible').length < 1) {
		$('.student-list').append(`
			<strong class="alert">Sorry, no students match your search.</strong>
		`).css("color", "red");
	} else {
		$('.alert').remove();
	}; //End alert
}); //End keyup 

















