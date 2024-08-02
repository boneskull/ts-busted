import getFoo1 from 'bar';
import getFoo2 from 'baz';

type Foo1 = ReturnType<typeof getFoo1>;
type Foo2 = ReturnType<typeof getFoo2>;

type FooOrFoo = Foo1 | Foo2;
