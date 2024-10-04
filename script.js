


let i = 0;
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let i7 = 0;
let i8 = 0;
// price of products
let price = document.getElementById('para').textContent;
let price1 = document.getElementById('para1').textContent;
let price2 = document.getElementById('para2').textContent;
let price3 = document.getElementById('para3').textContent;
let price4 = document.getElementById('para4').textContent;
let price5 = document.getElementById('para5').textContent;
let price6 = document.getElementById('para6').textContent;
let price7 = document.getElementById('para7').textContent;
let price8 = document.getElementById('para8').textContent;
// name of products
let name = document.getElementById('h').textContent;
let name1 = document.getElementById('h1').textContent;
let name2 = document.getElementById('h2').textContent;
let name3 = document.getElementById('h3').textContent;
let name4 = document.getElementById('h4').textContent;
let name5 = document.getElementById('h5').textContent;
let name6 = document.getElementById('h6').textContent;
let name7 = document.getElementById('h7').textContent;
let name8 = document.getElementById('h8').textContent;
// total of products
let subtotal = i*price
let subtotal1 = i1*price1
let subtotal2 = i2*price2
let subtotal3 = i3*price3
let subtotal4 = i4*price4
let subtotal5 = i5*price5
let subtotal6 = i6*price6
let subtotal7 = i7*price7
let subtotal8 = i8*price8


// product-name in recheck
let products = [];
function addProduct(product) {
 
  products.push(product);
  document.getElementById('product-name').innerText = products.join(', ');
}

function removeProduct(product) {
   return function(){
    const index = products.indexOf(product);
    if (index !== -1) {
      products.splice(index, 1);
      document.getElementById('product-name').innerText = products.join(', ');
    }
  }
}


// add prodect to cart
function added(){
  if(i=1){
        document.getElementById("h").innerHTML = `${name}`;
        document.getElementById("productname").innerHTML = `${name}`;
        document.getElementById('par').value = i;
        document.getElementById('qty').value = i;
        document.getElementById('par').innerHTML= i+"x";
        document.getElementById('para').style.display = 'flex'
        document.getElementById('cart').style.display = 'flex'
        document.getElementById('para').innerHTML= `$${price}`;
        subtotal = i*price
        document.getElementById("pr").innerHTML = `$${subtotal}`;
        document.getElementById("cartimg").style.display = `none`;
        document.getElementById("adde").innerHTML = `Added`;
        document.getElementById("remove").style.display="block"
        butt = document.getElementById('butt');
        butt.style.display = 'block'
        but = document.getElementById('but');
        but.style.display = 'block'
        update()
  }
  addItemToCart()
  addProduct(name)
}
function added1() {
  if(i1=1){
    document.getElementById("h1").innerHTML = `${name1}`;
    document.getElementById("productname1").innerHTML = `${name1}`;
    document.getElementById('par1').value = i1;
    document.getElementById('par1').innerHTML= i1+"x";
    document.getElementById('para1').style.display = 'flex'
    document.getElementById('cart1').style.display = 'flex'
    document.getElementById('para1').innerHTML= `$${price1}`;
    document.getElementById("cartimg1").style.display = `none`;
    subtotal1 = i1*price1
    document.getElementById("pr1").innerHTML = `$${subtotal}`;
    document.getElementById("adde1").innerHTML = `Added`;
    document.getElementById("remove1").style.display="block"
    butt = document.getElementById('butt1');
    butt.style.display = 'block'
    but = document.getElementById('but1');
    but.style.display = 'block'
    update1()
  }
  addItemToCart()
  addProduct(name1)
}
function added2() {
  if(i2 = 1){
  document.getElementById("h2").innerHTML = `${name2}`;
  document.getElementById("productname2").innerHTML = `${name2}`;
  document.getElementById('par2').value = i2;
  document.getElementById('par2').innerHTML= i2+"x";
  document.getElementById('para2').style.display = 'flex'
  document.getElementById('cart2').style.display = 'flex'
  document.getElementById('row2').style.display = 'flex'
  document.getElementById("cartimg2").style.display = `none`;
  document.getElementById('para2').innerHTML= `$${price2}`;
  subtotal2 = i2*price2
  document.getElementById("pr2").innerHTML = `$${subtotal2}`;
  document.getElementById("adde2").innerHTML = `Added`;
  document.getElementById("remove2").style.display="block"
  butt = document.getElementById('butt2');
  butt.style.display = 'block'
  but = document.getElementById('but2');
  but.style.display = 'block'
  update2()
  // total(subtotal)
  }
  addItemToCart()
  addProduct(name2)
}
function added3() {
  if(i3=1){
        document.getElementById("h3").innerHTML = `${name3}`;
        document.getElementById("productname3").innerHTML = `${name3}`;
        document.getElementById('par3').value = i3;
        document.getElementById('par3').innerHTML= i3+"x";
        document.getElementById('para3').style.display = 'flex'
        document.getElementById('cart3').style.display = 'flex'
        document.getElementById('row3').style.display = 'flex'
        document.getElementById("cartimg3").style.display = `none`;
        Value3 = `${name3}`;
        document.getElementById('para3').innerHTML= `$${price3}`;
        subtotal3 = i3*price3
        document.getElementById("pr3").innerHTML = `$${subtotal3}`;
        document.getElementById("adde3").innerHTML = `Added`;
        document.getElementById("remove3").style.display="block"
        butt = document.getElementById('butt3');
        butt.style.display = 'block'
        but = document.getElementById('but3');
        but.style.display = 'block'
        update3()
  }
  addItemToCart()
  addProduct(name3)
}
function added4() {
  if(i4=1){
    document.getElementById("h4").innerHTML = `${name4}`;
    document.getElementById("productname4").innerHTML = `${name4}`;
    document.getElementById('par4').value = i4;
    document.getElementById('par4').innerHTML= i4+"x";
    document.getElementById('para4').style.display = 'flex'
    document.getElementById('cart4').style.display = 'flex'
    document.getElementById('row4').style.display = 'flex'
    document.getElementById("cartimg4").style.display = `none`;
    document.getElementById('para4').innerHTML= `$${price4}`;
    subtotal4= i4*price4
    document.getElementById("pr4").innerHTML = `$${subtotal4}`;
    document.getElementById("adde4").innerHTML = `Added`;
    document.getElementById("remove4").style.display="block"
    butt = document.getElementById('butt4');
    butt.style.display = 'block'
    but = document.getElementById('but4');
    but.style.display = 'block'
    update4()
    
  }
  addItemToCart()
  addProduct(name4)
}
function added5() {
  if(i5 = 1){
  document.getElementById("h5").innerHTML = `${name5}`;
  document.getElementById("productname5").innerHTML = `${name5}`;
  document.getElementById('par5').value = i5;
  document.getElementById('par5').innerHTML= i5+"x";
  document.getElementById('para5').style.display = 'flex'
  document.getElementById('cart5').style.display = 'flex'
  document.getElementById('row5').style.display = 'flex'
  document.getElementById("cartimg5").style.display = `none`;
  document.getElementById('para5').innerHTML= `$${price5}`;
  subtotal5 = i5*price5
  document.getElementById("pr5").innerHTML = `$${subtotal5}`;
  document.getElementById("adde5").innerHTML = `Added`;
  document.getElementById("remove5").style.display="block"
  butt = document.getElementById('butt5');
  butt.style.display = 'block'
  but = document.getElementById('but5');
  but.style.display = 'block'
  update5()
  // total(subtotal)
  }
  addItemToCart()
  addProduct(name5)
}
function added6() {
  if(i6=1){
        document.getElementById("h6").innerHTML = `${name6}`;
        document.getElementById("productname6").innerHTML = `${name6}`;
        document.getElementById('par6').value = i6;
        document.getElementById('par6').innerHTML= i6+"x";
        document.getElementById('para6').style.display = 'flex'
        document.getElementById('cart6').style.display = 'flex'
        document.getElementById('row6').style.display = 'flex'
        document.getElementById("cartimg6").style.display = `none`;
        document.getElementById('para6').innerHTML= `$${price6}`;
        subtotal6 = i6*price6
        document.getElementById("pr6").innerHTML = `$${subtotal3}`;
        document.getElementById("adde6").innerHTML = `Added`;
        document.getElementById("remove6").style.display="block"
        butt = document.getElementById('butt6');
        butt.style.display = 'block'
        but = document.getElementById('but6');
        but.style.display = 'block'
        update6()
  }
  addItemToCart()
  addProduct(name6)
}
function added7() {
  if(i7=1){
    document.getElementById("h7").innerHTML = `${name7}`;
    document.getElementById("productname7").innerHTML = `${name7}`;
    document.getElementById('par7').value = i7;
    document.getElementById('par7').innerHTML= i7+"x";
    document.getElementById('para7').style.display = 'flex'
    document.getElementById('cart7').style.display = 'flex'
    document.getElementById('row7').style.display = 'flex'
    document.getElementById("cartimg7").style.display = `none`;
    document.getElementById('para7').innerHTML= `$${price7}`;
    subtotal7= i7*price7
    document.getElementById("pr7").innerHTML = `$${subtotal7}`;
    document.getElementById("adde7").innerHTML = `Added`;
    document.getElementById("remove7").style.display="block"
    butt = document.getElementById('butt7');
    butt.style.display = 'block'
    but = document.getElementById('but7');
    but.style.display = 'block'
    update7()
  }
  addItemToCart()
  addProduct(name7)
}
function added8() {
  if(i8 = 1){
  document.getElementById("h8").innerHTML = `${name8}`;
  document.getElementById("productname8").innerHTML = `${name8}`;
  document.getElementById('par8').value = i8;
  document.getElementById('par8').innerHTML= i8+"x";
  document.getElementById('para8').style.display = 'flex'
  document.getElementById('cart8').style.display = 'flex'
  document.getElementById('row8').style.display = 'flex'
  document.getElementById("cartimg8").style.display = `none`;
  document.getElementById('para8').innerHTML= `$${price8}`;
  subtotal8 = i8*price8
  document.getElementById("pr8").innerHTML = `$${subtotal8}`;
  document.getElementById("adde8").innerHTML = `Added`;
  document.getElementById("remove8").style.display="block"
  butt = document.getElementById('butt8');
  butt.style.display = 'block'
  but = document.getElementById('but8');
  but.style.display = 'block'
  update8()
  }
  addItemToCart()
  addProduct(name8)
}

// increament and decreament function
function increament() {
    i++;
    if (i >= 1) {
      update()
    }
}
function decreament(){
    i--;
    if (i = 1) {
      update()
    }
}
function update(){
  document.getElementById('par').innerHTML = i + "x";
  document.getElementById('qty').innerHTML = i;
  subtotal = i * price;
  document.getElementById("pr").innerHTML = `$${subtotal}`;
  total(subtotal);
  // quentit(i)
}
function increament1() {
    i1++;
    if (i1 >= 1) {
      update1()
    }
}
function decreament1() {
    i1--;
    if (i1 >= 1) {
      update1()
    }
}
function update1(){
  document.getElementById('par1').innerHTML = i1 + "x";
  document.getElementById('qty1').innerHTML = i1;
  subtotal1 = i1 * price1;
  document.getElementById("pr1").innerHTML = `$${subtotal1}`;
  total(subtotal1);
  // quentit(i1)
}
function increament2() {
  i2++;
  if (i2 >= 1) {
    update2()
  }
}
function decreament2() {
  i2--;
  if (i2 >= 1) {
    update2()
  }
}
function update2(){
  document.getElementById('par2').innerHTML = i2 + "x";
  document.getElementById('qty2').innerHTML = i2;
  subtotal2 = i2 * price2;
  document.getElementById("pr2").innerHTML = `$${subtotal2}`;
  total(subtotal2);
  // quentit(i2)
}
function increament3() {
    i3++;
    if (i3 >= 1) {
      update3()
    }
}
function decreament3(){
    i3--;
    if (i3 = 1) {
      update3()
    }
}
function update3(){
  document.getElementById('par3').innerHTML = i3 + "x";
  document.getElementById('qty3').innerHTML = i3;
  subtotal3 = i3 * price3;
  document.getElementById("pr3").innerHTML = `$${subtotal3}`;
  total(subtotal3);
  // quentit(i3)
}
function increament4() {
    i4++;
    if (i4 >= 1) {
      update4()
    }
}
function decreament4() {
    i4--;
    if (i4 >= 1) {
      update4()
    }
}
function update4(){
  document.getElementById('par4').innerHTML = i4 + "x";
  document.getElementById('qty4').innerHTML = i4;
  subtotal4 = i4 * price4;
  document.getElementById("pr4").innerHTML = `$${subtotal4}`;
  total(subtotal4);
  // quentit(i4)
}
function increament5() {
  i5++;
  if (i5 >= 1) {
    update5()
  }
}
function decreament5() {
  i5--;
  if (i5 >= 1) {
    update5()
  }
}
function update5(){
  document.getElementById('par5').innerHTML = i5 + "x";
  document.getElementById('qty5').innerHTML = i5;
  subtotal5 = i5 * price5;
  document.getElementById("pr5").innerHTML = `$${subtotal5}`;
  total(subtotal5);
  // quentit(i5)
}
function increament6() {
    i6++;
    if (i6 >= 1) {
      update6()
    }
}
function decreament6(){
    i6--;
    if (i6 = 1) {
      update6()
    }
}
function update6(){
  document.getElementById('par6').innerHTML = i6 + "x";
  document.getElementById('qty6').innerHTML = i6;
  subtotal6 = i6 * price6;
  document.getElementById("pr6").innerHTML = `$${subtotal6}`;
  total(subtotal3);
  // quentit(i6)
}
function increament7() {
    i7++;
    if (i7 >= 1) {
      update7()
    }
}
function decreament7() {
    i7--;
    if (i7 >= 1) {
      update7()
    }
}
function update7(){
  document.getElementById('par7').innerHTML = i7 + "x";
  document.getElementById('qty7').innerHTML = i7;
  subtotal7 = i7 * price7;
  document.getElementById("pr7").innerHTML = `$${subtotal7}`;
  total(subtotal4);
  // quentit(i7)
}
function increament8() {
  i8++;
  if (i8 >= 1) {
    update8()
  }
}
function decreament8() {
  i8--;
  if (i8 >= 1) {
    update8()
  }
}
function update8(){
  document.getElementById('par8').innerHTML = i8 + "x";
  document.getElementById('qty8').innerHTML = i8;
  subtotal8 = i8 * price8;
  document.getElementById("pr8").innerHTML = `$${subtotal8}`;
  total(subtotal8);
  // quentit(i8)
}

// remove products from carts 
function remov(){
  i = 0;
    document.getElementById("h").innerHTML ="";
    document.getElementById("row").style.display = `none`;
    document.getElementById("qty").innerHTML ="";
    document.getElementById('par').value = "";
    document.getElementById('par').innerHTML= "";
    document.getElementById('para').innerHTML= "";
    document.getElementById("pr").innerHTML ="";
    document.getElementById("adde").innerHTML = "Add To Cart";
    document.getElementById("remove").style.display="none"
    document.getElementById('butt').style.display = 'none';
    document.getElementById('but').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('add').style.backgroundColor = 'white';
    document.getElementById('adde').style.color = '#952c0c';
    subtotal=0;
    total(subtotal);
    removeProduct(name)();

}
function remov1(){
  i1 = 0;
    document.getElementById("h1").innerHTML ="";
    document.getElementById("row1").style.display = `none`;
    document.getElementById('par1').value = "";
    document.getElementById('par1').innerHTML= "";
    document.getElementById('para1').innerHTML= "";
    document.getElementById("pr1").innerHTML ="";
    document.getElementById("adde1").innerHTML = "Add To Cart";
    document.getElementById("remove1").style.display="none"
    document.getElementById('butt1').style.display = 'none';
    document.getElementById('but1').style.display = 'none';
    document.getElementById('cart1').style.display = 'none';
    document.getElementById('add1').style.backgroundColor = 'white';
    document.getElementById('adde1').style.color = '#952c0c';
    subtotal1 = 0;
    total(subtotal1)
}
function remov2(){
  i2 = 0;
    document.getElementById("h2").innerHTML ="";
    document.getElementById("row2").style.display = `none`;
    document.getElementById('par2').value = "";
    document.getElementById('par2').innerHTML= "";
    document.getElementById('para2').innerHTML= "";
    document.getElementById("pr2").innerHTML ="";
    document.getElementById("adde2").innerHTML = "Add To Cart";
    document.getElementById("remove2").style.display="none"
    document.getElementById('butt2').style.display = 'none';
    document.getElementById('but2').style.display = 'none';
    document.getElementById('cart2').style.display = 'none';
    document.getElementById('add2').style.backgroundColor = 'white';
    document.getElementById('adde2').style.color = '#952c0c';
    total(subtotal2=0);
}
function remov3(){
  i3 = 0;
    document.getElementById("h3").innerHTML ="";
    document.getElementById("row3").style.display = `none`;
    document.getElementById('par3').value = "";
    document.getElementById('par3').innerHTML= "";
    document.getElementById('para3').innerHTML= "";
    document.getElementById("pr3").innerHTML ="";
    document.getElementById("adde3").innerHTML = "Add To Cart";
    document.getElementById("remove3").style.display="none"
    document.getElementById('butt3').style.display = 'none';
    document.getElementById('but3').style.display = 'none';
    document.getElementById('cart3').style.display = 'none';
    document.getElementById('add3').style.backgroundColor = 'white';
    document.getElementById('adde3').style.color = '#952c0c';
    subtotal3=0;
    total(subtotal3)
}
function remov4(){
  i4 = 0;
    document.getElementById("h4").innerHTML ="";
    document.getElementById("row4").style.display = `none`;
    document.getElementById('par4').value = "";
    document.getElementById('par4').innerHTML= "";
    document.getElementById('para4').innerHTML= "";
    document.getElementById("pr4").innerHTML ="";
    document.getElementById("adde4").innerHTML = "Add To Cart";
    document.getElementById("remove4").style.display="none"
    document.getElementById('butt4').style.display = 'none';
    document.getElementById('but4').style.display = 'none';
    document.getElementById('cart4').style.display = 'none';
    document.getElementById('add4').style.backgroundColor = 'white';
    document.getElementById('adde4').style.color = '#952c0c';
    subtotal4 = 0;
    total(subtotal4)
}
function remov5(){
  i5 = 0;
    document.getElementById("h5").innerHTML ="";
    document.getElementById("row5").style.display = `none`;
    document.getElementById('par5').value = "";
    document.getElementById('par5').innerHTML= "";
    document.getElementById('para5').innerHTML= "";
    document.getElementById("pr5").innerHTML ="";
    document.getElementById("adde5").innerHTML = "Add To Cart";
    document.getElementById("remove5").style.display="none"
    document.getElementById('butt5').style.display = 'none';
    document.getElementById('but5').style.display = 'none';
    document.getElementById('cart5').style.display = 'none';
    document.getElementById('add5').style.backgroundColor = 'white';
    document.getElementById('adde5').style.color = '#952c0c';
    total(subtotal5=0);
}
function remov6(){
  i6 = 0;
    document.getElementById("h6").innerHTML ="";
    document.getElementById("row6").style.display = `none`;
    document.getElementById('par6').value = "";
    document.getElementById('par6').innerHTML= "";
    document.getElementById('para6').innerHTML= "";
    document.getElementById("pr6").innerHTML ="";
    document.getElementById("adde6").innerHTML = "Add To Cart";
    document.getElementById("remove6").style.display="none"
    document.getElementById('butt6').style.display = 'none';
    document.getElementById('but6').style.display = 'none';
    document.getElementById('cart6').style.display = 'none';
    document.getElementById('add6').style.backgroundColor = 'white';
    document.getElementById('adde6').style.color = '#952c0c';
    subtotal6=0;
    total(subtotal6)
}
function remov7(){
  i7 = 0;
    document.getElementById("h7").innerHTML ="";
    document.getElementById("row7").style.display = `none`;
    document.getElementById('par7').value = "";
    document.getElementById('par7').innerHTML= "";
    document.getElementById('para7').innerHTML= "";
    document.getElementById("pr7").innerHTML ="";
    document.getElementById("adde7").innerHTML = "Add To Cart";
    document.getElementById("remove7").style.display="none"
    document.getElementById('butt7').style.display = 'none';
    document.getElementById('but7').style.display = 'none';
    document.getElementById('cart7').style.display = 'none';
    document.getElementById('add7').style.backgroundColor = 'white';
    document.getElementById('adde7').style.color = '#952c0c';
    subtotal7 = 0;
    total(subtotal7)
}
function remov8(){
  i8 = 0;
    document.getElementById("h8").innerHTML ="";
    document.getElementById("row8").style.display = `none`;
    document.getElementById('par8').value = "";
    document.getElementById('par8').innerHTML= "";
    document.getElementById('para8').innerHTML= "";
    document.getElementById("pr8").innerHTML ="";
    document.getElementById("adde8").innerHTML = "Add To Cart";
    document.getElementById("remove8").style.display="none"
    document.getElementById('butt8').style.display = 'none';
    document.getElementById('but8').style.display = 'none';
    document.getElementById('cart8').style.display = 'none';
    document.getElementById('add8').style.backgroundColor = 'white';
    document.getElementById('adde8').style.color = '#952c0c';
    total(subtotal8=0);
}

// total payment
function total(){
  const result = subtotal+subtotal1+subtotal2+subtotal3+subtotal4+subtotal5+subtotal6+subtotal7+subtotal8;
  document.getElementById('t').innerHTML = `$${result}`;
  document.getElementById('tb').innerHTML = `$${result}`;
  document.getElementById('total').innerHTML = `$${result}`;
}

// total quentity of carts
let cartQuantity = []; // Renamed to cartQuantity for clarity

function addItemToCart() {
  cartQuantity.push('1');
  console.log(cartQuantity.length);

  // Update cart info display
  document.getElementById("cartquent").innerHTML = `${cartQuantity.length}`;
  // Toggle cart info display based on screen width
  const screenWidth = window.innerWidth;
  if (cartQuantity.length >= 1) {
    document.getElementById("confirm").style.display = "flex";
    if (screenWidth <= 500) { // Mobile resolution
      document.getElementById('cartinfo').style.display = 'flex';
      document.getElementById('back').style.display = 'flex';

    } else { // Desktop resolution
      document.getElementById('cartinfo').style.display = 'none'; // Changed to block for desktop
    }
    // document.getElementById('qty').value = `${cartQuantity.length}`;

  } else if (cartQuantity.length > 1){
    document.getElementById('cartinfo').style.display = 'none';
  }
}

const cartButton = document.getElementById('cartbutton');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

cartButton.addEventListener('click', () => {
  box1.style.display = 'none'; // Change to 'block' or 'inline-block' as needed
  box2.style.display = 'flex';
});


const parentElements = document.querySelectorAll('.add');

// Add to cart transformation
parentElements.forEach((parent) => {
  parent.addEventListener('click', () => {
    // Select child element with class name 'add' within the parent element
    parent.style.backgroundColor = 'green';
    const addChild = parent.querySelector('.adde');
    
    // Change color of child element to green
    addChild.style.color = 'white';
    addChild.style.fontSize = '16px';
  });
});

// current date for reciept
const dateElement = document.getElementById('date');
const dateElement1 = document.getElementById('date1');
const currentDate = new Date();
const currentDate1 = new Date();

const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear();

dateElement.innerText = `${day}/${month}/${year}`;
dateElement1.innerText = `${day}/${month}/${year}`;

const codeElement = document.getElementById('code');
const randomNumber = Math.floor(Math.random() * 900) + 100;
codeElement.innerText = randomNumber;

// download html page as pdf
// function download() {
//   document.getElementById('recheck-order').style.display = 'none'
//   document.getElementById('Download').style.display = 'none'
//   document.getElementById('receipt').style.display = 'flex'
// }

function confirmOrder(){
  document.getElementById('receipt').style.display = 'flex'
  document.getElementById('recheck-order').style.display = 'none'
  document.getElementById('Download').style.display = 'none'
  const inst = document.getElementById('instructions').value;
  document.getElementById('preperation').innerHTML = ` ${inst}`;

}

// show or remove the qr code 
function  showQR(){
  document.getElementById('QR').style.display = 'flex';
  document.getElementById('paymentmode').innerHTML = 'Online Payment';
}
function  removeQR(){
  document.getElementById('QR').style.display = 'none';
  document.getElementById('paymentmode').innerHTML = 'Case On Delivery';
}

// confirm  button on box 2
function done(){
  document.getElementById('box1').style.display = 'none';
  document.getElementById('box2').style.display = 'none';
  document.getElementById('recheck-order').style.display = 'flex';
}

// current time
const timeElement = document.getElementById('time');
const currentTime = new Date();
timeElement.innerText = currentTime.toLocaleTimeString();

function nochilli(){
  document.getElementById('preperation').innerHTML = 'No Chilli';
  document.getElementById('instructions').innerHTML = 'No Chilli';
}
function chilli(){
  document.getElementById('preperation').innerHTML = 'Extra Chilli';
  document.getElementById('instructions').innerHTML = 'Extra Chilli';
}
function chrunchi(){
  document.getElementById('preperation').innerHTML = 'chrunchi';
  document.getElementById('instructions').innerHTML = 'chrunchi';
}
function checthup(){
  document.getElementById('preperation').innerHTML = 'checthup'+'';
  document.getElementById('instructions').innerHTML = 'checthup';
}
function boild(){
  document.getElementById('preperation').innerHTML = 'boild';
  document.getElementById('instructions').innerHTML = 'boild';
}
function child(){
  document.getElementById('preperation').innerHTML = 'child';
  document.getElementById('instructions').innerHTML = 'child';
}
function hot(){
  document.getElementById('preperation').innerHTML = 'Hot';
  document.getElementById('instructions').innerHTML = 'Hot';
}
  
// name and address

let address = document.getElementById('address').value;
let username = document.getElementById('username').value;
document.getElementById('customername').innerHTML = username;
document.getElementById('location').innerHTML = address;


function download(){
  window.print();
  const event = new KeyboardEvent('keypress', {
    key: 'Enter',
    charCode: 13, // optional
  });
  
  document.dispatchEvent(event);  
}


function login() {
  const username = document.getElementById('username').value;
  const phone = document.getElementById('userphone').value;
  const address = document.getElementById('address').value;
  // display values in #display-values div
  document.getElementById('uname').innerHTML = ` ${username}`;
  document.getElementById('location').innerHTML = ` ${address}`;
  document.getElementById('phone').innerHTML = ` ${phone}`;


  document.getElementById('box1').style.display = 'flex';
  const screenWidth = window.innerWidth;
    if (screenWidth >= 500) {
      document.getElementById('box2').style.display = 'flex';
    }
  document.getElementById('login-container').style.display = 'none';
}

function back(){
  document.getElementById('box1').style.display = 'flex';
  document.getElementById('cartinfo').style.display = 'flex';
}