// Immediately Invoke Function Expressions (IIFE)
// To remove global scoped polution

// Named IIFE
(function connected() {
  console.log("DB Connected...");
})();
// ()();
// ()-- Function definition, ()-- Function execution, ;-- Function stop

// Simple IIFE
(() => {
  console.log("DB Connected...");
})();
