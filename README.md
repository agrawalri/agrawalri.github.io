# Riya Agrawal — Portfolio

Live site (once published): **https://agrawalri.github.io**

Built on the open-source Next.js portfolio by [Chenwan Halley Zhong](https://github.com/halleyscomet-99/halleyscomet-99.github.io), which is based on [Utkarsh Singhal's template](https://github.com/Utkarsh-Singhal-26/portfolio). MIT licensed; see `LICENSE`.

---

## 1. Open it in VS Code and preview it on your laptop

**One-time installs**
- [Node.js](https://nodejs.org) — the **LTS** version (v20 or newer)
- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com)

**Then**
1. Unzip this folder somewhere easy (for example `Documents/agrawalri.github.io`).
2. In VS Code: **File → Open Folder…** and pick the folder.
3. Open a terminal inside VS Code: **Terminal → New Terminal**.
4. Run these:
   ```bash
   npm install
   npm run dev
   ```
5. Open **http://localhost:3000** in your browser. When you save a file, the page updates on its own.
6. To stop it, click the terminal and press **Ctrl + C**.

---

## 2. Put it on GitHub (and make it public)

The repo **must be named exactly `agrawalri.github.io`**. That's what gives you the clean address `https://agrawalri.github.io`.

### Step A: Create the empty repo
1. Sign in at github.com as **agrawalri**.
2. Click **+** (top right) → **New repository**.
3. Repository name: `agrawalri.github.io`
4. Choose **Public** (people can only see the site if the repo is public on a free account).
5. **Don't** tick "Add a README", .gitignore, or license (this folder already has them).
6. Click **Create repository**.

### Step B: Upload your code from the VS Code terminal
Run these one at a time from the project folder:
```bash
git init
git add .
git commit -m "First version of my portfolio"
git branch -M main
git remote add origin https://github.com/agrawalri/agrawalri.github.io.git
git push -u origin main
```
The first time, Git will ask you to sign in to GitHub. A browser window pops up; approve it.

> If Git says "Please tell me who you are", run these once, then run the `git commit` line again:
> ```bash
> git config --global user.name "Riya Agrawal"
> git config --global user.email "your-email@example.com"
> ```

*Prefer clicking?* In VS Code, the **Source Control** icon (left sidebar) → **Publish to GitHub** → choose **public** does the same thing. Just make sure the repo name is `agrawalri.github.io`.

### Step C: Turn on GitHub Pages (one time only)
1. On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab. You'll see "Deploy to GitHub Pages" running. When it shows a green check (2–3 minutes), your site is live at **https://agrawalri.github.io**.

If the first run failed because Pages wasn't on yet, open the failed run in **Actions** and click **Re-run all jobs**.

### Updating the site later
Edit, save, then:
```bash
git add .
git commit -m "Describe what you changed"
git push
```
GitHub rebuilds and republishes automatically in a few minutes.

---

## 3. Where to edit things

| What | File |
|---|---|
| Name, headline, bio, links, education, experience, leadership, skills, project list | `src/app/data.ts` |
| The longer write-up on each project's page | `src/content/projects/<slug>.mdx` |
| Resume PDF (the Resume buttons) | `public/Riya_Agrawal_Resume.pdf`; replace it with your latest, same file name |
| All photos and videos | `public/media/...` |

To **add a new project**: copy one of the entries in `PROJECTS` in `data.ts`, give it a new `SLUG`, make a folder `public/media/projects/<slug>/` for its media, and (optionally) create `src/content/projects/<slug>.mdx`.
To **hide a project**: delete its block in `data.ts`, or move it lower; only the first 6 show on the home page.

---

## 4. Adding pictures and videos

Right now every slot shows a gray placeholder that says which file to replace.

### Folder layout
```
public/
  Riya_Agrawal_Resume.pdf
  media/
    about/
      photo-1.jpg        ← slideshow on the About page
      photo-2.jpg
    projects/
      pdafo/
        cover.jpg        ← thumbnail on the project card + top of the project page
        fea.png          ← any extra images/videos for that project's page
        gait.mp4
      haptic-paddle/
        cover.jpg
      ...one folder per project
```

### a) Project cover (card thumbnail)
**Easiest:** drop your photo into the project's folder named **`cover.jpg`**, replacing the placeholder. No code change needed.

**Want a video cover instead** (autoplays silently on loop, like the reference site)? Put `cover.mp4` in the folder and change that project's line in `data.ts`:
```ts
IMAGE: "/media/projects/pdafo/cover.mp4",
```

### b) About-page photos
Replace `public/media/about/photo-1.jpg` and `photo-2.jpg`, then edit the captions in `ABOUT_IMAGES` in `data.ts`. Add more photos by adding more `{ src, caption }` entries.

### c) Photos and videos inside a project page
Open `src/content/projects/<slug>.mdx`. The bigger projects already have ready-made blocks wrapped in comments like this:
```mdx
{/* <Diagram src="/media/projects/pdafo/fea.png" caption="Abaqus FEA under physiological loading" size="lg" /> */}
```
To turn one on: put your file in that project's media folder, delete the `{/*` at the start and the `*/}` at the end, and make the file name match yours.

**Blocks you can use** (copy any of these into an `.mdx` file):
```mdx
<!-- one image, centered -->
<Diagram src="/media/projects/pdafo/photo.jpg" caption="Caption" size="lg" />

<!-- one video (autoplay, loop, muted, with controls) -->
<Video src="/media/projects/pdafo/demo.mp4" caption="Caption" size="md" />

<!-- two images side by side -->
<DiagramPair leftSrc="/media/projects/pdafo/a.jpg" leftCaption="Left"
             rightSrc="/media/projects/pdafo/b.jpg" rightCaption="Right" />

<!-- two videos side by side -->
<VideoPair leftSrc="/media/projects/pdafo/a.mp4" leftCaption="Left"
           rightSrc="/media/projects/pdafo/b.mp4" rightCaption="Right" />

<!-- text on the left, image on the right -->
<TextDiagram src="/media/projects/pdafo/diagram.png" caption="Caption" diagramWidth="40%">
Your paragraph goes here.
</TextDiagram>

<!-- a dashed note box -->
<Note>Anything you want to call out.</Note>
```
`size` can be `sm`, `md`, `lg`, or `full`. (The `<!-- -->` lines above are just labels for this README; don't paste them into `.mdx` files.)

### File tips
- **Photos:** `.jpg` or `.webp`, around 1600 px wide is plenty. Landscape (16:9) fits the cards best.
- **Videos:** `.mp4` (H.264). Keep each under ~20 MB: short clips (5–15 s) with no audio look great. GitHub rejects any single file over 100 MB. Free tools like HandBrake can shrink a video.
- File names: lowercase, no spaces (`gait-test.mp4`, not `Gait Test.MP4`). Paths are case-sensitive once the site is live.
- **YouTube:** for long videos, upload to YouTube and add `YOUTUBE: "https://youtube.com/watch?v=..."` to that project in `data.ts`. A "youtube" link appears on its card.
