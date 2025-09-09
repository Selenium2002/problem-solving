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
  
 * Select the div num 11 from a group of divs each one has a "vjs-control" class by using a psuedo class 
 */


/** 6
 * #tbodyid > div:nth-child(1) #article
 * or
 * #tbodyid > div:nth-child(1) p
 * or
 * #tbodyid > div:nth-child(1) p#article
  
 * Select the paragraph num 1 that is lied somewhere below in the first div child beneath the division which has an id called "tbodyid" 
 */





//  Select Elements By Xpaths

/**  1
 *   //*
 *   Select every single element that exists in the web page 
 */
  
/**  2
 *   //div//img
 *   Select every single sub image element that exists in all divs 
 */

/**  3
 *   (//div[contains(@class , "mb-4")][5]//a)[2]
 * or
 *   //div[contains(@class , "mb-4")][5]/div/div/h4/a
 * or
 *   //a[contains(. , "Iphone")]
 *   Select the link of the fifth div in the collection of phone types 
 */

/**  4
 *   //p[contains(. , "The Samsung") or starts-with(., "The HTC")]
 *   Select p elements which contains a text "The Samsung" or a text "The HTC"
 */

/**  5
 *   //ul[.//button]
 *   Select every single sub button element that exists in every ul locator 
 */

/**  6
 *   (//div[@class = 'caption'])/h4/b[starts-with(., 'Get')]
 *   Select a b elements that locates in div element
 */