"use client";

export function StatusBadge({ status }) {
  const statusClasses = {
    PUBLISHED:
      "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    DRAFT: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
        statusClasses[status] || statusClasses.DRAFT
      }`}
    >
      {status}
    </span>
  );
}
