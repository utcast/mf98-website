import { defineStore } from 'pinia';

export const useAtelierStore = defineStore('museum', {
  state: () => ({
    cards: [
      { title: 'Card 1', content: 'Content for Card 1' },
      { title: 'Card 2', content: 'Content for Card 2' },
      { title: 'Card 3', content: 'Content for Card 3' },
    ],
  }),
});
