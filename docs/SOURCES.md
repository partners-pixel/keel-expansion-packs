# Sources

The facts PLAN.md and FOUNDER-PATH.md rely on, gathered Oct 18, 2026.

**How they were gathered, and how far to trust them.** Four research agents searched the web. Their sandbox could not open most pages (every host except github.com failed its DNS lookup), so each fact comes from a search engine's extract of the cited page. Release versions came from GitHub release feeds.

| Mark | Meaning |
|---|---|
| **[official]** | The extract came from the vendor's or standard body's own page |
| **[secondary]** | The extract came from a reputable third party |
| **[unsure]** | Sources conflict, or nothing could confirm it |

**Rule:** a fact older than 90 days, or marked [unsure], may inform a plan but cannot support a money or production decision until someone opens the page again and checks it.

---

## 1. Platforms: publishing, analytics and AI rules

| # | Fact | Source | Mark |
|---|---|---|---|
| S-01 | YouTube uploads go through `videos.insert`. A square or vertical video up to 3 minutes counts as a Short; there is no Shorts flag | developers.google.com/youtube/v3/docs/videos/insert; support.google.com/youtube/answer/15424877 | [official] |
| S-02 | Uploads from unverified YouTube API projects created after Jul 28, 2020 stay private until the project passes a compliance audit | developers.google.com/youtube/v3/guides/quota_and_compliance_audits | [official] (one stale line on another page says otherwise) |
| S-03 | YouTube quota since Jun 1, 2026: uploads have their own bucket at 1 unit each, 100 uploads a day by default; other methods share 10,000 units a day | developers.google.com/youtube/v3/revision_history | [official] |
| S-04 | YouTube analytics has read-only scopes (`yt-analytics.readonly`, `youtube.readonly`) separate from the upload scope | developers.google.com/youtube/analytics/reference | [official] |
| S-05 | YouTube requires disclosure of realistic altered or synthetic content; API field `status.containsSyntheticMedia` | support.google.com/youtube/answer/14328491 | [official] |
| S-06 | YouTube Partner Program, Jul 15, 2025: "repetitious" became "inauthentic content"; mass-produced or templated content cannot be monetized; original work made with AI can | support.google.com/youtube/answer/1311392 | [official] |
| S-07 | YouTube Studio "Test & compare": up to 3 titles or thumbnails, judged by watch time; not on Shorts | support.google.com/youtube/answer/16391400 | [official] |
| S-08 | Instagram API with Instagram Login publishes images, video, Reels and carousels of up to 10 items for Business or Creator accounts | developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login | [official] |
| S-09 | Instagram limit: 100 API-published posts per 24 hours (another section still says 50) | developers.facebook.com/docs/instagram-platform/content-publishing | [unsure] |
| S-10 | Meta "AI info" labels; people must disclose photorealistic AI video and realistic audio | transparency.meta.com; about.fb.com/news/2024/04 | [official] |
| S-11 | Facebook demotes and demonetizes repeated unoriginal posting (Mar 2026) | about.fb.com/news/2026/03/rewarding-original-creators-on-facebook | [official] |
| S-12 | TikTok: unaudited apps may post only SELF_ONLY to private accounts, for at most 5 users a day; "upload to inbox" lets the creator finish the post in the app | developers.tiktok.com/docs/en/content-sharing-guidelines | [official] |
| S-13 | TikTok AI label: `is_aigc` on Direct Post; automatic C2PA labels cannot be removed | tiktok.com/community-guidelines/en/integrity-authenticity | [official] |
| S-14 | LinkedIn personal posting: `w_member_social` through "Share on LinkedIn", no review. Company pages need the Community Management API and a review. Post analytics are separate read scopes | learn.microsoft.com/en-us/linkedin | [official] |
| S-15 | LinkedIn has no mandatory AI label; deceptive synthetic media must be disclosed or is removed; in-app scheduling up to 3 months ahead | linkedin.com/help/linkedin/answer/a1340752, a1419179 | [official] |
| S-16 | LinkedIn's user agreement forbids bots and other automated ways to use the service, add contacts or send messages | LinkedIn User Agreement, section 8.2 (from memory; not re-read this session) | [unsure] |
| S-17 | X API is pay-per-use with no free tier for new developers (a post $0.015, $0.20 with a link, since Apr 20, 2026); automated content is not eligible for Original Content Rewards | docs.x.com/x-api/getting-started/pricing; help.x.com/en/using-x/original-content-rewards | [official] |
| S-18 | Pinterest trial API access is sandbox only (pins visible only to their creator); standard access needs a review | developers.pinterest.com/docs/key-concepts/access-tiers | [official] |
| S-19 | Threads API: text up to 500 characters, carousels of 2 to 20 items, 250 API posts a day; App Review needed | developers.facebook.com/documentation/threads/posts | [official] |

## 2. Marketplaces, course platforms, newsletters, podcasts

| # | Fact | Source | Mark |
|---|---|---|---|
| S-20 | Gumroad: 10% + $0.50 per direct sale, 30% on Discover sales, no monthly fee | gumroad.com/pricing | [official] |
| S-21 | Etsy: $0.20 per listing, 6.5% transaction fee, plus processing; AI use must be disclosed in the listing | etsy.com/legal/fees; etsy.com/legal/sellers | [official] (fees page may be old) |
| S-22 | Payhip free plan: 5% per sale; Lemon Squeezy: 5% + $0.50 | payhip.com/pricing; docs.lemonsqueezy.com/help/getting-started/fees | [official] |
| S-23 | Notion Marketplace: 8% + $0.40 per paid template sale; approval and a waitlist first | notion.com/help/selling-on-marketplace | [official] |
| S-24 | Canva Creators: royalties from a pool; the contributor agreement does not permit AI-generated content | canva.com/policies/contributor-agreement | [official] |
| S-25 | Amazon KDP: AI-generated text, images or translations must be disclosed; title limit reported as 2 new titles per format per week since Sep 21, 2026 | kdp.amazon.com/en_US/help/topic/G200672390, G202172740 | [official] (limit date partly secondary) |
| S-26 | Udemy requires a set disclosure for AI-made course content (scripts, images, synthetic voice and video) | support.udemy.com/hc/en-us/articles/33490280024087 | [official] |
| S-27 | Teachable, Thinkific, Podia and Kajabi have no free plan; a static course site on GitHub Pages is free (1 GB site, about 100 GB a month bandwidth), with checkout through Payhip or Gumroad | the vendors' pricing pages; docs.github.com/en/pages | [official] |
| S-28 | Newsletters with free tiers: beehiiv (up to 2,500 subscribers), Kit (up to 10,000), Buttondown (up to 100), self-hosted Ghost (MIT). Draft-creating APIs: Ghost Admin API, Buttondown, Kit, beehiiv on paid tiers; Substack has no official API | the vendors' pricing and API pages | [official] (Kit's paid fee [unsure]) |
| S-29 | Apple Podcasts audio: −16 LKFS ±1 dB, true peak no higher than −1 dBFS, measured per ITU-R BS.1770; RSS 2.0 with a GUID that never changes | podcasters.apple.com/support/893-audio-requirements, 823-podcast-requirements | [official] |
| S-30 | Spotify for Creators hosts podcasts free and gives an RSS feed | support.spotify.com/us/creators | [official] |
| S-31 | Creator economy about $250B (2023), forecast about $480B by 2027 (an estimate) | goldmansachs.com/insights | [official] (2023 estimate) |

## 3. Storage for big files

| # | Fact | Source | Mark |
|---|---|---|---|
| S-32 | GitHub Free, Git LFS: 10 GiB storage and 10 GiB bandwidth a month; with a $0 budget LFS is blocked when the quota runs out; Actions downloads count | docs.github.com/en/billing/concepts/product-billing/git-lfs | [official] |
| S-33 | Plain git on GitHub blocks files over 100 MiB; release assets may be up to 2 GiB each | docs.github.com/en/repositories | [official] |
| S-34 | Cloudflare R2 free tier: 10 GB-month storage, 1M class A and 10M class B operations a month, free egress | developers.cloudflare.com/r2/pricing | [official] |
| S-35 | Backblaze B2: first 10 GB free; egress free up to 3× stored data | third-party pricing summaries | [secondary] |
| S-36 | git-annex is AGPL; DVC is Apache-2.0 and works with S3-compatible stores | git-annex.branchable.com/license; github.com/treeverse/dvc | [official] |
| S-37 | A claude.ai Artifact page may be at most 16 MB, including `data:` URIs | the Artifact tool's own documentation in this session | [official] |

## 4. Tools and their licences

| # | Fact | Source | Mark |
|---|---|---|---|
| S-38 | Remotion: free for individuals and teams of up to 3; 4 or more need a company licence | remotion.dev/docs/license/faq | [official] |
| S-39 | Motion Canvas: MIT. MoviePy: MIT. FFmpeg: LGPL-2.1+, GPL with GPL parts | the projects' pages; ffmpeg.org/legal.html | [official] |
| S-40 | Whisper: MIT. WhisperX: BSD-2-Clause (some alignment models non-commercial). Kokoro-82M weights: Apache-2.0. Piper: GPL-3.0, each voice with its own licence | github.com/m-bain/whisperX; huggingface.co/hexgrad/Kokoro-82M; github.com/OHF-Voice/piper1-gpl | [official] |
| S-41 | FLUX.1 schnell and FLUX.2 klein 4B: Apache-2.0; FLUX.1 dev: non-commercial licence. Stable Diffusion 3.5: free commercial use below $1M yearly revenue | huggingface.co/black-forest-labs; stability.ai/license | [official] |
| S-42 | ElevenLabs: a professional voice clone only of your own voice; instant clones need rights and consent | help.elevenlabs.io | [official] |
| S-43 | Vale (MIT, JSON output, no count of files checked), textlint (TAP and JUnit output), markdownlint-cli2, cspell, lychee (JSON and JUnit) | the projects' GitHub pages and docs | [official] |
| S-44 | EPUBCheck (BSD-3, `--json`), Ace by DAISY (MIT, `report.json`), veraPDF (PDF/UA), pandoc, Typst (Apache-2.0, can target PDF/UA-1) | the projects' pages | [official] (pandoc licence [unsure]) |
| S-45 | Marp CLI (MIT; PDF, PPTX, PNG), Slidev (PDF, PNG), axe-core (MPL-2.0; `color-contrast`, `target-size` with `wcag22aa`) | the projects' pages | [official] |
| S-46 | FFmpeg filters: `ebur128` (loudness, true peak), `loudnorm` (JSON measurements), `silencedetect`, `blackdetect`, `freezedetect` | ffmpeg.org/ffmpeg-filters.html | [official] |
| S-47 | YouTube publishes upload encoding settings (H.264 High, 8 Mbps at 1080p 24–30 fps) but no official loudness target | support.google.com/youtube/answer/1722171 | [official]; the target [unsure] |
| S-48 | Netflix English subtitles: at most 42 characters per line, 20 characters per second for adults (17 for children), at most 2 lines, 5/6 s to 7 s on screen | partnerhelp.netflixstudios.com | [official] |
| S-49 | No maintained SRT or VTT validator with a command line was found; a small check over pysubs2 (MIT) is the realistic route | pypi.org/project/pysubs2 | [unsure] |
| S-50 | FormatJS CLI verifies missing keys and structure; Translate Toolkit `pofilter` checks variables and tags; Okapi CheckMate checks XLIFF | the projects' pages | [official] |
| S-51 | dbt Core, Great Expectations, Frictionless, papermill, Quarto for data checks and reproducible reports | the projects' pages | [official] |
| S-52 | c2patool reads C2PA manifests as JSON; the REUSE tool lints licence information (`reuse lint --json`); SPDX licence list 3.29.0 | github.com/contentauth/c2patool; reuse.software; spdx.org | [official] |
| S-53 | Microsoft Presidio (MIT) finds personal data in text and images, with no guarantee it finds everything | github.com/microsoft/presidio | [official] |

## 5. Standards and thresholds

| # | Fact | Source | Mark |
|---|---|---|---|
| S-54 | WCAG 2.2: text contrast 4.5:1, large text 3:1 (1.4.3); graphics 3:1 (1.4.11); targets at least 24×24 CSS px (2.5.8); prerecorded captions at Level A (1.2.2) | w3.org/TR/WCAG22 | [official] |
| S-55 | EPUB Accessibility 1.1: at least WCAG 2.0 Level A, aiming for WCAG 2 Level AA | w3.org/TR/epub-a11y-11 | [official] |
| S-56 | Reading level: no official cut-off; Vale's docs use Flesch-Kincaid grade 8 as an example | docs.vale.sh/checks/metric | [official]; the band is ours to set |

## 6. Law and rules for AI-made content

| # | Fact | Source | Mark |
|---|---|---|---|
| S-57 | EU AI Act Article 50 transparency duties apply from Aug 2, 2026: visible labels for deepfakes; AI-made text published to inform the public is exempt only with real human review and a named person editorially responsible | ai-act-service-desk.ec.europa.eu; digital-strategy.ec.europa.eu FAQ | [official] |
| S-58 | The "Digital Omnibus on AI" was reported adopted as Regulation (EU) 2026/1744 without delaying Article 50; systems already on the market get until Dec 2, 2026 for machine-readable marking | eur-lex.europa.eu/eli/reg/2026/1744/oj | [unsure]: re-check before relying on it |
| S-59 | US Copyright Office (Jan 2025): prompts alone do not make you the author; AI output is protectable only where a person determined enough of its expression | copyright.gov/ai | [official] |
| S-60 | US FTC rule on fake reviews and testimonials (in force since Oct 21, 2024) bans fake, AI-made and bought reviews | ftc.gov | [official] |
| S-61 | FTC endorsement guides: material connections disclosed clearly and conspicuously | ftc.gov/business-guidance | [official] |
| S-62 | CAN-SPAM: no misleading headers, identify ads, a valid postal address, honour opt-outs within 10 business days | ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business | [official] |
| S-63 | EU and UK marketing email needs prior consent, except a "soft opt-in" for existing customers | ico.org.uk guide to PECR | [official] (UK regulator) |
| S-64 | Tennessee's ELVIS Act (Jul 2024) protects a person's voice, including simulated voice | third-party legal summary | [secondary] |
| S-65 | C2PA Content Credentials are read or shown by YouTube, Meta, TikTok (C2PA steering committee, Jul 2026) and LinkedIn | support.google.com/youtube/answer/15447836; c2pa.org | [official] (LinkedIn [secondary]) |
| S-66 | YouTube "made for kids" videos get no personalized ads and have comments and some features turned off (US COPPA) | from memory; not re-read this session | [unsure] |
