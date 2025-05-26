export async function GET() {
  const res1 = await fetch("https://api.github.com/users/TuanPh1608/repos", {
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'nextjs-portfolio',
    },
  });
  const res2 = await fetch("https://api.github.com/users/PTuan168/repos", {
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'nextjs-portfolio',
    },
  });
  if (!res1.ok && !res2.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch repos' }), { status: 500 });
  }
  const data1 = res1.ok ? await res1.json() : [];
  const data2 = res2.ok ? await res2.json() : [];
  type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    fork: boolean;
    updated_at: string;
    homepage?: string | null;
  };
  const allData = [...data1, ...data2];
  const repos = (allData as Repo[]).map((repo) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    fork: repo.fork,
    updated_at: repo.updated_at,
    homepage: repo.homepage || null
  }));
  return Response.json(repos);
}
