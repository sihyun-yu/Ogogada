# Ogogada POS

Make sure to add a README file that briefly describes the code, e.g., main JavaScript file, or where main feature implementations are, etc. Several lines are enough.

# Instruction
1. Clone the repository
2. run 
```sh
yarn
yarn start
```
3. Use our POS

# Code description
## src
### assets
1. ```meta.js```: includes our local datas such as menus at POS, answers and history for each stage, gifticon code, and so on
2. ```other image files```: includes background images, and some button images for popup
3. ```secret.js```: includes our firebase key

### components
#### Home
1. ```HomeComponent.jsx```: jsx file for our stage selection page after login
##### History
1. ```HistoryComponent.jsx```: jsx file for our history selection page after clicking question box at the main page.
##### Ranking 
2. ```RankingComponent.js```: jsx file for our ranking selection page after clicking trophy box at the main page.
3. ```./RankingLevels/RankingComponent.js```: jsx file for our ranking page after clicking certain at the ranking selection page.
