/*
	manage & update a to-do list
*/

/* TODO
	
	retrieve neccessary elements from document
		- elements where data will be inserted
		- elements where data will be updated/added
		- submission buttons

	populate document with data
		- call API (GET)
		- get all records from todo table
			- if deadline matches current date, add data to 'day at a glance'
			- if deadline within 7 days of current date, add data to 'upcoming deadlines'
			- else add to calendar in background

	add new record to todo list
		- on submit
			- pull data from document
			- call API (POST)

	update existing record on todo list
		- on submit
			- pull data from document
			- call API (PUT)
*/