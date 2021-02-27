// JavaScript Document

//Finding options
var $html = document.getElementsByTagName ('html') [0], //finds first tag of html, defines it to $html
	$menu_opener = document.getElementById ('nav-jump'), //finds id of nav-jump, defines it to $menu_opener
	$menu_closer = document.getElementById ('menu-close');

//Manipulating options
var class_name; //variable of class_name
	class_name = $html.className ('open-nav'); //reads and writes to className, DOM method
	class_name = $html.getAttribute ('class'); //finds element of $html and reads the class name, GETTER method
	class_name = $html.setAttribute ('class'); //finds element of $html and writes the class name, SETTER method
	//Statements give value as a string that can be manipulated

//Cancatenation
class_name += ' new-class-name'; //Cancatenation of strings into array
	//class_name > class_name + ' new-class-name' > class_name new-class-name

//Removing clases
class_name = class_name.split (' '); //Splits class names at the spaces

var len = class_name.length, //Defines number based on number in array
	kept_classes = []; //Creates a 2nd empty array

while (len--){ //While len is looping through class_names from the bottom up 
	if (class_name [len] != 'new-class-name') { //If class name is NOT new-class-name
		kept_classes.push (class_name [len]); //Class name pushed to kept_classes array
	}
}

class_name = kept_classes.join (' '); //Joins kept classes back into array

// Create a function
function removeNewClassNameFromHTML () {
	var class_name = $html.className.split ( ' ' ), //class_name splits $html class names at spaces
		len = class_name.length, //len = Number of class names in array
		kept_classes = []; //kept_classes = Empty array
	while (len--) {
		if (class_name[len] != 'new-class-name'){
			kept_classes.push (class_name[len]);
		}
	}
	$html.className = kept_classes.join ( ' ' );
}

// More generica function than above
function removeClass (element, class_name) {
	var class_names = element.className.split ( ' ' ), //class_name splits $html class names at spaces
		len = class_names.length, //len = Number of class names in array
		kept_classes = []; //kept_classes = Empty array
	while (len--) {
		if (class_names[len] != class_name){
			kept_classes.push (class_name[len]);
		}
	}
	element.className = kept_classes.join ( ' ' );
}

removeClass ($html, 'new-class-name' );

function addClass ( element, class_name ) {
	var class_names = element.className.split ( ' ' )
	class_names.push ( class_name );
	element.className = class_names.join ( ' ' );
}

$html.classList; //A collection of class names

//Options to alter class list
$html.classList.add ( 'new-class-name' ); //Add to class list
$html.classList.remove ( 'new-class-name' ); //Remove from class list
$html.classList.toggle ( 'new-class-name' ); //Add if not in list, remove if existing
$html.classList.contains ( 'new-class-name' ); //Checks if within class list




(function( window ){
    window.watchResize = function( callback ){
        var resizing;
        callback.size = 0;
        function done()
        {
            var curr_size = window.innerWidth;
            clearTimeout( resizing );
            resizing = null;
            // only run on a true resize
            if ( callback.size != curr_size )
            {
                callback();
                callback.size = curr_size;
            }
        }
        window.addEventListener('resize', function(){
            if ( resizing )
            {
                clearTimeout( resizing );
                resizing = null;
            }
            resizing = setTimeout( done, 50 );
        });
        // init
        callback();
    };
}(window));


window.watchResize (function(){
if (window.inner <= 640 ) {
	$menu_opener.addListenerEvent( 'click', toggleDrawerNav, false );
	$menu_opener.addListenerEvent( 'touchdown', toggleDrawerNav, false );
	$menu_closer.addListenerEvent( 'click', toggleDrawerNav, false );
	$menu_closer.addListenerEvent( 'touchdown', toggleDrawerNav, false );
	page_classes.add( 'drawer_enabled_class' ); //If small screen
	pages_classes.add( 'drawer_open_class' );
}else {
	$menu_opener.removeListenerEvent( 'click', toggleDrawerNav, false );
	$menu_opener.removeListenerEvent( 'touchdown', toggleDrawerNav, false );
	$menu_closer.removeListenerEvent( 'click', toggleDrawerNav, false );
	$menu_closer.removeListenerEvent( 'touchdown', toggleDrawerNav, false );
	page_classes.remove ( 'drawer_enabled_class' ); //If not small screen and enabled
	pages_classes.remove( 'drawer_open_class' );
}
});
	
if ( ! 'classList' in document.body) { return; }

//All of the above cuts down to this:
var html = document.getElementByTagName( 'html' ) [0],
	page_classes = html.classList,
	drawer_enabled_class = 'drawer-nav-enabled',
	toggleDrawerNav_running = false;

function toggleDrawerNav( event ) {
	event.preventDefault ();
	if ( toggleDrawerNav_running ) { return ;}
	toggleDrawerNav_running = true;
	page_classes.toggle ( 'drawer-nav-open' );

setTimeout (function(){toggleDrawerNav_running = false;}, 500);
}






