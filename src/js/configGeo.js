export const parameters = {
    "id": "ggbApplet",
    "width":800,
    "height":600,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){
                                    api.setLayer('F1', 1); 
                                    api.setCaption('f', '$f(x)$');
                                    api.setLabelStyle('f', 3);
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    //"material_id":"kNsYvNTd",
    // use this instead of ggbBase64 to load a .ggb file
    //"filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"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",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

