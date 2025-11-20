import React from "react";

export default function UserTable({ users }) {
  return (
    <div className="overflow-x-auto rounded border bg-white mt-4">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left hidden md:table-cell">Email</th>
            <th className="p-3 text-left hidden lg:table-cell">ID</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td className="p-4 text-center" colSpan="3">
                No users found
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={u.avatar}
                    className="w-12 h-12 rounded-full"
                  />
                  <span>{u.first_name} {u.last_name}</span>
                </td>
                <td className="p-3 hidden md:table-cell">{u.email}</td>
                <td className="p-3 hidden lg:table-cell">{u.id}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
