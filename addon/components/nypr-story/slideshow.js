import Component from '@ember/component';
import layout from '../../templates/components/nypr-story/slideshow';
import imageLoaderMixin from 'nypr-ui/mixins/image-loader';

export default Component.extend(imageLoaderMixin, {
  layout,
});