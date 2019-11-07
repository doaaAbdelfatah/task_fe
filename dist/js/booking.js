
function booking()
{
    var bag =  JSON.parse(localStorage.getItem(["bag"]));
    console.log(bag);
    var c=0;
    for(bag_prod of bag)
    {
        
        $("#bag_items").prepend(' <li id="bag_list_item_'+c+'" class="clearfix"><div class="cart-image"><a href="#"><img src="dist/images/products/'+bag_prod.image
        +'" class="img-fluid" alt="image"></a></div><div class="cart-content"><h6>'+bag_prod.name
        +'</h6><span class="cart-price text-muted">'+bag_prod.price+'</span><button class="btn-remove" onclick="removeFromBag('+c
        +')"  title="Remove from Bag">X</button></div></li>');
       
        $("#req_courses").append('  <div id="div_req_courses_'+c+'" class="col-sm-6 pb-2" ><div class="row"><div class="col-sm-6"><h6>'+bag_prod.name
        +'</h6><p>'+bag_prod.name+'</p></div><div class="col-sm-6"><img class="img" src="dist/images/products/'+bag_prod.image
        +'" alt=""/><button class="btn-remove"  title="Remove from Bag" onclick="removeFromBag('+c
        +')">X</button></div></div></div>     ');
        c++;
    }
    if (bag.length>0)
    {
        $("#btn_back").css("display" ,"block");
        $("#bag_qty").text(bag.length);
    } 
    
}

function removeFromBag(i)
{
    var bag =  JSON.parse(localStorage.getItem(["bag"]));
    $("#bag_list_item_"+i).remove();
    $("#div_req_courses_"+i).remove();
    //$("#product_btn_"+bag[i].id).text("Add To Bag");    
   // $("#product_btn_"+bag[i].id).attr("disabled", false);
    bag.splice(i,1);
    //console.log(bag);
    
    
    $("#bag_qty").text(bag.length);
    if (bag.length==0)
    {
        $("#btn_booking").css("display" ,"none");
        $("#bag_qty").text("");
    }
    localStorage.setItem("bag", JSON.stringify(bag));

   
}