# React useState Consecutive Calls Bug

This repository demonstrates a subtle bug related to consecutive calls to the `useState` hook in React.  The issue arises from the asynchronous nature of state updates in React. When `setCount` is called multiple times in rapid succession, the intermediate updates may be lost, leading to unexpected behavior. 

## Problem

The provided `bug.js` file contains a `MyComponent` that increments a counter using `useState`.  The `handleClick` function intentionally calls `setCount` twice. This results in the counter not incrementing by the expected amount.  Only the final call to `setCount` is fully reflected in the UI.

## Solution

The `bugSolution.js` file provides a solution using `useReducer` for a more predictable state management approach.  This avoids the problem of asynchronous updates overriding each other.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install necessary dependencies.
4. Run `npm start` to start the development server.