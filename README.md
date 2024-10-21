# PixelPals

![x](documentation/Images/PixelGif.gif)

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

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)