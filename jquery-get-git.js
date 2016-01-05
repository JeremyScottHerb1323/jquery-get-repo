(function() {
  var get_repo, method_failed, repo_list, store_data;

  $(function() {
    return get_repo();
  });

  /*
    Github
    Ajax async call to github and return the object to be used as you wish
  */

  repo_list = [];

/* Replace "yoursearch" with the term you want to search for */
  get_repo = function() {
    var promise;
    promise = $.ajax({
      url: "https://api.github.com/search/repositories?q=yoursearch",
      dataType: "json",
      async: true
    });
    promise.done(store_data);
    return promise.fail(method_failed);
  };

  store_data = function(resp) {
    var current_repo, num;
    repo_list = [];
    repo_list = resp;
    num = Math.floor(Math.random() * repo_list.items.length) + 1;
    current_repo = repo_list.items[num];
    return repo_list;
  };

  method_failed = function(other) {
    console.log(other);
    return console.log('epic fail');
  };

}).call(this);
