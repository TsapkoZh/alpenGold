<template>
  <div>
    <Header />
    <div class="container">
      <div class="titleBlock">
        <h1 class="title">
          Here is your Alpen Gold Ticket<br>
          to the exciting 2021!<br>
          <span>Personalize your Alpen Gold tablet</span>
        </h1>
      </div>

      <div 
        class="bar"

      >
        <div class="topBTN" />
        <div class="leftBTN" />
        <p class="barText">text</p>
        <div class="leftBTN" />
      </div>

      <div class="form" /> 
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  height: 93.3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('~/assets/images/icons.png'), radial-gradient(#ffffff, #d69e35) ;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.title {
  color: #933C06;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 4rem;
}

.title span {
  font-size: 1.4rem;
  font-weight: 200;
}

.bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 342px;
  width: 800px;
  padding: 50px 100px;
  background: url('~/assets/images/LayerDesktop 1.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.topBTN {
  width: 540px;
  height: 80px;
  background-color: crimson;
  opacity: .4;
}

.leftBTN {
  width: 80px;
  height: 80px;
  background-color: crimson;
}

.barText {
  width: 378px;
  height: 118px;
  background-color: rgb(172, 62, 84);
}

.form {
  width: 400px;
  height: 254px;
  background: cornsilk;
  margin-top: 44px;
}
</style>
