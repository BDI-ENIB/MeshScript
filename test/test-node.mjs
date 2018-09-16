import { readFileSync } from 'fs';
import {MeshScript} from "../src/core/MeshScript.mjs";
import {Node} from "../src/core/Node.mjs";
import {ClockNode} from "../src/modules/ClockNode.mjs";
import {DephaserNode} from "../src/modules/DephaserNode.mjs";
import {SyncerNode} from "../src/modules/SyncerNode.mjs";
var n={node:Node,clock:ClockNode,dephaser:DephaserNode,syncer:SyncerNode};
let d = readFileSync("./test-descriptor.json", 'utf8');
