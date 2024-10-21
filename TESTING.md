

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
- [Issues](#issues)

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
| Home         | 64          | 100           | 78             | 100 |
| Post Detail  | 59          | 100           | 78             | 100 |
| Post Form    | 99          | 100           | 78             | 100 |
| Profile page | 84          | 100           | 96             | 100 |
| Login        | 98          | 90            | 96             | 92  |
| Register     | 98          | 95            | 96             | 100 |

</details>
<br>

<details>
<summary>Mobile</summary>
<br>

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 63          | 100           | 78             | 100 |
| Post Detail  | 50          | 100           | 78             | 100 |
| Post Form    | 83          | 92            | 78             | 92  |
| Profile page | 75          | 100           | 79             | 92  |
| Login        | 85          | 95            | 96             | 100 |
| Register     | 88          | 95            | 74             | 100 |

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Wave

<details>
<summary>Wave issues and solutions</summary>
<br>
By solving these issues, Wave reports no Error and no Contrast Errors.

![Wave](/documentation/testing_image/validate_wave.png)

- Contrast issue in 'comments' for the timestamp: I changed the color from #BC9BBB to a slightly darker hue, #966496.
- Error'''''''''''. Missing form label. A form control does not have a corresponding label: <br>
  This was solved by adding a form label for <Form.Control> in both CommentCreateForm.ja and CommentEditForm.js. <br>
  ` <Form.Label htmlFor="commentContent" className="sr-only">` <br>
  and <br>
  `<Form.Label htmlFor="editCommentContent" className="sr-only">`

- Error: Empty Link. A link contains no text: <br>
  Added 'aria-label' to links in Post.js

```
{likes_count}
<Link to={`/posts/${id}`} aria-label="View comments count">
  <i className="far fa-comments" aria-hidden="true" /> {comments_count}
</Link>
```

- Error: Missing alternative text for the avatar image: <br>
  Added the alt attribute to the <img> tag in ProfilePage.js. The alt attribute provides alternative text for screen readers, making the image accessible. <br>

```
<Col lg={3} className="text-lg-left">
  <Image
    className={styles.ProfileImage}
    roundedCircle
    src={profile?.image}
    alt={`${profile?.owner}'s profile image`}
  />
</Col>
```

- Error: Missing form label in PostsPage.js. A form control does not have a corresponding label: <br>
  This was solved by adding a form label for search input.

```
<Form.Group controlId="searchPosts">
  <Form.Label className="sr-only">Search Posts</Form.Label>
  <Form.Control
    id="searchPosts"
    value={query}
    onChange={(event) => setQuery(event.target.value)}
    type="text"
    className="mr-sm-2"
    placeholder="Search posts"
  />
</Form.Group>
```

</details>

## Function Test

<details>
<summary>Test configuration</summary>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

**Test Environment**

- Desktop:
  - Lenovo Legion T7
- Screen:
  - Samsung Odyssey G3 / 27" / 1920 x 1080 /
- Mobile:
  - Samsung Galaxy S20

**Browser compatibility**

I have tested this site on the following browsers:

- Google Chrome, version 121.0.6167.86 (Official Build) (64-bit)
- Firefox, version 123.0 (64-bit)

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

### Custom Automated Testing

In addition to the various validators and automated tests above, I created some automated tests to test my code. Most of these tests check models, serializers, and validators used on the backend.

<details>
<summary>Preparation and setup for automatic test in API</summary>

#### Test case naming convention

'xxx-m/a-nn'

- xxx = Area of test
- m/a = manual or automatic script
- nn = test case IS no.

#### App abbreviation

- BLK = blocks
- CAT = category
- CMT = comments
- CON = contacts
- FOL = followers
- HME = Home
- LKE = likes
- NAV = Navigation
- POP = Popular profile
- PPM = PostCreate & PostEditForm
- PST = posts
- PRF = profiles
- SIU = SignIn&SignUP



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

#### Executed automatic test cases and results

<details>
<summary>blocks</summary>

| ID       | Description                                                                                                                                                                                                | Expected Outcome                                                                                                                  | Result | Comment |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| BLK-A-01 | Test `def test_create_block(self):` checks if a block can be created successfully. It sends a POST request to the `/blocks/` endpoint.                                                                     | The block is created successfully with a status code of 201 Created.                                                              | PASS   |         |
| BLK-A-02 | Test `def test_list_blocks(self):` checks if the list of blocks can be retrieved successfully. It sends a GET request to the `/blocks/` endpoint.                                                          | The list of blocks is retrieved successfully with a status code of 200 OK.                                                        | PASS   |         |
| BLK-A-03 | Test `def test_retrieve_block(self):` checks if a specific block can be retrieved successfully. It sends a GET request to the `/blocks/<int:pk>/` endpoint.                                                | The specific block is retrieved successfully with a status code of 200 OK.                                                        | PASS   |         |
| BLK-A-04 | Test `def test_delete_block(self):` checks if a block can be deleted successfully. It sends a DELETE request to the `/blocks/<int:pk>/` endpoint.                                                          | The block is deleted successfully with a status code of 204 No Content.                                                           | PASS   |         |
| BLK-A-05 | Test `def test_block_duplicate(self):` checks that a duplicate block cannot be created. It sends a POST request to the `/blocks/` endpoint.                                                                | An error is returned with a status code of 400 Bad Request, preventing the creation of a duplicate block.                         | PASS   |         |
| BLK-A-06 | Test `def test_cannot_block_without_authentication(self):` checks that a user cannot block another user without authentication. It sends a POST request to the `/blocks/` endpoint without authentication. | An error is returned with a status code of 401 Unauthorized, preventing the block from being created without user authentication. | PASS   |         |
| BLK-A-07 | Test `def test_block_user(self):` checks that blocking a user hides their posts from the blocking user. It sends a POST request to the `/blocks/` endpoint.                                                | The user is blocked successfully with a status code of 201 Created, and the blocked user's posts are not visible to the blocker.  | PASS   |         |
| BLK-A-08 | Test `def test_unblock_user(self):` checks that unblocking a user makes their posts visible to the unblocking user. It sends a DELETE request to the `/blocks/<int:pk>/` endpoint.                         | The user is unblocked successfully with a status code of 204 No Content, and the unblocked user's posts are visible again.        | PASS   |         |
| BLK-A-09 | Test `def test_visibility_of_own_posts(self):` checks that users can always see their own posts regardless of blocks.                                                                                      | The user's own posts remain visible to them, even if they have blocked the target user.                                           | PASS   |         |
| BLK-A-10 | Test `def test_block_without_authentication(self):` checks that blocking another user without authentication is not allowed. It sends a POST request to the `/blocks/` endpoint without authentication.    | An error is returned with a status code of 403 Forbidden, preventing the block from being created without authentication.         | PASS   |         |
| BLK-A-11 | Test `def test_post_visibility_after_block_and_unblock(self):` checks that posts from a blocked user are hidden and then shown after unblocking.                                                           | Posts from the blocked user are hidden, and after unblocking, the posts become visible again.                                     | PASS   |         |

##### Results in terminal

![BLK](/documentation/testing_image/test-result-blocks.png)

</details>

<br>

<details>

<summary>category</summary>

<br>

No automatic test executed, only manual.

</details>

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

##### Results in terminal

![BLK](/documentation/testing_image/test-result-comments.png)

</details>

<br>

<details>

<summary>contacts</summary>

<br>

| ID       | Description                                                                                                                                                                                 | Expected Outcome                                                                                                | Result | Comment |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| CON-A-01 | Test `def test_create_contact_valid(self):` checks if a contact can be created with valid data. It sends a POST request to `/contacts/`.                                                    | The contact is created successfully with a status code of 201 Created.                                          | PASS   |         |
| CON-A-02 | Test `def test_create_contact_invalid_reason(self):` checks if the API responds correctly to an invalid reason. It sends a POST request to `/contacts/`.                                    | The request returns a status code of 400 Bad Request and includes an error for the 'reason' field.              | PASS   |         |
| CON-A-03 | Test `def test_create_contact_invalid_content(self):` checks if the API responds correctly to invalid content. It sends a POST request to `/contacts/`.                                     | The request returns a status code of 400 Bad Request and includes an error for the 'content' field.             | PASS   |         |
| CON-A-04 | Test `def test_create_contact_unauthenticated(self):` checks if unauthenticated users are prevented from creating contacts. It sends a POST request to `/contacts/` without authentication. | The request returns a status code of 403 Forbidden, preventing unauthenticated users from creating contacts.    | PASS   |         |
| CON-A-05 | Test `def test_valid_contact_serializer(self):` checks if the serializer accepts valid data.                                                                                                | The serializer accepts the valid data, indicating that the data is correct and can be used to create a contact. | PASS   |         |
| CON-A-06 | Test `def test_invalid_contact_serializer_reason(self):` checks if the serializer rejects invalid reason data.                                                                              | The serializer rejects the invalid reason data, indicating that the 'reason' field must contain valid input.    | PASS   |         |
| CON-A-07 | Test `def test_invalid_contact_serializer_content(self):` checks if the serializer rejects invalid content data.                                                                            | The serializer rejects the invalid content data, indicating that the 'content' field must contain valid input.  | PASS   |         |

##### Results in terminal

![BLK](/documentation/testing_image/test-result-contacts.png)

</details>

<br>

<details>

<summary>followers</summary>

<br>

No automatic test executed, only manual.

</details>

<br>

<details>

<summary>hashtags</summary>
<br>

#### Note: The following automated tests for hashtags are based on the functionalities provided by the DRF API. Issues related to updating, deleting, and searching by hashtags are documented in [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68).


| ID       | Description                                                                                                                                                       | Expected Outcome                                                                                                                                                            | Result | Comment                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| HTG-A-01 | Test `def test_create_hashtag(self):` checks if a hashtag can be created successfully. It sends a POST request to the `/hashtags/` endpoint.                      | The hashtag is created successfully with a status code of 201 Created.                                                                                                      | PASS   |                                                                                                                         |
| HTG-A-02 | Test `def test_create_post_with_hashtag(self):` checks if a post can be created with an associated hashtag. It sends a POST request to the `/posts/` endpoint.    | The post is created successfully with the associated hashtag and a status code of 201 Created. The response includes the 'hashtags' field containing the ID of the hashtag. | FAIL   | 'hashtag_ids' not found in response data. See [Known and unsolved issues](#known-and-unsolved-issues)                   |
| HTG-A-03 | Test `def test_search_post_by_hashtag(self):` checks if a post can be retrieved by searching for a hashtag. It sends a GET request to the `/posts/` endpoint.     | The post is retrieved successfully with a status code of 200 OK. The response includes the 'hashtags' field containing the ID of the hashtag.                               | ERROR  | 'hashtag_ids' not found in response data. Causing KeyError. See [Known and unsolved issues](#known-and-unsolved-issues) |
| HTG-A-04 | Test `def test_add_remove_hashtag_to_post(self):` checks if a hashtag can be added and removed from a post. It sends requests to the `/posts/<int:pk>/` endpoint. | The hashtag is added to the post successfully and reflected in the response. The hashtag is removed from the post successfully and reflected in the response.               | PASS   |                                                                                                                         |

##### Results in terminal

![BLK](/documentation/testing_image/test-result-hashtags.png)

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
| HME-M-15 | Post feed         | Display | All posts appear in an infinite scroll feed                      | Pass   |         |
| HME-M-16 | Post feed         | Display | Posts by blocked users are not displayed                         | Pass   |         |
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


#### Note: The following manual tests for hashtags are based on the functionalities provided by the DRF API. Issues related to updating, deleting, and searching by hashtags are documented in [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68).

| Feature           | Action  | Expected Outcome                                          | Pass/Fail | Comment                                                          |
| ----------------- | ------- | --------------------------------------------------------- | --------- | ---------------------------------------------------------------- |
| PFM-M-11          | GET     | Show a list of all hashtags as JSON objects               | Pass      | JSON objects for hashtags are displayed as expected.             |
| PFM-M-12          | POST    | Create a new hashtag if valid                             | Pass      | New hashtags can be created successfully.                        |
| PFM-M-13          | GET     | Return a specific hashtag if given a valid id             | Not Tested |                                                                 |
| PFM-M-14          | PUT     | Update the hashtag if valid                               | Fail      | Updating hashtags does not work as expected, see [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68) |
| PFM-M-15          | DELETE  | Destroy the hashtag if valid                              | Fail      | Deleting hashtags does not work as expected, see [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68) |
| PFM-M-16          | GET     | Retrieve posts associated with a hashtag                  | Fail      | Posts associated with hashtags are not retrieved correctly, see [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68) |       

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
| PRF-M-13 | Hide/(block) User	      | Update	| User1 can update the hide on User2 successfully                  | Pass   |         |
| PRF-M-14 | Hide/(block) User	      | Delete  |	User1 can unhide User2 successfully                              | Pass   |         |
| PRF-M-15 | Hide/(block) User	      |	View	  | User1 can see the list of users they have hidden                 | Pass	  | This is validated by the presence of 'blocking_id' or 'blocking_target' fields in the JSON response, which indicates whether a user has been blocked by User1. The list effectively provides the information about blocked users. |

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

### Hashtags
| Feature           | Action  | Expected Outcome                                          | Pass/Fail | Comment                                                          |
| ----------------- | ------- | --------------------------------------------------------- | --------- | ---------------------------------------------------------------- |
| Hashtag List      | GET     | Show a list of all hashtags as JSON objects               | Pass      | JSON objects for hashtags are displayed as expected.             |
| Hashtag List      | POST    | Create a new hashtag if valid                             | Pass      | New hashtags can be created successfully.                        |
| Hashtag Detail    | GET     | Return a specific hashtag if given a valid id             | Not Tested |                                                                 |
| Hashtag Detail    | PUT     | Update the hashtag if valid                               | Fail      | Updating hashtags does not work as expected, see [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68) |
| Hashtag Detail    | DELETE  | Destroy the hashtag if valid                              | Fail      | Deleting hashtags does not work as expected, see [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68) |
| Search by Hashtag | GET     | Retrieve posts associated with a hashtag                  | Fail      | Posts associated with hashtags are not retrieved correctly, see [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68) |


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

## Issues

<details>
<summary>List of open issues</summary>
<br>

**Known and unsolved issues**

- some error 

  The feature has a bug registered in the project's Kanban board and will be revisited in future improvements of the Pixelpals app.

  To maintain a smooth user experience, the hashtag feature is retained in the codebase, but the multiselect form has been removed from the PostCreateForm and PostEditForm.

  _**Terminal warning:**_

  In Post.js, line 37: we've disabled the ES linting rule for the unused hashtags variable and added a comment indicating that hashtags is intentionally unused for now, referring to documentation for more information.

  This practice is generally discouraged as it can lead to code that is harder to maintain and understand. In this particular case, the feature is rather isolated and testing indicates nothing else is disrupted in the codebase. We are fully aware that this needs to be resolved before we add more functionality.

  ![compile-warning](/documentation/readme-image/compile_warning_post_h-tag.webp)

- When loading certain pages, 401/400 errors occur due to the absence or expiration of an authorization token, or when invalid form input is provided. These instances include:

  - Mounting when not logged in
  - Redirecting a logged-in user away from the sign-up/sign-in page
  - Submitting a sign-in form without entering a username. Expired access token that is refreshed in the background, leading to eventual success

    ![x](/documentation/testing_image/401-error.png)

- Interface elements that depend on the user's authorization state sometimes fail to load without a page refresh. This behavior is consistent with the course material.

- (posts/views.py): django rest framework bug, in the Filter set fields list the Field filters label shows 'Invalid Name'. This behavior is consistent with the course material.

  ![x](/documentation/testing_image/field-filters-label-invalid-name.png)

- **Disclaimer on npm Audit Issues**: </br>
  As students, we're not expected to fix the following npm audit errors identified in this project. The listed issues may involve breaking changes, which are beyond the scope of our current work. Here are the identified vulnerabilities:

  - **ansi-html** (<0.0.8): High severity - Uncontrolled Resource Consumption.
  - **axios** (0.8.1 - 0.27.2): Moderate severity - Cross-Site Request Forgery Vulnerability.
  - **braces** (<3.0.3): High severity - Uncontrolled Resource Consumption.
  - **browserslist** (4.0.0 - 4.16.4): Moderate severity - Regular Expression Denial of Service.
  - **ejs** (<=3.1.9): Critical severity - Template injection vulnerability.
  - **glob-parent** (<5.1.2): High severity - Regular Expression Denial of Service.
  - **immer** (7.0.0 - 9.0.5): Critical severity - Prototype Pollution.
  - **ip**: High severity - Server-Side Request Forgery.
  - **loader-utils** (2.0.0 - 2.0.3): Critical severity - Prototype Pollution.
  - **lodash.template**: High severity - Command Injection.
  - **minimatch** (<3.0.5): High severity - Regular Expression Denial of Service.
  - **node-forge** (<=1.2.1): High severity - Prototype Pollution.
  - **nth-check** (<2.0.1): High severity - Inefficient Regular Expression Complexity.
  - **postcss** (<8.4.31): Moderate severity - Line return parsing error.
  - **semver** (7.0.0 - 7.5.1): Moderate severity - Regular Expression Denial of Service.
  - **shell-quote** (<=1.7.2): Critical severity - Improper Neutralization of Special Elements.
  - **webpack-dev-middleware** (<=5.3.3): High severity - Path traversal.

  There are a total of 138 vulnerabilities (1 low, 80 moderate, 49 high, 8 critical).
</details>
<br>

<details>
<summary>List of closed issues</summary>
<br>

**Solved issues**

  - Social Authentication Installation Error:

    - During the process of setting up our Django application in the pixelpals-api environment, we encountered a specific error related to package dependencies when attempting to install `dj-rest-auth[with_social]`. This issue was triggered by an incompatibility between the django-allauth package and the version of Python we were using (Python 3.12.2).
      - Downgraded to Python 3.11.9 to resolve this.
      - Added runtime.txt with python-3.9.11 to ensure consistent Python version across environments and prevent future issues.
        To execute the final migration required for enabling JSON Web Token authentication.
      - pip install django-allauth==0.54.0
      - In settings.py MIDDLEWARE remove 'allauth.account.middleware.AccountMiddleware' this is only required since django-allauth==0.56.0

    **Error message**:

    - ![x](/documentation/testing_image/error-all-auth-incomptible-python-3-12-2.webp)

  - [BUG#61: Comment edit save fails to display updated content](https://github.com/JaqiKal/pixavibe-frontend/issues/61)
  - [BUG#65: Avatar broken in posts card](https://github.com/JaqiKal/pixavibe-frontend/issues/65)
  - [BUG#66: Post detail CRUD lost](https://github.com/JaqiKal/pixavibe-frontend/issues/66)
  - [BUG#69: ot possible to edit Category when editing post](https://github.com/JaqiKal/pixavibe-frontend/issues/69)

  -  Warning controlId is ignored on <FormControl> component occurs because both controlId and id are specified in the <Form.Control> component within the search bar in PostsPage.js in line 87. To resolve this, the id attribute from the <Form.Control> component was removed, as controlId already assigns an id to it.

      ![controlId warning](/documentation/readme-image/warning_controlId.webp)

- Error: Manifest: Line: 1, column: 1, Syntax error. Steps taken to resolve this:
  - ensure that there is a file named site.webmanifest in the public folder.
  - ensure that the path in 'index.html' is correct, the leading slash in hte %PUBLIC_URL% placeholder was removed.

  ![manifest error](/documentation/readme-image/error_manifest.png)


</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

[Back to README](README.md)