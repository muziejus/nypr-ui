import Component from '@ember/component';
import layout from '../templates/components/nypr-brand-header';
import { computed } from '@ember/object';
export default Component.extend({
  tagName: '',
  layout,
  donationUrlWithRef: computed('donationUrl', function() {
    let url = new URL(this.get('donationUrl'));
    url.searchParams.set('ref', 'nypr-brand-header')

    return url;
  })
});
