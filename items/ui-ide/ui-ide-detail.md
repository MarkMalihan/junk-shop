# UI IDE

![UI IDE](assets/128x128.png)

**Create reusable components for any project, at no cost.**

A local-first desktop UI design tool. Build reusable **components**, compose **screens**, edit on a structured canvas with layers and an inspector, and keep everything on disk. No account, no cloud, no lock-in.

---

## Description

UI IDE is a desktop application for developers and designers who want a lightweight way to lay out interfaces without a full vector editor. Create **component** files for reusable pieces (buttons, cards, nav bars) and **screen** files for full app views. Draw with frames, shapes, text, and imported media; organize work in a layer tree; tune layout and appearance in the inspector; export JSON or raster images when you are ready.

Light and dark themes are included for comfortable day/night usage. The app is built with [Tauri](https://tauri.app) and [React](https://react.dev), so it stays fast and lightweight on Windows.

---

## Features

| Feature                  | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Screens & components** | Two design types: screens for app views, components for reusable definitions stored under separate folders.  |
| **Drafts library**       | Browse, open, rename, and duplicate saved designs from a drafts hub with thumbnails.                         |
| **Canvas editor**        | Select, pan, and draw frames, rectangles, ellipses, lines, and text; import images and video.                |
| **Layers**               | Hierarchical layer list with selection, rename, reorder, and parent frames for grouping.                     |
| **Inspector**            | Edit position, size, rotation, text, fill, stroke, and corner radius from the side panel.                    |
| **Components panel**     | Browse component files and insert their root layers into the open design (cloned into the current document). |
| **History**              | Undo/redo with a labeled history list; keyboard shortcuts for common edits.                                  |
| **Spacing guides**       | Alignment hints while moving layers on the canvas.                                                           |
| **Export**               | Export the current design as JSON (saved file format) or flattened PNG (and other raster options).           |
| **Theme**                | Light, dark, and system appearance.                                                                          |
| **Local-first**          | Designs, thumbnails, and metadata live on your device; no cloud account required.                            |

---

## Screenshots

_Screenshots coming soon._

---

## What’s New

- Landing hub to create screens, create components, or open drafts
- Local persistence: SQLite index plus JSON design documents on disk
- Resizable workspace: layers / components / history, canvas, inspector
- Drawing tools with keyboard shortcuts (select, hand, frame, shapes, text, media)
- Copy, cut, paste, and context-menu actions on the canvas
- Component collection: insert roots from other component files into the active design
- Design export to JSON and raster formats
- Light/dark/system theme in the desktop shell

---

## Requirements

- **OS:** Windows
- **Disk:** Design files, thumbnails, and a local SQLite database are stored locally
- **Network:** Not required for core editing; only needed if you add online workflows later

---

## Privacy & Data

- **No account required.** No sign-up, no email, no cloud account.
- **Data stays on your device.** Screens, components, thumbnails, and the design index are stored locally.
- **No telemetry by default.** The app does not upload your design files to external servers.

---

## Technical Details

|                |                                                         |
| -------------- | ------------------------------------------------------- |
| **Built with** | Tauri v2 + React + TypeScript + Tailwind CSS + SQLite   |
| **License**    | MIT                                                     |
| **Source**     | [GitHub](https://github.com/Argel/trash-tauri-template) |

---

## Get UI IDE

Soon
