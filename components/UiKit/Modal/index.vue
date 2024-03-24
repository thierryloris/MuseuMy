<script setup lang="ts">
import { type ModalProps } from "./types";

const {
    title,
    longTitle,
    img,
    id,
} = defineProps<ModalProps>();
</script>

<template>
    <div class="modal">
        <div class="modal__container">
            <div class="modal__close-button">
                X
            </div>
            <div class="modal__core flex">
                <div class="modal__core__content">
                    <img class="modal__core__img m-12" :src="img" />
                    <div class="object__content  m-12">
                        <div class="title">{{ title }}</div>
                        <div class="description">{{ longTitle }}</div>
                    </div>
                </div>
            </div>
            <div class="modal__footer flex justify-space-between">
                <UiKitButton label="Add to favorite" color="primary" />
                <UiKitButton label="View details" color="primary" />

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  
  .modal__container {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;

        .modal__core__img {
            max-width: 40%;
            max-height: 400px
        }

        .modal__core__content {
            display: flex;
        }
    }
}

</style>