# Testing

* All HTML code verified through [W3C HTML Validation Service](https://validator.w3.org/).
> On the booking page the email.js script was flagged as unnecessary, however I think it does actualy need to be there.
* All CSS code verified through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).
CSS code was run through this validator and no issues were found.
* [JSHint](https://jshint.com/) was used to investigate javascript code.
* Basic responsiveness checked through [Am I Responsive?](http://ami.responsivedesign.is/).
* [Chrome developer tools](https://developers.google.com/web/tools/chrome-devtools) - was in constant use throughout the 
project to check responsiveness and to check formatting, margins, font size etc. on the fly.

## User Stories Testing

* 'As a visitor to the website, I want the navagation to be instantly Understandable.' 
This I think has been achieved succesfully, the navbar you are greeted with on the home page, appears identically
across the entire website, and its headings are unambigious.
* 'As a visiter to the website, I want to learn more about the festivals events'
This is dealt with using brief 'about' paragraph, although it would benefit from more content.
* 'As a visitor to the website, I want to view a map of its various locations.'
This is addressed using the embedded map, with markers showing the various locations of events.
* 'As a visitor to the website, I want to be offered sign up options, to be kept up to date with this event and future events.'
This is achieved in the footer area of the page, where there is an email sign up box.
* 'As a visitor to the website, I want to be able to book tickets for the event from the website.'
This can be done on the 'Tickets' page where there is a request form, with the information being sent using [email.js](www.emailjs.com).
* 'As a visitor to the website, I want the option to follow the event on social media.'
This is also in the footer section, where there are clickable links to a secection of social media.


## Responsiveness

* Chrome dev. tools was used at every stage of designing the website to ensure that the core structure and style of 
the website remained the same across all devices.

### Home page

* In desktop / Notebook / Large tablet screen size, the navagation bar has four written word links,
when screen size is reduced to regular tablet or phone size, these written links collapse to a three line or hamburger
menu to take up less space on the screen.
* The center hero image, remains full screen and centered across all device sizes, adjusting its size accordingly.
* The subtitle and countdown timer remain centered across all devices.
* The footer is made with three columns of content, three across on large screens, two across on medium screens,
the third column wraping to the next line, and one across on smaller screens so that they list single file vertically.

### Gallery page

* The navagation bar responds as before.
* The Gallery of images remain centered across all devices.
* Footer responds as before.

### Tickets page

* The navagation bar responds as before.
* The form element remains centered and justified across all device sizes, losing only the empty border at either side as
screen size is reduced.

## Aditional Testing

* Navagation bar elements tested and functional across all device sizes, each link directing to the appropriate page
and from each page back.
* Website title heading in the navagetion bar acts as alternate home button link as intended.
* Hamburger navagation menu, expands correctly, without affecting other elements, in all screen sizes.
* Email sign up box will only accept a valid email address and returns a confirmation when the submit button is pressed,
as intended.
* Social media icons change color on being hovered over and when clicked direct to their respective external website in 
a new new tab.
 * The form on the 'Tickets' page only accepts information when entered correctly, and returns a confirmation when send
 button is pressed.

## Bugs 

* Title and hamburger menu on navagation bar would wrap down on smaller screen devices, taking up a large portion of the 
screen, this was addresssed by using a 'media query' which adjusted the letter spacing padding of the title, to 
allow the title and menu toggle to sit on the same line. This also fixed an issue of the navbar covering the top of the hero 
image on smaller devices.



* On older versions of safari on apple devices, the 'new-book.jpg' fails to load, I have not yet resolved this issue.

## Devices 

In addition to emulated devices in chrome dev tools the Website was inspected on the following physical devices:
* Surface pro 4 12" screen
* Surface pro 4 connected to 27" monitor.
* Samsung Galaxy S9 Plus
* Apple Macbook Air 2017
* Apple iphone 6s

## Browsers used
* Google Chrome on Windows 10
* Microsoft Edge on Windows 10
* Firefox on Windows 10
* Safari on Mac OS
* Safari on ios


