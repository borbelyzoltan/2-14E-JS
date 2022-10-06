document.getElementById("fetch-posts").onclick=function(){
    var xhr=new XMLHttpRequest;


    xhr.onreadystatechange=function(){
        if(xhr.readyState ===4 && xhr.status ===200){
            var posts=JSON.parse(xhr.responseText);

            var postlistHTML='';
            for(var post of posts){
                postlistHTML+='<p>'+post.title+'</p><small>'+post.body+'</small>';
            }

            document.getElementById('post-list-container').innerHTML=postlistHTML;
        }
    }

    xhr.open('GET','http://jsonplaceholder.typicode.com/posts');

    xhr.send();
}