FoxMan
======

The addon aims to provide a POSTMan like
REST client for FireFox. 
I've seen REST easy, but the codebase was too
complicated for my limited knowledege of 
Firefox Addon Development.

![Foxman Screenshot](/screenshots/6 Feb 2015.png)

How ?
====
The addon is very basic, it uses sidebar for its UI 
I haven't explored the API much, and it seems to be 
the easiest way to have an HTML based UI 

The added html would use jquery and bootstrap
to handle all AJAX calls, we need to take 
care of localization, but that would be again 
left to the html independently, keeping things 
tidy and easy to maintain.

We can even have separate HTMLs for each localization
and the html to use can be decided seeing the 
firefox's locale.

The button simply opens the sidebar and does 
nothing fancy presently.

Future 
======
* We need to communicate with the HTML to save 
all the requests made, just like in POSTMan.

* Further, we need to add support for collections
of the requests. 

I'm not sure if the communication support between sidebar 
and the addon is enough for this to work. But to me, 
sidebar is aptly sized for the given task, so let's
see how it goes.


Contributors 
============
* Thanks to Stanko for rainbowJSON. https://github.com/Stanko/jquery.rainbowJSON
