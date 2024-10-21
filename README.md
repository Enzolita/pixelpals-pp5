# PixelPals

![x](documentation/readme-image/PixelGif.gif)

Pixelpals is a Full-Stack web application that empowers users to share engaging content, drawing inspiration from popular social media platforms like Instagram. Leveraging Django Rest Framework for robust backend operations and React for a responsive frontend, Pixelpals delivers a smooth, intuitive experience for users to browse, create, and interact with captivating content.
<br>
<br>
Visit the website: [Pixelpals](https://pixelpals-pp5-ee2d5ecf265c.herokuapp.com/)
<br>

<hr>

## Table of Contents

- [Pixelpals](#pixelpals)

  - [Live Site](#live-site)
  - [API Backend](#api-backend)
  - [The Strategy Plane](#the-strategy-plane)
    - [Development Goals and Corresponding User Stories](#development-goals-and-corresponding-user-stories)
    - [Learning Outcomes and Skill Development](#learning-outcomes-and-skill-development)
    - [Agile Planning and Development](#agile-planning-and-development)
      - [Project Tracking (GitHub Projects)](#project-tracking-github-projects)
      - [Epics](#epics)
      - [User Stories](#user-stories)
      - [MoSCoW Prioritization](#moscow-prioritization)
  - [The Structure Plane](#the-structure-plane)
    - [Wireframes](#wireframes)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Implemented Features](#implemented-features)
    - [Future Features](#future-features)
  - [The Surface Plane](#the-surface-plane)
    - [Design](#design)
    - [Technologies](#technologies)
  - [Testing](#testing)
  - [Deployment](#deployment)
    - [Heroku](#heroku-deployment)
    - [Local Deployment](#local-deployment) -[How to Fork](#how-to-fork) -[How to Clone](#how-to-clone)
  - [Credits](#credits)
    - [Content](#content)
    - [Acknowledgements](#acknowledgements)

## Live Site

[Pixelpals site](https://pixelpals-pp5-ee2d5ecf265c.herokuapp.com/)

## API Backend

[Pixelpals API README](https://github.com/Enzolita/pixelpals-backend/blob/main/README.md)

## The Structure Plane

### Wireframes

<details>
<summary>All Wireframe Images</summary>
<br>

Login/Signup

![X](documentation/wireframes/wireframe-login_register.png)

Posts Page

![X](documentation/wireframes/wireframe-posts.png)

Post Page

![X](documentation/wireframes/wireframe-postdetail.png)

Profile

![X](documentation/wireframes/wireframe-profile.png)

Report

![X](documentation/wireframes/wireframe-report.png)

Log out

![X](documentation/wireframes/wireframe-logout.png)

</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## The Skeleton

### Implemented Features:

<details>
<summary>List of existing features</summary>
<br>

**Defensive Features**

- Authorization checks - Keeping It Secure

  - Strong Authorization Checks: We’ve got layers of protection with JWT tokens and CORS headers. Only authorized users get in!
  - Access Control: Unauthorized? Sorry, but you’ll be sent packing. We always check your credentials before you get to see any user data.

- Form validation - Smooth and Error-Free Forms

  - Data Validation: We make sure your data is good to go, both on the frontend and backend.
  - Backup and default values

- Ready for Anything

  - Profile Pics: Don’t worry about broken images—default profile pictures have got your back.
  - Auto Profiles: Every new user gets a profile automatically. No null references.

- Error pages or as better known Oops! Pages

  - Error Pages: If you wander into the unknown, a “Page Not Found” error will guide you back on track.

**General Features**

  - Responsive Design: Looks Great Everywhere: Our site adjusts beautifully across all devices.
    Complete Control

  - User Interaction - Get Involved: Like, comment, follow—get the full experience based on your authorization status. Pixelpals administrator have superuser authority and manages full CRUD.

  - CRUD Operations: 
    - Create - users can register a new user account, authenticated users can create post(s) and create a comment(s)
    - Read - authenticated users can view their posts, comments, and their profile image.
    - Update - authenticated users can update their profile image, username and password, and edit and save comments, its title and save it.
    - Delete - authenticated users can delete their own comments and posts.

**SignIn/SignUp Page** <br>

Join the Fun: Creating an account is easy-peasy. After signing up, you’ll be whisked to the sign-in page. Already signed in? You’ll head straight to the home page.

![X](documentation/existing-feat/sign-in.png)

![X](documentation/existing-feat/sign-up.png)

**Navigation Bar** <br>
Always There for You: The navigation bar adapts to whether you’re signed in or not, and it looks great on any screen size.

![x](documentation/existing-feat/iph-nav.png)

![x](documentation/existing-feat/navbar.png)

**Profile Page**
<br>
Showcase Yourself: See detailed info about users, including posts, followers, and who they follow. If you follow them, it’s highlighted. Add personal touches with a dedicated info section. Follow or hide users unless it’s your own profile. All posts from the profile owner are displayed below. Click on the three dots and edit your profile, change username, change password

![x](documentation/existing-feat/profile-edit-dropdown.png)

![x](documentation/existing-feat/full-profile-own.png)

![x](documentation/existing-feat/edit-profile-bio.png)

![x](documentation/existing-feat/edit-profile-name.png)

![x](documentation/existing-feat/edit-profile-pw.png)

**Profiles Sidebar**
<br>
Popular Profiles: Check out the most followed profiles. Follow or unfollow with a click, and enjoy a sidebar that fits perfectly on any screen. The profile sidebar is always present on screens that are large enough. On smaller screens, it appears in a smaller section above the main content, and on certain pages it is removed.

![x](documentation/existing-feat/popular-profile.png)

**Posts page**
<br>
Endless Inspiration: Browse posts infinitely! Use the search bar to find posts by title or username. Use category to filter. See your personalized feed of posts from those you follow and liked posts. Blocked users won’t show up.

![x](documentation/existing-feat/post-list.png)

Follow/unfollow

![x](documentation/existing-feat/follow-unfollow.png)

Like/unlike

![x](documentation/existing-feat/like-unlike.png)

Darkmode / Lightmode

![x](documentation/existing-feat/darkmode-lightmode.png)

**Post Page**
<br>
Dive into Details: See all the nitty-gritty about a post, including comments. Edit or delete your posts easily. Tag posts with one category, and (once the bug’s fixed) multiple hashtags. The multi-hashtag feature is hidden for now due to [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68). Like the category tagging, it offers a predefined list to select/deselect multiple hashtags. However, once a post is saved, you can't change the hashtags during edits. To avoid a bad user experience, we've temporarily hidden this feature in the belly of our scrumptious app.

Owner´s post(s), me, myself and I!

![x](documentation/existing-feat/post-detail-own.png)

Edit Image, Title, Content, Category

![x](documentation/existing-feat/edit-postdetail.png)

Dropdown menu for edit and delete of individual post.

![x](documentation/existing-feat/edit-delete.png)

Edit Comments

![x](documentation/existing-feat/edit-delete-comment.png)

**Report Form**
<br>
Get in Touch: Use our report form to reach out about any issues you're experiencing or feeling. A custom made modal will thank you for your message.

![x](documentation/existing-feat/report-form.png)

![x](documentation/existing-feat/report-modal.png)
<br>

#### Typography

The main font used on the website is "DM Sans".

![font](documentation/readme-image/font-dm-sans.png)

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
#### Reusable Component Design

This application emphasizes modularity and reusability. Each component is designed to function independently and can be easily repurposed in different contexts. Some components have multiple uses across the app and offer potential for further applications.

<details>

<summary>A selection of reusable components</summary>

<br>

**Asset component**

- Purpose: Display a media asset, such as images, spinner animations, and messages.
- Props: src, message, spinner
- Usage: `const Asset` is considered a reusable component and has been reused in: NotFound.js, PostCreateForm.js, PostPage.js, PostsPage.js, PopularProfiles.js, ProfilePage.js to display a spinner whenever content is loading.
- Potential uses: Loading spinners or media placeholders in any section of the application.

**Avatar component**

- Purpose: Display user profile images.
- Props: profile, owner, image
  Usage: `const Avatar` is considered a reusable component and has been reused in: NavBar.js, Comment.js, CommentCreateForm.js, Post.js and Profile.js to handle and import the avatar for the user
- Potential uses: User profile displays, comment sections, and anywhere a user image is required.

**Darkmode / Lightmode Component**

- Purpose: This component provides the functionality to toggle between dark and light themes across the application, enhancing user experience by allowing them to choose their preferred display mode. It saves the user's selection locally (e.g., using local storage or cookies) to maintain the chosen theme across sessions and page reloads.
- Props: setTheme: Function that toggles between light and dark modes. String representing the current theme, either "light" or "dark".
- Usage: The SeclectedTheme component is reusable and has been implemented in Header.js and SettingsPage.js to enable theme switching in the application interface.
- Potential uses: It can be utilized in any part of the application where users need the option to toggle between dark and light modes, such as the homepage, user profile settings, or dashboard interfaces.

**Comment**

- Purpose: Display a comment with options to edit or delete it if the current user is the owner.
- Props: id, content, owner and more.
- Usage:`const Comment`is considered a reusable component and has been reused in: PostPage.js to fetch comments related to the specific post.
- Potential uses: Blog post comments, forum threads, product reviews, and profile pages to display user comments.

**MoreDropdown Component**

- Purpose: Provide a dropdown menu for actions like editing and deleting items. 
- Props: handleEdit (function to handle the edit action), handleDelete (function to handle the delete action).
- Usage: `const MoreDropdown` has been reused in Comment.js, Post.js and ProfilePage.js to render the dropdown menu the enable the user to edit their data.
- Potential uses: Context menus for various content types that support edit and delete actions.

**Navbar**

- Purpose: Present a navigation bar for the application, including links and user authentication options. 
- Usage: const Navbar is a reusable component and has been reused in App.js to render the navbar on the entire website, regardless of the URL path.
- Potential uses: Could be adapted for use in different applications with minimal adjustments to routing and links.

**Post**
- Purpose: Display a specific post.
- Props: id, title, content, owner and more.
- Usage: const Post is a reusable component and has been reused in PostPage.js and PostsPage.js to display post data.
- Potential uses: Featured post component, list of popular posts, forum threads, or portfolio showcases.

**ProfileDataContext and CurrentUserContext**

- Purpose: Manage user and profile data across the application.
- Usage:
  - CurrentUserContext: Provides current user data.
  - ProfileDataContext: Provides profile data, such as popular profiles.
- Used in: Various components requiring user or profile data.
- Potential uses: Any component that needs to access or manipulate user-related state efficiently.

**Profile**
- Purpose: This component is designed to render a user profile with options for following/unfollowing and block/unblock based on the current user's interaction status with the profile.
- Props: profile, owner, image
- Usage: Can be used as a Community memeber widget, Author card in blog posts, Participant list in events pages. `const Profile*  is considered a reusable component and has been reused in: PopularProfiles.js to render the profiles in the popular profiles field.
- Potential uses: Highly reusable, convenient to use anywhere where you need to show the profile/user associated with a piece of content. Community member widget, author card in blog posts, participant list in events pages.

**Custom Hooks**
- useClickOutsideToggle
  - Purpose: Handle click outside events to toggle state.
  - Usage: Can be reused in any component that needs to handle click outside functionality.
- useRedirect
  - Purpose: Redirect users based on their authentication status.
  - Usage: Can be reused in any component that needs to handle user redirects based on authentication.

**Utility Functions**
- Utility functions (e.g., date formatting, data validation)
- Purpose: General-purpose functions that can be used across different parts of the application.

</details>

### Technologies

<details>
<summary>List of technologies and Languages used</summary>
<br>

#### Language

- [HTML](https://en.wikipedia.org/wiki/HTML) is used to structure the content of the application.
- [CSS](https://en.wikipedia.org/wiki/CSS) is applied to style the application, enhancing the user interface..
- [JavaScript](https://sv.wikipedia.org/wiki/Javascript) adds interactivity to web pages, improving the user experience.
- [JSX](https://legacy.reactjs.org/docs/faq-build.html#gatsby-focus-wrapper) & [Intro JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)

#### Frameworks, libraries and dependencies

- [Axios](https://axios-http.com/) - A promise-based HTTP client for both the browser and Node.js, Axios plays a key role in facilitating smooth communication between the frontend and backend. It was chosen for its ability to simplify HTTP requests to the REST API, eliminating the need to manually configure HTTP headers. Additionally, Axios supports 'interceptors', which are used to request a refresh token in the event of an HTTP 401 error. This feature enhances the user experience by keeping authenticated users signed in for up to 24 hours, rather than requiring them to sign in again after five minutes.
- [CSS Validator 0.11.0]() - A tool used to validate CSS code. It ensures that all CSS written for the project adheres to standard syntax rules and best practices. Using this validator helps in maintaining clean and error-free stylesheets, which is essential for consistent and predictable rendering across different browsers.
- [jwt-decode 3.1.2](https://www.npmjs.com/package/jwt-decode) - Used for decoding JSON web tokens, this tool has been essential for maintaining secure user authentication between the frontend and backend.
- [Multiselect React Dropdown 2.0.25]() - This component is used to provide a multi-select dropdown functionality in React applications. It allows users to select multiple options from a dropdown menu, enhancing the user interface by making it more interactive and user-friendly. This component is particularly useful for forms and filtering data where multiple selections are needed. It was chosen mostly because it is fun to try out. The functionality was proven, and very handy but unfortunately a bug in our code base is stopping us from showcasing it to users. It is going to be used for the Hashtag feature.
- [React 17.0.2](https://legacy.reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces. An older version was chosen to stay inline with all other dependencies used as part of the Moments walkthrough which provided a base that this project was then modelled on.
- [React bootstrap 1.6.6](https://react-bootstrap.github.io/) - A frontend framework built for react that provides common components. React bootstrap was chosen to help speed up the development of this project and allow time to focused elsewhere.
- [React Router 5.3.4](https://github.com/remix-run/react-router) - This fully-featured routing library for React allowed for seamless site navigation, greatly enhancing the user experience.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Implemented to enable the loading of additional data sets upon scrolling, especially when data surpasses pagination limits.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Tools and Services

<details>
<summary>List of Tools & Services</summary>

<br>

- [Am I Responsive?](http://ami.responsivedesign.is/) is used to show the website image on a range of devices.
- [Balsamiq](https://balsamiq.com/) is used to create wireframes.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) is used to check code ensuring that my CSS is error-free and adheres to the latest web standards.
- [DevTools](https://developer.chrome.com/docs/devtools) to help in edit pages on-the-fly and diagnose problems quickly.
- [Diffchecker - text](https://www.diffchecker.com/text-compare/) is used to check code snippets.
- [Favicon.io](https://favicon.io/) is used to create favicon.
- [Font Awesome](https://fontawesome.com/) is used for the iconography on the website.
- [Git](https://git-scm.com/) is used for version control.
- [Gitpod](https://gitpod.io) streamlines your development process by providing a pre-configured, cloud-based development environment that's instantly ready for coding.
- [Github](https://github.com/) is essential for version control, allowing you to track changes, collaborate with others (if applicable), and secure online code storage.
- [Google Dev Tools](https://developers.google.com/web/tools) is used during testing, debugging and styling.
- [Google Fonts](https://fonts.google.com/) is a catalog of free, open-source fonts. Used for typography.
- [Heroku](https://www.heroku.com) ia a platform for deploying and hosting web applications.
- [Look](https:www.looka.com) ia used for the logo and symbol.
- [Markup Validation Service](https://validator.w3.org/) is used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
- [UXwing](https://uxwing.com/) is a provider of free icons free for commercial use.

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Deployment

<details>
<summary>Version Control</summary>
<br>
The site was created using the Gitpod editor and pushed to github to the remote repository ‘pixelpals-frontend’.
The following git commands were used throughout development to push code to the remote repo:

- `git add <file>` - This command was used to add the file(s) to the staging area before they are committed.
- `git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.
- `git push` - This command was used to push all committed code to the remote repository on github.
</details>

#### Heroku Deployment

 <details>
 <summary>To deploy the project to Heroku</summary>
 
 <br>

**Preparing the Application**

- Create and add the 'Procfile' to your application's root directory `echo web: node index.js > Procfile`. Heroku relies on this file to determine how to run your application, ensuring the correct setup of your web server. Use commands like web: `gunicorn PROJ_NAME.wsgi` in the 'Procfile' to instruct Heroku on starting your web server with Gunicorn
- Ensure you have a requirements.txt file listing all project dependencies.
- Set up necessary configuration variables in Heroku setting tab > Config Vars (eg. SECRET_KEY, DATABASE_URL, etc.).
- In your app's 'settings.py' add Heroku to ALLOWED_HOSTS

**Initial set-up**

- Sign up for a [Heroku](https://heroku.com/) account at Heroku's website.
- Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.
- Or use Heroku Web interface.

**Create Heroku App**

- Sign in or sign up to [Heroku](https://heroku.com/).
- Click the button that says "Create new app."
- Enter a unique app name.
- Choose your region from the dropdown menu.
- Click the "Create app" button.
- Scroll further down on the page, select Add Buildpack. The buildpacks will install further dependencies that are not included in the 'requirements.txt'. <br>
  It's crucial to arrange the build packs correctly! First, choose Python and then Node.js. If they're not in this sequence, you can reorder them by dragging.

**Deployment**

- Deploy by either push your code to Heroku or by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
- (if applicable) Run database migrations using the Heroku CLI.
- For deploying this project, we're using GitHub as our method. After choosing GitHub, make sure to confirm the connection. Then, search for your repository name and once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys".
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy.
- Click "Deploy branch" wait for the app to be built. Once this is done, a message should appear letting us know that the app was successfully deployed.
- Click the button "View" to see the app.

**Final Steps**

- Enable the Web Dyno, make sure the web dyno is up and running after deployment.
- Open your application from the Heroku dashboard or using the CLI command heroku open.

For more detailed instructions and troubleshooting, visit the [official Heroku Dev Center](https://devcenter.heroku.com/).

</details>

#### Local Deployment

<details>
<summary>How to clone:</summary>
<br>

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

- Navigate to the GitHub Repository you want to clone to use locally.
- Click on the code drop down button.
- Click on HTTPS.
- Copy the repository link to the clipboard.
- Open your IDE of choice (git must be installed for the next steps). 
- Navigate to the directory where you want the clone to be created.
- Type `git clone`, and then paste the URL you copied previously. Press Enter to create your local clone.

Install Dependencies:

`npm install`

Run Application:

`npm start`

</details>
<br>

<details>
<summary>How to Fork</summary>

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. In order to protect the main branch while you work on something new, essential when working as part of a team or when you want to experiment with a new feature, you will need to fork a branch.

- Log in (or sign up) to Github.
- Go to the selected repository.
- Click the Fork button in the top right corner and select create a fork.
- One can change the name of the fork and add description
- Choose to copy only the main branch or all branches to the new fork.
- Click Create a Fork. A repository should appear in your GitHub
</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

