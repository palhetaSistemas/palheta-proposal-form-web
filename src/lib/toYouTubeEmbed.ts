// toYouTubeEmbed.ts
export type ToEmbedOptions = {
  debug?: boolean; // liga logs no console
  noCookie?: boolean; // usa youtube-nocookie.com
  autoplay?: boolean; // adiciona autoplay=1
};

const YT_ID_RE = /^[A-Za-z0-9_-]{11}$/;

export function toYouTubeEmbed(
  input: string,
  opts: ToEmbedOptions = {}
): string | null {
  const dbg = (...a: any[]) => opts.debug && console.debug("[yt-embed]", ...a);
  if (!input) return null;

  const trimmed = input.trim();
  const base = opts.noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com";

  // 1) Se o usuário colou só o ID do vídeo (11 chars), já monta o embed
  if (YT_ID_RE.test(trimmed)) {
    dbg("ID direto detectado:", trimmed);
    return buildVideoEmbed(base, trimmed, undefined, opts);
  }

  // 2) Tenta parsear como URL
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    dbg("Não é URL válida e não é VIDEO_ID.");
    return null;
  }

  const host = url.hostname.toLowerCase();
  const path = url.pathname.replace(/\/+$/, "");
  const q = url.searchParams;

  if (
    !(
      host.includes("youtube.") ||
      host.endsWith("youtu.be") ||
      host.includes("youtube-nocookie.")
    )
  ) {
    dbg("Host não é YouTube:", host);
    return null;
  }

  // captura start/t
  const startRaw = q.get("t") || q.get("start");
  const start = parseTimeToSeconds(startRaw);

  // playlist pura (sem video)
  const list = q.get("list") || undefined;
  if ((path === "/playlist" || (!q.get("v") && list)) && list) {
    const params = new URLSearchParams();
    params.set("list", list);
    if (opts.autoplay) params.set("autoplay", "1");
    const u = `${base}/embed/videoseries?${params.toString()}`;
    dbg("Playlist embed:", u);
    return u;
  }

  // tenta extrair VIDEO_ID por formatos comuns
  let id: string | undefined;

  // youtu.be/<id>
  if (host.endsWith("youtu.be")) {
    id = path.split("/")[1];
  }

  // /watch?v=<id>
  if (!id && path === "/watch") {
    const v = q.get("v") || undefined;
    if (v && YT_ID_RE.test(v)) id = v;
  }

  // /shorts/<id>
  if (!id && path.startsWith("/shorts/")) {
    id = path.split("/")[2] || path.split("/")[1];
  }

  // /embed/<id>
  if (!id && path.startsWith("/embed/")) {
    id = path.split("/")[2];
  }

  // /live/<id>
  if (!id && path.startsWith("/live/")) {
    id = path.split("/")[2] || path.split("/")[1];
  }

  // /v/<id> (legado)
  if (!id && path.startsWith("/v/")) {
    id = path.split("/")[2] || path.split("/")[1];
  }

  if (!id || !YT_ID_RE.test(id)) {
    dbg("Não foi possível extrair VIDEO_ID.");
    return null;
  }

  const embed = buildVideoEmbed(base, id, start, opts, list);
  dbg("Video embed:", embed);
  return embed;
}

/* ===== Helpers (locais à função) ===== */

function buildVideoEmbed(
  base: string,
  id: string,
  start: number | undefined,
  opts: ToEmbedOptions,
  list?: string
): string {
  const params = new URLSearchParams();
  if (typeof start === "number" && start > 0)
    params.set("start", String(start));
  if (opts.autoplay) params.set("autoplay", "1");
  if (list) params.set("list", list); // se veio junto, preserva (ex.: watch com playlist)
  const qs = params.toString();
  return `${base}/embed/${id}${qs ? `?${qs}` : ""}`;
}

function parseTimeToSeconds(raw?: string | null): number | undefined {
  if (!raw) return undefined;
  const s = String(raw).trim().toLowerCase();

  // "90" ou "90s"
  if (/^\d+s?$/.test(s)) return Number(s.replace("s", ""));

  // "1h2m3s", "2m10s", "45s"
  const m = s.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?/);
  if (!m) return undefined;
  const h = Number(m[1] || 0);
  const min = Number(m[2] || 0);
  const sec = Number(m[3] || 0);
  const total = h * 3600 + min * 60 + sec;
  return total > 0 ? total : undefined;
}
