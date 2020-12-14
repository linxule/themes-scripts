//Based on https://forum.obsidian.md/t/compatibility-with-hook-productivity-on-mac-os/2021/30?u=linxule by technicalpickles
// Used in KeyboardMaestro and Hook
// to Get Obsidian File Name

//Consolidated version to use in Hook
//JavaScript
(() => {
  'use strict';

const main = () => {
  const app = Application.currentApplication()
  app.includeStandardAdditions = true
  
  const homeDirectory = app.pathTo("home folder").toString()

  const obsidianJSONPath = `${homeDirectory}/Library/Application Support/obsidian/obsidian.json`
  const obsidianData = JSON.parse(app.read(Path(obsidianJSONPath)))

  const workspaceJSONPath = `/Users/xulelin/Dropbox/Notes/.obsidian/workspace`
  ObjC.import('Foundation')

  const readFile = function (path, encoding) {
    !encoding && (encoding = $.NSUTF8StringEncoding)

    const fm = $.NSFileManager.defaultManager
    const data = fm.contentsAtPath(path)
    const str = $.NSString.alloc.initWithDataEncoding(data, encoding)
    return ObjC.unwrap(str)
  }
 
  const workspaceData = JSON.parse(readFile(workspaceJSONPath,$.NSUTF8StringEncoding))

  const currentDocument = workspaceData["lastOpenFiles"][0]
  

  
  
  const slashParts = currentDocument.split("/")

  
  const basename = slashParts[slashParts.length - 1]
  var title=""
  if (basename) {
    title = basename.replace(/\.md$/, '')
  }
  const uri = `[${title}](obsidian://open?vault=Notes&file=${encodeURIComponent( currentDocument)})`
  return uri ;
 
 
}

return main();

})()


// Stand-alone version used in KeyboardMaestro
//JavaScript
(() => {
    'use strict';
	
	const main = () => {
		const app = Application.currentApplication()
		app.includeStandardAdditions = true
		
		const homeDirectory = app.pathTo("home folder").toString()

		const obsidianJSONPath = `${homeDirectory}/Library/Application Support/obsidian/obsidian.json`
		const obsidianData = JSON.parse(app.read(Path(obsidianJSONPath)))

		const workspaceJSONPath = `/Users/xulelin/Dropbox/Notes/.obsidian/workspace`
		const workspaceData = JSON.parse(app.read(Path(workspaceJSONPath)))

		const currentDocument = workspaceData["lastOpenFiles"][0]		
		const slashParts = currentDocument.split("/")

		
		const basename = slashParts[slashParts.length - 1]
		if (basename) {
			const title = basename.replace(/\.md$/, '')
			return title
		}
	}
	
	return main();
})()


// to Get Obsidian URI
//JavaScript
(() => {
    'use strict';
	
	const main = () => {
		const app = Application.currentApplication()
		app.includeStandardAdditions = true
		
		const homeDirectory = app.pathTo("home folder").toString()

		const obsidianJSONPath = `${homeDirectory}/Library/Application Support/obsidian/obsidian.json`
		const obsidianData = JSON.parse(app.read(Path(obsidianJSONPath)))


		const vaultId = obsidianData["open"]

		const workspaceJSONPath = `/Users/xulelin/Dropbox/Notes/.obsidian/workspace`
		const workspaceData = JSON.parse(app.read(Path(workspaceJSONPath)))

		const currentDocument = workspaceData["lastOpenFiles"][0]

		const uri = `obsidian://open?vault=Notes&file=${encodeURIComponent(currentDocument)}`
		return uri;
	}
	
	return main();

})()