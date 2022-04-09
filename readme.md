# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](https://i.imgur.com/q8fUB3x.png)

### Links

- Solution URL: [https://github.com/jclong98/todo-react](https://github.com/jclong98/todo-react)
- Live Site URL: [https://dreamy-bavarois-f624c2.netlify.app/](https://dreamy-bavarois-f624c2.netlify.app/)

## My process

1. make a useTodo hook to handle all of the todo logic
1. create most of the functionality in the App.tsx file
1. separate pieces logically as they appear, like the Todo component, Header component, and AddTodoForm component
1. make sure the MVP is working
1. make a complete copy of this application, but with vue 3
1. steal my styles from the vue components and use them in this repo 😉

### Built with

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [usehooks-ts](https://usehooks-ts.com/)
- [Unocss Style Reset](https://github.com/unocss/unocss/tree/main/packages/reset)
- [react-sortablejs](https://github.com/SortableJS/react-sortablejs)
- Deployed with Netlify

### What I learned

I learned a lot about how to use and structure a react project while working on this. I come from a background of Vue, so coming to the react world was an interesting transition. I noticed that the way information was passed from component to component was a bit different because in vue, you can emit data out of a component and catch it with event handlers like @click or @customEvent, but in react, you would just pass a function into the component to be used internally.

### Continued development

React is an interesting framework, but I struggle to be efficient with writing in it. For further learning, I'd like to take a look at some component libraries, a better way to handle styling, and possibly Next.js because I really enjoy file based routing systems. Next.js looks like a great all-encompassing react server framework, so my next React project will most likely be built with it.

### Useful resources

- [usehooks-ts Docs](https://usehooks-ts.com/) - very intuitive composables to use in any project, great docs too

## Author

- Website - [Jacob Long](https://jacoblong.dev)
- Frontend Mentor - [@jclong98](https://www.frontendmentor.io/profile/jclong98)
