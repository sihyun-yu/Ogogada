# [DP7] User Testing

## Team Ogogada
Sangmin Lee, Yoonseo Kim, Sungha Eom, and Sihyun Yu


### Final Interface
#### Representative screenshots 
##### 1. Our Main Home Page
![](./Images/HOME.png)
You can check there are buttons for accessing to ranking page, game page, and tutorial pages.
##### 2. Game Page (in this screenshot, for level 1) 
![](./Images/GAME.png)
Some buttons are differentiated by color (HOT for red letters, ICE for blue letters) and timer, level status are denoted. Buttons for rechecking the task and go back button also exist. Users will do the task with the POS UI that several buttons are locked with their level. 
![](./Images/GAMEDONE.png)
After completing the task, user can choose to see the ranking or to go to home page. 
##### 3. Tutorial Page (in this screenshot, for level 2)
![](./Images/TUTORIAL.png)
Still, buttons are locked/unlocked and differentiated by color (such as HOT/ICE). The dialog before starting the tutorial says to follow the buttons with the red border, so that users can understand what to do. The 'red' letters of the instruction has 'red' color so that users can easily recognize by emphasis.
![](./Images/TUTORIALDO.png)
As explained, users can follow the instruction by clicking the buttons with red border.
![](./Images/EXIT.png)
If users want to go back to the home page, we reask user 'Are you sure?' to avoid accidental returning back. 
![](./Images/RANKING.png)
After accessing the ranking list page, users can know what they were supposed to do at the certain level and immediately check the winner of certain level. 
![](./Images/RANKINGLIST.png)
By clicking the element of the list, users can know all 8 top players for each level. 
#### Quality arguments 
Our key idea to solve the problem is using gamification so that users can learn the POS so fast and efficiently. By lots of user testing during the semester and a lot of consideration among our team, we now can say our interface is great for a few reasons and successfully achieved our goals. For a better explanation, we will use figures uploaded on the above.

Since we wanted the process of learning POS looks very familiar to users, we tried to design and implement our homepage very similar to existing game home pages. There is an intuitive ranking button with the hand and arm holding a trophy. Plus, there 5 stages of game buttons and tutorial buttons, represented by door icons and ladder icons, respectively. While showing a demo to our classmates, many people said our home page looks friendly so that learning POS using our UI doesn't feel so hard for the first time. Especially, for parts of tutorial and game mode buttons, we focused on Affordance. As user level increases, ladder (denoting tutorial mode for each level) appears for users next level to lead to click the ladder button before doing the game mode of an increased level. Rather than separating all of the tutorial modes on independent one button, this increased users' affordance. Plus, an overall interface that users face also make them all processes doing tutorial then game look all connected. Lastly, game mode buttons that the user can access are differentiated by color which is easily recognizable. 

Now, let's focus on pages for our main solutions. First, focusing on the game mode page. There are POS UI which is familiar with us. There are some convincing arguments on this page. We first differentiated some buttons by color (HOT for red and ICE for blue) so that users can easily memorize and access to the button, and eliminating the confusion among these buttons. This is NOT the feature that original POS UI have, so we expect users to learn the POS easier with our interface rather than practicing the POS using the original POS interface. Plus, there are some locked buttons. These buttons enable users to focus on frequently used few buttons at the first time so that they can memorize and get familiar with these at the very beginning of the process, and make users want to open rest of locked buttons, so users feel the process of learning with more fun. Lastly, users can recheck the task and continuously check their time while finishing the task at a certain level, so users can feel learning POS just like a game.

Now, focusing on the tutorial page, we bordered a button with red color with the order of instruction so that users can easily follow the instruction. So, compared to using original POS UI to learn, users can easily follow what to do in a given situation. There are some comments that description for this (follow the red border) is insufficient, so we added a dialog before starting each tutorial and the part that users should click the button with red buttons is emphasized with red letters. Therefore, the user can recognize what to do on this page within very short time periods.

For minor usability issues, which are not related to our solution still important for our interface, we first added BACK button on both tutorial mode and game mode so that users can return back to the home page if they don't want to do the process. To avoid accidental returning, we ask "Are you sure?" after clicking back button. (Denoted as 11 as above figures) Plus, we found that there are two types of users after the game mode via user testing: who want to check their ranking or want to finish next levels quickly. To satisfy all of them, we made a popup after completing the task with selections to move to rank or home. (8 at the above) Finally, at the ranking page, to avoid users to return back to each level to check the task, we briefly explained what the task was at each level and the first place of each level (12, 13 at the above). (699 words)

### Iteration
### Individual reflection
#### Sangmin Lee
#### Yoonseo Kim
#### Seongha Eom
#### Sihyun Yu