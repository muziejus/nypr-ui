import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-brick-row-blowout/column', 'Integration | Component | nypr brick row blowout/column', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-brick-row-blowout/column}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-brick-row-blowout/column}}
      template block text
    {{/nypr-brick-row-blowout/column}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
