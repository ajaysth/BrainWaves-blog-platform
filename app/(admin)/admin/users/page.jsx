"use client";

import UsersTable from "@/components/admin/users/UsersTable";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Users Management
      </h1>
      <UsersTable />
    </div>
  );
}
