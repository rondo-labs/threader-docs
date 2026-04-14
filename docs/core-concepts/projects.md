---
title: Projects
---

# Projects

A Threader project is the working file for a match analysis session. It keeps the video references, annotation data, players, clips, drawings, and export state together so you can reopen the same match without rebuilding your workspace.

Threader stores projects as `.threader` files. The file is SQLite-based, which makes it portable and keeps the app responsive while you add events, draw tactical notes, or tag clips.

## What a Project Contains

- Imported video metadata and the path to the local media file
- CDF event annotations linked to video time
- Whistle sync points that map video playback time to match clock and UTC time
- Teams, players, lineups, and player tags
- Drawings, drawing keyframes, clips, and playlists
- Imported provider data from supported match-data adapters

## Recommended Workflow

1. Create one project per match.
2. Import the match video before adding event data.
3. Set up match metadata and rosters early, so new annotations can reference teams and players.
4. Add whistle sync points before exporting CDF data.
5. Keep the source video in a stable local folder so Threader can find it when the project is reopened.

## Portability

The `.threader` file stores your analysis data, but the video file remains external. If you move the project to another machine, move the video file with it and relink it if Threader prompts you.
