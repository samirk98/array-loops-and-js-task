{ 
    // Mehsullar Sebete at 
    const products = [ 
        { 
            id: 1, 
            name: "Iphone 14 Pro Max", 
            price: 1500 
        }, 
        { 
            id: 2, 
            name: "Iphone 12 Pro Max", 
            price: 1200 
        }, 
        { 
            id: 3, 
            name: "Xiaomi Redmi Note 9 Pro", 
            price: 780 
        }, 
 
    ]; 
 
    let basket = []; 
    console.log(basket); 
    products.forEach(product => document.querySelector('.products').innerHTML += ` 
     <div class="product"> 
      <h1>${product.name}</h1> 
      <h1>${product.price}</h1> 
      <button onclick="sebeteAt('${product.id}')">Sebete At</button> 
     </div> 
    `); 
 
    function sebeteAt(id) { 
        const checkBasket = basket.find(item => item.id == id); 
 
        if (checkBasket) { 
            const updateItem = basket.map(item => { 
                if (item.id == id) { 
                    item.count = item.count + 1 
                } 
                return item 
            }) 
            console.log(updateItem); 
        } else { 
            const newItem = products.find(product => product.id == id); 
            const resNewItem = { 
                ...newItem, 
                count: 1 
            } 
            basket.push(resNewItem); 
            console.log(basket); 
        } 
    } 
} 
 
 
{ 
    // Inputdaki deyeri tersine cevirmek 
    document.querySelector('#reverse').addEventListener('click', () => { 
        const reverseString = document.querySelector('input[type="text"]').value.split(' ').reverse().join(' ') 
        console.log(reverseString); 
        document.querySelector('input').value = reverseString 
    }) 
} 
{ 
    // userslari tableda gosterib filter(axtaris etmek ada gore) 
 
    let users = [] 
 
    const getAllUsers = async () => { 
        try { 
            const request = await fetch('https://jsonplaceholder.typicode.com/users'); 
 
            if (!request.ok) { 
                throw new Error("Sorguda xeta bas verib API-yi yoxlayin yada ki serverde problem var") 
            } else { 
                const response = await request.json(); 
                users = [...response] 
                response.forEach(user => document.querySelector('tbody').innerHTML += ` 
            <tr> 
             <td>${user.id}</td> 
             <td>${user.name}</td> 
             <td>${user.username}</td> 
             <td>${user.phone}</td> 
 
             </tr> 
           `) 
            } 
        } catch (err) { 
            alert(err.message) 
        } 
    } 
    getAllUsers(); 
 
 
    document.querySelector('input[type="search"]').addEventListener('keyup', (e) => { 
        const filterUser = users.filter(user => { 
            if (user.name.toLowerCase().includes(e.target.value.toLowerCase())) { 
                return user 
            } 
        }); 
        console.log(filterUser); 
        document.querySelector('tbody').innerHTML = '' 
        if (filterUser.length == 0) { 
            document.querySelector('tbody').innerHTML = '<tr><h1>No Found anyuser</h1></tr>' 
        } else { 
            filterUser.forEach(user => document.querySelector('tbody').innerHTML += ` 
        <tr> 
         <td>${user.id}</td> 
         <td>${user.name}</td> 
         <td>${user.username}</td> 
         <td>${user.phone}</td> 
    
         </tr> 
       `) 
        } 
    }) 
}