<script setup lang="ts">
import { type CardProps } from "./types";

const {
    title,
    img
} = defineProps<CardProps>();

const titleStatus: any = ref(false)

</script>

<template>
    <div @mouseover="titleStatus = true" @mouseleave="titleStatus = false" class="card col-3 m-12">
        <div class="card__image__container">
            <img :src="img"/>
        </div>
        <div :class="titleStatus ? '--hover' : ''" class="card__title">{{ title }}</div>
    </div>
</template>

<style lang="scss">
.card {
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card__title {
        position: absolute;
        bottom: 0px;
        text-align: center;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
        background: grey;
        display: none;

        &.--hover{
            display: block;
        }
    }
}
</style>