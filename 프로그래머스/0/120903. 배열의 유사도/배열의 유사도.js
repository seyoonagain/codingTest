const solution = (s1, s2) => (s1.length + s2.length) - new Set([...s1, ...s2]).size