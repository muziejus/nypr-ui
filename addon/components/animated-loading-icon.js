import Component from '@ember/component';
import LoadingIcon from 'nypr-ui/utils/animated-loading-icon';
import layout from '../templates/components/animated-loading-icon';

export default Component.extend({
  layout,
  classNames: ['animated-loading-icon'],
  
  width: 68,
  height: 68,
  color: "#FFF",

  /* Not the most intuitive for tweaking, but that's how the thing was built */
  radius: 6,     // Radius of the ring before it's exploded.
                 // Inner ring gets scaled x 12, outer ring x 24

  dotRadius: 10, // Radius of the middle dot
  lineWidth: 8,
  outerScale: 24,
  innerScale: 12,

  didRender() {
    this.loadingIcon = new LoadingIcon(this.$('#loading-anim')[0], this.getProperties('radius', 'width', 'height', 'lineWidth', 'color', 'dotRadius', 'innerScale', 'outerScale'));
    this.animate();
  },
  animate() {
    this.loadingIcon.animate(3500, () => {
      this.animate();
    });
  }
});
