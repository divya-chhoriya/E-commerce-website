//CART JS
//--------------------------------------------------------

var carts = document.querySelectorAll('.add-latest-cart');
var carts2 = document.querySelectorAll('.add-women-cart');
var carts3 = document.querySelectorAll('.add-men-cart');

//Details of products displayed on home page
let latest_products = [
	{
		name: 'Pink Shoulders Tulip Hem Wrap Dress',
		tag: 'dress4',
		price: 999.00,
		inCart: 0,
		desc: "Call out the diva in you selecting this fabulous wrap dress. Featuring a textured finish, tulip hemline, and puff sleeves, it will lend a mod look while accentuating your shape. Knitted wrap dress, V-neck, Short sleeves"
	},
	{
		name: 'Jumpsuit With Belt',
		tag: 'dress5',
		price: 1099.00,
		inCart: 0,
		desc: "Brown and beige striped cropped jumpsuit, has a V-neck, short sleeves, button closure, two pockets, Comes with a belt"
	},
	{
		name: 'Bold Blue Power Shoulders Top',
		tag: 'top2',
		price: 675.00,
		inCart: 0,
		desc: "Spruce up your wardrobe with this stylish top. Boasting power shoulders and a textured finish, it will lend you a structured and sharp appearance. Smart-looking V-neck"
	},
	{
		name: 'Floral Printed Cropped Jumpsuit',
		tag: 'dress6',
		price: 899.00,
		inCart: 0,
		desc: "Mustard and black floral printed cropped jumpsuit, has a V-neck, short sleeves, button closure, two pockets, Comes with a belt"
	},
	{
		name: 'White Solid Top',
		tag: 'top1',
		price: 699.00,
		inCart: 0,
		desc: "White solid woven regular top, has a square neck, long sleeves, and zip closure"
	},
	{
		name: 'Blue Skinny Fit Mid-Rise Cropped Jeans',
		tag: 'jeans1',
		price: 702.00,
		inCart: 0,
		desc: "Blue light wash 5-pocket mid-rise jeans, highly distressed with light fade, has a button and zip closure, waistband with belt loops"
	},
	{
		name: 'Women Maroon Analogue Watch',
		tag: 'women-watch3',
		price: 1154.00,
		inCart: 0,
		desc: "Analogue, Textured round stainless steel dial, Rose Gold-Toned bracelet style, metal strap, Water Resistant"
	}
];

//Details of products displayed on women's page
let women_section_products = [
	{
		name: 'Calm Mauve Puff Sleeves Wrap Dress',
		tag: 'dress3',
		price: 999.00,
		inCart: 0,
		desc: "Bring out the diva with this fabulous wrap dress. Sporting a textured finish, tulip hemline, and puff sleeves, it will lend a mod look while accentuating your shape."
	},
	{
		name: 'Red & White Printed Jumpsuit & Belt',
		tag: 'dress7',
		price: 1049.00,
		inCart: 0,
		desc: "Red and white printed playsuit with hook and eye closure ,has a v-neck, short sleeves, 2 pockets, Comes with a belt"
	},
	{
		name: 'Women Blue Solid Denim Jacket',
		tag: 'dress8',
		price: 799.00,
		inCart: 0,
		desc: "Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem"
	},
	{
		name: 'Women Maroon Solid Tiered Maxi Dress',
		tag: 'dress9',
		price: 769.00,
		inCart: 0,
		desc: "Maroon solid woven tiered maxi dress, has a square neck, short sleeves, concealed zip closure, an attached lining, and flounce hem, Comes with a belt"
	},
	{
		name: 'Women Pink & Orange Floral Printed A-Line Dress',
		tag: 'dress10',
		price: 849.00,
		inCart: 0,
		desc: "Pink, blue and orange printed woven A-line dress, has a round neck, three-quarter sleeves, an attached lining, and flared hem"
	},
	{
		name: 'Black & Rust Orange Floral Print Tiered Midi Fit & Flare Dress',
		tag: 'dress11',
		price: 2459.00,
		inCart: 0,
		desc: "Black and rust orange floral print woven tiered midi fit and flare dress with ruffles, has a V-neck, short ruched sleeves, elasticated waistband, an attached lining, and flared hem"
	},
	{
		name: 'Women Blue Pure Cotton Relaxed High-Rise Jeans',
		tag: 'jeans5',
		price: 959.00,
		inCart: 0,
		desc: "Blue medium wash 5-pocket high-rise jeans, highly distressed, light fade, has a button and zip closure, and waistband with belt loops"
	},
	{
		name: 'Women Blue Boyfriend Fit High-Rise Clean Look Stretchable Jeans',
		tag: 'jeans9',
		price: 1099.00,
		inCart: 0,
		desc: "Blue light wash 5-pocket high-rise jeans, clean look, heavy fade, has a button and zip closure, and waistband with belt loops"
	},
	{
		name: 'Women Green Regular Fit High-Rise Clean Look Stretchable Jeans',
		tag: 'jeans10',
		price: 799.00,
		inCart: 0,
		desc: "Green coloured wash 4-pocket high-rise jeans, clean look, no fade, has a button and zip closure, and paperbag waistband with belt loops"
	},
	{
		name: 'Women Blue Wide Leg Mid-Rise Clean Look Jeans',
		tag: 'jeans11',
		price: 1199.00,
		inCart: 0,
		desc: "Blue light wash 5-pocket mid-rise jeans, clean look, light fade, has a button and zip closure, and waistband with belt loops"
	},
	{
		name: 'Women Mauve Dobby Weave A-Line Top',
		tag: 'top3',
		price: 719.00,
		inCart: 0,
		desc: "Mauve dobby weave woven A-line top with gathered and ruffle detail, has a sweetheart neck, three-quarter semi-sheer puff sleeves"
	},
	{
		name: 'Women Yellow Self Design Pure Cotton Top',
		tag: 'top4',
		price: 649.00,
		inCart: 0,
		desc: "Yellow self-design woven regular top, has a high neck, three-quarter sleeves, button closure, ruffles detail"
	},
	{
		name: 'Women Black Solid Victorian Crop Fitted Top',
		tag: 'top5',
		price: 695.00,
		inCart: 0,
		desc: "Black solid woven victorian crop fitted top with gathers, has a sweetheart neck, long cuffed sleeves, and button closures"
	},
	{
		name: 'Blue Sweetheart Neck Puff Sleeves Chiffon Regular Crop Top',
		tag: 'top6',
		price: 1049.00,
		inCart: 0,
		desc: "Blue crop regular top, Solid, Sweetheart neck, three-quarter sleeves, puff sleeves, Detail, Woven chiffon, Tie-ups"
	},
	{
		name: 'Burgundy Crepe Blouson Top',
		tag: 'top7',
		price: 529.00,
		inCart: 0,
		desc: "Burgundy woven blouson top with gathers, has a round neck, sleeveless, criss-cross detail on the back"
	},
	{
		name: 'Women Beige & Rust Brown Floral Print Blouson Top',
		tag: 'top8',
		price: 764.00,
		inCart: 0,
		desc: "Beige, Rust brown and blue floral print woven blouson top, has a tie-up neck, and long sleeves"
	},
	{
		name: 'Women Mauve Analogue Watch',
		tag: 'women-watch1',
		price: 1549.00,
		inCart: 0,
		desc: "Analogue, Textured round stainless steel dial, Lavender-Toned bracelet style, metal strap, Water Resistant"
	},
	{
		name: 'Women Rose Gold-Tonex Izzy Analogue Watch ES4782',
		tag: 'women-watch2',
		price: 10995.00,
		inCart: 0,
		desc: "Analogue, Textured round stainless steel dial, Rose Gold-Toned bracelet style, metal strap, Water Resistant"
	},
	{
		name: 'Women Teal Green Analogue Watch',
		tag: 'women-watch5',
		price: 1249.00,
		inCart: 0,
		desc: "Display: Analogue, Movement: Mechanical, Power source: Battery, Dial style: Solid round stainless steel dial, Teal green regular, synthetic strap with a tang closure, Water resistance"
	},
	{
		name: 'Women Navy Blue Analogue Watch DK11421-7',
		tag: 'women-watch6',
		price: 1312.00,
		inCart: 0,
		desc: "Display: Analogue, Movement: Quartz, Solid round stainless steel dial, Blue bracelet style, metal strap with a foldover closure, Water resistance: 30 m, Warranty: 2 years"
	},
	{
		name: 'Rose Gold Plated Circular Drop Earrings',
		tag: 'jewellery1',
		price: 298.00,
		inCart: 0,
		desc: "Rose Gold Circular Earrings, rose gold-plated, and has cubic zirconia, Secured with a lever back"
	},
	{
		name: 'Gold-Toned Rhinestone-Studded Necklace',
		tag: 'jewellery2',
		price: 232.00,
		inCart: 0,
		desc: "Gold-toned rhinestone-studded necklace, Material and stone type: alloy, Closure: lobster closure"
	},
	{
		name: 'Set of 4 Gold-Plated Bracelets',
		tag: 'jewellery3',
		price: 384.00,
		inCart: 0,
		desc: "Set of 4 gold-plated bracelets, Three gold-plated cuff bracelets with crescent, star and heart shape detailing, has artificial stones, One gold-plated elasticated artificial stone studded bracelet, Material: Brass"
	},
	{
		name: 'Gold-Toned Floral-Shaped Drop Earrings',
		tag: 'jewellery4',
		price: 179.00,
		inCart: 0,
		desc: "Gold-Toned Floral-Shaped Drop Earrings, Secured with a post and back closure"
	},
	{
		name: 'Silver-Plated & Pink Oxidised Jhumkas',
		tag: 'jewellery5',
		price: 999.00,
		inCart: 0,
		desc: "Silver-toned dome shaped jhumkas, silver-plated, has pearls, Secured with a post and back"
	},
	{
		name: 'Women Beige Solid One Toe Flats',
		tag: 'women-shoes3',
		price: 1346.00,
		inCart: 0,
		desc: "A pair of beige, black and navy one-toe flats, has regular styling, zip detail, Synthetic upper with laser cuts, Cushioned footbed, Textured and patterned outsole"
	},
	{
		name: 'Women Off-White Striped Ikat Mules',
		tag: 'women-shoes5',
		price: 1044.00,
		inCart: 0,
		desc: "A pair of off-white pointed toe flats, has regular styling, no back strap detail, Synthetic upper, Cushioned footbed, Textured and patterned outsole"
	},
	{
		name: 'Women Lavender Solid Sneakers',
		tag: 'women-shoes8',
		price: 1149.00,
		inCart: 0,
		desc: "A pair of round-toed lavender solid sneakers ,has regular styling, lace-ups detail, Synthetic upper, Cushioned footbed, Textured and patterned outsole"
	},
	{
		name: 'Women White Colourblocked PU Sneakers',
		tag: 'women-shoes9',
		price: 799.00,
		inCart: 0,
		desc: "A pair of round toe white sneakers ,has regular styling,Lace-ups detail,Pu upper,Cushioned footbed,Textured and patterned outsole"
	},
	{
		name: 'Women Pink & White Sneakers',
		tag: 'women-shoes10',
		price: 2219.00,
		inCart: 0,
		desc: "A pair of round-toe pink & white sneakers, has regular styling, lace-up detail,Synthetic upper,Cushioned footbed,Textured and patterned outsole"
	}
];

//Details of products displayed on men's page
let men_section_products = [
	{
		name: 'Men Maroon Printed Round Neck T-shirt',
		tag: 'shirt1',
		price: 329.00,
		inCart: 0,
		desc: "Maroon printed T-shirt, has a round neck, and short sleeves"
	},
	{
		name: 'Men Blue Colourblocked Round Neck T-shirt',
		tag: 'shirt2',
		price: 474.00,
		inCart: 0,
		desc: "Blue colourblocked T-shirt, has a round neck, and long sleeves"
	},
	{
		name: 'Men Teal Blue Printed T-shirt',
		tag: 'shirt4',
		price: 419.00,
		inCart: 0,
		desc: "This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie."
	},
	{
		name: 'Men Navy Blue Colourblocked Round Neck T-shirt',
		tag: 'shirt5',
		price: 449.00,
		inCart: 0,
		desc: "Navy Blue and green colourblocked T-shirt, has a round neck, short sleeves"
	},
	{
		name: 'Men Green Printed Round Neck T-shirt',
		tag: 'shirt7',
		price: 494.00,
		inCart: 0,
		desc: "Green printed T-shirt, has a round neck, short sleeves"
	},
	{
		name: 'Men Yellow & Green Printed Round Neck T-shirt',
		tag: 'shirt8',
		price: 494.00,
		inCart: 0,
		desc: "Yellow and green printed T-shirt with dyed effect, has a round neck, short sleeves"
	},
	{
		name: 'Premium Men Coffee Brown Analogue Watch',
		tag: 'men-watch1',
		price: 2295.00,
		inCart: 0,
		desc: "Display: Analogue, Movement: Quartz, Solid round stainless steel dial, Features: Reset Time, Reset Time, Glow in the Dark Inlays, Brown regular, leather strap with a tang closure, Water resistance"
	},
	{
		name: 'Men Grey Analogue Watch WRG00040C',
		tag: 'men-watch2',
		price: 1715.00,
		inCart: 0,
		desc: "Display: Analogue, Movement: Quartz, Printed round stainless steel dial, Black regular, silicon strap with a tang closure, Water resistance"
	},
	{
		name: 'Men Blue Analogue WRG00042C',
		tag: 'men-watch3',
		price: 1099.00,
		inCart: 0,
		desc: "Display: Analogue, Movement: Quartz, Printed round brass dial, Blue regular, silicon strap with a tang closure, Water resistance"
	},
	{
		name: 'Grey & Navy Blue Colour PU Sneakers',
		tag: 'men-shoes1',
		price: 4599.00,
		inCart: 0,
		desc: "A pair of round toe grey & navy blue sneakers ,has regular styling,Lace-ups detail,Pu upper,Cushioned footbed,Textured and patterned outsole"
	},
	{
		name: 'Men Khaki Green Slip-On Trainers',
		tag: 'men-shoes2',
		price: 1499.00,
		inCart: 0,
		desc: "Trainers in woven fabric with elastic gores in the sides and a loop at the back. Insoles in imitation cork and textured soles that are fluted underneath. Height of soles 2 cm."
	},
	{
		name: 'Men Navy Sneakers',
		tag: 'men-shoes3',
		price: 2099.00,
		inCart: 0,
		desc: "A pair of navy sneakers, has central lace-ups,Canvas upper,Cushioned footbed,Smooth midsole with foxing on the forefoot,Textured outsole with patterned grooves"
	},
	{
		name: 'Men Grey Textured Loafers',
		tag: 'men-shoes4',
		price: 2339.00,
		inCart: 0,
		desc: "A pair of round toe grey loafers ,has regular styling,Slip-on detail,Pu upper,Cushioned footbed,Textured and patterned outsole, Warranty: 3 months"
	}
];


for(let i=0; i<carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cart_number(latest_products[i]);
		TotalCost(latest_products[i]);
	})
}

for(let i=0; i<carts2.length; i++) {
	carts2[i].addEventListener('click', () => {
		cart_number(women_section_products[i]);
		TotalCost(women_section_products[i]);
	})
}

for(let i=0; i<carts3.length; i++) {
	carts3[i].addEventListener('click', () => {
		cart_number(men_section_products[i]);
		TotalCost(men_section_products[i]);
	})
}


function onLoadcartNumber() {
	let product_number = localStorage.getItem('cart_number');
	if(product_number) {
		document.querySelector('.cart span').textContent = product_number;
	}
}


function cart_number(product) {
	let product_number = localStorage.getItem('cart_number');
	product_number=parseInt(product_number);
	if(product_number) {
		localStorage.setItem('cart_number', product_number + 1);
		document.querySelector('.cart span').textContent = product_number + 1;
	}
	else {
		localStorage.setItem('cart_number', 1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if(cartItems != null) {
		if(cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	}
	else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function TotalCost(product) {
	let cartCost = localStorage.getItem('TotalCost');

	if(cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('TotalCost', cartCost + product.price);
	}
	else {
		localStorage.setItem('TotalCost', product.price);
	}
}


function displayCart() {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cartCost = localStorage.getItem('TotalCost');

	if(cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="product">
				<img src="./images/${item.tag}.png">
				<span>${item.name}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
				<div class="price">
					<span>&#8377</span>${item.price}
				</div>
				<div class="quantity">
					<span>&emsp;&emsp;&emsp;${item.inCart}</span>
				</div>
				<div class="total">
					<span>&emsp;<span>&#8377</span>${item.inCart * item.price}</span>
				</div>
			</div>
			`;
		});


		productContainer.innerHTML += `
			<div class="FinalTotalContainer">
				<h4 class="finalTitle">Grand Total</h4>
				<h4 class="grandTotal"><span>&#8377</span>${cartCost}</h4>
			</div>
		`;
	}
}


function clear_cart() {
	alert("Thank you For ordering!");
	window.localStorage.clear();
	window.location.reload();
}


onLoadcartNumber();
displayCart();

//----------------------------------------------------------------


//--------------------------------------------------------------
//PRODUCT DISPLAY JS

//Display details of products (through modal box) on home page by clicking on that image
function show_details_latest(num) {
	let s = document.getElementById("show");
	let name = document.createTextNode("Product Name: ");
	s.appendChild(name);
	let h = document.createTextNode(latest_products[num].name);
	s.appendChild(h);
	b = document.createElement("br");
	s.appendChild(b);
	b = document.createElement("br");
	s.appendChild(b);
	let price = document.createTextNode("Price: ");
	s.appendChild(price);
	let p = document.createTextNode("Rs. " + latest_products[num].price + ".00");
	s.appendChild(p);
	b = document.createElement("br");
	s.appendChild(b);
	b = document.createElement("br");
	s.appendChild(b);
	let desc = document.createTextNode("Description: ");
	s.appendChild(desc);
	let d = document.createTextNode(latest_products[num].desc);
	s.appendChild(d);
}

//Display details of products (through modal box) on women's page by clicking on that image
function show_details_women(num) {
	let s = document.getElementById("show");
	let name = document.createTextNode("Product Name: ");
	s.appendChild(name);
	let h = document.createTextNode(women_section_products[num].name);
	s.appendChild(h);
	b = document.createElement("br");
	s.appendChild(b);
	b = document.createElement("br");
	s.appendChild(b);
	let price = document.createTextNode("Price: ");
	s.appendChild(price);
	let p = document.createTextNode("Rs. " + women_section_products[num].price + ".00");
	s.appendChild(p);
	b = document.createElement("br");
	s.appendChild(b);
	b = document.createElement("br");
	s.appendChild(b);
	let desc = document.createTextNode("Description: ");
	s.appendChild(desc);
	let d = document.createTextNode(women_section_products[num].desc);
	s.appendChild(d);
}


//Display details of products (through modal box) on men's page by clicking on that image
function show_details_men(num) {
	let s = document.getElementById("show");
	let name = document.createTextNode("Product Name: ");
	s.appendChild(name);
	let h = document.createTextNode(men_section_products[num].name);
	s.appendChild(h);
	b = document.createElement("br");
	s.appendChild(b);
	b = document.createElement("br");
	s.appendChild(b);
	let price = document.createTextNode("Price: ");
	s.appendChild(price);
	let p = document.createTextNode("Rs. " + men_section_products[num].price + ".00");
	s.appendChild(p);
	b = document.createElement("br");
	s.appendChild(b);
	b = document.createElement("br");
	s.appendChild(b);
	let desc = document.createTextNode("Description: ");
	s.appendChild(desc);
	let d = document.createTextNode(men_section_products[num].desc);
	s.appendChild(d);
}


//On closing the modal box, delete all the details that we have appended on it using above 3 functions.
function delete_details() {
	document.getElementById('show').innerHTML = '';
}

//--------------------------------------------------------------