<div align="center">
  <img alt="Logo" src="logo.svg" width="100" />
</div>
<h1 align="center">
  TV Maze API Integration
</h1>

<!-- ![Screenshot](application.png) -->

### What is this?
A React JS Application to ingest and format data provided by the [TV Maze API](https://www.tvmaze.com/api).

### Notes 

* Building authentication system
  * Using sessionStorage and native JS variables to manage and persist logins
  * Conditional rendering based on "userLevel". 1 is a normal user, 2 is an admin user

* API integration plan
  * Menu for TV show categories
    * categories can be genres or networks
      * First and default menu option will be [show searching](https://www.tvmaze.com/api#search)
      * Second menu option will be [people searching](https://www.tvmaze.com/api#people-search)
  * Search feature for TV shows
  * Admin view should display different information or more information
    * Regular users will only be allowed to do a [single show search](https://www.tvmaze.com/api#show-single-search)
    * Admin users will be allowed to search [all available shows](https://www.tvmaze.com/api#show-search)

* UI will be a basic table with a search/filter at the top
## Technology Used

Application Stack
* Javascript **(Frontend)**
* React JS **(Frontend)**
* [TV Maze API](https://www.tvmaze.com/api) **(Backend)**
