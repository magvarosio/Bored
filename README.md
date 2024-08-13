<a id="idtext"></a>

# 🥱 Bored? 🥱

![image1](https://user-images.githubusercontent.com/112773333/212899152-ab496005-e44d-4dc9-bae2-be7aabe81516.png)


## Table of Contents
- [Concept](#concept)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Project Brief](#project-brief)
- [Installation instructions](#installation-instructions)
- [Planning](#planning)
- [Process](#process)
- [Challenges](#challenges)
- [Wins](#wins)
- [Key Learnings](#key-learnings)
- [Future Improvements](#future-improvements)
- [Author](#authors)

## Concept

"Bored? Is a website that tries to inspire you with ideas for things to do that are meaningful and productive. When you enter the site, you see a homepage that lets you browse different activity categories. When you choose a category, the site suggests an activity for you to try. If you don't like the suggestion, you can click "Try again" to get a new suggestion within that same category. Or, if you're feeling adventurous, you can choose the "Surprise Me!" option to get a random activity from any category.


## Deployment

Please follow this link to view the Project: https://general-assembly-project-two.netlify.app/ 

Repository link: https://github.com/magvarosio/Bored



## Technologies Used 
- [x]  React
- [x]  JSX
- [x]  Axios
- [x]  SCSS
- [x]  CSS
- [x]  JavaScript
- [x]  HTML5
- [x]  Yarn
- [x]  Insomnia
- [x]  Git 
- [x]  GitHub
- [x]  Netlify (deployment)
- [x]  Excalidraw
- [x]  VS Code
- [x]  Git + GitHub


## Project Brief

- Consume a public API – this could be anything, but it must make sense for your project.
- Have several components
- The app can have a router - with several "pages", this is up to you and if it makes sense for your project.
- Include wireframes - that you designed before building the app.
- Be deployed online and accessible to the public


## Installation instructions

To get started, clone or download the GitHub repository. Open it in your preferred text editor and run `yarn` in your terminal to install all necessary dependencies. Then, install Axios using the command `yarn add axios`. Once that's done, you can start the server by running `yarn start`.


## Planning

Because we only had 48 hours to complete this project after receiving the assignment, we had to come up with a plan quickly.

We created a short list of priorities and identified the minimum features that needed to be completed in order to meet the project requirements. We also identified additional functionality that could be implemented if we had more time. To plan out the structure of our code, we used pseudocode to work through the logic and framework.

For this project, we all worked together from start to finish to get the most out of learning from each other.  Lucy kept everything up to date on Github, and we worked on the coding together as a group sharing the screen on Zoom. When we were finished, Imra and I forked the final version.

We used Excalidraw to create a rough sketch of the website's appearance and functionality, as well as outline the user experience.

(If you like to see our plan in detail, please press the on image and it will take you to a separate page.)

![image5](https://user-images.githubusercontent.com/112773333/212900177-289680c1-3dfb-45d1-81dc-48f7c90b0b1d.png)


## Process

We found the "bored" API for finding ideas for things to do when you're feeling uninspired. It works by returning a random single object when you make a request. These objects contain information about different activities that you can try. For example, you might get a suggestion to go for a social activity,  start a new hobby or try a new recipe. One of the nice things about this API is that you can use endpoint filters to narrow down the results. For example, if you only want to see outdoor activities, you can use the "activity" filter to only get suggestions for things like hiking or biking. This can be a helpful way to find ideas that match your interests and preferences.


![image2](https://user-images.githubusercontent.com/112773333/212902198-ddaef813-c9a0-4cdd-bbcb-c618a4c48e6b.png)

We used the useEffect hook and the useCallback function to retrieve data from the API. The location variable and the handleGetChoice function were included in the dependency array, so that the data would be fetched whenever the user made a selection from the activity index.

![Screenshot 2023-01-17 at 12 45 23](https://user-images.githubusercontent.com/112773333/212902331-0ee8114b-5a3a-4aa9-b5d8-85d69e1f01ab.png)

We used the 'choice type' to extract data for each category. These are the categories: 

<img width="523" alt="Screenshot 2023-01-17 at 12 45 58" src="https://user-images.githubusercontent.com/112773333/212902465-cf16d647-5746-4152-b3e8-7622d668feb0.png">
![image3](https://user-images.githubusercontent.com/112773333/212902510-28431aac-f5ee-406b-93a3-660c554bfcb9.png)

### "Surprise Me!" button

This function generates a random choice when the "Surprise Me!" button is clicked." The getRandomChoice function returns a random element from an array named "choicesArray". Then the function "navigateToChoicePage" is called with the randomly chosen element as a parameter.


![Screenshot 2023-01-17 at 12 47 08](https://user-images.githubusercontent.com/112773333/212902670-06599193-1a54-47b6-a566-840e98256084.png)

![image4](https://user-images.githubusercontent.com/112773333/212902725-e4978e2d-2bdb-469c-8c10-a2781412bb6c.png)

## Challenges

During the project, our group brainstormed several ideas for APIs. However, we ultimately decided to use one that was not very data-rich and had some limitations. There were no images and only a few entries with links. The data was easy to access, but only one dataset could be returned at a time and there was no endpoint for viewing all the objects in the API at once. The documentation was also very minimal and we had to spend time familiarising ourselves with it using Insomnia. Working together on the code took longer than expected and we were able to complete the minimum viable product, but we would have liked to add more functionality to the site. Perhaps this could have been achieved if each person had been assigned a specific part of the project. We were limited in terms of styling and responsiveness due to the time constraint. We also would have liked to rename the "Busywork" category, but we had to keep the key name as it was written in the database because of how we used the activity keys on the site.


## Wins

We initially had a strong idea involving a different API, but after discussing and doing some initial planning, we realized that we wouldn't be able to achieve our desired endpoint within the allotted time frame. We made the decision to switch to a more achievable goal, which I think demonstrates our ability to be flexible and adapt our plan as needed. Working with others was a valuable learning experience for me. We had a good working dynamic as a team and were able to work effectively together. Each team member brought something different to the project and it was helpful to be able to share knowledge and talk through ideas. I felt that I was able to effectively bring the team's ideas together. We kept the user story simple and well-defined, made regular commits to GitHub to allow for experimentation, and made sure to write "DRY" (Don't Repeat Yourself) code.


## Key Learnings

Working on this project allowed me to improve my skills and knowledge in several areas.
I gained more confidence in my ability to navigate and access data returned from an API. I had the opportunity to practise using REACT and learned more about when to use useState and useEffect. I also learned about and used useNavigate, useLocation, and useCallback. This was my first time working with Bootstrap and SASS, and I also deployed a site for the first time using Netlify.


## Future Improvements

If we had more time, we would have liked to utilise more of the data provided by the API. For example, we could have transformed the price data and accessibility ratings and displayed them along with the activity on the single activity page (e.g. as £, ££, £££). We also would have liked to add filters for the number of participants, cost, and accessibility. The pictures on the website currently break out of their designated area on smaller screens, so some adjustments would need to be made to make the design fully responsive and suitable for use on the go. We would have also liked to use another API to provide dynamic images for the categories and possibly more information about each activity. Adding a search feature, like the ability to search for specific keywords in the activity descriptions, would also be a useful addition. Finally, it would be great to make the website fully responsive and suitable for use on the phone as an app.


## Authors

- Email - amvarosio8@gmail.com
 
[Back to the top ⬆️](#idtext)

