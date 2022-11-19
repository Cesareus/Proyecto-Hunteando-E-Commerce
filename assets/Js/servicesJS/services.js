const ajax = (url, data) =>{
    var ajax = $.ajax({        
        "method": "POST",
        "url": url,
        "data": data
    })
    return ajax;
}


export const productosServices ={
    ajax
}

