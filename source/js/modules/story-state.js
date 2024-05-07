export default class StoryState {
  constructor() {
    document.body.setAttribute('data-story-slide', '0');
  }
  changeStorySlide(value){
    if (document.body) {
      document.body.setAttribute('data-story-slide', value);
    }
  }
}
