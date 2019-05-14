# [DP6] Hi-fi Prototyping

## Team Ogogada
Sangmin Lee, Yoonseo Kim, Sungha Eom, and Sihyun Yu

### POV
A new cafe part-time job worker 
needs to <strong> practice a lot and quickly get familiar with POS </strong> because <strong> most new workers are at the complex device POS, but there’s no explicit instructions or guides for that and he/she doesn’t want to be embarrassed at sudden situations. </strong>

### Target Users

### Tasks

### Implementation Notes

### Individual Reflections

- Yoonseo Kim

- Sungha Eom

> I contributed to most of the SignIn, Home, Rank, History page with Sangmin. I mostly contributed to designing the static screen of SignIn, Home, each Ranking pages, and implemented props functions for passing data like user information. I also helped Sihyun and Yoonseo implementing POS game little bit since that part contains many functions to be implemented. They did the main parts and I helped to check for user inputs whether they are correct and show popup dialogs, so on. These bullets are summary of what I’ve did mostly. 
> - Signin: SignIn screen and connecting to Home screen after signing in.
> - Home: Home screen,  linking buttons to each corresponding pos game using image mapper, ranking or pos history page
> - Pos Game: pop up dialog for giving questions, dialog for after finishing game,  functions to check user inputs with answer, store user’s record if the user’s record is within top 8 and then connecting to Home screen after finishing the game.
> - Ranking: designing the each level’s History screen
>
> I felt difficult when our teammates were fixing minor issues separately and communicate through messengers, because explanation tends to be not clear enough and I could not see the issue visually. But it was not a big issue because we worked mostly together. 
>
> I learned a lot while building an app from the start until deployment. Mostly I participated in fixing or building code for implementing functions, but I had new experiences like app deployment with Heroku + Git, and doing evenly contributing team project. One useful implement skill I learned is to quickly understand others’ code so that I could support them. I helped Sihyun and Yoonseo while they were implementing POS game with specific functions like checking user inputs, so on. I had to quickly learn their code structures and use their code. Through this experience I felt quickly understanding the already existing structures of code is necessary and important to be part of some big project in the future, like working as a developer. I wish I could actually find some bugs and contribute to improvements in code rather than just reading and understanding it. Also I found it useful to use tag extensions to quickly learn the implementation structure.

- Sihyun Yu

> I contributed to most of the POS UI page with Yoonseo. Specifically, I contributed to Gifticon page after clicking, enabled lock/unlock for each button, history following by red border with given order at each level, entering the code with Gifticon popup and so on. The Gifticon popup UI is used as the default popup page for our whole prototype. In addition, I contributed to implementing a most functional part of POS (like switching the menu list if we click prev triangle or next triangle) but since the reflection required to focus on ‘UI part’, I will not explain this in detail. 
>
> Since I already took CS473, Intro to Social Computing last semester so I’m quite familiar with web programming, especially for React.js. Therefore, I didn’t feel a lot of difficulties while implementing many functions and UIs. A small difficulty was about POS function: since I had no experience with working at the cafe, so I needed to ask what buttons and functions should be implemented very frequently to cafe part-time job workers. Plus, in the previous semester when I took CS473, we used only pure .css file (which was very challenging) but in this semester our TA suggested us to use react-semantic-ui. At the first time, this was challenging since I haven’t used it before and I’m only get used of pure css. However, after getting familiar with react-semantic-ui, it became much easier to layout and add some fancy UI features that I wanted to add. For coloring layout, since I have used material-ui design, I already know what color and transparency feel users to UI beautiful. (Like the background color of gift icon popup).  
>
> There was a small difficulty in communication. In the previous semester, I did almost part of front-end, and the other one teammate did most part of back-end. Therefore, there was no need to communicate with other teammates about front-end implementation such as: why and how did you implement like this? However, in this semester, all of us contributed to front-end all of us think a bit differently while implementation. Due to the complex structure of web programming, we consumed some time to understand each others’ implement structure since the overall structure of the web programming code is very complicated. (Like how others do manage props, state…) 
>
> In the previous semester, the management of ‘state’ among files was challenging since I was not familiar with React.js. In this semester, I managed most states in javascript files in Stores folder so that efficiently manage some states that I need to synchronize. Therefore, there’s no conflict in managing state and this is the thing that I thought useful In this semester. Plus, I also used the error handling method that we used on last semester using Kakaotalk. Using these methods, we can efficiently solve some errors after brief implement.

- Sangmin Lee

> I made History Page and Ranking page mainly. I also made description part of POS.
>
> I have two big difficulties. First is making UI of history page, and second is implementing timer. 

### Studio Reflections

