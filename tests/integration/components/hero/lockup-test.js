import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nypr-ui/hero/lockup', 'Integration | Component | nypr-ui/hero/lockup', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nypr-ui/hero/lockup}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nypr-ui/hero/lockup}}
      template block text
    {{/nypr-ui/hero/lockup}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
