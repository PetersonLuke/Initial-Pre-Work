# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The client asks the server for the web files.  The server checks if it has the files and if so sends them over to the client. 

## From start to finish, how does data reach you to be rendered in the browser?

The URL gets entered into the browser. THE BROWSER THAN PASSES THE URL TO FIND THE PROTOCOL< HOST< PORT< AND PATH.
An HTTP request is made with the server with all other data being sent using TCP/IP.
If the request is approved, the server sends "200 OK", approving to view the website.
The files are then sent in chunks of data called packets.
The browser will then assemble the packets which will then display the website.

## What code is rendered in the browser?

The code that is rendered in the browser is the HTML, and JavaScript code that is sent over by the server.

## What is the server-side code’s main function?

To interact with databases, render pages to the client and process input.

## What is the client-side code’s main function?

To have interactive web pages, make dynamic changes to the web page, access temporary storage, and send a request to the server.

## What is runtime?

Run time is the duration that the program is running, such as, how long it takes the web page to load.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

From what I am understanding, one instance of the client-side is sent over by the server.

## How many instances of the server-side code are available at any given time?

From what I am understanding, there is just one instance of the server-side code available at any given time.  This is why client-side rendering is taking a lead.

## How many instances of the databases connected to the server application are created?

From what I am understanding, one additional instance is created.
