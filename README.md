📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Kudos Board

Submitted by: **NAME**

Deployed Application (optional): [Kudos Board Deployed Site](https://kudos-board-1-y1i3.onrender.com/)

### Application Features

#### CORE FEATURES

- [x] **Home Page**
  - [x] Displays header, banner, search, board grid, and footer.
  - [x] Displays preview of all boards on initial page load.
    - [x] Boards previews should show an image/gif and board title.
  - [x] Users can click on a category (recent, celebration, thank you, inspiration) to filter the boards.
    - [x] Recent displays most recently created boards.
    - [x] Other categories display boards of that type.
  - [x] Users can search for a board by name.
  - [x] Users can click on a board to navigate to a new page containing that board.
  - [x] Users can create a new board.
    - [x] Boards should have a title, category, and author (optional).
  - [x] User can delete boards.
  
- [x] **Board Page**
  - [x] Displays a list of all cards for a board.
    -  [x] Each card features a text message.
    -  [x] Each card features a gif found using the [GIPHY API](https://developers.giphy.com/docs/api/).
    -  [x] Users can optionally sign the card as the author.  
-   [x] Cards can be upvoted.
-   [x] Cards can be deleted.


#### STRETCH FEATURES


- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ]  Boards and cards should be associated with a user.
    - [ ]  Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.
- [x] **Deployment**
  - [x] Website is deployed via Render.
- [x] **Comments**
  - [x] Users should be able to comment on cards.


### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

https://www.loom.com/share/8b299b0284b441f5a6bbaa93f4426fa4?sid=46d49314-d06e-4e74-b715-ca431638d113

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes pretty well. The labs and lectures were full of great content that was very useful there was just not enough time to soak it all up meaningfully

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would have added the users features. I would add meaningful comments to my code. I would make more code more modular to make it easier to iterate on. I would clean up all unnecassary lines that remained after edits.


* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think copying over alot of the board code to the cards code went very well. it was very reusable. My peers added comments as a sepereate prisma table so that they could maintain properties for each comment but I did not.
### Open-source libraries used

no
### Shout out

Andrew Chu helped me out with a huge bug, (delete on cascade).