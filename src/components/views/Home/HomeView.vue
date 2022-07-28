<template>
  <div class="home">
    <nav class="nav-bar">
      <div>brand</div>
      <div class="nav-bar__right">
        <div>
          <a href="">Metorship</a>
        </div>
        <div>
          <a href="">say hello</a>
        </div>
      </div>
    </nav>

    <div class="u-background-1">
      <section class="container presentation">
        <h1 class="presentation__title">Javascript Architect & Mentor</h1>

        <h2 class="presentation__sub-title">I construct healthy ideas</h2>
      </section>
    </div>

    <div class="u-background-2">
      <section class="container introduction">
        <div>
          <h1 class="u-text--light">Hi I'm Juan nice to meet you</h1>
          <p class="u-text--light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus libero vitae, enim eum
            iste eos. In voluptate, ad aut culpa omnis accusantium assumenda consequatur, voluptatum
            voluptatibus pariatur officia maxime similique!
          </p>
        </div>
      </section>
    </div>

    <div class="u-background-1 home-container">
      <section class="container worke-experience">
        <h2 class="home-heading">Where I'v worked</h2>

        <div class="work-experience-card">
          <ul class="work-experience-list">
            <li class="work-experience-list-item is-active">Playvox</li>
            <li class="work-experience-list-item">Picap</li>
            <li class="work-experience-list-item">Anglus</li>
            <li class="work-experience-list-item">Engenial</li>
            <li class="work-experience-list-item">University</li>
            <div class="indicator"></div>
          </ul>
          <div class="work-experience-content">
            <header class="work-experience-content__header">
              <h3>Title</h3>
              <small>January - April 2020</small>
            </header>
            <div class="work-experience-content__body">
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed neque ea</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed neque ea</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed neque ea</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="container general-section">
        <div class="recent-work">
          <div>
            <h2 class="home-heading recent-work-title">My recent work</h2>
          </div>

          <div class="recent-work-item">
            <h3 class="recent-work-item__title">Design system with vue 2</h3>

            <div class="recent-work-item__content">
              <p class="recent-work-item__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, unde et. Voluptatum
                officia provident rerum in, possimus deserunt accusantium labore similique.
                Doloribus quisquam minus, quae odio rem ipsam iusto corrupti.
              </p>

              <footer>
                <ul class="recent-work-item__tecnologies">
                  <li>Vue 2 & Vue 3</li>
                  <li>Storybook</li>
                  <li>Gitlab</li>
                  <li>TS</li>
                </ul>

                <div class="recent-work-item__repos">
                  <a href="#">github</a>
                  <a href="#">demo</a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="u-background-2">
      <section class="container general-section startups">
        <div class="">
          <h2 class="home-heading u-text--light">My Startup projects</h2>
          <p class="u-text--light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur nostrum
            consequatur voluptatibus veniam reiciendis! Necessitatibus recusandae reprehenderit
            inventore ipsa itaque sapiente nam minima. Quaerat corporis rem inventore exercitationem
            cum?
          </p>
        </div>
      </section>
    </div>

    <div class="">
      <section class="container general-section startup-products">
        <div class="startup-products__container">
          <div class="startup-product">
            <h4>Product1</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur nostrum
              consequatur voluptatibus veniam reiciendis! Necessitatibus
            </p>
            <span> tag </span>
          </div>
        </div>
      </section>
    </div>

    <div class="u-background-1">
      <section class="container general-section">
        <h3 class="home-heading ">Interesting on working together?</h3>
        <p class="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quia libero
        </p>
        <button>Lets start a conversation</button>
      </section>
    </div>

    <footer class="u-background-2 main-footer">
      <div>logo</div>
      <p class="u-text--light">lema phrase</p>
      <div>
        <a href="#">twiiter</a>
        <a href="#">linkedin</a>
        <a href="#">linkedin</a>
      </div>
      <div class="u-text--light">Handcrafted by me 2022</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {},
});
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";

.nav-bar{
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: var(--color-background-1);
  z-index: 3;
  width: 100%;
}

.nav-bar__right{
  display: flex;
  gap: 20px;
}

.main-footer{
  height: 400px;
  @include flex-center();
  flex-direction: column;
  gap: 40px;
}

.home {
  background: var(--color-background-1);
}

.home-heading {
  margin-bottom: 30px;
}

.home-container{
  margin: 150px auto;
  >*{
    margin-bottom: 150px;
  }
}

.general-section {
  min-height: 300px;
}

.presentation {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.presentation__title {
  font-size: toRem(50);
}

.presentation__sub-title {
  font-weight: 300;
}

.introduction {
  height: 400px;
  width: 605;
  @include flex-center();
  text-align: center;
}

.worke-experience {
}

.work-experience-card {
  display: flex;
}

.work-experience-list {
  position: relative;
  margin-right: 20px;
  margin: 0px;
  padding: 0px;
  list-style: none;

  .indicator {
    position: absolute;
    width: 3px;
    height: 40px;
    background-color: var(--color-background-2);
    top: 0px;
    left: -10px;
    z-index: 1;
  }

  &::before {
    content: "";
    width: 1px;
    height: 100%;
    background: var(--color-background-3);
    position: absolute;
    left: -9.5px;
    z-index: 1;
  }
}

.work-experience-list-item {
  position: relative;
  margin-right: 20px;
  list-style: none;
  height: 40px;
  padding: 8px;

  &:hover {
    color: var(--color-background-2);
    cursor: pointer;
  }
}

.is-active {
  color: var(--color-background-2);
}

.work-experience-content__body {
  margin-top: 16px;

  ul {
    list-style: none;
    li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 10px;
      &::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: var(--color-background-2);
      }
    }
  }
}

.work-experience-card__content {
  flex: 2;
}

.recent-work-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-text-3);
  padding: 30px;
}

.recent-work-item__title {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--color-background-1);
  @include flex-center();
  opacity: 0;
  &:hover {
    opacity: 0;
  }
}

.recent-work-item__content {
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    text-align: justify;
    font-size: var(--font-size--small);
  }

  footer {
    display: flex;
    justify-content: space-between;
  }
}

.recent-work-item__tecnologies {
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;

  li {
    color: var(--color-text-3);
  }

  li:after {
    content: "|";
    padding: 0px 4px;
  }

  li:last-child::after {
    content: "";
  }
}

.recent-work-item__repos {
  display: flex;
  gap: 8px;
}

.startups {
  padding-top: 100px;
  padding-bottom: 150px;
}

.startup-products__container {
  margin-top: -5rem;
  background: red;
}

.startup-product {
  background: var(--color-background-1);
  padding: 20px;
  border: 1px solid var(--color-text-3);
}
</style>
