# jQuery Get-Git


Want to search github and have a certain repository show on your website/application? Add this to your javascript/jQuery in order to do just that.

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



Click here to learn more about the [Github Search API](https://developer.github.com/v3/search/)

### Some of the main items you have access to from get-git:
- **clone_url:** The URL to clone the repository
- **description:** The URL to clone the repository
- **forks:** The URL to clone the repository
- **open_issues:** The URL to clone the repository
- **has_wiki:** The URL to clone the repository
- **homepage:** The URL to clone the repository
- **html_url:** The URL to clone the repository
- **language:** The URL to clone the repository
- **name:** The URL to clone the repository
- **owner:** The URL to clone the repository
- **gists_url:** Sometihng or another
- **html_url:** Sometihng or another
- **something** Sometihng or another
- **something** Sometihng or another
- **something** Sometihng or anothe