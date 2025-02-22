<script setup>
import { ref } from 'vue'

const rubyVisible = ref(true)
const menuOpen = ref(false)

const toggleFurigana = () => {
  rubyVisible.value = !rubyVisible.value
  const rubyElements = document.querySelectorAll('ruby rt')
  rubyElements.forEach(rt => {
    if (rubyVisible.value) {
      rt.textContent = rt.dataset.original
    } else {
      rt.dataset.original = rt.textContent
      rt.textContent = ''
    }
  })
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header>
    <div class="header-content">
      <div class="title"> <ruby>東大 <rt>とうだい</rt></ruby> <ruby>CAST <rt>きゃすと</rt></ruby> <ruby>五月祭 <rt>ごがつさい</rt></ruby>2025</div>
      <div class="toggle-buttons">
        <div class="label">ふりがな</div>
        <div class="toggle-button" :class="{ active: rubyVisible }" @click="toggleFurigana(true)">あり</div>
        <div class="toggle-button" :class="{ active: !rubyVisible }" @click="toggleFurigana(false)">なし</div>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav :class="{ open: menuOpen }">
      <ul>
        <li><nuxt-link to="/">ホーム</nuxt-link></li>
        <li><nuxt-link to="/museum">ミュージアム</nuxt-link></li>
        <li><nuxt-link to="/show">ショー</nuxt-link></li>
        <li><nuxt-link to="/atelier">アトリエ</nuxt-link></li>
        <li><nuxt-link to="/time">タイムスケジュール</nuxt-link></li>
      </ul>
    </nav>
    <div class="nav-links">
      <span><nuxt-link to="/">ホーム</nuxt-link></span>
      <span><nuxt-link to="/museum">ミュージアム</nuxt-link></span>
      <span><nuxt-link to="/show">ショー</nuxt-link></span>
      <span><nuxt-link to="/atelier">アトリエ</nuxt-link></span>
      <span><nuxt-link to="/time">タイムスケジュール</nuxt-link></span>
    </div>
  </header>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  background-color: #3490dc; /* ページ全体の背景色 */
  height: 100%;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #3490dc; /* ボタンの色として使用している青 */
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.title {
  color: white;
  font-size: 1.2rem;
  text-align: center;
  flex-grow: 1;
}

.toggle-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.label {
  color: white;
  font-size: 0.7rem;
}

.toggle-button {
  padding: 0.25rem 0.5rem; /* ボタンの大きさを半分にする */
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #2779bd;
  color: white;
}

.toggle-button.active {
  background-color: white;
  color: #2779bd;
}

.toggle-button:hover {
  opacity: 0.8;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon span {
  background: white;
  height: 2px;
  width: 25px;
  margin: 4px;
}

nav {
  display: none;
  justify-content: center;
  width: 100%;
  background-color: #3490dc;
  transition: max-height 0.5s ease-in-out; /* アニメーションの速度を調整 */
  overflow: hidden;
  max-height: 0;
}

nav.open {
  display: flex;
  max-height: 500px; /* メニューの最大高さを設定 */
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.nav-links span a {
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .menu-icon {
    display: flex;
  }

  nav {
    display: none;
    flex-direction: column;
    align-items: center;
  }

  nav.open {
    display: flex;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 1rem 0;
  }

  .nav-links {
    display: none;
  }
}
</style>

