# Ogogada POS

# Instruction
1. Clone the repository
2. run 
```sh
yarn
yarn start
```
3. Use our POS

# Code description
## ./src
### /assets
1. ```meta.js```: includes our local datas such as menus at POS, answers and history for each stage, gifticon code, and so on
2. ```other image files```: includes background images, and some button images for popup
3. ```secret.js```: includes our firebase key

### /components
#### /Home
1. ```HomeComponent.jsx```: jsx file for our stage selection page after login
##### /History
1. ```HistoryComponent.jsx```: jsx file for our history selection page after clicking question box at the main page.
##### /Ranking 
2. ```RankingComponent.js```: jsx file for our ranking selection page after clicking trophy box at the main page.
3. ```./RankingLevels/RankingComponent.js```: jsx file for our ranking page after clicking certain at the ranking selection page.

#### /POS
1. ```PosComponent.jsx```: codes to export all components of POS
##### /Description
1. ```DescriptionComponent.jsx```: includes code for showing the current state at the game page
2. ```Timer.jsx```: contains source code for the timer for our game
##### /MenuList
1. ```QuestionDialogComponent.jsx```: includes code for popup after level-up
2. ```MenuListComponent.jsx```: includes code to export buttons at upper-left
3. ```RefundDialogComponent.jsx```: includes code for popup after clicking refund button
4. ```GifticonDialogComponent.jsx```: includes code for popup after clicking gifticon button
5. ```RefundComponent.jsx```: includes code for refund button
6. ```GifticonComponent.jsx```: includes code for gifticon button
7. ```MenuItemComponent.jsx```: includes code for menu button
8. ```MenuChangeComponent.jsx```: includes code for menu switch button

##### /NumberList
1. ```NumberListComponent.jsx```: includes code to export number buttons
2. ```NumberItemComponent.jsx```: includes code for number button

##### /Payment
1. ```PaymentComponent.jsx```: includes code for payment button
2. ```PaymentDialogComponent.jsx```: includes code for payment popup after clicking payment button

##### /SummaryTable
1. ```SummaryTotalComponent.jsx```: 
2. ```SummaryTableComponent.jsx```
3. ```SummaryPaymentMethodComponent.jsx```
4. ```SummaryMenuListComponent.jsx```
5. ```SummaryMenuItemComponent.jsx```
6. ```SummaryCouponComponent.jsx```
7. ```PaymentMethodButton.jsx```

#### /PosHistory
All files are similar to files in POS folder above. Added some lines for each code to implement showing history with red border at each button

#### /Signin
1. ```SignInComponent.jsx```: includes code for log-in page at the beginning

### /Stores
1. ```CouponStore.js```: manages selected coupon state
2. ```HistoryStore.js```: manages current history index and history answer list
3. ```index.js```: export all Store javascript files 
4. ```MenuStore.js```: manages all states like add/delete menus, gifticon code insert, timer on/off, popup manage, and so on
5. ```NumberStore.js```: manages the clicked number state
6. ```PaymentMethodStore.js```: manages the payment method is card or cash
7. ```HomeStore.js```: manages id, password, and level

### /stylesheets
each ```.css``` file corresponds to the design of the same name ```.js``` or ```.jsx``` file. 

