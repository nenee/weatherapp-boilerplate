#Preact Boilerplate / Starter Kit for a Weather App

## Set-Up Guide
- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Quick Boilerplate Overview](#quick-boilerplate-overview)
- [Extra Info](#extra-info)

**0. Before doing any of this, if you're using your own laptop/desktop, make sure you've got the latest versions of node and npm installed (npm v: 4.0.5 & node v: 7.4.0) :**

```sh
node -v
npm -v
```

## Installation

**1. Clone this repository :**

```sh
git clone --depth 1 https://github.com/nenee/weatherapp-boilerplate.git weather-app
cd weather-app
```

**2. Make it your own :**

```sh
rm -rf .git && git init && npm init
```

> :information_source: Command above re-initializes the repo and sets up your NPM project.


**3. Install the dependencies :**

```sh
npm install
```

## Development Workflow


**4. Start a live-reload development server :**

```sh
npm run dev
```

> This is a full web server for your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.


**5. Generate a production build in `./build` :**

```sh
npm run build
```

**6. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
npm start
```

> This simply serves up the contents of `./build`. Bear in mind, if you use this, the localhost port your server is running on will refresh, and you'll also need to restart it to see any changes you've made to the code in `src`.


## Quick Boilerplate Overview

- The initial run will display the iPhone version (iPhone 6/7 Plus screen size); however, if you modify the path on the url bar by adding "/ipad", you can view the tablet version (iPad Air screen size).

- The CSS pre-processor in use is Less. You don't have to worry about the syntax and just write in normal CSS as there are helper modules to assist you (located in `style/helpers`).

- There are many weather APIs out there; this boilerplate uses WeatherUnderground, which I highly recommend for any detailed info you may need; sign up is free and you can find out more about it here : 
https://www.wunderground.com/weather/api/d/docs?MR=1 There's also a console, where you can check out particular responses : https://apigee.com/console/wunderground

- Most importantly, have fun with it ! 👌


## Extra Info

1. Handling URLS

:information_source: You can use URL Routing as defined [here](http://git.io/preact-router).

Pages are just regular components that get mounted when you navigate to a certain URL. Any URL parameters get passed to the component as `props`.

Defining what component(s) to load for a given URL is easy and declarative. You can even mix-and-match URL parameters and normal props.

```js
<Router>
  <A path="/" />
  <B path="/b" id="42" />
  <C path="/c/:id" />
</Router>
```