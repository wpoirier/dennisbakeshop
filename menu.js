$(document).ready(function(){
	$(".navBarContainer").html(navbar);
	$(".footerContainer").html(footer);
	
	var menuItemsHtml = "";
	for(i in menuItems){
		let source = menuItems[i].source;
		let text = menuItems[i].text;
		menuItemsHtml += menuItemTemplate( source, text );
	}
	$(".menuItems").html(menuItemsHtml);
})

const menuItemTemplate = function(imgSrc, description){
	return`
		<div class="row">
			<div class="col-5">
				<img width="200px" height="200px" class="menu-image" src="images/${imgSrc}"/>
			</div>
			<div class="col-7 align-middle">
				${description}
				<div class="text-center">
					<button class="order-button">Order This</button>
				</div>
			</div>
		</div>
		<br>
	`;
}

const menuItems = [
	{
		source : "brownie_cupcakes.jpeg", 
		text: "lorem ipsum dolor sit amet"
	},
	{
		source : "brownie_cupcakes.jpeg", 
		text: "lorem ipsum dolor sit amet"
	}
]