<template>
  <router-view/>
</template>

<style>
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
</style>
