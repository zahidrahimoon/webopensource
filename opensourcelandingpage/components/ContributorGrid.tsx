"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ContributorStats {
  login: string
  avatar_url: string
  html_url: string
  contributions?: number 
}

const GITHUB_REPO = "zahidrahimoon/webopensource"

const ContributorGrid = () => {
  const [contributors, setContributors] = useState<ContributorStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contributors`)
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`)

        const data = await response.json()
        setContributors(data)
      } catch (error) {
        console.error("Error fetching contributors:", error)
        setError("Failed to load contributors. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchContributors()
  }, [])

  return (
    <div className="text-center p-6">

      {/* Show Loading State */}
      {loading && <p className="text-gray-500">Loading contributors...</p>}

      {/* Show Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display Contributors */}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <div
              key={contributor.login}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                width={80}
                height={80}
                className="rounded-full mb-2"
                unoptimized // Needed for external images
              />
              <h3 className="font-semibold">{contributor.login}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contributions: {contributor.contributions ?? "N/A"}
              </p>
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ContributorGrid
