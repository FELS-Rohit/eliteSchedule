## Ionic Elite Schedule App

### 1
- `ionic start eliteSchedule blank`
- Create `www/app` folder and our own app.js inside
- rename `starter` to `eliteApp` in index.html and delete body content 
- Added `home.html` for default page with 2 tabs [ion-nav-bar](http://ionicframework.com/docs/api/directive/ionNavBar/), [ion-tabs, tab](http://ionicframework.com/docs/api/directive/ionTabs/)
- Added 'layout/menu-layout' [ion-side-menus](http://ionicframework.com/docs/api/directive/ionSideMenus/), [ion-list](http://ionicframework.com/docs/api/directive/ionList/), [nav-clear](http://ionicframework.com/docs/api/directive/navClear/), edited `app/app.js` (added a state)

#### AngularUI Router 
- Routing framework for AngularJS
- Organize into State Machines
- Allows for Nested Views
- 3 Ways to Activate a State 

**State**
- State must be unique name
- State has URL: supports parameters
- State has Template or TemplateUrl
- Optionally has Controller

Example
```js
$stateProvider.state('contacts', {
  url: '/contacts',
  tempalteUrl: 'contacts.html'
});
```

**Nested States/Views**
- Angular UI Router Supports Nested States
- Uses Dot Notation
- Child Inherits from Parent (URL)
- Abstract: 
- - - Can have child states though not activated itself
- - - Must contain their own <ui-view/> (<ion-nav-view/>)

Example
```js
$stateProvider
  .state('woo', {
    abstract: true,
    url: '/woo',
    tempalteUrl: 'woo.html' // it must contain <ui-view/>
  })
  .state('woo.wee', {
    url: '/wee',
    tempalteUrl: 'wee.html' // it will be  "/woo/wee"
  });
```

- Activating States: 3 ways

```
<a href="#/woo/wee">Go</a>

<a ui-sref="woo.wee">Go</a>

$state.go("woo.wee");

```

- Added `abstract: true` in `home` state and 2 new states "my-leagues" and "myteams", and changed `otherwise` 
- Changed `ion-view` to `ion-nav-view` and added href in home.html
- Created 2 new child templates for `my-leagues` and `myteams` of `home`

- Similarly, added `abstract: true` to `app` state and `ion-nav-view` in `menu-layout`as well
- Added bunch of nested states of `app` in `app.js` and created files and folders for them
- Added basic contents in each files and `ui-sref` in `ion-item` in `menu-layout`
- Team detail page creatation (i.e. /teams/21) with a controller `team-detail-ctrl.js`
- Added icon for back button


### 2

- Hard coded data in `services/eliteApi.js`
- Created `home/leagues-ctrl` to use the data
- Added `locations/locations-ctrl` with its view as well
- Added `standings-ctrl` and `teams-ctrl` with their views
- `bower install lodash --save-dev`
- Added `team-detail-ctrl` with lodash
- Ionic grids [Link](http://ionicframework.com/docs/components/#grid)
- Grid system apllied to standings and team-detail HTML
- Used[card](http://ionicframework.com/docs/components/#cards) to style `game.html` and `standings.html` 
- Toggle and Checkbox features demo

