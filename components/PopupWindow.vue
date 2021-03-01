<template>
    <div class="popupWindow">
        <div class="item" @click="onChangeItem('1')">
            1
            <!-- <img 
                :src=""
                alt="item img"
            /> -->
        </div>
        <div class="item" @click="onChangeItem('2')">
            2
        </div>
        <div class="item" @click="onChangeItem('3')">
            3
        </div>
        <div class="item" @click="onChangeItem('4')">
            4
        </div>
        <div class="item" @click="onChangeItem('5')">
            5
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        onChangeItem (id) {
            this.$store.getters['topBTN'](id)
        },

        ...mapMutations({
            onChangeItem: 'bar/onChangeItem',
        }),
    }
}
</script>

<style scoped>
.popupWindow {
    position: absolute;
    content: '';
    display: flex;
    flex-wrap: wrap;
    top: -5%;
    left: 30%;
    width: 120px;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
}

.item {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: rgb(0, 119, 255);
    margin: 3px;
}
</style>