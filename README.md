# jQuery Get-Git

Using vanilla JavaScript, search github and have a specific repository show on your website/application. Add this to your javascript/jQuery in order to do just that.

By default, get-git will not load anything until you set the search terms in the file. Look for:

```javascript
  18 promise = $.ajax({
  19  url: "https://api.github.com/search/repositories?q=yoursearch",
  20  dataType: "json",
  21  async: true
  22 });
```
Change "yoursearch" to the term that you would like to search for on github.

The basics of working with the API
-
do these basic steps to access items from the api call.


Click here to learn more about the [Github Search API](https://developer.github.com/v3/search/)

### Some of the main items you have access to from get-git:
- **name:** Repo name
- **description:** The URL to clone the repository
- **clone_url:** The URL to clone the repository
- **stargazers_count:** Repo stars
- **watchers_count:** Number of watchers
- **issues_url:** Repository issues
- **pulls_url:** Current pull requests
- **created_at:** Date the repo was created
- **updated_at:** Most recent date updated
- **open_issues:** The URL to clone the repository
- **has_wiki:** Boolean if repo has a wiki
- **language:** The URL to clone the repository
- **owner.login:** The owner's Github name/login
- **owner.avatar_url:** The owner's avatar
- **owner.html_url:** Owner's profile URL
- **contributers_url:** Contributors to the repository
