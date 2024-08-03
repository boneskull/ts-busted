import Foo from 'foo';
import getFoo1 from 'baz';
import getFoo2 from 'bar';

let a: Foo;

a = getFoo1(); // ok

a = getFoo2(); // not ok

