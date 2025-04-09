<template>
    <h1 class="text-5xl text-center">アクセス</h1>
    <div class="triangle-container">
      <TitleTriangle title="ミュージアム[会場](かいじょう)" position="left" />
      <div class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.youtube.com/embed/r2nEBncRujw?si=975L5zIrpXM-kuBR" 
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="triangle-container-right">
      <TitleTriangle title="ショー[会場](かいじょう)" position="right" />
      <div class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.youtube.com/embed/r2nEBncRujw?si=975L5zIrpXM-kuBR" 
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="triangle-container">
      <TitleTriangle title="アトリエ[会場](かいじょう)" position="left" />
      <div class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.youtube.com/embed/r2nEBncRujw?si=975L5zIrpXM-kuBR" 
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
</template>

<style scoped>
.triangle-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;/*縦横比を固定*/
  margin-top: 50px; /* 重なりのための余白 */
}

.triangle-container-right {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;/*右に揃える*/ 
  aspect-ratio: 16/9;
  margin-top: 50px; /* 重なりのための余白 */
}

/* iframe を適切な位置に配置 */
.iframe-container {
  position: absolute;
  top: 70px; 
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 90vw; /* 画面幅に応じた最大幅 */
}

/* 動画のアスペクト比を維持 */
.responsive-iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>
