/* 
 * The addon is very basic, it uses sidebar for its UI 
 * I haven't explored the API much, and it seems to be 
 * the easiest way to have an HTML based UI 
 */

/*
 * The added html would use jquery and bootstrap
 * to handle all AJAX calls, we need to take 
 * care of localization, but that would be again
 * left to the html independently, keeping things
 * tidy and easy to maintain.
 */

var sidebar = require("sdk/ui/sidebar").Sidebar({
  id: 'foxman',
  title: 'FoxMan - REST Client',
  url: "./sidebar.html"
});

/*
 * The button simply opens the sidebar and does
 * nothing fancy presently.
 */

var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
  id: "foxman-handle",
  label: "Open FoxMan - REST Client",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: function () {
    sidebar.show(); 
  }
});

/*
 * We need to communicate with the HTML to save 
 * all the requests made, just like in POSTMan.
 * Further, we need to add support for collections
 * of the requests. I'm not sure if the communication
 * support between sidebar and the addon is enough 
 * for this to work. But to me, sidebar is aptly sized
 * for the given task.
 */


