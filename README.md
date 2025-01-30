# developer's Community

- Create a Vite + React application
- Remove unecessary code
- Install Tailwindcss
- Install Daisy UI
     https://daisyui.com/
- Add navbar component to your app
- Create a Navbar.jsx separate Component File
- Install react-router-dom
- Create BrowserRouter > Routes > Route = /Body > RouteChildren
- Create an OutLet in the Body Component
- Create the Footer and add social media links
- Create a Login Page
- install axios
   https://github.com/axios/axios?tab=readme-ov-file#axios-api
- CORS - install cors in backend => add middleware with configurations: origin,credentials:true
     https://github.com/expressjs/cors
- whenever you are making API call so pass => axios => {withCredentials:true} ,if you don't pass it then it will not send the token in other API calls

- install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/introduction/getting-started => configureStore => Provider => createSlice => add reducer to store

- login and see if the data is being passed properly in the store
- NavBar should update as soon as user login
- Refactor the code to add constants file + create a component folder
- you should not be able to access other routes without login
- if token is not present , redirect user to login page
- Logout
- get the feed and the feed in the store
- build the userCard on feed





Body
   NavBar
   Route = /  => Feed
   Route = /login => Login
   Route = /connections => Connections
   Route = /profile => Profile