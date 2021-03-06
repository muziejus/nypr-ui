import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-card/button', 'Integration | Component | nypr card/button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-card/button text='button text'}}`);

  assert.equal(this.$().text().trim(), 'button text');

  // Template block usage:
  this.render(hbs`
    {{#nypr-card/button}}
      template block text
    {{/nypr-card/button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
