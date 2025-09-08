console.log("test");


//  https://demoblaze.com/index.html   ----> The dummy site which I'm practice on

//  Select Elements By CSS Selectors

/* ###    Select multiple elements  */


/** 1
* .modal, .fade  

* Select all elements which have eather a class called "modal" or called "fade" 
*/


/** 2
*div[class *= "control"]

* Select all div elements which their class attribute contains a "control" 
*/


/* ###    Select a unique element  */


/** 3
 * nav.navbar > button[data-target="#navbarExample"]
 * or
 * nav.navbar button[data-target="#navbarExample"] --> "The space" " " referes to somewhere below
 * or
 * nav.navbar > button
 * or
 * nav.navbar button
  
 * All of these selectors locate just one element   
 */

/** 4
 * div#navbarExample
  
 * Select a div which has an id called "navbarExample"
 */

/** 5
 * div.vjs-control:nth-child(11)
  
 * Select the div num 11 from a group of divs each one has a "vjs-control" class using a psuedo class 
 */

