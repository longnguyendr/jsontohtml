document.addEventListener("DOMContentLoaded", function jsontostring() {
    
    var jsonobj=JSON.parse(userData);
    var form = document.getElementById("test");
    var contents = form.querySelectorAll("input, select, textarea");
    
    for (var i = 0; i < contents.length; ++i) {
        var content = contents[i];
        var names = content.name;
        var values = content.value;
        var checks = content.checked;
        var types = content.type;
        
        for (var x in jsonobj) {
            if (names == x) {   
                // Set Radio type
                if (types=="radio" && values == jsonobj[x]) {
                    checks = true;
                    content.checked = checks;
                } 
                // Set Checkbox type
                else if (types=="checkbox" ) {
                    for (z in jsonobj.Snacks) {
                        if (values == jsonobj.Snacks[z]) {
                            checks=true;
                            content.checked = checks;
                        }
                    }
                }
                // Set value for input
                else {
                    values = jsonobj[x];
                    content.value = jsonobj[x];
                }
                    
            }
        }
    }
})
