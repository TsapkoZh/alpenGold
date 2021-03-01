export const state = () => ({
    topBTN: '1',
    leftBTN: '1',
    rightBTN: '1',
    imagesBar: [

    ]
});

export const getters = {
    topBTN: state => state.topBTN,
    leftBTN: state => state.eftBTN,
    rightBTN: state => state.rightBTN,
};

export const mutations = {
    onChangeItem(state, id) {
        state.topBTN = id;
    },
};