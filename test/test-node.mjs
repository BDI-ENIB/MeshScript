import { readFileSync } from 'fs';
import {MeshScript} from "../src/core/MeshScript.mjs";
import {Node} from "../src/core/Node.mjs";
import {ClockNode} from "../src/modules/ClockNode.mjs";
import {DephaserNode} from "../src/modules/DephaserNode.mjs";
import {SyncerNode} from "../src/modules/SyncerNode.mjs";
var n={node:Node,clock:ClockNode,dephaser:DephaserNode,syncer:SyncerNode};
let d = JSON.parse(readFileSync("./test-descriptor.json", 'utf8'));
if(!"nodes" in d || !"links" in d) throw "invalid data structure";
for(let n of d.nodes){
  if(typeof n.code == "string") n.code = eval(n.code);
}
var mesh =new MeshScript(d,n);
setTimeout(function(){mesh.destroy();},10000);