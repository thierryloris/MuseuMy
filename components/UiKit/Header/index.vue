<template>
    <div class="header-container relative">
        <div class="header flex justify-space-between p-20">
            <div class="header__icon">
                <UiKitLogo />
            </div>
            <div class="header__favourites">
                <img src="/img/favourite.png">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-container {
    z-index: 10;
    box-shadow: 0px 4px 4px 0px #EAEAEA59;
}
</style>