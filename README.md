## Introduction

The Movie Library Application is a responsive and dynamic web application that allows users to browse, search, and manage a list of movies fetched from The Movie Database (TMDb) API. The application features a clean and modern UI built using Next.js, TypeScript, and Tailwind CSS.

## Technologies Used

Next.js: A React framework for server-side rendering and static site generation.
TypeScript: A typed superset of JavaScript that provides type safety.
Tailwind CSS: A utility-first CSS framework for styling.
Yarn: A package manager for managing project dependencies.
Axios: A promise-based HTTP client for making API requests.
Redux Toolkit: For state management
Redux persist: For persisting the favorite movies to localStorage

## Getting Started

Node.js (version 12 or higher)
Yarn (version 1.22 or higher)

## Installation

Clone the repository from github
git clone https://github.com/youngking44/bloocode.git

## Install Dependencies Using Yarn:

yarn install

## Create A .env File In The Root Directory And Add These Secrete Variables

NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_MOVIES_URL=

## Features

Homepage: Displays a grid of popular movies with a search bar for filtering.
Movie Details Page: Shows detailed information about a selected movie.
Favorites: Users can add/remove movies to/from a favorites list, persisted in localStorage.
Responsive Design: Fully responsive layout using Tailwind CSS.
Bonus Features:
Loading skeletons while fetching data.

## Design Decisions

TypeScript: Used to enforce type safety across the application, improving code quality and maintainability.
Redux Toolkit: Chosen for state management to handle the favorites list efficiently.
Tailwind CSS: Selected for its utility-first approach, allowing for rapid and responsive UI development.

## Deployment

The application is deployed on Vercel. You can access the live demo at https://bloocode-movies.netlify.app/
