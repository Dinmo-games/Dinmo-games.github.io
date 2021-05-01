function ShowAds() {
	//show ads on mobile only
	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
	.then(data => console.log(data.result))
	.catch(error => console.log(error));
	//show pop up for adding app to favorites on web/mobile
	vkBridge.send("VKWebAppAddToFavorites");
	}
function ShowWallPostBox() {
	//show pop up for adding post about app to player's wall on web/mobile
	vkBridge.send("VKWebAppShowWallPostBox", {
	"message": "Уворачивайся от красных шаров и атакующих кубов собирая монеты! Сможешь набрать больше всех?!",
	"attachments": "https://vk.com/app7840532"  
	});
	}
function ShowInviteBox() {
	//show pop up for inviting friends to app on web/mobile
	vkBridge.send("VKWebAppShowInviteBox", {})
		.then(data => console.log(data.success))
		.catch(error => console.log(error));
	}
	
	