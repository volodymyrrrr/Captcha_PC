"use strict";webSafety.keyvalSetOne=function(e,t,a){var n={};n[e]=t,vAPI.storage.set(n,a||this.noopFunc)},webSafety.saveHostnameSwitches=function(){this.keyvalSetOne("hostnameSwitchesString",this.hnSwitches.toString())},webSafety.saveExternalData=function(){this.keyvalSetOne("externalData",adawareTelemetry.getExternalData())},webSafety.saveInlineParameters=function(e){this.keyvalSetOne("inlineParameters",e)};