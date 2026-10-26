import { useEffect, useState } from "react";

// Unauthenticated GitHub API allows 60 requests/hour per visitor IP, so the result is cached.
const CACHE_TTL = 6 * 60 * 60 * 1000

interface CachedCount {
  count: number
  savedAt: number
}

function readCache(key: string): CachedCount | null {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as CachedCount) : null
  } catch {
    return null
  }
}

function writeCache(key: string, count: number) {
  try {
    localStorage.setItem(key, JSON.stringify({ count, savedAt: Date.now() }))
  } catch {
    // Storage unavailable (private mode, blocked): the live value still renders.
  }
}

export function useGithubRepoCount(user: string, fallback: number) {
  const cacheKey = `github-repos:${user}`
  const [count, setCount] = useState(() => readCache(cacheKey)?.count ?? fallback)

  useEffect(() => {
    const cached = readCache(cacheKey)
    if (cached && Date.now() - cached.savedAt < CACHE_TTL) return

    const controller = new AbortController()
    fetch(`https://api.github.com/users/${user}`, { signal: controller.signal })
      .then(response => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data: { public_repos?: number }) => {
        if (typeof data.public_repos !== "number") return
        setCount(data.public_repos)
        writeCache(cacheKey, data.public_repos)
      })
      // Keep the cached/fallback number on failure (rate limit, offline).
      .catch(() => {})

    return () => controller.abort()
  }, [user, cacheKey])

  return count
}
