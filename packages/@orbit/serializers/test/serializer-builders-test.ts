import { NoopSerializer } from '../src/noop-serializer';
import { BooleanSerializer } from '../src/boolean-serializer';
import { UnknownSerializerClass } from '../src/serializer';
import {
  buildSerializerClassFor,
  buildSerializerSettingsFor,
  buildSerializerFor
} from '../src/serializer-builders';
import { StringSerializer } from '../src/string-serializer';

const { module, test } = QUnit;

module('Serializer builders', function (hooks) {
  test('buildSerializerClassFor returns fn that returns serializer classes', function (assert) {
    const serializerClassFor = buildSerializerClassFor({
      boolean: BooleanSerializer as UnknownSerializerClass,
      noop: NoopSerializer
    });

    assert.strictEqual(
      serializerClassFor('boolean'),
      BooleanSerializer as UnknownSerializerClass
    );
    assert.strictEqual(serializerClassFor('noop'), NoopSerializer);
    assert.strictEqual(serializerClassFor('unrecognized'), undefined);
  });

  test('buildSerializerSettingsFor returns fn that returns settings to init serializer classes', function (assert) {
    const serializerSettingsFor = buildSerializerSettingsFor({
      sharedSettings: {
        foo: 'bar'
      },
      settingsByType: {
        boolean: {
          serializationOptions: { disallowNull: true }
        },
        noop: {
          foo: 'baz',
          serializationOptions: { disallowNull: false }
        }
      }
    });

    assert.deepEqual(
      serializerSettingsFor('boolean'),
      {
        foo: 'bar',
        serializationOptions: { disallowNull: true }
      },
      'shared settings will be merged with typed settings'
    );
    assert.deepEqual(
      serializerSettingsFor('noop'),
      {
        foo: 'baz',
        serializationOptions: { disallowNull: false }
      },
      'shared settings will be overridden by typed settings'
    );
    assert.deepEqual(
      serializerSettingsFor('unrecognized'),
      {
        foo: 'bar'
      },
      'shared settings are returned even if no settings are set per type'
    );
  });

  test('buildSerializerFor returns fn that returns serializer', function (assert) {
    const serializerClassFor = buildSerializerClassFor({
      string: StringSerializer as UnknownSerializerClass,
      noop: NoopSerializer
    });

    const serializerSettingsFor = buildSerializerSettingsFor({
      sharedSettings: {
        foo: 'bar'
      },
      settingsByType: {
        string: {
          serializationOptions: { inflectors: ['pluralize'] }
        },
        noop: {
          foo: 'baz'
        }
      }
    });

    const noopSerializer = new NoopSerializer();

    const serializers = {
      noop: noopSerializer
    };

    const serializerFor = buildSerializerFor({
      serializerClassFor,
      serializerSettingsFor,
      serializers
    });

    assert.ok(
      serializerFor('string') instanceof StringSerializer,
      'serializerFor returns a serializer created from a provided class'
    );

    assert.strictEqual(
      (serializerFor('string') as StringSerializer).serialize('brownCow'),
      'brownCows',
      'type-specific settings are used by the serializer'
    );

    assert.strictEqual(
      serializerFor('noop'),
      noopSerializer,
      'pre-constructed serializer will take precedence over providing a serializer class'
    );

    assert.deepEqual(
      serializerFor('unrecognized'),
      undefined,
      'undefined is returned for unrecognized types'
    );
  });
});
