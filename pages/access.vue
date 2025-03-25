<template>
  <div>
    <h1 class="text-5xl text-center">アクセス</h1>
    <div>
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

      <div class="flex justify-end">
        <div class="triangle-container">
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
    </div>
  </div>
</template>

<style scoped>
.triangle-container {
  position: relative;
  width: fit-content;
  margin-bottom: 200px; /* 重なりのための余白 */
}

/* iframe を適切な位置に配置 */
.iframe-container {
  position: absolute;
  top: 100px; /* 50px の空き + 150px の重なり */
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
