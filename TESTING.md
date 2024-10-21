# Table of Contents

- [Introduction](#introduction)
- [User Story Testing](#user-story-testing)
- [Validator Testing](#validator-testing)
  - [JSX](#jsx)
  - [HTML](#html)
  - [CSS](#css)
  - [Python](#python)
  - [Lighthouse](#lighthouse)
- [Function Test](#function-test)
  - [Custom Automated Testing](#custom-automated-testing)
    - [Executed automatic test cases and results](#executed-automatic-test-cases-and-results)
  - [Custom Manual Testing](#custom-manual-testing)
    - [Executed manual test cases and results](#executed-manual-test-cases-and-results)
  - [DRF-API Test Cases Representation](#drf-api-test-cases-representation)

## Introduction

This document encompasses the verification of the DRF-API backend and the React frontend.

## User Story Testing

A detailed breakdown of the project's user stories categorized into various epics. Each epic outlines specific goals and how they are achieved, providing insights into the development process.

<details>
<summary>US and Epics</summary> 
<br>

**EPIC - Scope**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a product owner, I want to define the project scope and vision so that all stakeholders have a clear understanding of the project's goals and objectives | The project scope and vision are defined during initial phase and documented in a project charter | |
| As a product owner, I want to identify key features and functionalities required for the application so that it meets user needs effectively | Key features are identified through user research and requirements gathering sessions with stakeholder(s) | |

**EPIC - Development**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a developer, I want to set up a project repository for the front-end and back-end so that I can manage the codebase efficiently | Set up separate Git repositories for the front-end and back-end on GitHub and configure them with appropriate README files and branch protections | |
| As a developer, I want to configure the development environment so that I can ensure consistent setup across different machines | Use tools like Docker to create consistent development environments, and document setup instructions in the README.md file | |
| As a developer, I want to design a responsive user interface using React so that users have a seamless experience across devices | Implement responsive design principles using CSS frameworks like Bootstrap and test across different devices and screen sizes | |
| As a developer, I want to create reusable components in React so that the codebase is maintainable and scalable | Develop React components with a modular architecture and document them | |
| As a developer, I want to create a Django project and set up the Django Rest Framework so that I can build the API | Initialize a Django project, install Django Rest Framework, and configure settings including database connections | |
| As a developer, I want to design database models so that the data is structured logically | Create Django models to represent the data structure, ensuring relationships and constraints are appropriately defined | |
| As a developer, I want to implement CRUD operations in the API so that users can manage their content | Develop API views and serializers in Django Rest Framework to handle create, read, update, and delete operations for the main entities | |
| As a developer, I want to integrate the front-end with the back-end API so that data can be fetched and displayed dynamically | Use Axios or Fetch API in React to make requests to the Django REST API and update the UI based on the responses | |
| As a developer, I want to secure user data by storing passwords hashed and ensuring sensitive information is protected | Use Django's built-in password hashing mechanism and configure environment variables for sensitive settings using `env.py` and Heroku Config Vars | |
| As a developer, I want to write tests so that I can ensure the functionality of my React components | Write manual tests for React components | |
| As a developer, I want to write tests so that I can verify the correctness of the API endpoints | Use Django's test framework to write unit tests and integration tests for API endpoints, ensuring they return expected results | |

**EPIC - Navigation & Authentication**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view a navbar from every page so that I can navigate easily between pages | Implement a persistent navigation bar component in React that is included on all pages | |
| As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh | Use React Router to enable client-side routing, ensuring navigation does not trigger full page reloads | |
| As a user I can create a new account so that I can access all the features for signed up users | Develop a registration form that submits user data to the Django REST API to create new user accounts | |
| As a user I can sign in to the app so that I can access functionality for logged in users | Implement a login form that authenticates users via the Django REST API and stores the authentication token in local storage | |
| As a user I can tell if I am logged in or not so that I can log in if I need to | Display user authentication status in the navigation bar, showing different links based on login state | |
| As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised | Use token-based authentication with automatic token refresh to keep users logged in until they explicitly log out | |
| As a logged out user I can see sign in and sign up options so that I can sign in/sign up | Ensure the navigation bar shows links to the sign-in and sign-up pages for unauthenticated users | |
| As a user I can view user's avatars so that I can easily identify users of the application | Display user avatars in the navigation bar, user profiles, and next to user-generated content | |

**EPIC - Adding & Liking Posts**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a logged in user I can create posts so that I can share my images with the world! | Develop a post creation form in React that submits new posts to the Django REST API | |
| As a user I can view the details of a single post so that I can learn more about it | Implement a post detail page that fetches and displays a single post's data from the API | |
| As a logged in user I can like a post so that I can show my support for the posts that interest me | Add a like button to posts that sends a like request to the API and updates the like count on the UI | |

**EPIC - The Posts Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content | Fetch and display posts from the API in descending order of creation date | |
| As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in | Implement a search bar that filters posts based on keywords entered by the user | |
| As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most | Create a view that fetches and displays posts liked by the authenticated user | |
| As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about | Implement a feed that displays posts from users followed by the authenticated user |
| As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc | Implement infinite scroll functionality that fetches more posts as the user scrolls down | |
| As a user, I want to add hashtags to my posts so that they are easier to find | Add a hashtag feature to the post creation form and store tags in the database | Not fully implemented, see [Known and unsolved issues](known-and-unsolved-issues) |
| As a user, I want to search for posts by tags so that I can find related content | Implement a tag search feature that filters posts based on selected tags | |

**EPIC - The Post Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view the posts page so that I can read the comments about the post | Display the post's comments below the post content on the post detail page | |
| As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created | Add an edit button to the post detail page that opens a form for updating the post's title and description | |
| As a logged in user I can add comments to a post so that I can share my thoughts about the post | Implement a comment form on the post detail page that submits new comments to the API | |
| As a user I can see how long ago a comment was made so that I know how old a comment is | Display timestamps next to each comment showing how long ago they were posted | |
| As a user I can read comments on posts so that I can read what other users think about the posts | List comments below the post content on the post detail page | |
| As an owner of a comment I can delete my comment so that I can control removal of my comment from the application | Add a delete button to each comment that sends a delete request to the API and removes the comment from the UI | |
| As an owner of a comment I can edit my comment so that I can fix or update my existing comment | Add an edit button to each comment that opens a form for updating the comment's content | |
| As a user, I want to add category to my posts so that they are easier to find. | Develop category feature in the API and provide UI elements for adding and displaying category on posts | |

**EPIC - The Profile Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view other users profiles so that I can see their posts and learn more about them | Implement user profile pages that display user information and their posts | |
| As a user I can see a list of the most followed profiles so that I can see which profiles are popular | Create a section on the site that lists the most followed profiles | |
| As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them | Display user statistics (number of posts, follows, and followed users) on profile pages | |
| As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed | Implement follow and unfollow buttons on user profiles that update the follow status via the API | |
| As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them | List all posts by the user on their profile page | |
| As a logged in user I can edit my profile so that I can change my profile picture and bio | Add an edit profile button that opens a form for updating the profile picture and bio | |
| As a logged in user I can update my username and password so that I can change my display name and keep my profile secure | Provide options for changing username and password in the user settings | |
| As a developer, I want to implement a blocking functionality so that users do not have to see posts from users they have blocked | Develop a blocking feature in the API and provide UI controls for blocking users | |
| As a user, I want to be able to block other users so that they cannot interact with my content | Add block buttons to user profiles that update the block status via the API | Moved to future feature backlog |
| As a developer, I want to create a contact form that stores user queries, complaints, or suggestions in the Contact model so that the platform can handle user feedback | Implement a contact form that submits user feedback to the API and stores it in the database | |
| As a user, I want to send feedback or queries to the platform administrators so that I can report issues or suggest improvements | Add a feedback form accessible from the user menu that submits feedback to the platform administrators | |

</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Validator Testing


### HTML

I validated my HTML pages using the W3 Nu HTML Checker. They came back with no errors, only pointers about redundant trailing slashes left by React. Please check the results for each page below.

<details>
<summary>HTML validation results</summary>

<br>

[PostsPage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2F)

[Post Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fposts%2F66)

[Profile](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fprofiles%2F4)

[Edit profile](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fprofiles%2F4%2Fedit)

[Sign Up](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fsignup)

[Sign In](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fsignin)

[PostCreateForm](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fposts%2Fcreate)

[PostEditForm](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fposts%2F1%2Fedit)

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### CSS

Validation process was automated by using the 'CSS-validator npm package'. All pages come back clean without any errors. </br>

Vendor extensions are CSS properties or pseudo-elements specific to particular browser engines, prefixed with -webkit-, -moz-, etc. Pseudo-elements allow styling of parts of an element, such as scrollbars. In index.css, vendor extensions include -apple-system, -webkit-font-smoothing, and -moz-osx-font-smoothing. In App.module.css, vendor-specific pseudo-elements include ::-webkit-scrollbar, ::-webkit-scrollbar-track, and ::-webkit-scrollbar-thumb.

Our project includes a CSS validation script `validate-css.js` that ensures all stylesheets adhere to web standards. This script uses the [W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator) to check for errors and warnings in our CSS files. Vendor-specific properties and pseudo-elements are flagged as warnings, which are expected. The validation process helps maintain clean, error-free CSS, enhancing cross-browser compatibility and overall code quality. To run the validation, use the command npm run validate:css.

<details>
<summary>CSS validation results</summary>

<br>

![CSS-01](/documentation/testing_image/validate_css_01.png)

![CSS-02](/documentation/testing_image/validate_css_02.png)

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Python

<details>
<summary>PEP8</summary>
<br>

All Python files were run validated with pep8 and cleaned until no errors were found.

![pep8](/documentation/testing_image/validate_python.png)

</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Lighthouse

I used Lighthouse to test all pages. Performance results were quite low, but this is to be expected when loading multiple images from an API, and sending lots of requests to another API. All other scores are good.

<details>
<summary>Desktop</summary>
<br>

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 76          | 95            | 78             | 100 |
| Post Detail  | 72          | 90            | 78             | 100 |
| Post Form    | 77          | 95            | 78             | 100 |
| Profile page | 87          | 88            | 78             | 92  |
| Login        | 95          | 88            | 96             | 92  |
| Register     | 95          | 88            | 96             | 92  |

</details>
<br>

<details>
<summary>Mobile</summary>
<br>

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 61          | 95            | 79             | 100 |
| Post Detail  | 55          | 90            | 79             | 100 |
| Post Form    | 69          | 95            | 79             | 100 |
| Profile page | 76          | 86            | 79             | 92  |
| Login        | 89          | 95            | 96             | 100 |
| Register     | 90          | 95            | 96             | 100 |

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Function Test

<details>
<summary>Test configuration</summary>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

**Test Environment**

- Desktop:
  - Own built PC
- Screen:
  - Samsung Odyssey G5 / 32" / 2560 x 1440 /
- Mobile:
  - Iphone 13 PRO

**Browser compatibility**

I have tested this site on the following browsers:

- Google Chrome, Version 130.0.6723.59 (Official build) (64-bit)

**React Bootstrap Breakpoints**
<br>
[Link for reference](https://react-bootstrap-v4.netlify.app/layout/grid/#col-props)

| **Breakpoint**    | **Prefix** | **Minimum Width** |
| ----------------- | ---------- | ----------------- |
| Extra Small       | `xs`       | `< 576px`         |
| Small             | `sm`       | `≥ 576px`         |
| Medium            | `md`       | `≥ 768px`         |
| Large             | `lg`       | `≥ 992px`         |
| Extra Large       | `xl`       | `≥ 1200px`        |
| Extra Extra Large | `xxl`      | `≥ 1400px`        |

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Preparation and setup

**setUp Method**:

- This method is called before each individual test method to set up the necessary state.
- It creates a user with the username 'adam' and the password 'pass'.
- Logs in the created user.
- Creates a post associated with the logged-in user.
- Prepares the initial test environment.

**tearDown Method**:

- This method is called after each test method to clean up the test environment.
- Logs out the user.
- Deletes all User and Post instances to ensure a clean state for the next test.

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

<br>

<details>

<summary>comments</summary>

| ID       | Description                                                                                                                                                                                               | Expected Outcome                                                                                                        | Result | Comment |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| CMT-A-01 | Test `def test_can_list_comments(self):` checks if comments can be listed successfully. It sends a GET request to `/comments/`.                                                                           | Comments are listed successfully with a status code of 200 OK.                                                          | PASS   |         |
| CMT-A-02 | Test `def test_can_create_comment(self):` checks if a comment can be created successfully. It sends a POST request to `/comments/`.                                                                       | The comment is created successfully with a status code of 201 Created.                                                  | PASS   |         |
| CMT-A-03 | Test `def test_can_retrieve_comment_using_valid_id(self):` checks if a comment can be retrieved using a valid ID. It sends a GET request to `/comments/<id>/`.                                            | The comment is retrieved successfully with a status code of 200 OK.                                                     | PASS   |         |
| CMT-A-04 | Test `def test_cant_retrieve_comment_using_invalid_id(self):` checks that retrieving a comment with an invalid ID returns 404. It sends a GET request to `/comments/999/`.                                | The request returns a status code of 404 Not Found.                                                                     | PASS   |         |
| CMT-A-05 | Test `def test_user_can_update_own_comment(self):` checks if a user can update their own comment. It sends a PUT request to `/comments/<id>/`.                                                            | The comment is updated successfully with a status code of 200 OK and the updated content is reflected in the response.  | PASS   |         |
| CMT-A-06 | Test `def test_user_can_delete_own_comment(self):` checks if a user can delete their own comment. It sends a DELETE request to `/comments/<id>/`.                                                         | The comment is deleted successfully with a status code of 204 No Content.                                               | PASS   |         |
| CMT-A-07 | Test `def test_user_cant_create_comment_without_authentication(self):` checks that a user cannot create a comment without authentication. It sends a POST request to `/comments/` without authentication. | The request returns a status code of 403 Forbidden, preventing the creation of the comment without user authentication. | PASS   |         |


</details>

<br>

<details>

<summary>followers</summary>

<br>

No automatic test executed, only manual.


</details>

<br>

<details>

<summary>likes</summary>

<br>

| ID       | Description                                                                                                                                                   | Expected Outcome                                                                                                | Result | Comment |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| LKE-A-01 | Test `def test_like_post(self):` checks if a user can like a post. It sends a POST request to `/likes/`.                                                      | The like is created successfully with a status code of 201 Created and the post ID is returned in the response. | PASS   |         |
| LKE-A-02 | Test `def test_cannot_like_post_twice(self):` checks if a user cannot like a post twice. It sends a POST request to `/likes/`.                                | The request returns a status code of 400 Bad Request, indicating that the user cannot like the same post twice. | PASS   |         |
| LKE-A-03 | Test `def test_unlike_post(self):` checks if a user can unlike a post. It sends a DELETE request to `/likes/<id>/`.                                           | The like is deleted successfully with a status code of 204 No Content.                                          | PASS   |         |
| LKE-A-04 | Test `def test_user_cannot_unlike_another_users_like(self):` checks if a user cannot unlike another user's like. It sends a DELETE request to `/likes/<id>/`. | The request returns a status code of 403 Forbidden, indicating that a user cannot unlike another user's like.   | PASS   |         |

##### Results in terminal

![BLK](/documentation/testing_image/test-result-likes.png)

</details>

<br>

<details>

<summary>posts</summary>

<br>

| ID       | Description                                                                                                                                                       | Expected Outcome                                                                                           | Result | Comment |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------ | ------- |
| PST-A-01 | Test `def test_can_list_posts(self):` checks if posts can be listed successfully. It sends a GET request to `/posts/`.                                            | Posts are listed successfully with a status code of 200 OK.                                                | PASS   |         |
| PST-A-02 | Test `def test_logged_in_user_can_create_post(self):` checks if a logged-in user can create a post. It sends a POST request to `/posts/`.                         | The post is created successfully with a status code of 201 Created.                                        | PASS   |         |
| PST-A-03 | Test `def test_user_not_logged_in_cant_create_post(self):` checks if an unauthenticated user cannot create a post. It sends a POST request to `/posts/`.          | The request returns a status code of 403 Forbidden, indicating that the user must be authenticated.        | PASS   |         |
| PST-A-04 | Test `def test_can_retrieve_post_using_valid_id(self):` checks if a post can be retrieved using a valid ID. It sends a GET request to `/posts/<id>/`.             | The post is retrieved successfully with a status code of 200 OK.                                           | PASS   |         |
| PST-A-05 | Test `def test_cant_retrieve_post_using_invalid_id(self):` checks that retrieving a post with an invalid ID returns 404. It sends a GET request to `/posts/999/`. | The request returns a status code of 404 Not Found.                                                        | PASS   |         |
| PST-A-06 | Test `def test_user_can_update_own_post(self):` checks if a user can update their own post. It sends a PUT request to `/posts/<id>/`.                             | The post is updated successfully with a status code of 200 OK and the updated content is reflected.        | PASS   |         |
| PST-A-07 | Test `def test_user_cant_update_another_users_post(self):` checks that a user cannot update another user's post. It sends a PUT request to `/posts/<id>/`.        | The request returns a status code of 403 Forbidden, indicating that the user cannot update another's post. | PASS   |         |
| PST-A-08 | Test `def test_user_can_delete_own_post(self):` checks if a user can delete their own post. It sends a DELETE request to `/posts/<id>/`.                          | The post is deleted successfully with a status code of 204 No Content.                                     | PASS   |         |
| PST-A-09 | Test `def test_user_cannot_delete_another_users_post(self):` checks that a user cannot delete another user's post. It sends a DELETE request to `/posts/<id>/`.   | The request returns a status code of 403 Forbidden, indicating that the user cannot delete another's post. | PASS   |         |

##### Results in terminal

![BLK](/documentation/testing_image/test-result-posts.png)

</details>

<br>

<details>

<summary>profiles</summary>

<br>

No automatic test executed, only manual.

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Custom Manual Testing

#### Executed manual test cases and results

<details>

<summary>Navigation</summary>

<br>

| ID       | Feature        | Action      | Expected Outcome                                        | Result | Comment |
| -------- | -------------- | ----------- | ------------------------------------------------------- | ------ | ------- |
| NAV-M-01 | Navbar Logo    | Hover/Focus | Indicate focus                                          | Pass   |         |
| NAV-M-02 | Navbar Logo    | Click       | Redirect to home                                        | Pass   |         |
| NAV-M-03 | Navbar toggler | Display     | Visible on small screens only                           | Pass   |         |
| NAV-M-04 | Navbar toggler | Click       | Opens dropdown with navigation links                    | Pass   |         |
| NAV-M-05 | Following Link | Display     | Only display when user is signed in                     | Pass   |         |
| NAV-M-06 | Following Link | Click       | Open following feed page                                | Pass   |         |
| NAV-M-07 | Liked Link     | Display     | Only display when user is signed in                     | Pass   |         |
| NAV-M-08 | Liked Link     | Click       | Open liked posts feed page                              | Pass   |         |
| NAV-M-09 | Navbar Links   | Display     | Links display in header on screens above a certain size | Pass   |         |
| NAV-M-10 | Profile Link   | Display     | Only display when user is signed in                     | Pass   |         |
| NAV-M-11 | Profile Link   | Click       | Open profile page                                       | Pass   |         |
| NAV-M-12 | Register Link  | Display     | Only display when user is not signed in                 | Pass   |         |
| NAV-M-13 | Register Link  | Click       | Open signup page                                        | Pass   |         |
| NAV-M-14 | Log-in Link    | Display     | Only display when user is not signed in                 | Pass   |         |
| NAV-M-15 | Log-in Link    | Click       | Open login page                                         | Pass   |         |
| NAV-M-16 | Log-out Link   | Display     | Only display when user is signed in                     | Pass   |         |
| NAV-M-17 | Log-out Link   | Click       | Log the user out                                        | Pass   |         |

</details>

<br>

<details>

<summary>Home</summary>

<br>

| ID       | Feature           | Action  | Expected Outcome                                                 | Result | Comment |
| -------- | ----------------- | ------- | ---------------------------------------------------------------- | ------ | ------- |
| HME-M-01 | Post list         | Display | All posts appear in sorted order                                 | Pass   |         |
| HME-M-02 | Post              | Display | Post displays title, author, image, content, and time of posting | Pass   |         |
| HME-M-03 | Post              | Display | Post displays the number of likes and comments                   | Pass   |         |
| HME-M-04 | Avatar            | Display | Post owner's avatar is present on the post                       | Pass   |         |
| HME-M-05 | Avatar            | Click   | Clicking an avatar opens the associated profile page             | Pass   |         |
| HME-M-06 | Post Link         | Click   | Clicking the post opens the detail page                          | Pass   |         |
| HME-M-07 | Like Icon         | Click   | Like/Unlike the post                                             | Pass   |         |
| HME-M-08 | Like Counter      | Display | Display the correct number of likes received by the post         | Pass   |         |
| HME-M-09 | Comment Icon      | Click   | Open the post's comment section                                  | Pass   |         |
| HME-M-10 | Comment Counter   | Display | Display the correct number of comments on the post               | Pass   |         |
| HME-M-11 | Search Bar        | Input   | Apply search term and filter posts automatically                 | Pass   |         |
| HME-M-12 | Category Filter   | Click   | Apply category term and filter posts automatically               | Pass   |         |
| HME-M-13 | 'New Post' Button | Display | Only visible to signed-in users                                  | Pass   |         |
| HME-M-14 | 'New Post' Button | Click   | Open post form                                                   | Pass   |         |
| HME-M-15 | Post feed         | Display | All posts appear in an infinite scroll feed                      | Pass   |         |                | Pass   |         |
| HME-M-17 | Post feed         | Display | "Following" feed only displays posts by followed users           | Pass   |         |
| HME-M-18 | Post feed         | Display | "Liked" feed only displays posts the current user has liked      | Pass   |         |

</details>

<br>

<details>

<summary>PostPage</summary>

<br>

| ID       | Feature         | Action  | Expected Outcome                                                 | Result | Comment |
| -------- | --------------- | ------- | ---------------------------------------------------------------- | ------ | ------- |
| PST-M-01 | Post            | Display | Post displays title, author, image, content, and time of posting | Pass   |         |
| PST-M-02 | Post            | Display | Post displays the number of likes and comments                   | Pass   |         |
| PST-M-03 | Avatar          | Display | Post owner's avatar is present on the post                       | Pass   |         |
| PST-M-04 | Avatar          | Click   | Clicking an avatar opens the associated profile page             | Pass   |         |
| PST-M-05 | Edit Button     | Display | Display if logged in as the author of the post                   | Pass   |         |
| PST-M-06 | Edit Button     | Click   | Open the post editing page                                       | Pass   |         |
| PST-M-07 | Delete Button   | Display | Display if logged in as the author of the post                   | Pass   |         |
| PST-M-08 | Delete Button   | Click   | Delete the post                                                  | Pass   |         |
| PST-M-09 | Like Icon       | Click   | Like/Unlike the post                                             | Pass   |         |
| PST-M-10 | Like Counter    | Display | Display the correct number of likes received by the post         | Pass   |         |
| PST-M-11 | Comment Icon    | Click   | Open the post's comment section                                  | Pass   |         |
| PST-M-12 | Comment Counter | Display | Display the correct number of comments on the post               | Pass   |         |


</details>

<br>

<details>

<summary>Comments</summary>

<br>

| ID       | Feature       | Action  | Expected Outcome                                                 | Result | Comment |
| -------- | ------------- | ------- | ---------------------------------------------------------------- | ------ | ------- |
| CMT-M-01 | Comment Form  | Display | Display when a user is signed in                                 | Pass   |         |
| CMT-M-02 | Comment Form  | Submit  | Submit the form and add the comment to the post                  | Pass   |         |
| CMT-M-03 | Comments      | Display | Comments appear in descending order in an infinite scroll format | Pass   |         |
| CMT-M-04 | Comments      | Display | Comments display the owner's username and avatar                 | Pass   |         |
| CMT-M-06 | Comments      | Click   | Clicking the avatar opens the associated profile                 | Pass   |         |
| CMT-M-07 | Edit Button   | Display | Display if logged in as the author of the post                   | Pass   |         |
| CMT-M-08 | Edit Button   | Click   | Open the comment form                                            | Pass   |         |
| CMT-M-09 | Delete Button | Display | Display if logged in as the author of the post                   | Pass   |         |
| CMT-M-10 | Delete Button | Click   | Delete the comment                                               | Pass   |         |

</details>

<br>

<details>

<summary>PostCreateForm & PostEditForm</summary>

<br>

| ID       | Feature        | Action  | Expected Outcome                                        | Result | Comment |
| -------- | -------------- | ------- | ------------------------------------------------------- | ------ | ------- |
| PFM-M-01 | Upload Button  | Display | The upload Button appears                               | Pass   |         |
| PFM-M-02 | Upload Button  | Click   | Opens a file selector window                            | Pass   |         |
| PFM-M-03 | Title Input    | Display | The title input has a label making its purpose clear    | Pass   |         |
| PFM-M-04 | Title Input    | Input   | The user can type in the Title field                    | Pass   |         |
| PFM-M-05 | Content Input  | Display | The content input has a label making its purpose clear  | Pass   |         |
| PFM-M-06 | Content Input  | Input   | The user can type in the content field                  | Pass   |         |
| PFM-M-07 | Category Input | Display | The category input has a label making its purpose clear | Pass   |         |
| PFM-M-08 | Category Input | Click   | The user can select category the menu                   | Pass   |         |
| PFM-M-09 | Cancel Button  | Click   | Close the form without any changes                      | Pass   |         |
| PFM-M-09 | Submit Button  | Click   | Submit the form and create/update the post              | Pass   |         |
| PFM-M-10 | Submit Button  | Click   | Close the form and redirect the user to the post feed   | Pass   |         |
  

</details>

<br>

<details>

<summary>ProfilePage</summary>

<br>

| ID       | Feature                  | Action  | Expected Outcome                                                 | Result | Comment |
| -------- | ------------------------ | ------- | ---------------------------------------------------------------- | ------ | ------- |
| PRF-M-01 | Avatar                   | Display | The user's avatar appears on the top of the page                 | Pass   |         |
| PRF-M-02 | Username                 | Display | The user's username appears on the top of the page               | Pass   |         |
| PRF-M-03 | User Stats               | Display | The number of posts, followers, and followed users are displayed | Pass   |         |
| PRF-M-04 | Options Button           | Display | The option button appears if signed-in as the profile owner      | Pass   |         |
| PRF-M-05 | Options Button           | Click   | Clicking opens the profile options menu                          | Pass   |         |
| PRF-M-06 | Options Menu             | Display | Display options for editing the profile, username and password   | Pass   |         |
| PRF-M-07 | "Edit profile" Button    | Click   | Open the profile editing form                                    | Pass   |         |
| PRF-M-08 | "Change username" Button | Click   | Open the username editing form                                   | Pass   |         |
| PRF-M-09 | "Change password" Button | Click   | Open the password editing form                                   | Pass   |         |
| PRF-M-10 | User Posts               | Display | The profile owner's posts are displayed under the profile        | Pass   |         |
| PRF-M-11 | User Posts               | Display | The profile post feed has an infinite scroll layout              | Pass   |         |
| PRF-M-12 | Hide/(block) User	      | Create	| User1 can hide User2 successfully                                | Pass   |         |       


</details>

<br>

<details>

<summary>PopularProfile</summary>

<br>

| Feature                | Action  | Expected Outcome                                                                    | Result | Comment |
| ---------------------- | ------- | ----------------------------------------------------------------------------------- | ------ | ------- |
| Popular Profiles       | Display | The "popular profiles" section displays across the site                             | Pass   |         |
| Popular Profiles       | Display | The list updates to reflect the number of followers for each profile                | Pass   |         |
| Popular Profiles       | Display | The list moves to the top and center on smaller screens                             | Pass   |         |
| Popular Profiles       | Display | No "popular profiles" section appears on profile pages on smaller screens           | Pass   |         |
| Username               | Display | User avatars appear for each profile                                                | Pass   |         |
| Username               | Click   | Open the associated profile page                                                    | Pass   |         |
| Avatar                 | Display | User avatars appear on larger screens                                               | Pass   |         |
| Avatar                 | Click   | Open the associated profile page                                                    | Pass   |         |
| Follow/Unfollow Button | Display | A follow/unfollow button appears next to each profile on large screens if signed in | Pass   |         |
| Follow/Unfollow Button | Click   | Clicking the button follows/unfollows the user                                      | Pass   |         |
| Follow/Unfollow Button | Click   | Clicking the button updates the button and its sibling buttons on other components  | Pass   |         |

</details>

<br>

<details>

<summary>Sing In & Sign Up</summary>

<br>

| ID       | Feature                | Action  | Expected Outcome                                    | Result | Comment |
| -------- | ---------------------- | ------- | --------------------------------------------------- | ------ | ------- |
| SIU-M-01 | Username Input         | Display | A label and placeholder make the purpose clear      | Pass   |         |
| SIU-M-02 | Username Input         | Input   | The user can input a username                       | Pass   |         |
| SIU-M-03 | Password Input         | Display | A label and placeholder make the purpose clear      | Pass   |         |
| SIU-M-04 | Password Input         | Input   | The user can input a username                       | Pass   |         |
| SIU-M-05 | Confirm Password Input | Display | A label and placeholder make the purpose clear      | Pass   |         |
| SIU-M-06 | Confirm Password Input | Input   | The user can input a password                       | Pass   |         |
| SIU-M-07 | Sign Up Button         | Click   | Validate the form before submission                 | Pass   |         |
| SIU-M-08 | Sign Up Button         | Click   | Notify the user about any invalid data              | Pass   |         |
| SIU-M-09 | Sign Up Button         | Click   | Submit the form and create the new user and profile | Pass   |         |
| SIU-M-10 | Sign In Button         | Click   | Validate the form before submission                 | Pass   |         |
| SIU-M-11 | Sign In Button         | Click   | Notify the user about any invalid data              | Pass   |         |
| SIU-M-12 | Sign In Button         | Click   | Submit the form and create the new user and profile | Pass   |         |
</details>

### DRF-API Test Cases Representation

<details>
<summary>The manual and automatic test cases are represented in a different view, more API-centric. Below is the detailed breakdown:</summary>
<br>

### DRF API
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| Refresh token | POST | Refreshes the auth token to keep the user signed in | Pass | |
| Sign-out view | POST | Destroys the token and signs the user out | Pass | |

### Profiles
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Profile List | GET | Show a list of all profiles as JSON objects | Pass | |
| Profile List | POST | Create a new profile if valid | Pass | |
| Profile List | POST | Automatically make a profile when creating a user | Pass | |
| Profile Detail | GET | Return a specific profile if given a valid id | Pass | |
| Profile Detail | POST | Create a new profile if valid | Pass | |
| Profile Detail | PUT | Update the profile if valid | Pass | |
| Profile Detail | DELETE | Destroy the profile and its owner instance if valid | Pass | |
| Related instances | DELETE | Destroying a profile destroys all content related to its owner | Pass | |
| Serializer | Annotation | Annotate the number of posts, followers, and followed users of a profile | Pass | |

### Posts
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Post List | GET | Show a list of all posts as JSON objects | Pass | |
| Post List | POST | Create a new post if valid | Pass | |
| Post Detail | GET | Return a specific post if given a valid id | Pass | |
| Post Detail | PUT | Update the post if valid | Pass | |
| Post Detail | DELETE | Destroy the post instance if valid | Pass | |

### Comments
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Comment List | GET | Show a list of all comments as JSON objects | Pass | |
| Comment List | POST | Create a new comment if valid | Pass | |
| Comment Detail | GET | Return a specific comment if given a valid id | Pass | |
| Comment Detail | PUT | Update the comment if valid | Pass | |
| Comment Detail | DELETE | Destroy the comment if valid | Pass | |

### Followers
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Follower List | GET | Show a list of all followers as JSON objects | Pass | |
| Follower List | POST | Create a new follower if valid | Pass | |
| Follower Detail | GET | Return a specific follower if given a valid id | Pass | |
| Follower Detail | PUT | Update the follower if valid | Pass | |
| Follower Detail | DELETE | Destroy the follower if valid | Pass | |
| Unique Together | No duplicates | The model prevents creating duplicate follow instances with the same owner and target user |Pass | |

### Likes
| Feature | Action | Expected Outcome | Pass/Fail | Comment |
| --- | --- | --- | --- |--- |
| Like List | GET | Show a list of all likes as JSON objects | Pass | |
| Like List | POST | Create a new like if valid | Pass | |
| Like Detail | GET | Return a specific like if given a valid id | Pass | |
| Like Detail | PUT | Update the like if valid | Pass | |
| Like Detail | DELETE | Destroy the like if valid | Pass | |
| Unique Together | No duplicates | The model prevents creating duplicate like instances with the same owner and target post | Pass | |
| Like List | View | User1 can see the list of users they have Liked/unliked | Pass |


</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
