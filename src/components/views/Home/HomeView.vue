<template>
  <div class="home">

    <nav>
      <div>brand</div>
      <div>
        <div>
          <a href="">Metorship</a>
        </div>
        <div>
          <a href="">say hello</a>
        </div>
      </div>
    </nav>

    <div class="u-background-1">
      <section class="container hero-section">
          <h1>Javascript Architect & Mentor</h1>
          <section>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Minus libero vitae, enim eum iste eos. In voluptate,
            ad aut culpa omnis accusantium assumenda consequatur,
            voluptatum voluptatibus pariatur officia maxime similique!
          </section>

      </section>
    </div>

    <div class="u-background-2">
      <section class="container general-section">
        <h2>Hi I'm Juan nice to meet you</h2>
          <section>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Minus libero vitae, enim eum iste eos. In voluptate,
            ad aut culpa omnis accusantium assumenda consequatur,
            voluptatum voluptatibus pariatur officia maxime similique!
          </section>
      </section>
    </div>

    <div class="u-background-1">
      <section class="container general-section">
        <h2>Where I'v worked</h2>
        <div>
          <ul>
            <li>Playvox</li>
            <li>Motos</li>
            <li>Anglus</li>
            <li>Engenial</li>
            <li>University</li>
          </ul>
        </div>
        <div>
          <h3>Title</h3>
          <p>January - April 2020</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus,
          error nesciunt laudantium impedit corporis optio, facilis
          ut minima excepturi facere atque nostrum quae ipsam nihil
          quis? Neque repellat reiciendis soluta.
        </div>
      </section>
    </div>

    <div class="u-background-2">
      <section class="container general-section">
        <h2>My recent work</h2>
        <div>
          <h3>Product 1</h3>
          <p>Description</p>
            <ul>
              <li>tecnology1</li>
              <li>tecnology2</li>
              <li>tecnology3</li>
              <li>tecnology4</li>
            </ul>
            <div>
              <a href="#">github</a>
              <a href="#">demo</a>
            </div>
        </div>
      </section>
    </div>

    <div class="u-background-1">
      <section class="container general-section">
        <h2>My startap projects</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti tenetur nostrum consequatur
          voluptatibus veniam reiciendis! Necessitatibus
          recusandae reprehenderit inventore ipsa itaque
          sapiente nam minima. Quaerat corporis rem inventore exercitationem cum?</p>
      </section>
      <section>
        <div>
          <h4>Product1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti tenetur nostrum consequatur
          voluptatibus veniam reiciendis! Necessitatibus</p>
          <span> tag </span>
        </div>
      </section>
    </div>

    <div class="u-background-2">
      <section class="container general-section">
        <h3>Interesting on working together?</h3>
        <p>Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolores quia libero </p>
          <button> Lets start a conversation </button>
      </section>
    </div>

    <footer class="u-background-2">
      <div>
        logo
      </div>
      <p> lema phrase </p>
      <div>
        <a href="#">twiiter</a>
        <a href="#">linkedin</a>
        <a href="#">linkedin</a>
      </div>
      <div>
        Handcrafted by me 2022
      </div>
    </footer>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';

.home{
  background: var(--color-background-1);
}

.hero-section{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.general-section{
  min-height: 400px;
}
</style>
