// functional helpers
export const either = (f, g) => arg => f(arg) || g(arg)
export const both = (f, g) => arg => f(arg) && g(arg)