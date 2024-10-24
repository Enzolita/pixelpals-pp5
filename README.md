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
### Agile Planning and Development

<details>
<summary>Is Pixelpals agile?</summary>
<br>


At Pixelpals, our planning and development process is guided by Agile methodologies and principles. While we don't strictly follow traditional Agile frameworks like scheduled sprints or scrums, we emphasize flexibility, continuous improvement, and swift adaptation to change. Instead of focusing on sprints, we prioritize developing epics that align with backend applications, addressing User Stories based on their priority.

Our overarching strategy divides the project into three key phases: planning, development (which includes unit and functional testing), and continuous deployment. Documentation is created, reviewed, and updated throughout the process. Our approach is straightforward: we develop features in a logical order, prioritizing core functionalities before moving on to more complex aspects.

When we encounter bugs or issues, we log them as bug issues and add them to our backlog, allowing development to proceed without interruption. This enables us to make progress in other areas while periodically reassessing and prioritizing the backlog based on severity and impact. This method helps us maintain momentum in development while systematically addressing and resolving any issues.

We actively seek and analyze user feedback to pinpoint areas for improvement, ensuring that our product continuously evolves to meet user needs and expectations effectively.

We used a project [kanban board](https://github.com/users/Enzolita/projects/6) to track progress.
</details>

#### MoSCoW Prioritization

<details>
<summary>MoSCow </summary>
<br>
By focusing on the Must Have features, the project ensures the highest priority tasks are completed first, delivering a functional and valuable product to users. The Should Have and Could Have features provide room for enhancements and future iterations, aligning with both the MoSCoW method and the Pareto principle for effective project management.

- Must Have: <br>
  Includes tasks that set up the project foundation and core functionalities necessary for the project to operate (setting up the environment, repositories, core CRUD operations, and essential user features).

- Should Have: <br>
  Enhances usability, maintainability, and user experience, but are not critical for the initial launch (responsive design, navigation improvements, additional user profile features).

- Could Have: <br>
  Adds value but can be deferred without impacting the core functionality (tagging, advanced user interactions, and feedback mechanisms).

- Won't Have: <br>
Deferred features that are not essential for the initial launch but could be considered for future phases (infinite scroll).
<br>
</details>

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
Dive into Details: See all the nitty-gritty about a post, including comments. Edit or delete your posts easily.

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

**Ticket Form**
<br>
View your reports: Use our ticket form to view your reports, delete them or edit them.
When you don't have any tickets availible it'll show `No Reports Available` at My Tickets page.

![x](documentation/readme-image/my-tickets.gif)

</details>

### Future Features

<details>
<summary>The following will be added in future iterations of this project:</summary>
<br>

- **Admin Page Expansion**: Enhance the admin page to manage various tasks, such as handling messages sent through the report form. This would allow admins to respond directly to users from a dedicated admin-only page.
- **Chat/Direct Messaging**: Introduce a chat or direct messaging function to facilitate user communication.
- **Alert Notifications**: Implement alert notifications for broadcasting messages to all users.
- **Block Feature**: Users being able to block another user for whatever reason that doesn't feel good for them.
- **Profile Customization**: Allow users to customize their profiles with themes, backgrounds.
</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## The Surface Plane

### Design

<details>
<summary>Colour-Scheme, Typography and Imagery</summary>
<br>
The idea of ​​the color scheme of the application is a little towards blue and neutral white due to the darkmode component,
which makes the backround either white or dark grey.

<br>

#### Typography

The main font used on the website is "DM Sans".

![font](documentation/readme-image/font-dm-sans.png)

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Imagery

The images on this website are made by leonardo.ai and borrowed from pinterest.
</details><br>

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

### Testing

For the test results and solved issues, we refer to the [TESTING.md file](https://github.com/Enzolita/pixelpals-pp5/blob/main/TESTING.md).
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

### Credits

#### Content

<details>
<summary>List of content</summary> 
<br>
Throughout the development of Pixelpals, we utilized a variety of resources to ensure the platform is robust, user-friendly, and engaging. Below is a list of documentation, blogs, tutorials, and guides that have been instrumental in crafting the features and functionality of Pixelpals:

- [Favicon, credited to](https://www.flaticon.com/free-icons/photography") Photography icons created by Vactor area- Flaticon
- Logo used was created at [Looka](https://looka.com/dashboard)
- [React Multiselect dropdown](https://www.npmjs.com/package/multiselect-react-dropdown), this library is used for handling hashtags. It helps keep the codebase cleaner and more maintainable.
- [css-validator](https://www.npmjs.com/package/css-validator) together with GPT was used to create `validate-css.js`. It was used to validate CSS.
- **Bootstrap**: Used for styling and responsive design, making the site accessible on a variety of devices - [Bootstrap documentation](https://getbootstrap.com/).
- **Sources of inspiration and guidance in general**:
  - This resources is only available to enrolled students at The Code Institute:
    - The Code Institute Diploma in Full Stack Software Development (Advanced Front-End) Walk-through project Moments (frontend)
  - [React](https://react.dev/learn) A goto place to learn.
  - [Django Rest framework](https://www.django-rest-framework.org/) A got place to learn
  - [Django & React Tutorial](https://youtu.be/JD-age0BPVo?si=vLYojx9J_rD8ZKyU), Tech with Tim, also a goto net source for inspo.
- **Testing**: Used to learn how to create test cases
  - [How to write test cases for Django Rest Framework Applications](https://rajansahu713.medium.com/mastering-the-art-of-django-test-cases-fa7b0322c9fb)
  - [Django REST framwork, Testing](https://www.django-rest-framework.org/api-guide/testing/#testingDjango)
  - [django project, testing](https://docs.djangoproject.com/en/3.2/topics/testing/)
  - [Getting started with testing in Python](https://realpython.com/python-testing/)
  - [Testing in Django (Part 1) – Best Practices and Examples](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/)
  - [serie of videos - Django Testing Tutorial - What Is Testing?](https://youtu.be/qwypH3YvMKc?si=1OptYFWRajgREWh_)
  - [Unit Tests in Python || Python Tutorial || Learn Python Programming](https://youtu.be/1Lfv5tUGsn8?si=ZgIDWVjSQqTIUYYK)
  - [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) are used in test cases to validate that the application is behaving as expected under various conditions.
  - [Darkmode react tutorial](https://www.youtube.com/watch?v=Uz35Qiia84g) Darkmode tutorial I used.

  </details>

#### Acknowledgements

<details>
<summary>I would like to thank!</summary>
<br>

- To all engaged fellow students at all channels.
- Code Institutes Tutor Support service.
- My mentor [Jubril Akolade](https://github.com/jubrillionaire/)
</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_