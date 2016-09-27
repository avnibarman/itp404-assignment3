var getSubreddits = function(subreddit) {
  
var url = 'https://www.reddit.com/r/'+subreddit+'.json';

  var promise = $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).then(function(response){
   console.log(response);
        var templateSource = $('#list-template').html();
        var template = Handlebars.compile(templateSource);

        var html = template({
          d: response.data.children
        });
        
        $('#list').html(html);
         },function(){

         console.log("there was an error");
     
   });
  
}
