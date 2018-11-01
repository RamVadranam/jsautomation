Feature: Search Java Scripts and Node JS on google

Scenario Outline: Search in google
Given open browser and enter "https://www.google.co.uk/"
When searched for "<content>"
Then dispay following "<sitename>" on top

Examples:
|content||sitename|
|Node JS||https://nodejs.org/|
|Javascript||https://www.javascript.com/|
