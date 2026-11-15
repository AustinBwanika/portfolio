# Portfolio media update — 15 November 2026

Extended the existing Astro implementation. Base `/portfolio/`, existing project URLs, six numbered description sections, professional colours, and both Inspire Talent destinations are retained. No commit, push, external upload or deployment was performed.

## Supplied asset mapping

| Source | Destination and purpose |
| --- | --- |
| PumpSync screen recording | Full 2:30 H.264 walkthrough on PumpSync; dashboard frame at 1:20 used on homepage and as poster; live-payment frame at 0:25 in gallery. |
| PumpSync sign-in screenshot | Supporting gallery image only. |
| dissertation_presentation.mp4 | Full 4:59 presentation + frontend demo on football page; frontend is visible around 3:00; 4:30 frame used for homepage, poster and gallery. |
| Austin's Dissertation.pdf | Full searchable 70-page PDF; Table 7 informs results; Figure 25/page 50 supplies defender cross-league heatmap. |
| Group 11 Business Analytics Report.pdf | Full searchable 53-page PDF on new London Airbnb case study; pages 35–36 supply feature-importance and residual/prediction charts. Student 2 Austin Kasekende’s RF/LR work is distinguished from shared preprocessing and other members’ models. |
| Austin's Placement Report.docx | Metricell narratives; converted using LibreOffice. Public PDF retains converted pages 4–16, omitting malformed cover, blank page and signed administrative form. Searchable, 13 pages. Original unchanged. |
| Austin's Placement report.pptx | Supporting placement poster/source only; internal draft placeholders mean no separate public download. |
| Metricell IMG_9776, IMG_9777 | Asset-management demand map and asset details, matched to report case-study images. |
| Metricell IMG_9770, IMG_9773 | Computer-vision area analysis and LiveFeed road-defect view, matched to report images. |
| Metricell IMG_9771, 9772, 9775, 9778, 9779 | Inspected but not published: exact project matches uncertain. 9771/9772 are near duplicates. |
| IMG_0296.JPG / IMG_0296 2.JPG | Byte-identical reception images. One optimised copy introduces Metricell. |
| IMG_4871.JPG | Outside the code hero and homepage preview portrait. |
| Kasetunes collage artwork | Music/radio section, with ordinary Mixcloud and Linktree links. |
| IMG_6094.jpeg, IMG_0140.JPG | Football stadium portrait and match view; no favourite-team claim. |
| IMG_0774.mov | Inspected: outdoor basketball, not music/radio. Complete 27-second portrait MP4 on sports section with poster. |
| IMG_2959.JPG, IMG_2979.JPG | Graduation portrait and ceremony in life section. |
| IMG_6599.JPG, IMG_9126.JPG | Restaurant group photographs in life section; neutral captions, no identities. |
| IMG_1102.JPG | Inspected but unused; team photograph does not establish personal support. |
| Inspire Talent | Existing content and both links retained; no invented screenshots. |

## Media and content handling

Original ZIP and extracted sources stay outside the repository. Only selected derivatives are included. Photographs/screenshots are WebP, with responsive Astro sizes, preserved aspect ratios, full-size links and no EXIF location metadata. Videos are H.264/yuv420p, fast-start MP4, native controls, playsinline, preload=none, without autoplay. Original audio is retained where present; PumpSync has no audio stream. Encodes preserve full durations within a single frame.

Video sizes: PumpSync 6.5 MiB, football 6.3 MiB, basketball 2.7 MiB. PDFs display their actual calculated sizes. All PDFs retain searchable text. Reusable MediaImage, ImageGallery, VideoPlayer and DocumentLinks components keep content updates localised.

No verified narration transcript could be generated with the available transcription tools. Visual outlines are explicitly labelled, not passed off as transcripts. Incidental music in the basketball audio was not conclusively assessed; no audio was silently removed. See CONTENT_TODO.md for optional follow-up.

Academic classification scores are not transfer-success probabilities. Airbnb predictions concern advertised nightly prices, not realised revenue or optimal prices. Metricell time observations are scoped to the placement report, not general guarantees.

## Deployment considerations

The existing manual workflow remains **Deploy portfolio to GitHub Pages**; GitHub Pages source should remain **GitHub Actions**. This update is local only. Git remote is AustinBwanika/portfolio. No original ZIP/MOV or unselected originals should be committed.

Current built site is approximately 32.6 MiB, comfortably below the [GitHub Pages 1 GB published-site limit](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Selected files are below GitHub’s [50 MiB warning and 100 MiB file block](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github). Pages has a soft 100 GB/month bandwidth limit; if video traffic grows, revisit hosting before adding much more media. No external hosting account or integration is needed for this version.
