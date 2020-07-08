TypeScript React Maximum Update Depth Exceeded Demo
=================================

```
Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, 
but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
```

原因是在useEffect代码中修改了它自己依赖的值，导致useEffect会不断被执行。

```
npm install
npm run demo
```

It will open page on browser automatically.
