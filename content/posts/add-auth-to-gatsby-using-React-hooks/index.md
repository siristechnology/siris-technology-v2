---
id: 14
path: '/how-to-add-auth-to-a-gatsby-app-using-react-hooks'
thumbnail: './auth-gatsby.jpg'
date: 2019-02-01T10:57:01.889Z
edited:
next: '/2018-year-review'
title: 'How to add auth to Gatsby app using React hooks'
---

Let's start by generating a new Gatsby app

```bash
gatsby new auth-example
```

Let's kick things off by installing all the dependencies (with the alpha version of React) we will be using in this tutorial, feel free to check each library docs to convince yourself to use it or use something else

> Before we install the dependencies, I'll remove the npm lock file as I'll be using `yarn` in this tutorial.

```bash
yarn add prettier react@^16.8.0 react-dom@^16.8.0 formik yup axios
```

Let's now move on into structuring the files/folders, I'll start by creating a `common` folder inside `src/components` which will contain:

- Layout component that wraps our pages
- AuthContext that simply creates Context
- AuthProvider that will handle the logic of authenticated or unauthenticated and returns user object

Then let's create a `theme` folder inside `src/components` to have our Header inside it. (Just take the generated header and move it inside the theme folder).

Finally, let's create another folder called `auth` inside `src/components`, which will contain 2 components `Register` & `Login`.

Here's the whole structure in a screenshot
