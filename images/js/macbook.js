// this is the function for calculate total value or money reciept part for all time 
function reciptCalculation() {
    const basePriceShow = document.getElementById('base-price-show');
    const basePrice = parseInt(basePriceShow.innerText);
    const memoryPriceShow = document.getElementById('memory-price-show');
    const memoryPrice = parseInt(memoryPriceShow.innerText);
    const storagePriceShow = document.getElementById('storage-price-show');
    const storagePrice = parseInt(storagePriceShow.innerText);
    const deliveryChargeShow = document.getElementById('delivery-price-show');
    const deliveryCharge = parseInt(deliveryChargeShow.innerText);
    const totalSell = basePrice + memoryPrice + storagePrice + deliveryCharge;
    const totalPriceShow = document.getElementById('total-price-show');
    totalPriceShow.innerText = totalSell;
    const bottomPriceShow = document.getElementById('bottom-total');
    bottomPriceShow.innerText = totalSell;
};


// this is the function for select memory types 


function memorySelect(price) {
    const memoryPriceShow = document.getElementById('memory-price-show');
    memoryPriceShow.innerText = price;
    reciptCalculation();
};


// this is the function for select storage types 


function storageSelect(price) {
    const storagePriceShow = document.getElementById('storage-price-show');
    storagePriceShow.innerText = price;
    reciptCalculation();
};


// this is the function for select delivery methods 


function selectDeliverymethod(charge) {
    const deliveryChargeShow = document.getElementById('delivery-price-show');
    deliveryChargeShow.innerText = charge;
    reciptCalculation();
};


// these are the code for click button 

// 16GB memory 
document.getElementById('memory-16').addEventListener('click', function () {
    memorySelect(180);
});

// 8GB memory 
document.getElementById('memory-8').addEventListener('click', function () {
    memorySelect(0);
});

// 256GB storage 
document.getElementById('storage-1TB').addEventListener('click', function () {
    storageSelect(180);
});

// 512GB storage 
document.getElementById('storage-512').addEventListener('click', function () {
    storageSelect(100);
});

// 1TB storage 
document.getElementById('storage-256').addEventListener('click', function () {
    storageSelect(0);
});

// select paid delivery 
document.getElementById('delivary-paid').addEventListener('click', function () {
    selectDeliverymethod(20);
});

// select free delivery 
document.getElementById('delivery-free').addEventListener('click', function () {
    selectDeliverymethod(0);
});


// check promocode (multiple promocode submission valided) 

document.getElementById('apply-promo').addEventListener('click', function () {
    const totalPriceShow = document.getElementById('total-price-show');
    const totalPrice = parseInt(totalPriceShow.innerText);
    const promoInputField = document.getElementById('promo-input');
    const promoInput = promoInputField.value;
    const promoCode = 'stevekaku';
    const afterDiscountPrice = totalPrice * .8;
    if (promoInput == promoCode) {
        const bottomPriceShow = document.getElementById('bottom-total');
        bottomPriceShow.innerText = afterDiscountPrice;
        promoInputField.value = '';
    }
    else {
        promoInputField.value = '';
    }
});
