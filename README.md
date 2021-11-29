# descript-rx8-marker-converter
Convert markers from Descript transcripts to RX8 chapter markers

# Problem
Descript doesn't export chapter markers to .wav format. A podcasting client needs chapter markers on their episode file for automations in Anchor.fm when they upload. I would need to manually add the chapter markers one by one going through them in Descript and adding the time information to Izotope RX8, then reexport the episode file.

# Solution
This script takes a Descript transcript file (txt format with markers and marker timecodes) and creates a Izotope RX8 chapter markers file.

# Usage
Export your transcript from descript with the following settings:
- Text
- Format: Plain text (.txt)
- Output options: Markers
- Timestamp options: Markers
- Everything else unchecked

Save to converter directory as 'transcript.txt'

In the terminal, move to the converter directory, run 'npm run start'

If console says 'Success' you should see a 'markers.txt' file. This file can be imported in Izotope RX8 and will have the proper markers and timecodes.
