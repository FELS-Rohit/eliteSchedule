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
