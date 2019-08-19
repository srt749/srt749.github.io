// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"SRD_HUDMaker","status":false,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_AltMenuScreen_Icons","status":true,"description":"Alternative Menu Screen Icon. Uses Icons instead of words. #IconsAreMasterRace","parameters":{"Item Icon":"209","Skill Icon":"0","Equip Icon":"0","Status Icon":"0","Formation Icon":"0","Options Icon":"083","Save Icon":"0","Game End Icon":"082","== Icon Window ==":"","Icon Window X":"0","Icon Window Y":"0","Standard Padding":"12","Icon Padding":"12","Icon X Position":"0","Icon Y Position":"6","== Label Window ==":"","Label Window X":"this._commandWindow.x","Label Window Y":"this._commandWindow.y + this._commandWindow.height","== Actor Window ==":"","Text Align":"center","Actor Window X":"this._commandLabel.x + this._commandLabel.width","Actor Window Y":"this._commandLabel.y","== Gold Window ==":"","Gold Window X":"0","Gold Window Y":"Graphics.boxHeight - this._goldWindow.height","== Custom Commands ==":"","Command Symbol 1":"notepad","Command Icon 1":"121","Command Symbol 2":"","Command Icon 2":"","Command Symbol 3":"","Command Icon 3":"","Command Symbol 4":"","Command Icon 4":"","Command Symbol 5":"","Command Icon 5":"","Command Symbol 6":"","Command Icon 6":"","Command Symbol 7":"","Command Icon 7":"","Command Symbol 8":"","Command Icon 8":"","Command Symbol 9":"","Command Icon 9":"","Command Symbol 10":"","Command Icon 10":"","Command Symbol 11":"","Command Icon 11":"","Command Symbol 12":"","Command Icon 12":"","Command Symbol 13":"","Command Icon 13":"","Command Symbol 14":"","Command Icon 14":"","Command Symbol 15":"","Command Icon 15":"","Command Symbol 16":"","Command Icon 16":"","Command Symbol 17":"","Command Icon 17":"","Command Symbol 18":"","Command Icon 18":"","Command Symbol 19":"","Command Icon 19":"","Command Symbol 20":"","Command Icon 20":""}},
{"name":"ALOE_PlayerNotepad","status":true,"description":"v1.2.0 Creates a new scene where players can record notes\r\nin a notepad using their keyboard.","parameters":{"---Input Configuration---":"","testmode":"false","inputcodes":"[\"{\\\"k\\\":\\\"65\\\",\\\"c\\\":\\\"a\\\",\\\"s\\\":\\\"A\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"66\\\",\\\"c\\\":\\\"b\\\",\\\"s\\\":\\\"B\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"67\\\",\\\"c\\\":\\\"c\\\",\\\"s\\\":\\\"C\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"68\\\",\\\"c\\\":\\\"d\\\",\\\"s\\\":\\\"D\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"69\\\",\\\"c\\\":\\\"e\\\",\\\"s\\\":\\\"E\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"70\\\",\\\"c\\\":\\\"f\\\",\\\"s\\\":\\\"F\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"71\\\",\\\"c\\\":\\\"g\\\",\\\"s\\\":\\\"G\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"72\\\",\\\"c\\\":\\\"h\\\",\\\"s\\\":\\\"H\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"73\\\",\\\"c\\\":\\\"i\\\",\\\"s\\\":\\\"I\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"74\\\",\\\"c\\\":\\\"j\\\",\\\"s\\\":\\\"J\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"75\\\",\\\"c\\\":\\\"k\\\",\\\"s\\\":\\\"K\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"76\\\",\\\"c\\\":\\\"l\\\",\\\"s\\\":\\\"L\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"77\\\",\\\"c\\\":\\\"m\\\",\\\"s\\\":\\\"M\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"78\\\",\\\"c\\\":\\\"n\\\",\\\"s\\\":\\\"N\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"79\\\",\\\"c\\\":\\\"o\\\",\\\"s\\\":\\\"O\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"80\\\",\\\"c\\\":\\\"p\\\",\\\"s\\\":\\\"P\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"81\\\",\\\"c\\\":\\\"q\\\",\\\"s\\\":\\\"Q\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"82\\\",\\\"c\\\":\\\"r\\\",\\\"s\\\":\\\"R\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"83\\\",\\\"c\\\":\\\"s\\\",\\\"s\\\":\\\"S\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"84\\\",\\\"c\\\":\\\"t\\\",\\\"s\\\":\\\"T\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"85\\\",\\\"c\\\":\\\"u\\\",\\\"s\\\":\\\"U\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"86\\\",\\\"c\\\":\\\"v\\\",\\\"s\\\":\\\"V\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"87\\\",\\\"c\\\":\\\"w\\\",\\\"s\\\":\\\"W\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"88\\\",\\\"c\\\":\\\"x\\\",\\\"s\\\":\\\"X\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"89\\\",\\\"c\\\":\\\"y\\\",\\\"s\\\":\\\"Y\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"90\\\",\\\"c\\\":\\\"z\\\",\\\"s\\\":\\\"Z\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"48\\\",\\\"c\\\":\\\"0\\\",\\\"s\\\":\\\")\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"49\\\",\\\"c\\\":\\\"1\\\",\\\"s\\\":\\\"!\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"50\\\",\\\"c\\\":\\\"2\\\",\\\"s\\\":\\\"\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"51\\\",\\\"c\\\":\\\"3\\\",\\\"s\\\":\\\"#\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"52\\\",\\\"c\\\":\\\"4\\\",\\\"s\\\":\\\"$\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"53\\\",\\\"c\\\":\\\"5\\\",\\\"s\\\":\\\"%\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"54\\\",\\\"c\\\":\\\"6\\\",\\\"s\\\":\\\"^\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"55\\\",\\\"c\\\":\\\"7\\\",\\\"s\\\":\\\"&\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"56\\\",\\\"c\\\":\\\"8\\\",\\\"s\\\":\\\"*\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"57\\\",\\\"c\\\":\\\"9\\\",\\\"s\\\":\\\"(\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"186\\\",\\\"c\\\":\\\";\\\",\\\"s\\\":\\\":\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"187\\\",\\\"c\\\":\\\"=\\\",\\\"s\\\":\\\"+\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"188\\\",\\\"c\\\":\\\",\\\",\\\"s\\\":\\\"<\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"189\\\",\\\"c\\\":\\\"-\\\",\\\"s\\\":\\\"_\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"190\\\",\\\"c\\\":\\\".\\\",\\\"s\\\":\\\">\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"191\\\",\\\"c\\\":\\\"/\\\",\\\"s\\\":\\\"?\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"192\\\",\\\"c\\\":\\\"`\\\",\\\"s\\\":\\\"~\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"219\\\",\\\"c\\\":\\\"[\\\",\\\"s\\\":\\\"{\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"220\\\",\\\"c\\\":\\\"\\\\\\\\\\\",\\\"s\\\":\\\"|\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"221\\\",\\\"c\\\":\\\"]\\\",\\\"s\\\":\\\"}\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\",\"{\\\"k\\\":\\\"222\\\",\\\"c\\\":\\\"'\\\",\\\"s\\\":\\\"\\\\\\\"\\\",\\\"a\\\":\\\"\\\",\\\"sa\\\":\\\"\\\"}\"]","---Title Settings---":"","maxTitleLength":"35","---Text Commands---":"","newNote":"New Note","saveNote":"Save Note","discardChanges":"Discard Changes","modifyNote":"Modify Note","deleteNote":"Delete Note","---Color Settings---":"","newNoteColor":"0","saveNoteColor":"0","discardChangesColor":"0","modifyNoteColor":"0","deleteNoteColor":"0","---Help Window Instructions---":"","titleInstructions":"Press ENTER to continue.\\nPress ESC to exit without saving.","detailsInstructions":"Press ESC when finished.","---Main Menu Integration---":"","addToMenu":"true","menuCommandName":"Notepad","switchForVisible":"0","switchForEnabled":"0","---Visual Parameters---":"","showCursor":"true","cursorBlinkRate":"45","cursorOffset":"-5","fadeLockedText":"true","startingNotes":""}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"true","Custom Image":"Conestoga_College_logo","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_RemoveTitleScreen","status":true,"description":"This Plugin removes the title screen from the game.","parameters":{}},
{"name":"GALV_MessageStyles","status":true,"description":"(v.2.8) Settings to change how your \"Show Text\" messages look as well as code to make them floating.","parameters":{"Input Indicator":"2,0,-12","Indicator Zoom":"100","Message Padding":"0,0,0,0","Message Windowskin":"Window","Other Windowskins":"Window1,Window2,Window3","Arrow Graphic":"WindowArrow","Other Arrow Graphics":"WindowArrow1,WindowArrow2,WindowArrow3","Windowskin Back Opacity":"192","Y Offset":"60","Font":"","Font Filename":"","Font Outline":"true","Font Size":"28"}}
];