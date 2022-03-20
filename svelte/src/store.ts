import { writable } from "svelte/store";

export const todolist = writable([
    {
        text: "Write code",
        isComplete: true
    },
    {
        text: "Solve bugs",
        isComplete: false
    },
    {
        text: "Write tests",
        isComplete: false
    },
    {
        text: "Push to prod",
        isComplete: true
    },
]);