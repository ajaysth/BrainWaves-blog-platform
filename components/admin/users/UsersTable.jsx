"use client";

import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function UsersTable() {
  const [users] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      posts: 12,
      joined: "2025-01-15",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      posts: 8,
      joined: "2025-02-20",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Author",
      posts: 5,
      joined: "2025-03-10",
    },
  ]);

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      case "Editor":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
            <th className="px-6 py-3 text-right text-sm font-semibold">
              Posts
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Joined
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </div>
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeColor(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 text-right">{user.posts}</td>
              <td className="px-6 py-4">{user.joined}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-600">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
