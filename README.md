# Comments Section with Redux and LocalStorage
# Overview

This project is a comments section built with React, Redux, and localStorage. It allows users to add, edit, delete, and reply to comments. Replies are nested directly under their parent comments, and both comments and replies can be sorted by date and time. The application persists its state using localStorage, ensuring that comments and sorting preferences are saved even after refreshing the page.

# Video-Guide :
[Screencast from 14-08-24 06:15:18 PM IST.webm](https://github.com/user-attachments/assets/fb769729-db80-4c1b-8705-9b3237324e6e)


# Features

   - Add Comments: Users can add new comments to the section.
   - Reply to Comments: Users can reply to existing comments (nested replies are not supported).
   - Edit Comments/Replies: Users can edit their comments or replies.
   - Delete Comments/Replies: Users can delete their comments or replies.
   - Sort Comments: Comments can be sorted by date and time, with replies within each comment being sorted accordingly.
   - Persistent State: The state is saved to localStorage to preserve the comments and sorting order across sessions.

# Getting Started

# Prerequisites

Before you begin, ensure you have the following installed on your local machine:

   - Node.js (version 14.x or higher)
   - npm (version 6.x or higher) or Yarn (version 1.x or higher)

Installation

     git clone git@github.com:Vishesh-Paliwa/HealthFlix-Project.git
  
cd to repo

Install the dependencies:

    npm install

Running the Application

To start the development server, run:

    npm start


The application will be available at http://localhost:3000.


# Usage :
# Adding a Comment

   - Enter your name and comment in the provided input fields.
   - Click "Submit" to add the comment to the section.

# Replying to a Comment

   - Click the "Reply" button under a comment.
   - Enter your reply in the textarea that appears.
   - Click "Reply" to add the reply under the comment.

# Editing or Deleting a Comment/Reply

   - Click the "Edit" or "Delete" button next to the comment or reply.
   - If editing, modify the text and save your changes.

# Sorting Comments

   - Use the sorting dropdown to choose between sorting by "Newest" or "Oldest."
   - The comments and their replies will be sorted according to your selection.

# Technologies Used

   - React: A JavaScript library for building user interfaces.
   - Redux: A predictable state container for JavaScript apps.
   - localStorage: Web storage API for persisting state.
   - CSS: For styling the application.
