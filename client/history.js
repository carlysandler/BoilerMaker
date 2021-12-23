import { createMemoryHistory, createBrowserHistory } from 'history';

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory() // eplicitly defined
    : createBrowserHistory(); // array & index controlled by browser and connot be directly accessed

console.log(history);
export default history;

/*
https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd

The history library lets you easily manage session history anywhere JavaScript runs.
A history object abstracts away the differences in various environments and provides
a minimal API that lets you manage the history stack, navigate, and persist state between sessions.
*/

// history provides core functionality for React Router
// enables projects to easily add location based bavigation on client side - SPA
// // import {
//   createBrowserHistory,
//   createHashHistory,
//   createMemoryHistory
// } from 'history'

// const location = {
//   pathname: '/here',
//   search: '?key=value',
//   hash: '#extra-information',
//   state: { modal: true },
//   key: 'abc123'
// }

// initital location depends on type of history
// ex. browser history will pasrse current URL

// history obj keeps track of array of locs
// ability to add locs and move throughout the location array is what makes history history
// if history knew about current location -> it would be named "present"
// history maintains index value referring to current location in array

// navigation methods => allow to change current location

// push => go to new location; add new loc to array after current loc
// any future locations (ones that exist in the array after the current location because of the use of the back button) will be dropped
// default click on <Link> from react reouter, it will use history.push to nav

// history.push({ pathname: '/new-place' })

//history.replace({ pathname: '/go-here-instead'})

/*
The replace method is similar to push, but instead of adding a new location,
it will replace the location at the current index.
“Future” locations will not be dropped.

goBack goes back one page. This essentially decrements the index in the locations array by one.
history.goBack()

goForward is the opposite of goBack, going forward one page. It will only work when there are “future” locations to go to, which happens when the user has clicked the back button.
history.goForward()

go is a more powerful combination of goBack and goForward. Negative numbers passed to the method will be used to go backwards in the array, and positive numbers will be used to go forward.
history.go(-3)

Each history object has a listen method, which takes a function as its argument. That function will be added to an array of listener functions that the history stores. Any time the location changes (whether this is by your code calling one of the history methods or because a user clicked a browser button), the history object will call all of its listener functions. This allows you to setup code that will update whenever the location changes.
const youAreHere = document.getElementById('youAreHere')
history.listen(function(location) {
  youAreHere.textContent = location.pathname
})
A React Router’s router component will subscribe to its history object so that it can re-render whenever the location changes.

Linking things together
Each history type also has a createHref method that can take a location object and output a URL.
Internally, history can navigate using location objects. However, any code that is unaware of the history package, such as anchor elements (<a>), does not know what location objects are. In order to generate HTML that will still properly navigate without knowledge of history, we must be able to generate real URLs.
const location = {
  pathname: '/one-fish',
  search: '?two=fish',
  hash: '#red-fish-blue-fish'
}
const url = history.createHref(location)
const link = document.createElement('a')
a.href = url
// <a href='/one-fish?two=fish#red-fish-blue-fish'></a>

// Given the following URL
url = 'http://www.example.com/this/is/the/path?key=value#hash'
// a browser history creates the location object:
{
  pathname: '/this/is/the/path',
  search: '?key=value',
  hash: '#hash'
}
// a hash history creates the location object:
{
  pathname: 'hash',
  search: '',
  hash: ''
}

// If example.com uses a static file server, these URLs would
// both fetch html from /my-site/index.html
http://www.example.com/my-site#/one
http://www.example.com/my-site#/two
// However, with a hash history, an application's location will be
// different for each URL because the location is derived from
// the hash section of the URL
{ pathname: '/one' }
{ pathname: '/two' }

Therefore, it should only be considered when your website does not have a dynamic server to server your HTML.
Memory: The Catch-all History
*/
