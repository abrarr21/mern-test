# Test via Vitest

`pnpm add vitest`

## Adding a Database

- There are two approaches to take when you add external services to the backend.

1. Mock out the external services calls (unit test)
2. Start the external services when the tests are running and stop them after the tests ends(integration/e2e test)

`pnpm add prisma`
`pnpm exec prisma init`

- define the model
- there is no need to add DATABASE_URL and run the migrate command as we will mock the DB.

`pnpm exec prisma generate`

### DB call in index.ts file

```await client.sum.create({
        data: {
            a: paredResponse.data.a,
            b: paredResponse.data.b,
            result: answer,
        },
    });
```

While writing the test for the index.ts "Post" route. We'll create MOCK db call and not an actaul one

- mocking in the index.test.ts

```
vi.mock("../db", () => ({
client: { sum: { create: vi.fn() } },
}));
```
