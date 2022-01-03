# BioBot Coding Project

## :open_file_folder: Description
This project is meant to create a dynamic search functionality for kit ids. Users are able to obtain their shipping information. 
Backend - Built with Nodejs and Express. 
Frontend - Built with Reactjs

## :arrow_down: Installation
```npm run postinstall``` 
Note: This script will do a npm install for both the backend project and front end project. It can only be run from the main directory(i.e outside /backend and /frontend). 


## :brain: Use Cases/Brainstorming
-	User can view a search bar
-	User can type id into search bar
  -	ID are made of numbers and _
  - ID are x num of char long
-	When user begins typing autocomplete is triggered
  -	ID that currently match are suggested
-	User clicks on id or finishes their id
-	User see’s shipping information
-	User clicks on fedEx tracking number 
  -	Goes to fedex
-	User can go back to search

## :art: Design 
### Wireframe 
![Wireframe](https://github.com/Alira-Coffman/BioBot-Project/blob/main/wireframe.PNG)

It was important to me to understand visually what the user pathway was. This helped to understand where hiccups may be, or things that prevented the user from continuing or frustrated them.

### Design Calls
- Colors that matched the BioBot Theme: I made sure to keep the main colors that were used on BioBot Website. 
  - ![Dark Blue](https://via.placeholder.com/15/012d4e/000000?text=+) `DarkBlue`
  - ![Light Blue](https://via.placeholder.com/15/00a4ff/000000?text=+) `LightBlue`
  - ![Yellow](https://via.placeholder.com/15/ffcd47/000000?text=+) `Yellow`
  - ![Off White](https://via.placeholder.com/15/f7f8fd/000000?text=+) `Off White`
- Accessiblity was a concern for me. Being able to use a screen reader, having alt text, or being able to navigate without a mouse. These concerns are discussed in desired improvements. 
- The color scheme was contrasted enough to fulfill accessiblity concerns with sight. Although the selection box, I am not sure I would want to keep as dark blue.
- Logos: I included the logo icon in the tab for more consistent branding.
## :hammer: Desired Improvements
- Fill in - where needed so user does not have to: This is an important improvement in my opinion. Users don't like adding in unnecessary characters, by adding in the dashes for them(with the option of them entering still there), it would deter frustration.
- Add accessibility improvements: Using live region for screen readers, allowing for up down navigation, using role, aria live. And creating a more semantic environment. 
- FEDEX tracking: I would like to add FedEx tracking to allow user to see their updates without having to leave the page. 

## :video_camera: Live Demonstration

