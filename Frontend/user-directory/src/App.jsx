import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState({ field: "first_name", dir: "asc" });
  const [filterDomain, setFilterDomain] = useState("");
  const [filterLetter, setFilterLetter] = useState("");

  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      let all = [];

      try {
        const first = await axios.get("https://reqres.in/api/users?page=1");

        all = [...first.data.data];

        const total = first.data.total_pages;
        let promises = [];

        for (let p = 2; p <= total; p++) {
          promises.push(axios.get(`https://reqres.in/api/users?page=${p}`));
        }

        const results = await Promise.all(promises);
        results.forEach(r => all.push(...r.data.data));

        setUsers(all);
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const processed = useMemo(() => {
    let list = [...users];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        u =>
          `${u.first_name} ${u.last_name}`.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      );
    }

    // Filter by email domain
    if (filterDomain.trim()) {
      const d = filterDomain.toLowerCase();
      list = list.filter(u => u.email.toLowerCase().endsWith(d));
    }

    // Filter by first letter
    if (filterLetter.trim()) {
      const f = filterLetter[0].toLowerCase();
      list = list.filter(u => u.first_name[0].toLowerCase() === f);
    }

    // Sort
    const { field, dir } = sortBy;
    list.sort((a, b) => {
      const A = a[field].toLowerCase();
      const B = b[field].toLowerCase();

      if (A < B) return dir === "asc" ? -1 : 1;
      if (A > B) return dir === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [users, query, sortBy, filterDomain, filterLetter]);

  const totalPages = Math.ceil(processed.length / pageSize) || 1;

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return processed.slice(start, start + pageSize);
  }, [processed, page]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-semibold mb-6">User Directory</h1>

        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <SearchBar value={query} onChange={setQuery} />
          
          <select
            className="border px-2 py-1 rounded"
            value={`${sortBy.field}|${sortBy.dir}`}
            onChange={e => {
              const [f, d] = e.target.value.split("|");
              setSortBy({ field: f, dir: d });
            }}
          >
            <option value="first_name|asc">First name (A→Z)</option>
            <option value="first_name|desc">First name (Z→A)</option>
            <option value="email|asc">Email (A→Z)</option>
            <option value="email|desc">Email (Z→A)</option>
          </select>

          <input
            placeholder="Filter domain e.g. reqres.in"
            className="border px-2 py-1 rounded"
            value={filterDomain}
            onChange={e => setFilterDomain(e.target.value)}
          />

          <input
            placeholder="First letter"
            maxLength={1}
            className="border px-2 py-1 rounded w-30 text-center"
            value={filterLetter}
            onChange={e => setFilterLetter(e.target.value)}
          />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <UserTable users={paginated} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </div>
    </div>
  );
}
