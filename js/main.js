const elBody = document.querySelector("body")
const elOpenBtn = document.querySelector(".navbar__open-btn");
const elNavbarBtn = document.querySelector(".navbar__btn");
const elNavbarHeaderBtn = document.querySelector(".headertop__btn");
const elsiteWrapper = document.querySelector(".site-header-wrapper");
const elCloseBtn = document.querySelector(".navbar__close-btn");
const elBtnValue = document.querySelector(".modal__btn-value");
const elIncBtn = document.querySelector(".modal__btn-inc");
const elDecBtn = document.querySelector(".modal__btn-dec");
const elBtnValuemodal = document.querySelector(".btn-value");
const elIncBtnMOdal = document.querySelector(".btn-inc");
const elDecBtnModal = document.querySelector(".btn-dec");
const elModalOrder = document.querySelector(".modal__product-post");
const elModalOrderTop = document.querySelector(".modal__product-post-top");
const elModalSuccsesful = document.querySelector(".modal__succsesful");
const elModalOrderCloseBtn = document.querySelector(".modal__lose-btn");
const elModalOrderBtn = document.querySelector(".products__item-content-btn");
const elOverlay = document.querySelector(".overlay");

const elProductionTemplate = document.querySelector(".production-tempalte").content;
const elProductionList = document.querySelector(".production__list");

const elAddressTemplate = document.querySelector(".address-template").content;
const elAddressList = document.querySelector(".address__list");
const elModalCloseBtnTop = document.querySelector(".modal__lose-btn-top");

// modalorder 
const elModalFormPost = document.querySelector(".modal__product-post-form");
const elModalCategory = document.querySelector(".modal__product_category");
const elModalUserNameInpur = document.querySelector(".modal__user-name-input");
const elModalUserPhoneInput = document.querySelector(".modal__user-number-input");

const elModalFormPostTop = document.querySelector(".modal__product-post-form-bottom");
const elModalCategoryTop = document.querySelector(".modal__product_category-top");
const elModalUserNameInpurTop = document.querySelector(".modal__user-name-input-bottom");
const elModalUserPhoneInputTop = document.querySelector(".modal__user-number-input-bottom");

// statistics
const elStatisticsYearExperience = document.querySelector(".statistic__title-year-experience");
const elStatisticsCustomer = document.querySelector(".statistic__title-customer");
const elStatisticsAnnualWarranty = document.querySelector(".statistic__title-annual-warranty");
const elStatisticsDayDelivery = document.querySelector(".statistic__title-day-delivery");

// products 
const elProductssaleList = document.querySelector(".productssale__list");
const elProductssaleTemplate = document.querySelector(".productssale-tempalte").content;

// coniction
const elConnectionForm = document.querySelector(".connection__form");
const elConnetionInput = document.querySelector(".connection__form-input");
const elConnetionModal = document.querySelector(".connection__modal");

// CARUSEL 
const elheroTemplate = document.querySelector(".template-list-hero").content;
const elHeroList = document.querySelector(".hero__list")

// CATEGORY 
const elCategoryTemplate = document.querySelector(".tempalte-category").content;
const elCategoryList = document.querySelector(".category__list");

// PRODUCTS 
const elProductsTemplate = document.querySelector(".tempalte-products").content;
const elProductsList = document.querySelector(".products__list");

const elFragment = document.createDocumentFragment();

elOpenBtn.addEventListener("click", () => {
    elsiteWrapper.classList.add("site-header-wrapper-active");
    elBody.classList.add("body--active");
})

elCloseBtn.addEventListener("click", () => {
    elsiteWrapper.classList.remove("site-header-wrapper-active");
    elBody.classList.remove("body--active")
})

elNavbarBtn.addEventListener("click", () => {
    elBody.classList.add("body--active")
    elModalOrderTop.classList.add("modal__product-post--active")
    elOverlay.classList.add("overlay-active")
})

elNavbarHeaderBtn.addEventListener("click", () => {
    elBody.classList.add("body--active")
    elModalOrder.classList.add("modal__product-post--active")
    elOverlay.classList.add("overlay-active")
})

// MODAL INPUT VALUE INC
elIncBtn.addEventListener("click", () => {
    elBtnValue.textContent--
    getIncPrice();
})

// MODAL INPUT VALUE DEC
elDecBtn.addEventListener("click", () => {
    elBtnValue.textContent++
    getIncPrice();
})

elIncBtnMOdal.addEventListener("click", () => {
    elBtnValuemodal.textContent--
    getIncPriceTop();
})

// MODAL INPUT VALUE DEC
elDecBtnModal.addEventListener("click", () => {
    elBtnValuemodal.textContent++
    getIncPriceTop();
})


//  statistics GET
// async function getStatistics(){
//     try {
//         const res = await fetch("http://localhost:1212/api/statistics")
//         const data = await res.json()
//         console.log(data);
//         elStatisticsYearExperience.textContent = data.experience || "";
//         elStatisticsCustomer.textContent = `${data.clients}+` || '';
//         elStatisticsAnnualWarranty.textContent = data.warranty || '';
//         elStatisticsDayDelivery.textContent = data.delivery || '';
//     } catch (error) {
//         console.log(error);
//     }
// }
// getStatistics();

// MODAL CLOSE
elModalOrderCloseBtn.addEventListener("click", () => {
    elBody.classList.remove("body--active")
    elModalOrder.classList.remove("modal__product-post--active");
    elModalOrderTop.classList.remove("modal__product-post--active");
    elOverlay.classList.remove("overlay-active");
    elBtnValue.innerHTML = 1;
    elBtnValuemodal.innerHTML = 1;
})
elModalCloseBtnTop.addEventListener("click", () => {
    elBody.classList.remove("body--active")
    elModalOrderTop.classList.remove("modal__product-post--active");
    elOverlay.classList.remove("overlay-active");
    elBtnValuemodal.innerHTML = 1;
})

// OVERLAY 
elOverlay.addEventListener("click", () => {
    elBody.classList.remove("body--active")
    elModalOrder.classList.remove("modal__product-post--active");
    elModalOrderTop.classList.remove("modal__product-post--active");
    elOverlay.classList.remove("overlay-active");
    elBtnValue.innerHTML = 1;
    elBtnValuemodal.innerHTML = 1;
})

elConnectionForm.addEventListener("submit", evt => {
    evt.preventDefault()
    const connetionInputValue = elConnetionInput.value.trim()
    userNumberPost(connetionInputValue)
})

async function userNumberPost(item) {
    try {
        const res = await fetch("http://localhost:1212/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                number: item
            })
        })
        const data = await res.json()
        if (data.message == "Your contact successfully added!") {
            elConnetionModal.classList.add("connection__modal-show")
            setTimeout(() => {
                elConnetionModal.classList.remove("connection__modal-show")
            }, 5000);
        }
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// CARUSEL GET
async function getCarusel() {
    try {
        const res = await fetch("http://localhost:1212/api/carousel")
        const data = await res.json()
        heroGetFunc(data)
        caruselFunc()
    } catch (error) {
        console.log(error);
    }
}

getCarusel();

// CARUSEL FUNC
function heroGetFunc(item) {
    item.forEach(el => {
        const cloneHeroTemplate = elheroTemplate.cloneNode(true);
        cloneHeroTemplate.querySelector(".hero__title").textContent = el.title
        const img = el.image.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[0];
        cloneHeroTemplate.querySelector(".hero__img-img").src = `http://localhost:1212/carousel/${img}`
        elFragment.appendChild(cloneHeroTemplate)
    })
    elHeroList.appendChild(elFragment)
}

// CATEGORY GET
async function getCategory() {
    try {
        const res = await fetch('http://localhost:1212/api/products')
        const data = await res.json()
        console.log(data);
        categoryGetFunc(data.categories)
    } catch (error) {
        console.log(error);
    }
}

getCategory();

// CATEGORY FUNC
const catearr = document.querySelector(".category__item-all")
function categoryGetFunc(item) {
    item.forEach(el => {
        const cloneCategoryTemplate = elCategoryTemplate.cloneNode(true);
        const arr = cloneCategoryTemplate.querySelector(".category__item");
        cloneCategoryTemplate.querySelector(".category__text").textContent = el.category;
        cloneCategoryTemplate.querySelector(".category__text").dataset.id = el.id;
        catearr.classList.add("category__text-active");
        catearr.addEventListener("click", () => {
            catearr.classList.add("category__text-active");
        })
        elCategoryList.addEventListener("click", evt => {
            const itemId = evt.target.dataset.id;
            if (itemId == el.id) {
                arr.classList.add("category__text-active")
                catearr.classList.remove("category__text-active")
            }
            else{
                arr.classList.remove("category__text-active")
            }
        })
        elFragment.appendChild(cloneCategoryTemplate)
    })
    elCategoryList.appendChild(elFragment)
}

// CATEGORY LIST CLICK
elCategoryList.addEventListener("click", evt => {
    if (evt.target.matches(".category__text")) {
        getProducts(evt.target.dataset.id);
    }
})

// PRODUCTS GET 
async function getProducts(id) {
    try {
        const res = await fetch('http://localhost:1212/api/products')
        const data = await res.json()
        console.log(data);
        getProductsFunc(data.products, id)
    } catch (error) {
        console.log(error);
    }
}

getProducts()

// PRODUCTS FUNC
const arry = []

function getProductsFunc(item, id = "-1") {
    elProductsList.innerHTML = "";
    elModalCategory.innerHTML = "";
    elModalCategoryTop.innerHTML = "";
    elProductssaleList.innerHTML = "";
    const felterPro = item.filter(el => {
        if (el.category_id == id) {
            return el.category_id == id;
        } else if (id == "-1") {
            return el
        } else {
            return ""
        }
    })

    item.forEach(el => {
        arry.push(el)
        if (el.new_cost !== null) {
            const cloneProductssaleTemplate = elProductssaleTemplate.cloneNode(true);
            const option = document.createElement("option");
            option.textContent = el.name;
            option.value = el.name;
            elModalCategoryTop.appendChild(option);
            cloneProductssaleTemplate.querySelector(".products__text-new-title").textContent = el.name;
            cloneProductssaleTemplate.querySelector(".products__item-content-btn").dataset.id = el.id;
            cloneProductssaleTemplate.querySelector(".products__item-content-info-box-weight").textContent = el.weight;
            cloneProductssaleTemplate.querySelector(".products__item-content-info-box-size").textContent = el.size;
            cloneProductssaleTemplate.querySelector(".products__item-content-info-box-year").textContent = el.warranty;
            cloneProductssaleTemplate.querySelector(".products__item-content-info-box-capacity").textContent = el.capacity;
            cloneProductssaleTemplate.querySelector(".products__item-content-info-box-new_cost").textContent = el.new_cost;
            cloneProductssaleTemplate.querySelector(".products__item-content-body").textContent = el.body;

            const img = el.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[0];
            const img01 = el.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[1];
            const img02 = el.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[2];
            cloneProductssaleTemplate.querySelector(".products__item-box-img-img001").dataset.fancybox = el.category_id;
            cloneProductssaleTemplate.querySelector(".products__item-box-img-img002").dataset.fancybox = el.category_id;
            cloneProductssaleTemplate.querySelector(".products__item-box-img-img003").dataset.fancybox = el.category_id;
            cloneProductssaleTemplate.querySelector(".products__item-box-ig-zoom-btn").setAttribute("data-fancybox-trigger", el.id);

            cloneProductssaleTemplate.querySelector(".products__item-box-img-img001").src = `http://localhost:1212/products/${img}`;
            cloneProductssaleTemplate.querySelector(".products__item-box-img-img002").src = `http://localhost:1212/products/${img01}`;
            cloneProductssaleTemplate.querySelector(".products__item-box-img-img003").src = `http://localhost:1212/products/${img02}`;
            cloneProductssaleTemplate.querySelector(".products__item-content-info-box-price").textContent = el.cost;
            elFragment.appendChild(cloneProductssaleTemplate);
            elProductssaleList.appendChild(elFragment)
        } else {
            console.log("err");
        }
    })

    if (felterPro.length) {
        felterPro.forEach(item => {
            const cloneProductsTemplate = elProductsTemplate.cloneNode(true);
            const option = document.createElement("option");
            option.textContent = item.name;
            option.value = item.name;
            elModalCategoryTop.appendChild(option);
            cloneProductsTemplate.querySelector(".products__text-new-title").textContent = item.name;
            cloneProductsTemplate.querySelector(".products__item-content-info-box-weight").textContent = item.weight;
            cloneProductsTemplate.querySelector(".products__item-content-info-box-size").textContent = item.size;
            cloneProductsTemplate.querySelector(".products__item-content-info-box-year").textContent = item.warranty;
            cloneProductsTemplate.querySelector(".products__item-content-info-box-capacity").textContent = item.capacity;
            cloneProductsTemplate.querySelector(".products__item-content-btn").dataset.id = item.id;
            if (item.new_cost !== null) {
                cloneProductsTemplate.querySelector(".products__item-content-info-box-new_cost").textContent = item.new_cost;
                cloneProductsTemplate.querySelector(".products__item-content-info-box-left-text-prior-wrapper").classList.add("products__item-content-info-box-left-text-prior-wrapper-acteve");
                cloneProductsTemplate.querySelector(".products__text-new-action-new").classList.add("products__text-new-action-new-show");
            }
            cloneProductsTemplate.querySelector(".products__item-content-body").textContent = item.body;
            const img = item.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[0];
            const img01 = item.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[1];
            const img02 = item.product_images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[2];
            cloneProductsTemplate.querySelector(".products__item-box-img-img").src = `http://localhost:1212/products/${img}`;
            cloneProductsTemplate.querySelector(".products__item-box-img-img").dataset.fancybox = item.id;
            cloneProductsTemplate.querySelector(".products__item-box-img-img02").dataset.fancybox = item.id;
            cloneProductsTemplate.querySelector(".products__item-box-img-img03").dataset.fancybox = item.id;
            cloneProductsTemplate.querySelector(".products__item-box-ig-zoom-btn").setAttribute("data-fancybox-trigger", item.id);

            cloneProductsTemplate.querySelector(".products__item-box-img-img02").src = `http://localhost:1212/products/${img01}`;
            cloneProductsTemplate.querySelector(".products__item-box-img-img03").src = `http://localhost:1212/products/${img02}`;
            cloneProductsTemplate.querySelector(".products__item-content-info-box-price").textContent = item.cost;
            elFragment.appendChild(cloneProductsTemplate);
        })
        elProductsList.appendChild(elFragment)
    } else {
        elProductsList.append("Not found")
    }
    console.log(felterPro);
}

elProductsList.addEventListener("click", (evt) => {

    if (evt.target.matches(".products__item-content-btn")) {
        elModalCategory.innerHTML = "";
        elBody.classList.add("body--active");
        elModalOrder.classList.add("modal__product-post--active");
        elOverlay.classList.add("overlay-active");
    }
    if (evt.target.matches(".products__item-content-btn")) {
        const btnId = evt.target.dataset.id;
        const btnBtn = arry.find(element => element.id == btnId)
        const option = document.createElement("option");
        option.textContent = btnBtn.name;
        option.value = btnBtn.name;
        elModalCategory.appendChild(option);
    }
})

elProductssaleList.addEventListener("click", (evt) => {
    if (evt.target.matches(".products__item-content-btn")) {
        elModalCategory.innerHTML = "";
        elBody.classList.add("body--active");
        elModalOrder.classList.add("modal__product-post--active");
        elOverlay.classList.add("overlay-active");
    }
    if (evt.target.matches(".products__item-content-btn")) {
        const btnId = evt.target.dataset.id;
        const btnBtn = arry.find(element => element.id == btnId)
        const option = document.createElement("option");
        option.textContent = btnBtn.name;
        option.value = btnBtn.name;
        elModalCategory.appendChild(option);
    }
})

// top 
elModalFormPostTop.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const orderCategoryTopInputValueTop = elModalCategoryTop.value;
    const orderUserInputValueTop = elModalUserNameInpurTop.value.trim();
    const orderPhoneInputValueTop = elModalUserPhoneInputTop.value.trim();

    const orderObj = {
        "name": orderUserInputValueTop,
        "number": orderPhoneInputValueTop,
        "productName": orderCategoryTopInputValueTop,
        "count": elBtnValuemodal.textContent,
    }
    userOrderPost(orderObj)
    console.log(orderObj);
})

elModalFormPost.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const orderCategoryInputValue = elModalCategory.value;
    const orderUserInputValue = elModalUserNameInpur.value.trim();
    const orderPhoneInputValue = elModalUserPhoneInput.value.trim();

    const orderObj = {
        "name": orderUserInputValue,
        "number": orderPhoneInputValue,
        "productName": orderCategoryInputValue,
        "count": elBtnValue.textContent,
    }
    userOrderPost(orderObj)
    console.log(orderObj);
})

async function userOrderPost(obj) {
    try {
        const res = await fetch("http://localhost:1212/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await res.json()
        console.log(data);
        if (data.message == "Order successfully added!") {
            elModalSuccsesful.classList.add("modal__succsesful--active");
            elBody.classList.remove("body--active");
            elModalOrder.classList.remove("modal__product-post--active");
            elModalOrderTop.classList.remove("modal__product-post--active");
            setTimeout(() => {
                elOverlay.classList.remove("overlay-active");
                elModalSuccsesful.classList.remove("modal__succsesful--active");
            }, 2000);
            elModalFormPost.reset();
        }
    } catch (error) {
        console.log(error);
    }
}

// production GET
async function getProduction() {
    try {
        const res = await fetch('http://localhost:1212/api/technology')
        const data = await res.json()
        console.log(data);
        productionGetFunc(data)
        caruselPradiction()
    } catch (error) {
        console.log(error);
    }
}

getProduction();

// production FUNC

function findVideos() {
    let videos = document.querySelectorAll('.production__item-vedio');
    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}
function findVideosAutoCompany() {
    let videos = document.querySelectorAll('.aboutcompany__item-vedio');
    for (let i = 0; i < videos.length; i++) {
        setupVideoAutoCompany(videos[i]);
    }
}
function setupVideo(video) {
    let link = video.querySelector('.production-link');
    let media = video.querySelector('.production-vedio-img');
    let button = video.querySelector('.production-vedio-btn');
    let id = parseMediaURL(media);
    video.addEventListener('click', () => {
        let iframe = createIframe(id);
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}
function setupVideoAutoCompany(video) {
    let link = video.querySelector('.aboutcompany-link');
    let media = video.querySelector('.aboutcompany-img');
    let button = video.querySelector('.aboutcompany-btn');
    let id = parseMediaURL(media);
    video.addEventListener('click', () => {
        let iframe = createIframe(id);
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}
function parseMediaURL(media) {
    let regexp = /https:\/\/i3\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
    return match[1];
}
function createIframe(id) {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('production-vedio-img');
    return iframe;
}
function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

function productionGetFunc(item) {
    item.forEach(el => {
        const cloneProductionTemplate = elProductionTemplate.cloneNode(true);
        cloneProductionTemplate.querySelector(".production__item__title").textContent = el.name;
        cloneProductionTemplate.querySelector(".production-link").href = `https://youtu.be/${el.link}`;
        cloneProductionTemplate.querySelector(".production-vedio-img").src = `https://i3.ytimg.com/vi/${el.thumbnail}/maxresdefault.jpg`;
        cloneProductionTemplate.querySelector(".production__item-text").textContent = el.description;
        elFragment.appendChild(cloneProductionTemplate)
    })
    elProductionList.appendChild(elFragment)
    findVideos();
    findVideosAutoCompany();
}

// production GET
async function getAddress() {
    try {
        const res = await fetch('http://localhost:1212/api/address')
        const data = await res.json()
        console.log(data);
        addressGetFunc(data)
        addresCaruselBig()
        addresCarusel()
    } catch (error) {
        console.log(error);
    }
}

getAddress();

// production FUNC
function addressGetFunc(item) {
    item.forEach(el => {
        const cloneAddressTemplate = elAddressTemplate.cloneNode(true);
        cloneAddressTemplate.querySelector(".address__item-title").textContent = el.location;
        cloneAddressTemplate.querySelector(".address__item-text").textContent = el.destination;
        cloneAddressTemplate.querySelector(".address__item-btn").href = el.geolacation;
        const img01 = el.images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[0];
        const img02 = el.images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[1];
        const img03 = el.images.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",")[2];
        cloneAddressTemplate.querySelector(".address__item-item-img01").src = `http://localhost:1212/address/${img01}`;
        cloneAddressTemplate.querySelector(".address__item-item-img02").src = `http://localhost:1212/address/${img02}`;
        cloneAddressTemplate.querySelector(".address__item-item-img03").src = `http://localhost:1212/address/${img03}`;
        elFragment.appendChild(cloneAddressTemplate)
    })
    elAddressList.appendChild(elFragment)
}

// CARUSEL FUNC 
function caruselFunc() {
    $('.carusel-js').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
}

const add = document.querySelector(".res");
function caruselPradiction() {
    $(add).slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 687,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

}

function addresCaruselBig() {
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 7500,
    });
}

function addresCarusel() {
    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
}