import { name, description, version } from "./package.json";

const icon =
  "https://raw.githubusercontent.com/qzda/hacker-news-plus/refs/heads/main/image/y18.svg";

const userScriptUrl = `https://raw.githubusercontent.com/qzda/hacker-news-plus/main/dist/${name}.user.js`;

type configValue = string | number;
export const UserScriptConfig: Record<string, configValue | configValue[]> = {
  name,
  description,
  author: "qzda",
  version,
  match: "https://news.ycombinator.com/*",
  namespace: "https://github.com/qzda/hacker-news-plus/",
  supportURL: "https://github.com/qzda/hacker-news-plus/issues/new",
  downloadURL: userScriptUrl,
  updateURL: userScriptUrl,
  icon,
  copyright: "MIT",
  "run-at": "document-start",
  connect: ["raw.githubusercontent.com", "github.com"],
  grant: [
    "unsafeWindow",
    "window.onurlchange",
    "GM_addStyle",
    "GM_addElement",
    "GM_registerMenuCommand",
  ],
};
