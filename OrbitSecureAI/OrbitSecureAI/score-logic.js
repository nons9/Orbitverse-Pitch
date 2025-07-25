function calculateScore(base, severity, actionType) {
  let impact = actionType === "recovery" ? severity : -severity;
  return Math.max(0, Math.min(100, base + impact));
}

// Example:
calculateScore(83, 15, "violation"); // ➡ 68
calculateScore(68, 10, "recovery"); // ➡ 78
