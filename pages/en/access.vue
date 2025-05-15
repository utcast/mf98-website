<template>
    <h1 class="text-5xl text-center">Access</h1>
    <div class="triangle-container">
      <TitleTriangle title="Museum" position="left" />
      <div class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1290.1710069271344!2d139.76091470157385!3d35.71436891583544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c31cd6b36fb%3A0xcb7e467e917c3672!2z5p2x5Lqs5aSn5a2m5bel5a2m6YOoMuWPt-mkqA!5e0!3m2!1sja!2sjp!4v1744351475556!5m2!1sja!2sjp" 
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="triangle-container-right">
      <TitleTriangle title="Show" position="right" />
      <div class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.465724698211!2d139.75636428885497!3d35.71476309999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c31bd740247%3A0x4f88cfaa7cf71949!2z44CSMTEzLTAwMzMg5p2x5Lqs6YO95paH5Lqs5Yy65pys6YO377yX5LiB55uu77yTIOW3peWtpumDqDjlj7fppKg!5e0!3m2!1sja!2sjp!4v1744351721814!5m2!1sja!2sjp" 
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="triangle-container">
      <TitleTriangle title="Atelier" position="left" />
      <div class="iframe-container">
        <iframe
          class="responsive-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.8727298034306!2d139.76019257257556!3d35.71414329999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c31b6a0c8eb%3A0xb76f6e1eaadfecf6!2z44CSMTEzLTAwMzMg5p2x5Lqs6YO95paH5Lqs5Yy65pys6YO377yX5LiB55uu77yTIOW3pTblj7fppKg!5e0!3m2!1sja!2sjp!4v1744351800252!5m2!1sja!2sjp" 
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
