const listItem = [
    {
        name:'Laptop Asus TUF FX506LI HN096T i7 10870H/8GB/512GB SSD/Win10',
        firstPrice:'26,490,000đ',
        secondPrice:'22,490,000đ',
        type: 'laptop',
        link:'Product.html',
        img: 1,
    },
    {
        name:'Laptop Acer Nitro Gaming i7 10750H/8GB/512GB/4GB/Win 10',
        firstPrice:'26,990,000đ',
        secondPrice:'22,990,000đ',
        type: 'laptop',
        link:'Product1.html',
        img: 2,
    },
    {
        name:'Lenovo IdeaPad L340-15IRH 81LK00FAVN',
        firstPrice:'31,990,000đ',
        secondPrice:'27,990,000đ',
        type: 'laptop',
        link:'Product2.html',
        img: 3,
    },
    {
        name:'Máy tính xách tay MSI Gaming GL65 Leopard 10SCXK (089VN)',
        firstPrice:'26,690,000đ',
        secondPrice:'22,690,000đ',
        type: 'laptop',
        link:'Product3.html',
        img: 4,
    },
]


$(document).ready(()=>{
    
    const ls = $('tbody');
    renderLocalStorage()
    function renderLocalStorage(){
        for(i = 0; i <= listItem.length; i++){
            if(localStorage.getItem(`prdprd0${i}`) == null) continue;
            let key = Number(localStorage.getItem(`prdprd0${i}`).replace(/[a-z]/igm,''));
            console.log(key);
            let prd = listItem[key-1];
            console.log(prd);

            let node= `
                <tr class="cart__product--item">
                    <td class="image">
                        <div class="product_image">
                            <a href="">
                                <img src="./assets/img/product${prd.img}.jpg">
                            </a>
                        </div>
                    </td>
                    <td class="item">
                        <a href="">
                            <strong>${prd.name}</strong>
                            
                        </a>
                    </td>
                    <td class="qty">
                        <input type="number" value="1" max = "10" min = "0">
                    </td>
                    <td class="price">${prd.secondPrice}</td>
                    <td class="remove">
                        <button id="prdprd0${prd.img}"><img width="30px" src="./assets/logo/delete_logo.svg" alt=""></button>
                    </td>
                </tr>
            `
            ls.prepend(node);
        }
    }
    $('.remove button').click(function (){
        localStorage.removeItem(this.id);
        $(this).parents('.cart__product--item').remove();
        
    });
    $('.btn__up').click(()=>{
        let sum = 0;
        for(i = 0; i < $('.cart__product--item .qty input').length; i++)
        {
            let num = $(`.cart__product--item .qty input:eq(${i})`).val(); 
            
            let pr = $(`.cart__product--item .price:eq(${i})`).text().toString();
            pr = pr.substr(0, pr.length-1);
            pr = pr.replace(/[,.]/g, '');
            console.log(pr);
            sum += num*pr;
            console.log(sum);
        }
        sum = Number(sum);
        sum  = sum.toLocaleString('en');
        $('#tong_tien .price .total strong').text(sum + '₫');
    })
    
})