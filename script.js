init_constants = {
	num_of_wheels: 8,
	wheel: 2,
	permutation_frequency: 0.01
};
set_constants(init_constants);
init_time = {
	years: 0,
	months: 0,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 1
};
set_time(init_time, "#alg1_time");
set_time(init_time, "#alg2_time");
init_permutations = 1;
set_permutations(init_permutations, "#alg1_permutations");
set_permutations(init_permutations, "#alg2_permutations");
$("#alg1action").click(function () {
	var constants = get_constants();
	var time = get_time("#alg1_time");
	permutations = alg1(constants, time);
	set_permutations(permutations, "#alg1_permutations")
});
function alg1(constants, time) {
	var time_in_seconds = time.years*360*24*60*60 + time.months*30*24*60*60 + time.days*24*60*60 + time.hours*60*60 + time.minutes*60 + time.seconds;
	var cycles = Math.floor(time_in_seconds / constants.permutation_frequency);
	/** CONFUSING ALGORITHM RESULTS IN NUMBER BASES - solved
	var i = constants.num_of_wheels - 1;
	var permutations = "";
	while (i >= 0) {
		var p = Math.pow(constants.wheel, i);
		var permutation = Math.round(cycles / p);
		console.log(cycles, p, permutation);
		permutation = permutation % constants.wheel;
		cycles = cycles % p;
		permutations = permutations + " " + String(permutation);
		i --;
	}
	return permutations;
	*/
}
$("#alg2action").click(function() {
	var constants = get_constants();
	var permutations = get_permutations("#alg2_permutations");
	time = alg2(constants, permutations);
	set_time(time, "#alg2_time");
});
function alg2(constants, permutations) {
	var result = {};
	result.years = 0;
	result.months = 0;
	result.days = 0;
	result.hours = 0;
	result.minutes = 0;
	result.seconds = 1;
	return result;
}
function get_constants() {
	var obj = {};
	obj.num_of_wheels = Number($("#num_of_wheels").val());
	obj.wheel = Number($("#wheel").val());
	obj.permutation_frequency = Number($("#permutation_frequency").val());
	return obj;
}
function set_constants(obj) {
	$("#num_of_wheels").val(String(obj.num_of_wheels));
	$("#wheel").val(String(obj.wheel));
	$("#permutation_frequency").val(String(obj.permutation_frequency));
}
function get_time(container) {
	var obj = {};
	obj.years = Number($(container).find(".years").val().trim());
	obj.months = Number($(container).find(".months").val().trim());
	obj.days = Number($(container).find(".days").val().trim());
	obj.hours = Number($(container).find(".hours").val().trim());
	obj.minutes = Number($(container).find(".minutes").val().trim());
	obj.seconds = Number($(container).find(".seconds").val().trim());
	return obj;
}
function set_time(obj, container) {
	$(container).find(".years").val(obj.years);
	$(container).find(".months").val(obj.months);
	$(container).find(".months").val(obj.days);
	$(container).find(".days").val(obj.hours);
	$(container).find(".hours").val(obj.minutes);
	$(container).find(".seconds").val(obj.seconds);
}
function get_permutations(id) {
	return String($(id).val().trim());
}
function set_permutations(permutations, id) {
	$(id).val(String(permutations));
}