$(document).ready(function(){
    $.ajax({
        method:"Get",
        url:"https://fakestoreapi.com/products",
        dataType:'json',
        success: function(data){
            
            for(let key in data){
                let value = data[key];
            $('.card').append('<img src="'+ value.image + '"class="card-img-top"></img>' );
            $('.card').append('<h5 class="card-title">'+ value.title +'</h5>' );
            $('.card').append('<p class="card-text">'+ value.price+'</p>' );
            $('.card').append('<a href="#" class="btn btn-primary">Go</a>' );
            $('.card').append('</br>' );
            $('.card').append('</br>' );
            };
            
        }
      
    });
});