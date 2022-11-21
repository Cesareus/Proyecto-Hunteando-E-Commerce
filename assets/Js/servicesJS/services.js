const ajax = (url, data) =>{
    var ajax = $.ajax({    
        "dataType": 'json',    
        "method": "POST",
        "url": url,
        "data": data
    })
    return ajax;
}


export const productosServices ={
    ajax
}

