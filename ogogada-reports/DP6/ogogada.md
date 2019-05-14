# [DP6] Hi-fi Prototyping

## Team Ogogada
Sangmin Lee, Yoonseo Kim, Sungha Eom, and Sihyun Yu

### POV

### Target Users

### Tasks

### Implementation Notes

### Individual Reflections

- Yoonseo Kim

- Sungha Eom

- Sihyun Yu

> I contributed to most of the POS UI page with Yoonseo. Specifically, I contributed to Gifticon page after clicking, enabled lock/unlock for each button, history following by red border with given order at each level, entering the code with Gifticon popup and so on. The Gifticon popup UI is used as the default popup page for our whole prototype. In addition, I contributed to implementing a most functional part of POS (like switching the menu list if we click prev triangle or next triangle) but since the reflection required to focus on ‘UI part’, I will not explain this in detail. 
>
> Since I already took CS473, Intro to Social Computing last semester so I’m quite familiar with web programming, especially for React.js. Therefore, I didn’t feel a lot of difficulties while implementing many functions and UIs. A small difficulty was about POS function: since I had no experience with working at the cafe, so I needed to ask what buttons and functions should be implemented very frequently to cafe part-time job workers. Plus, in the previous semester when I took CS473, we used only pure .css file (which was very challenging) but in this semester our TA suggested us to use react-semantic-ui. At the first time, this was challenging since I haven’t used it before and I’m only get used of pure css. However, after getting familiar with react-semantic-ui, it became much easier to layout and add some fancy UI features that I wanted to add. For coloring layout, since I have used material-ui design, I already know what color and transparency feel users to UI beautiful. (Like the background color of gift icon popup).  
>
> There was a small difficulty in communication. In the previous semester, I did almost part of front-end, and the other one teammate did most part of back-end. Therefore, there was no need to communicate with other teammates about front-end implementation such as: why and how did you implement like this? However, in this semester, all of us contributed to front-end all of us think a bit differently while implementation. Due to the complex structure of web programming, we consumed some time to understand each others’ implement structure since the overall structure of the web programming code is very complicated. (Like how others do manage props, state…) 
>
> In the previous semester, the management of ‘state’ among files was challenging since I was not familiar with React.js. In this semester, I managed most states in javascript files in Stores folder so that efficiently manage some states that I need to synchronize. Therefore, there’s no conflict in managing state and this is the thing that I thought useful In this semester. Plus, I also used the error handling method that we used on last semester using Kakaotalk. Using these methods, we can efficiently solve some errors after brief implement.

- Sangmin Lee

> I made History Page and Ranking page mainly. I made all of the components in the History select page and Ranking select page such as, history table, back button, etc. I also made description part of POS. 
>
> I have two big difficulties during this project. First is making UI of history page, and second is implementing timer. 
>
> Because this project is my first web programming using react, I was confused everytime I try to add components in our project. At first, I didn't understand any concepts of components of react, and I don't know how to add some functions at table with semantic-ui-react. However, after I become familier with react, I can add some properties(such as, clickable, invert, etc.) and make it better than hard coded html table easily.
>
> Implementing timer was also a big problem to me. I can easily find timer source code, but it is hard to make it run automatically after POS page rendered, and stop automatically when user press "Submit" button at payment dialog. Since this is my first web programming with react, I don't know anything about 'componentDidMount'. After I spent some time for search the solution of this problem at google, I learn the life cycle of react component and can make timer start automatically. Make timer stop automatically is more difficult than make timer start. In our program, paymentDialog component and timer component are quite apart. Therefore to make interaction between those, it needs to use 'props'. But I don't know any concepts of parent and child interaction, so I studied more than 3 hours to get solution of this problem. Without these problems, I also have some troubles with fixing bugs.
>
> Through DP5 and DP6, I learn lots of implementation skills of web programming. I learn how to use React, and semantic-ui-react. I also learn how to deal with props. Moreover I got some tips to place components with .css.

### Studio Reflections