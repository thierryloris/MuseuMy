<script setup lang="ts">
import { type ModalProps } from "./types";
const emit = defineEmits(["modalclose"]);

const { title, longTitle, img, id } = defineProps<ModalProps>();
</script>

<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__core mb-30">
        <div
          @click="emit('modalclose')"
          class="modal__close-button regular-text pointer"
        >
          X
        </div>

        <UiKitObjectContent
          :title="title"
          :description="longTitle"
          :img="img"
        />
      </div>
      <div class="modal__footer flex justify-space-between">
        <UiKitButton label="Add to favorite" color="primary" />
        <UiKitButton
          label="View details"
          @click="navigateTo(`/details/${id}`)"
          color="secondary"
        />
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
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal__container {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 65%;
    border-radius: 20px;
    position: relative;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .modal__close-button {
      position: absolute;
      right: 25px;
      top: 15px;
      color: grey;
      font-size: 20px;
    }

    .modal__core__content {
      display: flex;
    }
  }
}

@media screen and (max-width: 768px) {
  .modal {
    display: flex;
    .modal__container {
      margin: auto auto 130px auto;
    }
  }
}
</style>
