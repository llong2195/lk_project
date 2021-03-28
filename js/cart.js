$(document).ready(()=>{
    $('.btn__up').click(()=>{
        let sum = 0;
        for(i = 0; i < $('.cart__product--item .qty input').length; i++)
        {
            let num = $(`.cart__product--item .qty input:eq(${i})`).val(); 
            
            let pr = $(`.cart__product--item .price:eq(${i})`).text().toString();
            pr = pr.substr(0, pr.length-1);
            pr = pr.replace(/,/g, '');
            console.log(pr);
            sum += num*pr;
            console.log(sum);
        }
        sum = Number(sum);
        sum  = sum.toLocaleString('en');
        $('#tong_tien .price .total strong').text(sum + '₫');
    })
   
})