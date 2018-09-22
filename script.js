document.addEventListener("DOMContentLoaded",function jsontostring(){
   
    var jsondata = '';
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "json.txt", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            jsondata=JSON.parse(xhttp.responseText);
            console.log(xhttp.responseText);
            var form = document.getElementById("test");
            var contents = form.querySelectorAll( "input, select, textarea" );
            for( var i = 0; i < contents.length; ++i ) {
                var content = contents[i];
                var names = content.name;
                var values = content.value;
                var checks = content.checked;
                // console.log("1");
                for(var x in jsondata)
                {
                    if(names == x)
                    {       
                        values = jsondata[x];
                        content.value = values;
                        // console.log(values);
                        // console.log(jsonobj[x]);
                        // console.log(content);
                    }
                }
            }
        }
      };

      xhttp.send(null);


        
  
}
)


//var jsonstr= '{"name":"Yep","Gender":"Mrs","select":"Pasta","message":"yes Succesfull pla pla palaplasdasd"}';
        // var jsonobj=JSON.parse(jsonstr);
        // console.log(jsonobj["name"]);
        // for(var x in jsonobj)
        // {
        //     console.log(jsonobj);
        // }


        // var form = document.getElementById("test");
        // var contents = form.querySelectorAll( "input, select, textarea" );
        // for( var i = 0; i < contents.length; ++i ) {
        //     var content = contents[i];
        //     var names = content.name;
        //     var values = content.value;
        //     var checks = content.checked;
        //     // console.log("1");
        //     for(var x in jsonobj)
        //     {
        //         if(names == x)
        //         {       
        //             values = jsonobj[x];
        //             content.value = values;
        //             // console.log(values);
        //             // console.log(jsonobj[x]);
        //             // console.log(content);
        //         }
        //     }
        // }