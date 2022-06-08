<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
@import url('https://use.fontawesome.com/releases/v6.1.1/css/all.css');

*{
	font-family: 'Trebuchet MS', 'Roboto', sans-serif;
}
/*
 *  STYLE 1
 */

*::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 3px #0000004d;
	box-shadow: inset 0 0 3px #0000004d;
	border-radius: 10px;
	background-color: #454545;
}

*::-webkit-scrollbar
{
	width: 6px;
	background-color: #454545;
}

*::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 3px #0000004d;
	box-shadow: inset 0 0 3px #0000004d;
	background-color: white;
}
:root{
	--pink: #FA62EA;
}

.modal-backdrop {
  z-index: -1;
}
</style>
