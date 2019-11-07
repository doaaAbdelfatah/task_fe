var bag =[];
var products =[
        {
            id: 1,
            name : "Adobe Acrobat Pro",
            price:1000,
            image :"1.jpg"
        },
        {
            id: 2,
            name : "Minitab &reg;",
            price:800,
            image :"2.jpg"
        },
        {
            id: 3,
            name : "Microsoft&reg; Access",
            price:700,
            image :"3.jpg"
        },
        {
            id: 4,
            name : "Microsoft&reg; Excel",
            price:1200,
            image :"4.jpg"
        },
        {
            id: 5,
            name : "Microsoft&reg; Office",
            price:1900,
            image :"5.jpg"
        },
        {
            id: 6,
            name : "Microsoft&reg; OneNote",
            price:800,
            image :"6.jpg"
        }
        ,
        {
            id: 7,
            name : "Microsoft&reg; Outlook",
            price:500,
            image :"7.jpg"
        }
        ,
        {
            id: 8,
            name : "Microsoft&reg; PowerPoint",
            price:600,
            image :"8.jpg"
        }
        ,
        {
            id: 9,
            name : "Microsoft&reg; Project",
            price:900,
            image :"9.jpg"
        }
        ,
        {
            id: 10,
            name : "Microsoft&reg; Sharepoint",
            price:3000,
            image :"10.jpg"
        }

];

$(document).ready(function(){
    var i =0;
    for (prod of products){
        i++;
        $("#our_prodcuts").append('<div class="col-md-2 d-flex pl-0 pb-2"><div class="feature-column"><img src="dist/images/products/'+prod.image
        +'" class="card-img-top" alt="'+prod.name+'"><p class="float-left">'+prod.name
        +'</p><button id="product_btn_'+prod.id+'" class="product_btn  float-right mr-0" onclick="addToBag('+prod.id+')">Add To Bag</button></div></div>');
        if (i==5)
        {
            $("#our_prodcuts").append('<div class="col-md-1 d-flex"></div>');
            
        }
    }   

    bag =  JSON.parse(localStorage.getItem(["bag"]));
 
    var c=0;
    for(bag_prod of bag)
    {
        console.log(bag_prod);
        $("#bag_items").prepend(' <li id="bag_list_item_'+c+'" class="clearfix"><div class="cart-image"><a href="#"><img src="dist/images/products/'+bag_prod.image
        +'" class="img-fluid" alt="image"></a></div><div class="cart-content"><h6>'+bag_prod.name
        +'</h6><span class="cart-price text-muted">'+bag_prod.price+'</span><button class="btn-remove" onclick="removeFromBag('+c
        +')"  title="Remove from Bag">X</button></div></li>');
        
        $("#product_btn_"+bag_prod.id).text("In The Bag");    
        $("#product_btn_"+bag_prod.id).attr("disabled", true);
        c++;
    }
    if (bag.length>0)
    {
        $("#btn_booking").css("display" ,"block");
        $("#bag_qty").text(bag.length);
    } 

});

function addToBag(id){
    var bag =  JSON.parse(localStorage.getItem(["bag"]));
    var bagCounter =bag.length;
    bag[bagCounter] = products[id-1];
    $("#bag_items").prepend(' <li id="bag_list_item_'+bagCounter+'" class="clearfix"><div class="cart-image"><a href="#"><img src="dist/images/products/'+bag[bagCounter].image
    +'" class="img-fluid" alt="image"></a></div><div class="cart-content"><h6>'+bag[bagCounter].name
    +'</h6><span class="cart-price text-muted">'+bag[bagCounter].price+'</span><button class="btn-remove" onclick="removeFromBag('+bagCounter+')" title="Remove from Bag">X</button></div></li>');

    $("#product_btn_"+id).text("In The Bag");    
    $("#product_btn_"+id).attr("disabled", true);
    
    bagCounter++;
    if (bagCounter>0)
    {
        $("#btn_booking").css("display" ,"block");
    }
   $("#bag_qty").text(bagCounter);
   localStorage.setItem("bag", JSON.stringify(bag));
   

}

function removeFromBag(i)
{
    var bag =  JSON.parse(localStorage.getItem(["bag"]));
    $("#bag_list_item_"+i).remove();
    $("#product_btn_"+bag[i].id).text("Add To Bag");    
    $("#product_btn_"+bag[i].id).attr("disabled", false);
    bag.splice(i,1);
    console.log(bag);
    
    $("#bag_qty").text(bag.length);
    if (bag.length==0)
    {
        $("#btn_booking").css("display" ,"none");
        $("#bag_qty").text("");
    }
    localStorage.setItem("bag", JSON.stringify(bag));

   
}
