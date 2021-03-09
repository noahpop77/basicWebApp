This program leverages a few frameworks, namely express and node. What this program does is it uses apis to form a list of members that are displayed on the web page. When you put a name and email address in the fields and hit enter, an api put command gets sent and inserts the information and displays it right there. If you refresh the server however and look at the webpage again the address you added will be gone. There is no persistence here at the moment. That would require setting up an SQL server and altering the put, delete, post and get parameters in members.js but it is 100% doable.

I made the API requests with postman.

Authors: Brian Sawa, Eugene Makavets, Ali Mokabbery




Installation

Get node set up
Download the relevant node modules using npm
run 'npm run dev' in the same directory as package.json

