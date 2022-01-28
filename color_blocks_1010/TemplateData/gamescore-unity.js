(() => { "use strict"; class e { constructor(e, s) { this.gs = e, this.unity = s, document.addEventListener("click", (() => window.focus())), this.gs.player.on("change", (() => this.trigger("CallPlayerChange"))), this.gs.player.on("sync", (e => { this.trigger(e ? "CallPlayerSyncComplete" : "CallPlayerSyncError") })), this.gs.player.on("load", (e => { this.trigger(e ? "CallPlayerLoadComplete" : "CallPlayerLoadError") })), this.gs.player.on("login", (e => { this.trigger(e ? "CallPlayerLoginComplete" : "CallPlayerLoginError") })), this.gs.player.on("fetchFields", (e => { e ? this.trigger("CallPlayerFetchFieldsComplete", JSON.stringify(this.gs.player.fields.map((e => ({ ...e, defaultValue: e.default }))))) : this.trigger("CallPlayerFetchFieldsError") })), this.gs.leaderboard.on("open", (() => this.trigger("CallLeaderboardOpen"))), this.gs.achievements.on("open", (() => this.trigger("CallAchievementsOpen"))), this.gs.achievements.on("close", (() => { this.trigger("CallAchievementsClose"), window.focus() })), this.gs.achievements.on("unlock", (() => this.trigger("CallAchievementsUnlock"))), this.gs.achievements.on("error:unlock", (() => this.trigger("CallAchievementsUnlockError"))), this.gs.gamesCollections.on("open", (() => this.trigger("CallGamesCollectionsOpen"))), this.gs.gamesCollections.on("close", (() => { this.trigger("CallGamesCollectionsClose"), window.focus() })), this.gs.fullscreen.on("open", (() => this.trigger("CallFullscreenOpen"))), this.gs.fullscreen.on("close", (() => this.trigger("CallFullscreenClose"))), this.gs.fullscreen.on("change", (() => this.trigger("CallFullscreenChange"))), this.gs.ads.on("start", (() => this.trigger("CallAdsStart"))), this.gs.ads.on("close", (e => { this.trigger("CallAdsClose", e), window.focus() })), this.gs.ads.on("fullscreen:start", (() => this.trigger("CallAdsFullscreenStart"))), this.gs.ads.on("fullscreen:close", (e => this.trigger("CallAdsFullscreenClose", e))), this.gs.ads.on("preloader:start", (() => this.trigger("CallAdsPreloaderStart"))), this.gs.ads.on("preloader:close", (e => this.trigger("CallAdsPreloaderClose", e))), this.gs.ads.on("rewarded:start", (() => this.trigger("CallAdsRewardedStart"))), this.gs.ads.on("rewarded:close", (e => this.trigger("CallAdsRewardedClose", e))), this.gs.ads.on("rewarded:reward", (() => this.trigger("CallAdsRewardedReward", this.lastRewardedTag))), this.gs.ads.on("sticky:start", (() => this.trigger("CallAdsStickyStart"))), this.gs.ads.on("sticky:close", (() => this.trigger("CallAdsStickyClose"))), this.gs.ads.on("sticky:refresh", (() => this.trigger("CallAdsStickyRefresh"))), this.gs.ads.on("sticky:render", (() => this.trigger("CallAdsStickyRender"))), this.gs.socials.on("share", (e => this.trigger("CallSocialsShare", e))), this.gs.socials.on("post", (e => this.trigger("CallSocialsPost", e))), this.gs.socials.on("invite", (e => this.trigger("CallSocialsInvite", e))), this.gs.socials.on("joinCommunity", (e => this.trigger("CallSocialsJoinCommunity", e))), this.gs.on("change:language", (e => this.trigger("CallChangeLanguage", e))), this.gs.on("change:avatarGenerator", (e => this.trigger("CallChangeAvatarGenerator", e))), this.gs.on("overlay:ready", (() => this.trigger("CallOverlayReady"))) } trigger(e, s) { this.unity.SendMessage("GameScoreSDK", e, this.toUnity(s)) } toUnity(e) { switch (typeof e) { case "boolean": return String(e); case "number": case "string": return e; case "object": return JSON.stringify(e) }return e } Language() { return this.gs.language } AvatarGenerator() { return this.gs.avatarGenerator } PlatformType() { return this.gs.platform.type } PlatformHasIntegratedAuth() { return this.toUnity(this.gs.platform.hasIntegratedAuth) } PlatformIsExternalLinksAllowed() { return this.toUnity(this.gs.platform.isExternalLinksAllowed) } AppTitle() { return this.gs.app.title } AppDescription() { return this.gs.app.description } AppImage() { return this.gs.app.image } AppUrl() { return this.gs.app.url } PlayerGetID() { return this.gs.player.id } PlayerGetScore() { return this.gs.player.score } PlayerSetScore(e) { this.gs.player.score = Number(e) } PlayerAddScore(e) { this.gs.player.score += Number(e) } PlayerGetName() { return this.gs.player.name } PlayerSetName(e) { this.gs.player.name = e } PlayerGetAvatar() { return this.gs.player.avatar } PlayerSetAvatar(e) { this.gs.player.avatar = e } PlayerGet(e) { return this.toUnity(this.gs.player.get(e)) } PlayerSet(e, s) { this.gs.player.set(e, s) } PlayerAdd(e, s) { this.gs.player.add(e, Number(s)) } PlayerHas(e) { return this.toUnity(this.gs.player.has(e)) } PlayerSetFlag(e, s) { this.gs.player.set(e, !Boolean(s)) } PlayerToggle(e) { this.gs.player.toggle(e) } PlayerGetFieldName(e) { return this.gs.player.getFieldName(e) } PlayerGetFieldVariantName(e, s) { return this.gs.player.getFieldVariantName(e, s) } PlayerGetFieldVariantAt(e, s) { const t = this.gs.player.getField(e).variants[s]; return t ? t.value : "" } PlayerGetFieldVariantIndex(e, s) { return this.gs.player.getField(e).variants.findIndex((e => e.value === s)) } PlayerReset() { this.gs.player.reset() } PlayerRemove() { this.gs.player.remove() } PlayerSync(e = !1) { return this.gs.player.sync({ override: Boolean(e) }) } PlayerLoad() { return this.gs.player.load() } PlayerLogin() { return this.gs.player.login() } PlayerFetchFields() { this.gs.player.fetchFields() } PlayerIsLoggedIn() { return this.toUnity(this.gs.player.isLoggedIn) } PlayerHasAnyCredentials(e) { return this.toUnity(this.gs.player.hasAnyCredentials) } PlayerIsStub(e) { return this.toUnity(this.gs.player.isStub) } LeaderboardOpen(e, s, t, r, i, a) { return this.gs.leaderboard.open({ id: this.gs.player.id, orderBy: e.split(",").map((e => e.trim())).filter((e => e)), order: s, limit: Number(t), withMe: r, includeFields: i.split(",").map((e => e.trim())).filter((e => e)), displayFields: a.split(",").map((e => e.trim())).filter((e => e)) }).catch(console.warn) } LeaderboardFetch(e, s, t, r, i, a) { return this.gs.leaderboard.fetch({ id: this.gs.player.id, orderBy: s.split(",").map((e => e.trim())).filter((e => e)), order: t, limit: Number(r), withMe: i, includeFields: a.split(",").map((e => e.trim())).filter((e => e)) }).then((s => { this.lastLeaderboardTag = e, this.leaderboard = s.players, this.trigger("CallLeaderboardFetchTag", e), this.trigger("CallLeaderboardFetch", JSON.stringify(s.players)) })).catch((s => { console.warn(s), this.lastLeaderboardTag = e, this.trigger("CallLeaderboardFetchError") })) } LeaderboardFetchPlayerRating(e, s, t) { return this.gs.leaderboard.fetchPlayerRating({ id: this.gs.player.id, orderBy: s.split(",").map((e => e.trim())).filter((e => e)), order: t }).then((s => { this.lastLeaderboardPlayerRatingTag = e, this.leaderboardPlayerPosition = s.player.position, this.trigger("CallLeaderboardFetchPlayerTag", e), this.trigger("CallLeaderboardFetchPlayer", s.player.position) })).catch((s => { console.warn(s), this.lastLeaderboardPlayerRatingTag = e, this.trigger("CallLeaderboardFetchPlayerError") })) } AchievementsOpen() { return this.gs.achievements.open().catch(console.warn) } AchievementsFetch() { return this.gs.achievements.fetch().then((e => { this.achievements = e.achievements, this.achievementsGroups = e.achievementsGroups, this.playerAchievements = e.playerAchievements, this.trigger("CallAchievementsFetch", JSON.stringify(e.achievements)), this.trigger("CallAchievementsFetchGroups", JSON.stringify(e.achievementsGroups)), this.trigger("CallPlayerAchievementsFetch", JSON.stringify(e.playerAchievements)) })).catch((e => { console.warn(e), this.trigger("CallAchievementsFetchError") })) } AchievementsUnlock(e) { const s = parseInt(e, 10) || 0, t = s > 0 ? { id: s } : { tag: e }; return this.gs.achievements.unlock(t).then((s => { this.isUnlockAchievementSuccess = s.success, this.unlockAchievementError = s.error || ""; const t = s.achievement || {}; this.unlockedAchievementId = t.id || 0, this.unlockedAchievementTag = t.tag || "", this.unlockedAchievementName = t.name || "", this.unlockedAchievementDescription = t.description || "", this.unlockedAchievementIcon = t.icon || "", this.unlockedAchievementIconSmall = t.iconSmall || "", this.unlockedAchievementRare = t.rare || "COMMON", s.success ? this.trigger("CallAchievementsUnlock", e) : this.trigger("CallAchievementsUnlockError") })).catch((e => { console.warn(e), this.trigger("CallAchievementsUnlockError") })) } PaymentsFetchProducts() { return this.gs.payments.fetchProducts().then((e => { this.products = e.products, this.playerPurchases = e.playerPurchases, this.trigger("CallPaymentsFetchProducts", JSON.stringify(e.products)), this.trigger("CallPaymentsFetchPlayerPurcahses", JSON.stringify(e.playerPurchases)) })).catch((e => { console.warn(e), this.trigger("CallPaymentsFetchProductsError") })) } PaymentsPurchase(e) { const s = parseInt(e, 10) || 0, t = s > 0 ? { id: s } : { tag: e }; return this.gs.payments.purchase(t).then((s => { this.isPurchaseProductSuccess = s.success, this.purchaseProductError = s.error || ""; const t = s.product || {}; if (this.purchasedProductId = t.id || 0, this.purchasedProductTag = t.tag || "", s.success) return this.trigger("CallPaymentsPurchase", e), void window.focus(); this.trigger("CallPaymentsPurchaseError"), window.focus() })).catch((e => { console.warn(e), this.trigger("CallPaymentsPurchaseError"), window.focus() })) } PaymentsConsume(e) { const s = parseInt(e, 10) || 0, t = s > 0 ? { id: s } : { tag: e }; return this.gs.payments.consume(t).then((s => { this.isConsumeProductSuccess = s.success, this.consumeProductError = s.error || ""; const t = s.product || {}; if (this.consumedProductId = t.id || 0, this.consumedProductTag = t.tag || "", s.success) return this.trigger("CallPaymentsConsume", e), void window.focus(); this.trigger("CallPaymentsConsumeError") })).catch((e => { console.warn(e), this.trigger("CallPaymentsConsumeError") })) } PaymentsIsAvailable() { return this.toUnity(this.gs.payments.isAvailable) } FullscreenOpen() { return this.gs.fullscreen.open() } FullscreenClose() { return this.gs.fullscreen.close() } FullscreenToggle() { return this.gs.fullscreen.toggle() } AdsShowFullscreen() { return this.gs.ads.showFullscreen() } AdsShowRewarded(e) { return this.lastRewardedTag = e, this.gs.ads.showRewardedVideo() } AdsShowPreloader() { return this.gs.ads.showPreloader() } AdsShowSticky() { return this.gs.ads.showSticky() } AdsCloseSticky() { return this.gs.ads.closeSticky() } AdsRefreshSticky() { return this.gs.ads.refreshSticky() } AdsIsAdblockEnabled() { return this.toUnity(this.gs.ads.isAdblockEnabled) } AdsIsStickyAvailable() { return this.toUnity(this.gs.ads.isStickyAvailable) } AdsIsFullscreenAvailable() { return this.toUnity(this.gs.ads.isFullscreenAvailable) } AdsIsRewardedAvailable() { return this.toUnity(this.gs.ads.isRewardedAvailable) } AdsIsPreloaderAvailable() { return this.toUnity(this.gs.ads.isPreloaderAvailable) } AdsIsStickyPlaying() { return this.toUnity(this.gs.ads.isStickyPlaying) } AdsIsFullscreenPlaying() { return this.toUnity(this.gs.ads.isFullscreenPlaying) } AdsIsRewardedPlaying() { return this.toUnity(this.gs.ads.isRewardedPlaying) } AdsIsPreloaderPlaying() { return this.toUnity(this.gs.ads.isPreloaderPlaying) } AnalyticsHit(e) { return this.gs.analytics.hit(e) } AnalyticsGoal(e, s) { return this.gs.analytics.goal(e, s) } SocialsShare(e, s, t) { return this.gs.socials.share({ text: e, url: s, image: t }) } SocialsPost(e, s, t) { return this.gs.socials.post({ text: e, url: s, image: t }) } SocialsInvite(e, s, t) { return this.gs.socials.invite({ text: e, url: s, image: t }) } SocialsJoinCommunity() { return this.gs.socials.joinCommunity() } SocialsCommunityLink() { return this.toUnity(this.gs.socials.communityLink) } SocialsIsSupportsNativeShare() { return this.toUnity(this.gs.socials.isSupportsNativeShare) } SocialsIsSupportsNativePosts() { return this.toUnity(this.gs.socials.isSupportsNativePosts) } SocialsIsSupportsNativeInvite() { return this.toUnity(this.gs.socials.isSupportsNativeInvite) } SocialsCanJoinCommunity() { return this.toUnity(this.gs.socials.canJoinCommunity) } SocialsIsSupportsNativeCommunityJoin() { return this.toUnity(this.gs.socials.isSupportsNativeCommunityJoin) } GamesCollectionsOpen(e) { const s = parseInt(e, 10) || 0, t = s > 0 ? { id: s } : { tag: e || "ANY" }; return this.gs.gamesCollections.open(t) } GamesCollectionsFetch(e) { const s = parseInt(e, 10) || 0, t = s > 0 ? { id: s } : { tag: e }; return this.gs.gamesCollections.fetch(t).then((s => { this.lastGamesCollectionIdOrTag = e, this.gamesCollection = s, this.trigger("CallGamesCollectionsFetchTag", e), this.trigger("CallGamesCollectionsFetch", JSON.stringify(s)) })).catch((s => { console.warn(s), this.lastGamesCollectionIdOrTag = e, this.gamesCollectionFetchError = s && s.message || "", this.trigger("CallGamesCollectionsFetchError") })) } ChangeLanguage(e) { console.log(e); return this.gs.changeLanguage(e) } ChangeLanguageByCode(e = "") { return this.gs.changeLanguage(e.toLowerCase()) } ChangeAvatarGenerator(e) { return this.gs.changeAvatarGenerator(e) } LoadOverlay() { return this.gs.loadOverlay() } } window.GameScoreUnity = e, window.GameScoreUnity = e })();
//# sourceMappingURL=gamescore-unity.js.map
