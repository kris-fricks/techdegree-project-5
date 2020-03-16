//------------------------ 
//------Searchbox--------- 
//------------------------


$(function() {       
    $("#search").on("keyup", function() {    //collects data from search id when key search is used
        let value = $(this).val().toLowerCase(); //converts anything typed into lowercase to match the captions
        $("a").each(function() {                    //loops through 'a' elements   
            let str = $(this).attr("data-title");  //targets the search through the data-title attribute
            if (str.indexOf(value) > -1) {        //if anything typed matches a caption
                $(this).show();                   //then show what caption matches
            } else {                               //if not....
                $(this).hide();                 //then hide what doesnt match
            }
        });
    });
});

