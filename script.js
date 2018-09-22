document.addEventListener("DOMContentLoaded",function jsontostring(){

    var jsonstr= '{"name":"hello","Gender":"Mrs","select":"Pizza","message":"yes pla pla palaplasdasd"}';
    var jsonobj=JSON.parse(jsonstr)
    console.log(jsonobj["name"]);
    for(var x in jsonobj)
    {
        console.log(jsonobj);
    }
        var form = document.getElementById("test");
        var contents = form.querySelectorAll( "input, select, textarea" );
        for( var i = 0; i < contents.length; ++i ) {
            var content = contents[i];
            var names = content.name;
            var values = content.value;
            var checks = content.checked;
            console.log("1");
            for(var x in jsonobj)
            {
                if(names == x)
                {
                    
                    values = jsonobj[x];
                    content.value = values;
                    console.log(values);
                    console.log(jsonobj[x]);
                    console.log(content);
                }
            }
        }
  
}
)