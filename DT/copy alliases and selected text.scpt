tell application id "DNtp"
	activate
	
	
	set sourceName to name of content record
	set sourceAliases to aliases of (content record of think window 1)
	
	set theContent to display name editor info "Insert note text" default answer the clipboard
	

	set the clipboard to ("[[" & sourceAliases & "]][[" & sourceName & "]]" & return & return & "> " & theContent & return)

	
end tell