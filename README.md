# Parking-lot Challenge

This is my take on the Parking-lot challenge, where the challenge is about creating a parking lot, where cars should be able to park at the parking lot, and also be able to "unpark" their car again to free up the space again.

This challenge allows us developers to get some hands on some array functions as well as classes etc. on the specific programming language.

## Solution

This solution is built with TypeScript which is basically JavaScript with types. I have also added unit-tests, to make sure that the functions work as expected. For the unit test framework, have I chosen [jest](https://jestjs.io), which is a good overall unit-test framework to work with.

## Structure

### Codebase

The folder structure is structured this way:

```
.
├── src/
│   ├── types/
│   │   └── index.ts
│   └── index.ts (main class with logic)
├── tests/
│   └── parkCar.test.ts (park car unit test)
└── ... config files
```

### Technologies

- TypeScript (language)
- Jest (unit-tests)
