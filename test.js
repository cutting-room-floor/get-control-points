var test = require('tap').test,
  getControlPoints = require('./');

test('getControlPoints', function(t) {
  t.deepEqual(getControlPoints([0, 0], [10, 0], 0), [[2.5, 0], [7.5, 0]], 'flat');
  t.deepEqual(getControlPoints([0, 0], [10, 10], 1), [[2.5, 2.5], [7.5, 7.5]], 'diagonal');
  t.deepEqual(getControlPoints([0, 0], [10, 10], 1.5), [
    [
     3.320866808611687,
     -0.5154968277519494
    ],
    [
     8.320866808611687,
     4.484503172248051
    ]
  ], 'base');
  t.end();
});
