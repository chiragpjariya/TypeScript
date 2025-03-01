<h1> TypeScript</h1>

# Custom type

- Whenever you create a custom type, always capitalize the first letter.
---------------------------------------------------------------
  ## Difference Between type and interface in TypeScript

Both `type` and `interface` are used to define shapes of objects (or types) in TypeScript, but there are some key differences:

- ``intefaces also known as contracts.``
- If same have two interface it's automatically merged by tsc.
- If you want to create custome type for primitive data-type always use type = number or etc...
- If you want to create custome type for non-primitive(Object's) data-type always use interface

---------------------------------------------------------

1. **Extensibility**

   - **interface**: Can be extended using `extends`, which means you can create new interfaces based on existing ones.

     ```typescript
     interface User {
       name: string;
     }

     interface Admin extends User {
       role: string;
     }
     ```

   - **type**: Does not use `extends`, but instead uses intersections (`&`) to combine types.
     ```typescript
     type User = { name: string };
     type Admin = User & { role: string };
     ```

2. **Declaration Merging**

   - **interface**: If an interface with the same name is declared multiple times, the declarations merge automatically.

     ```typescript
     interface User {
       name: string;
     }

     interface User {
       age: number;
     }
     // The `User` interface now has both `name` and `age`
     ```

   - **type**: Cannot be merged in the same way. You would need to use intersection types if you want to combine them.

3. **Usage Scenarios**

   - **Use interface**:
     - When you want to define a contract for objects, especially when dealing with classes or object-oriented programming.
     - When you need to extend or merge definitions.
   - **Use type**:
     - When you need to define complex types like unions or intersections.
     - For more advanced type compositions (e.g., mapped types).
     ```typescript
     type Status = "active" | "inactive";
     type User = { name: string } & { age: number };
     ```

4. **Performance**
   - **interface** is preferred for basic object shapes, as it’s optimized for type checking in TypeScript.
   - **type** can be faster when used for complex types, but in most cases, the difference is negligible.

## Summary

- **interface**: Best for simple object shapes, especially when you need to extend or merge types.
- **type**: Best for complex types, unions, and when you need to combine multiple types.
-----------------------------------------------------------


## Unions

- type User = number | string


----------------------------------------------------------------------------------------------

## Generics

- type Id = any
