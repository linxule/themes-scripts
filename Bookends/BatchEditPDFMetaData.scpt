-- Batch Edit. Might break.
-- Set the metadata fields for PDF. Need to install exiftool
-- **add BibTex citekey to PDF's Finder's comment**
tell application "Bookends"
	-- also can be -> set theIDs to get id of publication items of group item "XXX"
	set theIDs to «event ToySRUID» "Selection"
	repeat with theID in paragraphs of theIDs
		tell front library window
			try
				-- Get properties of selected reference
				set theRefs to (publication items whose id is theID)
				set theRef to first item of theRefs
				set theCitation to user1 of theRef
				set theAbstract to abstract of theRef
				set theAuthor to authors of theRef
				set theTitle to title of theRef
				set theJournal to journal of theRef
				set theFile to the first attachment item of theRef
				set thePath to the path of theFile

				do shell script "/usr/local/bin/exiftool -title=" & quoted form of theTitle & " -author=" & quoted form of theAuthor & " -subject=" & quoted form of theJournal & " -MDItemFinderComment=" & "@" & quoted form of theCitation & " -overwrite_original " & quoted form of thePath
			end try
		end tell
	end repeat
end tell
