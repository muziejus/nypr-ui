import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nypr-ui/brand-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with ref', async function(assert) {
    await render(hbs`{{nypr-ui/brand-header  donationUrl="http://example.com/donate"}}`);
    assert.equal(find('.mod-donate').getAttribute('href'), 'http://example.com/donate?ref=nypr-brand-header');
  });

  test('clicking nypr network opens menu', async function(assert) {
    await render(hbs`{{nypr-ui/brand-header donationUrl="http://example.com/donate"}}`);
    click('.nypr-brand-header-button.mod-network')
    assert.ok(findAll('.nypr-brand-header-menu-items li').length > 5, "menu should be visible");
    click('.nypr-brand-header-button.mod-network') // reenable scroll
  });
});
